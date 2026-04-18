import "server-only";

import { GoogleGenAI } from "@google/genai";
import type { DashboardData } from "./types";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY! });

function buildConditionsContext(dashboard: DashboardData): string {
  const c = dashboard.conditions;
  const spots = dashboard.spotScores
    .map(
      (s) =>
        `• ${s.spot.name} (${s.spot.area}): score ${s.score}/100 [${s.tone}] — ${s.summary}. Best window: ${s.bestWindow}`
    )
    .join("\n");

  const species = dashboard.speciesOutlook
    .slice(0, 6)
    .map(
      (s) =>
        `• ${s.species.name}: score ${s.score} [${s.tone}] — best at ${s.topSpotName}. Tactic: ${s.species.tactic}`
    )
    .join("\n");

  const alerts =
    c.activeAlerts.length > 0
      ? `Active marine alerts: ${c.activeAlerts.join(", ")}`
      : "No active marine alerts";

  const marine =
    c.marineForecast.length > 0
      ? c.marineForecast
          .slice(0, 3)
          .map((m) => `${m.label}: ${m.summary}`)
          .join(" | ")
      : "Marine forecast unavailable";

  return `
LIVE CONDITIONS — Cape Canaveral, FL (${new Date().toLocaleString("en-US", { timeZone: "America/New_York" })})

WATER: ${c.currentWaterTempF?.toFixed(1) ?? "?"}°F (NOAA Trident Pier)
NEARSHORE WAVE: ${c.nearshoreBuoy?.waveHeightFt?.toFixed(1) ?? "?"} ft, ${c.nearshoreBuoy?.dominantPeriodSec ?? "?"}s period (NDBC 41113)
OFFSHORE WAVE: ${c.offshoreBuoy?.waveHeightFt?.toFixed(1) ?? "?"} ft (NDBC 41009)
WIND: ${c.currentWindDirection ?? "?"} ${c.currentWindSpeedMph ?? "?"} mph
AIR: ${c.currentAirTempF ?? "?"}°F — ${c.currentForecast ?? "?"}
TIDE: ${c.tideStage}${c.nextTide ? ` → next ${c.nextTide.type === "H" ? "high" : "low"} ${c.nextTide.localTimeLabel}` : ""}
SURF: ${c.surf?.ripCurrentRisk ?? "?"} rip risk, ${c.surf?.surfHeight ?? "?"} surf height
${alerts}
MARINE: ${marine}

SPOT SCORES (live, ranked):
${spots}

SPECIES OUTLOOK (live):
${species}

OVERVIEW: ${dashboard.overview.headline} — ${dashboard.overview.summary}
`.trim();
}

const SYSTEM_PROMPT = `You are "Captain" — an AI fishing advisor built into the Fishing AI command deck for Cape Canaveral, Florida.

Your personality:
- Direct, concise, confident — like a fishing guide who has fished the Space Coast for 20 years
- Use plain English, not academic language
- Give specific, actionable calls: which spot, which tide window, which species to target, which rig to use
- When conditions are bad, say so honestly — "hold" means hold, don't sugarcoat
- Reference the live data you're given — cite specific numbers (water temp, wave height, wind)

Your capabilities:
- You have real-time NOAA/NWS conditions data injected into every conversation
- You can use Google Search to find the latest local fishing reports, bait shop updates, FWC regulations, and weather changes
- You synthesize ALL of this into a clear go/hold/window decision

Rules:
- Always reference the live conditions data provided
- When recommending a spot, explain WHY with specific conditions
- Include tide timing, wind direction impact, and species viability
- If asked about regulations, always direct users to verify with FWC (myfwc.com)
- Keep responses under 300 words unless a detailed trip plan is requested
- Use the scoring: 75+ = GO, 60-74 = WINDOW, below 60 = HOLD`;

export async function askCaptain(
  question: string,
  dashboard: DashboardData
): Promise<{
  text: string;
  sources: Array<{ title: string; url: string }>;
  searchQueries: string[];
}> {
  const conditionsContext = buildConditionsContext(dashboard);

  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: `${conditionsContext}\n\n---\n\nUser question: ${question}`,
    config: {
      systemInstruction: SYSTEM_PROMPT,
      tools: [{ googleSearch: {} }],
      temperature: 0.7,
    },
  });

  const text = response.text ?? "Captain couldn't generate a response. Try again.";

  // Extract grounding metadata
  const sources: Array<{ title: string; url: string }> = [];
  const searchQueries: string[] = [];

  const metadata = response.candidates?.[0]?.groundingMetadata;
  if (metadata) {
    if (metadata.groundingChunks) {
      for (const chunk of metadata.groundingChunks) {
        if (chunk.web?.uri && chunk.web?.title) {
          sources.push({ title: chunk.web.title, url: chunk.web.uri });
        }
      }
    }
    if (metadata.webSearchQueries) {
      searchQueries.push(...metadata.webSearchQueries);
    }
  }

  return { text, sources, searchQueries };
}
