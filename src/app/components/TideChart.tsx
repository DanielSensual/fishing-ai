"use client";

interface TidePoint {
  time: string; // ISO string
  heightFt: number;
}

interface TideHighLow {
  time: string;
  heightFt: number;
  type: "H" | "L";
  label: string;
}

interface TideChartProps {
  /** 6-minute interval tide predictions */
  curve: TidePoint[];
  /** High/low events for labeling */
  events: TideHighLow[];
  /** Current time ISO string */
  now: string;
  /** Sunrise ISO (optional) */
  sunrise?: string | null;
  /** Sunset ISO (optional) */
  sunset?: string | null;
}

export default function TideChart({
  curve,
  events,
  now,
  sunrise,
  sunset,
}: TideChartProps) {
  if (curve.length < 2) {
    return (
      <div className="tide-chart tide-chart--empty">
        <p>Tide data unavailable</p>
      </div>
    );
  }

  const W = 720;
  const H = 200;
  const PAD_TOP = 32;
  const PAD_BOTTOM = 40;
  const PAD_LEFT = 44;
  const PAD_RIGHT = 16;

  const chartW = W - PAD_LEFT - PAD_RIGHT;
  const chartH = H - PAD_TOP - PAD_BOTTOM;

  const startMs = new Date(curve[0].time).getTime();
  const endMs = new Date(curve[curve.length - 1].time).getTime();
  const rangeMs = endMs - startMs || 1;

  const heights = curve.map((p) => p.heightFt);
  const minH = Math.min(...heights);
  const maxH = Math.max(...heights);
  const rangeH = maxH - minH || 1;

  function xFor(iso: string) {
    return PAD_LEFT + ((new Date(iso).getTime() - startMs) / rangeMs) * chartW;
  }
  function yFor(ft: number) {
    return PAD_TOP + chartH - ((ft - minH) / rangeH) * chartH;
  }

  // Build SVG path
  const pathD = curve
    .map((p, i) => {
      const x = xFor(p.time);
      const y = yFor(p.heightFt);
      return `${i === 0 ? "M" : "L"}${x.toFixed(1)},${y.toFixed(1)}`;
    })
    .join(" ");

  // Filled area path
  const areaD = `${pathD} L${(PAD_LEFT + chartW).toFixed(1)},${(
    PAD_TOP + chartH
  ).toFixed(1)} L${PAD_LEFT.toFixed(1)},${(PAD_TOP + chartH).toFixed(
    1,
  )} Z`;

  // Current time marker
  const nowMs = new Date(now).getTime();
  const nowInRange = nowMs >= startMs && nowMs <= endMs;
  const nowX = nowInRange ? xFor(now) : null;

  // Find current height by interpolating
  let nowY: number | null = null;
  if (nowInRange) {
    for (let i = 0; i < curve.length - 1; i++) {
      const t0 = new Date(curve[i].time).getTime();
      const t1 = new Date(curve[i + 1].time).getTime();
      if (nowMs >= t0 && nowMs <= t1) {
        const frac = (nowMs - t0) / (t1 - t0);
        const h = curve[i].heightFt + frac * (curve[i + 1].heightFt - curve[i].heightFt);
        nowY = yFor(h);
        break;
      }
    }
  }

  // Time axis labels (every 3 hours)
  const timeLabels: { x: number; label: string }[] = [];
  const first = new Date(curve[0].time);
  const startHour = first.getHours();
  const labelStart = new Date(first);
  labelStart.setMinutes(0, 0, 0);
  if (startHour % 3 !== 0) {
    labelStart.setHours(startHour + (3 - (startHour % 3)));
  }
  for (
    let t = labelStart.getTime();
    t <= endMs;
    t += 3 * 60 * 60 * 1000
  ) {
    const d = new Date(t);
    const h = d.getHours();
    const ampm = h >= 12 ? "PM" : "AM";
    const h12 = h === 0 ? 12 : h > 12 ? h - 12 : h;
    timeLabels.push({
      x: PAD_LEFT + ((t - startMs) / rangeMs) * chartW,
      label: `${h12}${ampm}`,
    });
  }

  // Height axis labels
  const heightLabels: { y: number; label: string }[] = [];
  const step = rangeH > 3 ? 1 : 0.5;
  for (let h = Math.ceil(minH / step) * step; h <= maxH; h += step) {
    heightLabels.push({
      y: yFor(h),
      label: `${h.toFixed(step < 1 ? 1 : 0)}`,
    });
  }

  // Sunrise / sunset markers
  const sunriseX = sunrise ? xFor(sunrise) : null;
  const sunsetX = sunset ? xFor(sunset) : null;
  const sunriseInRange = sunriseX !== null && sunriseX >= PAD_LEFT && sunriseX <= PAD_LEFT + chartW;
  const sunsetInRange = sunsetX !== null && sunsetX >= PAD_LEFT && sunsetX <= PAD_LEFT + chartW;

  return (
    <div className="tide-chart">
      <div className="tide-chart__header">
        <span className="eyebrow">Today&apos;s Tide</span>
        <div className="tide-chart__legend">
          <span className="tide-chart__legend-item tide-chart__legend-item--high">▲ High</span>
          <span className="tide-chart__legend-item tide-chart__legend-item--low">▼ Low</span>
          {nowInRange && (
            <span className="tide-chart__legend-item tide-chart__legend-item--now">● Now</span>
          )}
        </div>
      </div>
      <svg
        viewBox={`0 0 ${W} ${H}`}
        className="tide-chart__svg"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <linearGradient id="tideGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="hsl(190, 80%, 50%)" stopOpacity="0.35" />
            <stop offset="100%" stopColor="hsl(190, 80%, 50%)" stopOpacity="0.03" />
          </linearGradient>
          <linearGradient id="tideLine" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="hsl(190, 75%, 55%)" />
            <stop offset="50%" stopColor="hsl(200, 80%, 60%)" />
            <stop offset="100%" stopColor="hsl(190, 75%, 55%)" />
          </linearGradient>
        </defs>

        {/* Grid lines */}
        {heightLabels.map((hl, i) => (
          <line
            key={i}
            x1={PAD_LEFT}
            y1={hl.y}
            x2={PAD_LEFT + chartW}
            y2={hl.y}
            stroke="hsla(0,0%,100%,0.06)"
            strokeWidth="1"
          />
        ))}

        {/* Sunrise / sunset bands */}
        {sunriseInRange && (
          <line
            x1={sunriseX!}
            y1={PAD_TOP}
            x2={sunriseX!}
            y2={PAD_TOP + chartH}
            stroke="hsla(40, 90%, 60%, 0.25)"
            strokeWidth="1"
            strokeDasharray="4 4"
          />
        )}
        {sunsetInRange && (
          <line
            x1={sunsetX!}
            y1={PAD_TOP}
            x2={sunsetX!}
            y2={PAD_TOP + chartH}
            stroke="hsla(25, 90%, 55%, 0.25)"
            strokeWidth="1"
            strokeDasharray="4 4"
          />
        )}

        {/* Fill area */}
        <path d={areaD} fill="url(#tideGrad)" />

        {/* Tide curve */}
        <path
          d={pathD}
          fill="none"
          stroke="url(#tideLine)"
          strokeWidth="2.5"
          strokeLinejoin="round"
          strokeLinecap="round"
        />

        {/* Hi/Lo markers */}
        {events.map((ev, i) => {
          const ex = xFor(ev.time);
          const ey = yFor(ev.heightFt);
          const isHigh = ev.type === "H";
          if (ex < PAD_LEFT || ex > PAD_LEFT + chartW) return null;
          return (
            <g key={i}>
              <circle
                cx={ex}
                cy={ey}
                r="4"
                fill={isHigh ? "hsl(190, 80%, 55%)" : "hsl(220, 60%, 50%)"}
                stroke="hsl(220, 30%, 12%)"
                strokeWidth="1.5"
              />
              <text
                x={ex}
                y={ey - 10}
                textAnchor="middle"
                fill={isHigh ? "hsl(190, 80%, 70%)" : "hsl(220, 60%, 65%)"}
                fontSize="10"
                fontWeight="600"
              >
                {ev.heightFt.toFixed(1)} ft
              </text>
              <text
                x={ex}
                y={ey + 16}
                textAnchor="middle"
                fill="hsla(0,0%,100%,0.5)"
                fontSize="9"
              >
                {ev.label}
              </text>
            </g>
          );
        })}

        {/* Now indicator */}
        {nowX !== null && nowY !== null && (
          <g>
            <line
              x1={nowX}
              y1={PAD_TOP}
              x2={nowX}
              y2={PAD_TOP + chartH}
              stroke="hsl(350, 80%, 60%)"
              strokeWidth="1.5"
              strokeDasharray="3 3"
              opacity="0.6"
            />
            <circle
              cx={nowX}
              cy={nowY}
              r="5"
              fill="hsl(350, 80%, 60%)"
              stroke="hsl(220, 30%, 12%)"
              strokeWidth="2"
            >
              <animate
                attributeName="r"
                values="5;7;5"
                dur="2s"
                repeatCount="indefinite"
              />
            </circle>
          </g>
        )}

        {/* Time labels */}
        {timeLabels.map((tl, i) => (
          <text
            key={i}
            x={tl.x}
            y={H - 8}
            textAnchor="middle"
            fill="hsla(0,0%,100%,0.45)"
            fontSize="10"
          >
            {tl.label}
          </text>
        ))}

        {/* Height labels */}
        {heightLabels.map((hl, i) => (
          <text
            key={i}
            x={PAD_LEFT - 6}
            y={hl.y + 4}
            textAnchor="end"
            fill="hsla(0,0%,100%,0.4)"
            fontSize="9"
          >
            {hl.label}ft
          </text>
        ))}

        {/* Sunrise / sunset labels */}
        {sunriseInRange && (
          <text
            x={sunriseX!}
            y={PAD_TOP - 6}
            textAnchor="middle"
            fill="hsla(40, 90%, 60%, 0.7)"
            fontSize="9"
          >
            ☀ Rise
          </text>
        )}
        {sunsetInRange && (
          <text
            x={sunsetX!}
            y={PAD_TOP - 6}
            textAnchor="middle"
            fill="hsla(25, 90%, 55%, 0.7)"
            fontSize="9"
          >
            🌅 Set
          </text>
        )}
      </svg>
    </div>
  );
}
