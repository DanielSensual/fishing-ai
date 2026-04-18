import { NextRequest, NextResponse } from "next/server";
import { askCaptain } from "@/lib/gemini";
import { getDashboardData } from "@/lib/fishing-data";

export const dynamic = "force-dynamic";
export const maxDuration = 30;

export async function POST(request: NextRequest) {
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
