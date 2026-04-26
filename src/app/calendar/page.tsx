import Link from "next/link";
import type { Metadata } from "next";

import { seasonalCalendar, getCurrentMonthFishing } from "@/lib/seasonal-calendar";
import { speciesCatalog } from "@/lib/spots";
import AnimationProvider from "../components/AnimationProvider";

export const metadata: Metadata = {
  title: "Florida Fishing Calendar — What's Biting by Month",
  description:
    "Month-by-month Florida saltwater fishing calendar. Know exactly which species are running, what tactics to use, and where to fish across every supported region — January through December.",
  openGraph: {
    title: "Florida Fishing Calendar | Bite Atlas",
    description:
      "12-month fishing calendar with species peaks, water temps, and tactical tips for every season in Florida.",
  },
};

function RatingBadge({ rating }: { rating: "peak" | "good" | "slow" }) {
  const colors = {
    peak: { bg: "rgba(0, 230, 180, 0.15)", border: "rgba(0, 230, 180, 0.5)", text: "#00e6b4", label: "🔥 Peak" },
    good: { bg: "rgba(100, 200, 255, 0.1)", border: "rgba(100, 200, 255, 0.35)", text: "#64c8ff", label: "✓ Good" },
    slow: { bg: "rgba(255, 180, 100, 0.1)", border: "rgba(255, 180, 100, 0.35)", text: "#ffb464", label: "⏳ Slow" },
  };
  const c = colors[rating];
  return (
    <span style={{
      display: "inline-flex",
      alignItems: "center",
      gap: "0.25rem",
      fontSize: "0.75rem",
      fontFamily: "var(--font-mono)",
      padding: "0.25rem 0.6rem",
      borderRadius: "var(--radius-full)",
      background: c.bg,
      border: `1px solid ${c.border}`,
      color: c.text,
    }}>
      {c.label}
    </span>
  );
}

export default function CalendarPage() {
  const currentMonth = getCurrentMonthFishing();

  return (
    <main className="detail-shell">
      <AnimationProvider />

      <div className="detail-shell__topline">
        <Link href="/">← Back to dashboard</Link>
      </div>

      <section className="detail-hero" data-animate>
        <div>
          <span className="eyebrow">Seasonal Intelligence</span>
          <h1>Florida Fishing Calendar</h1>
          <p>
            Month-by-month breakdown of what&apos;s biting across Florida — species peaks,
            water temps, and tactical tips for every season. Currently:{" "}
            <strong style={{ color: "var(--c-teal)" }}>{currentMonth.name} — {currentMonth.headline}</strong>
          </p>
        </div>
      </section>

      {/* 12-month visual timeline */}
      <section className="calendar-timeline" data-animate>
        {seasonalCalendar.map((month) => {
          const isCurrent = month.month === currentMonth.month;
          return (
            <a
              key={month.month}
              href={`#month-${month.month}`}
              className={`calendar-timeline__dot ${isCurrent ? "calendar-timeline__dot--active" : ""}`}
              style={isCurrent ? { borderColor: "var(--c-teal)", color: "var(--c-teal)" } : {}}
            >
              {month.shortName}
            </a>
          );
        })}
      </section>

      {/* Monthly cards */}
      <section className="calendar-months" data-animate>
        {seasonalCalendar.map((month) => {
          const isCurrent = month.month === currentMonth.month;
          return (
            <article
              key={month.month}
              id={`month-${month.month}`}
              className={`calendar-card ${isCurrent ? "calendar-card--current" : ""}`}
            >
              <div className="calendar-card__header">
                <div>
                  <span className="eyebrow">{month.name}</span>
                  <h2>{month.headline}</h2>
                </div>
                <div className="calendar-card__badges">
                  <RatingBadge rating={month.rating} />
                  <span className="calendar-card__temp">
                    {month.typicalWaterTempF[0]}–{month.typicalWaterTempF[1]}°F
                  </span>
                </div>
              </div>

              <p className="calendar-card__summary">{month.summary}</p>

              {/* Species chips */}
              <div className="calendar-card__species">
                {month.topSpecies.map((key) => {
                  const species = speciesCatalog[key];
                  return (
                    <Link
                      key={key}
                      href={`/species/${key}`}
                      className="calendar-species-chip"
                      style={{ borderColor: species.accent, color: species.accent }}
                    >
                      {species.shortLabel}
                    </Link>
                  );
                })}
              </div>

              {/* Tips */}
              <ul className="calendar-card__tips">
                {month.tips.map((tip, i) => (
                  <li key={i}>{tip}</li>
                ))}
              </ul>
            </article>
          );
        })}
      </section>
    </main>
  );
}
