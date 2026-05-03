"use client";

import { useRef, useEffect } from "react";

interface ForecastBlock {
  hour: string;
  label: string;
  score: number;
  tone: "go" | "window" | "hold";
  wind: string;
  tempF: number | null;
  tideStage: string;
  isDawn: boolean;
  isDusk: boolean;
}

interface ForecastTimelineProps {
  blocks: ForecastBlock[];
  spotName: string;
}

export default function ForecastTimeline({
  blocks,
  spotName,
}: ForecastTimelineProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to current hour
  useEffect(() => {
    if (!scrollRef.current) return;
    const now = new Date();
    const currentHour = now.getHours();
    const child = scrollRef.current.children[currentHour] as HTMLElement;
    if (child) {
      child.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
    }
  }, []);

  if (!blocks || blocks.length === 0) return null;

  return (
    <article className="detail-card forecast-timeline">
      <span className="eyebrow">72-hour outlook</span>
      <h2>Bite forecast — {spotName}</h2>
      <div className="forecast-timeline__scroll" ref={scrollRef}>
        {blocks.map((block, i) => {
          const isNewDay =
            i === 0 ||
            new Date(block.hour).getDate() !==
              new Date(blocks[i - 1].hour).getDate();

          return (
            <div key={i} className="forecast-block-wrapper">
              {isNewDay && (
                <div className="forecast-day-label">
                  {new Date(block.hour).toLocaleDateString("en-US", {
                    weekday: "short",
                    month: "short",
                    day: "numeric",
                  })}
                </div>
              )}
              <div
                className={`forecast-block forecast-block--${block.tone}`}
                title={`${block.label}\nScore: ${block.score}\nWind: ${block.wind}\nTide: ${block.tideStage}${block.tempF ? `\nTemp: ${block.tempF}°F` : ""}`}
              >
                <span className="forecast-block__time">{block.label}</span>
                <div className="forecast-block__bar">
                  <div
                    className="forecast-block__fill"
                    style={{ height: `${block.score}%` }}
                  />
                </div>
                <span className="forecast-block__score">{block.score}</span>
                {(block.isDawn || block.isDusk) && (
                  <span className="forecast-block__light">
                    {block.isDawn ? "🌅" : "🌇"}
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>
      <div className="forecast-legend">
        <span className="forecast-legend__item forecast-legend__item--go">
          Go
        </span>
        <span className="forecast-legend__item forecast-legend__item--window">
          Window
        </span>
        <span className="forecast-legend__item forecast-legend__item--hold">
          Hold
        </span>
      </div>
    </article>
  );
}
