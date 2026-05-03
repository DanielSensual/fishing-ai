"use client";

import type { LaunchInfo } from "@/lib/launch-schedule";

interface LaunchAlertProps {
  launches: LaunchInfo[];
}

export default function LaunchAlert({ launches }: LaunchAlertProps) {
  const imminent = launches.filter(
    (l) => l.hoursAway >= -2 && l.hoursAway <= 48
  );

  if (imminent.length === 0) return null;

  return (
    <div className="launch-alert">
      <div className="launch-alert__icon">🚀</div>
      <div className="launch-alert__content">
        <strong>Launch alert — check access before driving</strong>
        {imminent.map((launch, i) => (
          <div key={i} className="launch-alert__entry">
            <span className="launch-alert__name">{launch.name}</span>
            <span className="launch-alert__time">
              {launch.hoursAway <= 0
                ? "In progress or just completed"
                : launch.hoursAway < 1
                  ? `In ~${Math.round(launch.hoursAway * 60)} minutes`
                  : launch.hoursAway < 24
                    ? `In ~${Math.round(launch.hoursAway)} hours`
                    : `In ~${Math.round(launch.hoursAway / 24)} day${Math.round(launch.hoursAway / 24) !== 1 ? "s" : ""}`}
            </span>
            <small>
              {launch.provider} · {launch.padName} · Status: {launch.status}
            </small>
          </div>
        ))}
        <small className="launch-alert__disclaimer">
          Playalinda and parts of Canaveral National Seashore may close for
          launches. Check{" "}
          <a
            href="https://www.nps.gov/cana/planyourvisit/conditions.htm"
            target="_blank"
            rel="noopener noreferrer"
          >
            NPS alerts
          </a>{" "}
          before driving.
        </small>
      </div>
    </div>
  );
}
