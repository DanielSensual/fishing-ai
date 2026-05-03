"use client";

interface MoonPhaseProps {
  /** 0-29.53 day cycle position, or null for auto-calculate */
  moonAge?: number | null;
  /** Illumination percentage 0-100 */
  illumination?: number;
  /** Phase name override */
  phaseName?: string;
}

/**
 * Calculate moon phase for a given date using a simplified algorithm.
 * Returns age in days (0 = new moon, ~14.76 = full moon).
 */
function getMoonAge(date: Date = new Date()): number {
  // Known new moon: January 6, 2000 18:14 UTC
  const knownNewMoon = new Date("2000-01-06T18:14:00Z").getTime();
  const synodicMonth = 29.53058770576; // days
  const daysSince = (date.getTime() - knownNewMoon) / (1000 * 60 * 60 * 24);
  const age = daysSince % synodicMonth;
  return age < 0 ? age + synodicMonth : age;
}

function getPhaseName(age: number): string {
  if (age < 1.85) return "New Moon";
  if (age < 7.38) return "Waxing Crescent";
  if (age < 9.23) return "First Quarter";
  if (age < 14.76) return "Waxing Gibbous";
  if (age < 16.61) return "Full Moon";
  if (age < 22.14) return "Waning Gibbous";
  if (age < 23.99) return "Last Quarter";
  if (age < 27.68) return "Waning Crescent";
  return "New Moon";
}

function getPhaseEmoji(age: number): string {
  if (age < 1.85) return "🌑";
  if (age < 7.38) return "🌒";
  if (age < 9.23) return "🌓";
  if (age < 14.76) return "🌔";
  if (age < 16.61) return "🌕";
  if (age < 22.14) return "🌖";
  if (age < 23.99) return "🌗";
  if (age < 27.68) return "🌘";
  return "🌑";
}

function getIllumination(age: number): number {
  // Approximate illumination from age
  const synodicMonth = 29.53;
  return Math.round((1 - Math.cos((2 * Math.PI * age) / synodicMonth)) / 2 * 100);
}

function getFishingRating(age: number): { rating: string; stars: number; detail: string } {
  // New moon and full moon = best fishing (stronger tides)
  // Quarter moons = average
  const synodicMonth = 29.53;
  const fromNew = Math.min(age, synodicMonth - age);
  const fromFull = Math.abs(age - synodicMonth / 2);
  const nearMajor = Math.min(fromNew, fromFull);

  if (nearMajor < 2) {
    return {
      rating: "Excellent",
      stars: 5,
      detail: fromNew < fromFull
        ? "New moon — strongest tidal pull, fish feed aggressively"
        : "Full moon — strong tides, excellent night feeding",
    };
  }
  if (nearMajor < 4) {
    return {
      rating: "Good",
      stars: 4,
      detail: "Near a major phase — tidal activity is elevated",
    };
  }
  if (nearMajor < 6) {
    return {
      rating: "Average",
      stars: 3,
      detail: "Quarter moon — moderate tidal influence",
    };
  }
  return {
    rating: "Fair",
    stars: 2,
    detail: "Between phases — focus on tide timing over lunar influence",
  };
}

/**
 * Approximate major/minor solunar feeding periods.
 * Major: moon overhead + moon underfoot (~2hr windows)
 * Minor: moonrise + moonset (~1hr windows)
 */
function getSolunarWindows(date: Date): {
  major: string[];
  minor: string[];
} {
  const age = getMoonAge(date);
  // Rough approximation: moon transit shifts ~50 min later each day
  // Very rough moon transit estimate (this is simplified)
  const transitHour = (12 + (age * 0.8)) % 24;
  const underfootHour = (transitHour + 12) % 24;
  const riseHour = (transitHour - 6 + 24) % 24;
  const setHour = (transitHour + 6) % 24;

  function formatWindow(hour: number, duration: number): string {
    const startH = Math.floor(hour);
    const startM = Math.round((hour - startH) * 60);
    const endHour = hour + duration;
    const endH = Math.floor(endHour) % 24;
    const endM = Math.round((endHour - Math.floor(endHour)) * 60);
    
    const fmt = (h: number, m: number) => {
      const ampm = h >= 12 ? "PM" : "AM";
      const h12 = h === 0 ? 12 : h > 12 ? h - 12 : h;
      return `${h12}:${m.toString().padStart(2, "0")} ${ampm}`;
    };
    return `${fmt(startH, startM)} – ${fmt(endH, endM)}`;
  }

  return {
    major: [
      formatWindow(transitHour, 2),
      formatWindow(underfootHour, 2),
    ],
    minor: [
      formatWindow(riseHour, 1),
      formatWindow(setHour, 1),
    ],
  };
}

export default function MoonPhase({ moonAge, phaseName: phaseNameOverride }: MoonPhaseProps) {
  const now = new Date();
  const age = moonAge ?? getMoonAge(now);
  const name = phaseNameOverride ?? getPhaseName(age);
  const emoji = getPhaseEmoji(age);
  const illumination = getIllumination(age);
  const fishing = getFishingRating(age);
  const solunar = getSolunarWindows(now);

  return (
    <div className="moon-phase">
      <div className="moon-phase__header">
        <span className="moon-phase__emoji">{emoji}</span>
        <div>
          <strong className="moon-phase__name">{name}</strong>
          <span className="moon-phase__illumination">{illumination}% illuminated</span>
        </div>
        <div className="moon-phase__fishing-rating" data-rating={fishing.rating.toLowerCase()}>
          <div className="moon-phase__stars">
            {"★".repeat(fishing.stars)}{"☆".repeat(5 - fishing.stars)}
          </div>
          <span>{fishing.rating}</span>
        </div>
      </div>
      <p className="moon-phase__detail">{fishing.detail}</p>
      <div className="moon-phase__solunar">
        <div className="moon-phase__solunar-group">
          <span className="eyebrow">Major feeding</span>
          {solunar.major.map((w, i) => (
            <span key={i} className="moon-phase__window moon-phase__window--major">{w}</span>
          ))}
        </div>
        <div className="moon-phase__solunar-group">
          <span className="eyebrow">Minor feeding</span>
          {solunar.minor.map((w, i) => (
            <span key={i} className="moon-phase__window moon-phase__window--minor">{w}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
