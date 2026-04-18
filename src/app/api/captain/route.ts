import { NextRequest, NextResponse } from "next/server";
import { askCaptain } from "@/lib/gemini";
import { getDashboardData } from "@/lib/fishing-data";

export const dynamic = "force-dynamic";
export const maxDuration = 30;

/* ─── In-Memory Sliding Window Rate Limiter ─── */

const RATE_LIMIT_WINDOW_MS = 60_000; // 60 seconds
const RATE_LIMIT_MAX_REQUESTS = 10; // per window per IP
const CLEANUP_INTERVAL_MS = 5 * 60_000; // purge stale entries every 5 min

const requestLog = new Map<string, number[]>();

/** Remove timestamps older than the window for a given IP */
function pruneEntries(ip: string, now: number): number[] {
  const timestamps = requestLog.get(ip) ?? [];
  const valid = timestamps.filter((t) => now - t < RATE_LIMIT_WINDOW_MS);
  if (valid.length === 0) {
    requestLog.delete(ip);
  } else {
    requestLog.set(ip, valid);
  }
  return valid;
}

/** Returns null if allowed, or seconds-until-retry if rate-limited */
function checkRateLimit(ip: string): number | null {
  const now = Date.now();
  const recent = pruneEntries(ip, now);

  if (recent.length >= RATE_LIMIT_MAX_REQUESTS) {
    const oldestInWindow = recent[0];
    const retryAfterMs = RATE_LIMIT_WINDOW_MS - (now - oldestInWindow);
    return Math.ceil(retryAfterMs / 1000);
  }

  recent.push(now);
  requestLog.set(ip, recent);
  return null;
}

/** Periodic sweep to prevent unbounded memory growth */
if (typeof globalThis !== "undefined") {
  const key = "__captain_cleanup_registered__";
  if (!(globalThis as Record<string, unknown>)[key]) {
    (globalThis as Record<string, unknown>)[key] = true;
    setInterval(() => {
      const now = Date.now();
      for (const ip of requestLog.keys()) {
        pruneEntries(ip, now);
      }
    }, CLEANUP_INTERVAL_MS);
  }
}

/* ─── Route Handler ─── */

export async function POST(request: NextRequest) {
  // Resolve client IP from headers (Vercel, Cloudflare, standard proxy chain)
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0].trim() ??
    request.headers.get("x-real-ip") ??
    "unknown";

  const retryAfter = checkRateLimit(ip);
  if (retryAfter !== null) {
    return NextResponse.json(
      { error: "Slow down, Captain needs a breather. Try again shortly." },
      {
        status: 429,
        headers: {
          "Retry-After": String(retryAfter),
          "X-RateLimit-Limit": String(RATE_LIMIT_MAX_REQUESTS),
          "X-RateLimit-Window": String(RATE_LIMIT_WINDOW_MS / 1000),
        },
      }
    );
  }

  try {
    const body = await request.json();
    const question = body.question;

    if (!question || typeof question !== "string" || question.length > 500) {
      return NextResponse.json(
        { error: "Question is required and must be under 500 characters" },
        { status: 400 }
      );
    }

    if (!process.env.GEMINI_API_KEY) {
      return NextResponse.json(
        { error: "Gemini API key is not configured" },
        { status: 500 }
      );
    }

    // Fetch live conditions
    const dashboard = await getDashboardData();

    // Ask the Captain
    const result = await askCaptain(question, dashboard);

    return NextResponse.json({
      text: result.text,
      sources: result.sources,
      searchQueries: result.searchQueries,
      conditions: {
        waterTemp: dashboard.conditions.currentWaterTempF,
        tideStage: dashboard.conditions.tideStage,
        wind: dashboard.conditions.currentWindDirection
          ? `${dashboard.conditions.currentWindDirection} ${dashboard.conditions.currentWindSpeedMph} mph`
          : null,
        topSpot: dashboard.overview.topSpot?.spot.name ?? null,
        topScore: dashboard.overview.topSpot?.score ?? null,
      },
    });
  } catch (error) {
    console.error("Captain API error:", error);
    return NextResponse.json(
      { error: "Captain encountered an error. Try again." },
      { status: 500 }
    );
  }
}
