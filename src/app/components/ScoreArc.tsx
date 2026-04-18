"use client";

interface ScoreArcProps {
  score: number;
  tone: "go" | "window" | "hold";
  size?: number;
}

const TONE_COLORS: Record<string, string> = {
  go: "#22c989",
  window: "#e6a030",
  hold: "#e05555",
};

export default function ScoreArc({ score, tone, size = 64 }: ScoreArcProps) {
  const r = 28;
  const circumference = 2 * Math.PI * r;
  const offset = circumference - (score / 100) * circumference;
  const color = TONE_COLORS[tone] || TONE_COLORS.hold;

  return (
    <div className="score-arc" style={{ width: size, height: size }}>
      <svg viewBox="0 0 64 64">
        <circle className="score-arc__bg" cx="32" cy="32" r={r} />
        <circle
          className="score-arc__fill"
          cx="32"
          cy="32"
          r={r}
          stroke={color}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          style={{ filter: `drop-shadow(0 0 6px ${color}66)` }}
        />
      </svg>
      <span className="score-arc__label">{score}</span>
    </div>
  );
}
