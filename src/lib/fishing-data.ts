import "server-only";

import { ruleCards, speciesCatalog, spots } from "./spots";
import type {
  BuoyReading,
  DashboardData,
  MarinePeriod,
  SpeciesDefinition,
  SpeciesOutlook,
  SpeciesKey,
  SpotDefinition,
  SpotScore,
  SurfSnapshot,
  TideEvent,
  TideStage,
  WeatherHour,
} from "./types";

import { type RegionConfig, getRegionBySlug, getDefaultRegion } from "./regions";

const EASTERN_TIME_ZONE = "America/New_York";
const WEATHER_HEADERS = {
  "User-Agent": "FishingAI/0.1 (local prototype)",
  Accept: "application/geo+json, application/json",
};

// ── Dynamic URL builders per region ──
function buildPointsUrl(r: RegionConfig) {
  return `https://api.weather.gov/points/${r.center.lat},${r.center.lng}`;
}
function buildHourlyUrl(r: RegionConfig) {
  return `https://api.weather.gov/gridpoints/${r.nwsGridPoint}/forecast/hourly`;
}
function buildAlertsUrl(r: RegionConfig) {
  return `https://api.weather.gov/alerts/active?zone=${r.marineZone}`;
}
function buildMarineUrl(r: RegionConfig) {
  return `https://marine.weather.gov/MapClick.php?zoneid=${r.marineZone}`;
}
function buildSurfUrl(r: RegionConfig) {
  return `https://forecast.weather.gov/product.php?issuedby=${r.nwsOffice}&product=SRF&site=${r.nwsOffice}`;
}
function buildWaterTempUrl(r: RegionConfig) {
  return `https://api.tidesandcurrents.noaa.gov/api/prod/datagetter?product=water_temperature&application=FishingAI&date=latest&station=${r.waterTempStation}&time_zone=lst_ldt&units=english&format=json`;
}
const NOAA_TIDES_BASE =
  "https://api.tidesandcurrents.noaa.gov/api/prod/datagetter?product=predictions&application=FishingAI&begin_date=";
function buildTidesUrl(r: RegionConfig, todayStamp: string, tomorrowStamp: string) {
  return `${NOAA_TIDES_BASE}${todayStamp}&end_date=${tomorrowStamp}&datum=MLLW&station=${r.tideStation}&time_zone=lst_ldt&units=english&interval=hilo&format=json`;
}
function buildBuoyUrl(stationId: string) {
  return `https://www.ndbc.noaa.gov/data/realtime2/${stationId}.txt`;
}

interface CapePointsResponse {
  properties?: {
    astronomicalData?: {
      sunrise?: string;
      sunset?: string;
    };
  };
}

interface HourlyForecastResponse {
  properties?: {
    periods?: Array<{
      startTime: string;
      endTime: string;
      temperature: number;
      windSpeed: string;
      windDirection: string;
      shortForecast: string;
      isDaytime: boolean;
      probabilityOfPrecipitation?: { value: number | null };
    }>;
  };
}

interface AlertsResponse {
  features?: Array<{ properties?: { event?: string } }>;
}

const shortTimeFormatter = new Intl.DateTimeFormat("en-US", {
  timeZone: EASTERN_TIME_ZONE,
  weekday: "short",
  hour: "numeric",
  minute: "2-digit",
});

const fullTimeFormatter = new Intl.DateTimeFormat("en-US", {
  timeZone: EASTERN_TIME_ZONE,
  month: "short",
  day: "numeric",
  hour: "numeric",
  minute: "2-digit",
});

function getTodayDateStamp(date: Date): string {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: EASTERN_TIME_ZONE,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(date);

  const year = parts.find((part) => part.type === "year")?.value ?? "0000";
  const month = parts.find((part) => part.type === "month")?.value ?? "01";
  const day = parts.find((part) => part.type === "day")?.value ?? "01";

  return `${year}${month}${day}`;
}

function getEasternOffsetSuffix(date = new Date()): string {
  const zoneName = new Intl.DateTimeFormat("en-US", {
    timeZone: EASTERN_TIME_ZONE,
    timeZoneName: "shortOffset",
  })
    .formatToParts(date)
    .find((part) => part.type === "timeZoneName")?.value;

  const match = zoneName?.match(/GMT([+-])(\d{1,2})(?::(\d{2}))?/);

  if (!match) {
    return "-04:00";
  }

  const [, sign, hours, minutes] = match;

  return `${sign}${hours.padStart(2, "0")}:${minutes ?? "00"}`;
}

async function fetchJson<T>(
  url: string,
  init?: RequestInit,
): Promise<T | null> {
  try {
    const response = await fetch(url, {
      ...init,
      cache: "no-store",
      signal: AbortSignal.timeout(8000),
    });

    if (!response.ok) {
      return null;
    }

    return (await response.json()) as T;
  } catch {
    return null;
  }
}

async function fetchText(url: string, init?: RequestInit): Promise<string | null> {
  try {
    const response = await fetch(url, {
      ...init,
      cache: "no-store",
      signal: AbortSignal.timeout(8000),
    });

    if (!response.ok) {
      return null;
    }

    return response.text();
  } catch {
    return null;
  }
}

function stripHtml(html: string): string {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<\/(div|p|li|h[1-6]|tr)>/gi, "\n")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\r/g, "")
    .split("\n")
    .map((line) => line.replace(/\s+/g, " ").trim())
    .filter(Boolean)
    .join("\n");
}

function cleanSummary(summary: string): string {
  return summary
    .replace(/<br\s*\/?>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function parseWindSpeedMph(raw: string): number {
  const matches = raw.match(/\d+/g);

  if (!matches?.length) {
    return 0;
  }

  return Number(matches[matches.length - 1]);
}

function toFeet(meters: number | null): number | null {
  return meters === null ? null : meters * 3.28084;
}

function toFahrenheit(celsius: number | null): number | null {
  return celsius === null ? null : celsius * 1.8 + 32;
}

function clampScore(value: number): number {
  return Math.max(0, Math.min(100, Math.round(value)));
}

function parseHourlyForecast(
  payload: HourlyForecastResponse | null,
): WeatherHour[] {
  return (
    payload?.properties?.periods?.map((period) => ({
      startTime: period.startTime,
      endTime: period.endTime,
      temperatureF: period.temperature,
      windSpeedMph: parseWindSpeedMph(period.windSpeed),
      windDirection: period.windDirection,
      shortForecast: period.shortForecast,
      isDaytime: period.isDaytime,
      precipitationChance: period.probabilityOfPrecipitation?.value ?? 0,
    })) ?? []
  );
}

function parseTideEvents(
  payload: {
    predictions?: Array<{ t: string; v: string; type: "H" | "L" }>;
  } | null,
): TideEvent[] {
  const offset = getEasternOffsetSuffix();

  return (
    payload?.predictions?.map((prediction) => {
      const date = new Date(`${prediction.t.replace(" ", "T")}${offset}`);

      return {
        time: date,
        localTimeLabel: shortTimeFormatter.format(date),
        heightFt: Number(prediction.v),
        type: prediction.type,
      };
    }) ?? []
  ).sort((left, right) => left.time.getTime() - right.time.getTime());
}

function parseWaterTemperature(
  payload: { data?: Array<{ v?: string }> } | null,
): number | null {
  const value = payload?.data?.[0]?.v;

  return value ? Number(value) : null;
}

function parseBuoyReading(text: string | null): BuoyReading | null {
  if (!text) {
    return null;
  }

  const lines = text
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);
  const dataLine = lines.find((line) => /^\d{4}\s+\d{2}\s+\d{2}/.test(line));

  if (!dataLine) {
    return null;
  }

  const values = dataLine.split(/\s+/);
  const [year, month, day, hour, minute, , , , waveHeight, dominantPeriod, averagePeriod, waveDirection, , , waterTemp] =
    values;

  return {
    observedAt: new Date(
      Date.UTC(
        Number(year),
        Number(month) - 1,
        Number(day),
        Number(hour),
        Number(minute),
      ),
    ),
    waveHeightFt: waveHeight === "MM" ? null : toFeet(Number(waveHeight)),
    dominantPeriodSec: dominantPeriod === "MM" ? null : Number(dominantPeriod),
    averagePeriodSec: averagePeriod === "MM" ? null : Number(averagePeriod),
    meanWaveDirection: waveDirection === "MM" ? null : Number(waveDirection),
    waterTempF: waterTemp === "MM" ? null : toFahrenheit(Number(waterTemp)),
  };
}

function parseMarineForecast(html: string | null): MarinePeriod[] {
  if (!html) {
    return [];
  }

  const periods: MarinePeriod[] = [];
  const regex =
    /<div class="col-sm-2 forecast-label"><b>([^<]+)<\/b><\/div><div class="col-sm-10 forecast-text">([\s\S]*?)<\/div><\/div>/g;

  for (const match of html.matchAll(regex)) {
    const label = match[1]?.trim();
    const summary = cleanSummary(match[2] ?? "");

    if (!label || !summary) {
      continue;
    }

    periods.push({
      label,
      summary,
      seas: summary.match(/Seas ([^.]+)\./i)?.[1] ?? null,
      waveDetail: summary.match(/Wave detail: ([^.]+)\./i)?.[1] ?? null,
    });

    if (periods.length === 6) {
      break;
    }
  }

  return periods;
}

function parseSurfSnapshot(html: string | null): SurfSnapshot | null {
  if (!html) {
    return null;
  }

  const lines = stripHtml(html).split("\n");
  const start = lines.findIndex((line) =>
    line.includes("Including the beaches of Vero Beach, Cocoa Beach, Satellite Beach"),
  );

  if (start === -1) {
    return null;
  }

  const end = lines.findIndex(
    (line, index) => index > start && line.includes("Rip Current Risk Category"),
  );
  const block = lines.slice(start, end === -1 ? start + 30 : end);

  const lineFor = (prefix: string): string | undefined =>
    block.find((line) => line.startsWith(prefix));
  const cleanField = (value?: string): string | null => {
    const normalized = value?.replace(/\.$/, "").trim();
    return normalized ? normalized : null;
  };

  const portHighLine = lineFor("Port Canaveral");
  const portHigh = cleanField(portHighLine?.split(/\.+/).pop());
  const portLowIndex = block.findIndex((line) => line.startsWith("Port Canaveral"));
  const portLow = portLowIndex !== -1 ? cleanField(block[portLowIndex + 1]) : null;

  return {
    ripCurrentRisk: cleanField(lineFor("Rip Current Risk*")?.split(/\.+/).pop()),
    surfHeight: cleanField(lineFor("Surf Height")?.split(/\.+/).pop()),
    waterTemperature: cleanField(lineFor("Water Temperature")?.split(/\.+/).pop()),
    weather: cleanField(lineFor("Weather")?.split(/\.+/).pop()),
    wind: cleanField(lineFor("Winds")?.split(/\.+/).pop()),
    portCanaveralHighTide: portHigh,
    portCanaveralLowTide: portLow,
  };
}

function getCurrentHour(periods: WeatherHour[], now: Date): WeatherHour | null {
  return (
    periods.find((period) => {
      const start = new Date(period.startTime);
      const end = new Date(period.endTime);

      return start <= now && now < end;
    }) ??
    periods.find((period) => new Date(period.startTime) >= now) ??
    periods[0] ??
    null
  );
}

function getTideStage(events: TideEvent[], now: Date): {
  tideStage: TideStage;
  nextTide: TideEvent | null;
} {
  const nextTide = events.find((event) => event.time > now) ?? null;
  const previousTide =
    [...events].reverse().find((event) => event.time <= now) ?? null;

  if (!nextTide || !previousTide) {
    return { tideStage: "unknown", nextTide };
  }

  const ninetyMinutes = 90 * 60 * 1000;

  if (Math.abs(nextTide.time.getTime() - now.getTime()) <= ninetyMinutes) {
    return { tideStage: nextTide.type === "H" ? "high" : "low", nextTide };
  }

  if (Math.abs(now.getTime() - previousTide.time.getTime()) <= ninetyMinutes) {
    return {
      tideStage: previousTide.type === "H" ? "high" : "low",
      nextTide,
    };
  }

  return {
    tideStage:
      previousTide.type === "L" && nextTide.type === "H" ? "incoming" : "outgoing",
    nextTide,
  };
}

function withinRange(value: number | null, range: [number, number]): boolean {
  return value !== null && value >= range[0] && value <= range[1];
}

function isOutsideHours(spot: SpotDefinition, now: Date): boolean {
  if (!spot.accessHours) {
    return false;
  }

  const timeFormatter = new Intl.DateTimeFormat("en-US", {
    timeZone: EASTERN_TIME_ZONE,
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
  const nowClock = timeFormatter.format(now);

  return nowClock < spot.accessHours.open || nowClock > spot.accessHours.close;
}

function isLowLightWindow(now: Date, sunrise: Date | null, sunset: Date | null): boolean {
  if (!sunrise || !sunset) {
    return false;
  }

  const oneHour = 60 * 60 * 1000;

  return (
    Math.abs(now.getTime() - sunrise.getTime()) <= oneHour ||
    Math.abs(now.getTime() - sunset.getTime()) <= oneHour
  );
}

function getSpeciesSeasonBoost(species: SpeciesDefinition, now: Date): number {
  const currentMonth = Number(
    new Intl.DateTimeFormat("en-US", {
      timeZone: EASTERN_TIME_ZONE,
      month: "numeric",
    }).format(now),
  );

  return species.months.includes(currentMonth) ? 6 : -10;
}

function getSnookStatus(now: Date): string {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: EASTERN_TIME_ZONE,
    month: "numeric",
    day: "numeric",
  }).formatToParts(now);
  const month = Number(parts.find((part) => part.type === "month")?.value ?? "1");
  const day = Number(parts.find((part) => part.type === "day")?.value ?? "1");
  const value = month * 100 + day;

  const inOpenSpring = value >= 201 && value <= 531;
  const inOpenFall = value >= 901 && value <= 1214;

  return inOpenSpring || inOpenFall
    ? "Harvest open on Florida's east coast right now; snook permit required if keeping fish."
    : "Harvest closed right now; treat snook as a low-light catch-and-release target until the next east coast opening.";
}

function describeNextWindow(
  spot: SpotDefinition,
  tideEvents: TideEvent[],
  now: Date,
  sunrise: Date | null,
  sunset: Date | null,
): string {
  const prefersHighSide =
    spot.preferredTides.includes("incoming") || spot.preferredTides.includes("high");
  const prefersLowSide =
    spot.preferredTides.includes("outgoing") || spot.preferredTides.includes("low");

  const targetEvent =
    (prefersHighSide
      ? tideEvents.find((event) => event.type === "H" && event.time > now)
      : null) ||
    (prefersLowSide
      ? tideEvents.find((event) => event.type === "L" && event.time > now)
      : null) ||
    tideEvents.find((event) => event.time > now) ||
    null;

  const eventLabel = targetEvent
    ? `${targetEvent.type === "H" ? "around high tide" : "around low tide"} ${shortTimeFormatter.format(targetEvent.time)}`
    : "when the next tide change shows up";

  if (spot.lightPreference === "low-light" && sunset && sunset > now) {
    return `Low light into ${shortTimeFormatter.format(sunset)} with ${eventLabel}`;
  }

  if (spot.lightPreference === "low-light" && sunrise && sunrise > now) {
    return `First light around ${shortTimeFormatter.format(sunrise)} with ${eventLabel}`;
  }

  return `Best window ${eventLabel}`;
}

function scoreSpot(
  spot: SpotDefinition,
  now: Date,
  tideStage: TideStage,
  currentWaterTempF: number | null,
  currentWindDirection: string | null,
  currentWindSpeedMph: number | null,
  nearshoreWaveHeightFt: number | null,
  lowLight: boolean,
  activeAlerts: string[],
  surfSnapshot: SurfSnapshot | null,
  tideEvents: TideEvent[],
  sunrise: Date | null,
  sunset: Date | null,
): SpotScore {
  let score = 54;
  const reasons: string[] = [];

  if (spot.preferredTides.includes(tideStage)) {
    score += 16;
    reasons.push(`${tideStage} tide lines up with this spot.`);
  } else if (
    (tideStage === "incoming" && spot.preferredTides.includes("high")) ||
    (tideStage === "outgoing" && spot.preferredTides.includes("low"))
  ) {
    score += 8;
    reasons.push(`The tide is leaning toward this spot's preferred window.`);
  } else {
    score -= 8;
    reasons.push(`The current tide stage is not ideal for this setup.`);
  }

  if (currentWindDirection) {
    if (spot.preferredWindDirections.includes(currentWindDirection)) {
      score += 10;
      reasons.push(`${currentWindDirection} wind supports the water shape here.`);
    } else if (spot.avoidWindDirections.includes(currentWindDirection)) {
      score -= 10;
      reasons.push(`${currentWindDirection} wind usually hurts this setup.`);
    }
  }

  if (currentWindSpeedMph !== null) {
    if (currentWindSpeedMph >= 18) {
      score -= spot.type === "Surf" || spot.type === "Wild beach" ? 14 : 8;
      reasons.push(`Wind speed is pushing conditions away from easy mode.`);
    } else if (currentWindSpeedMph <= 10) {
      score += 4;
      reasons.push(`Light breeze keeps the presentation manageable.`);
    }
  }

  if (withinRange(currentWaterTempF, spot.idealWaterTempRangeF)) {
    score += 8;
    reasons.push(`Water temperature is in this spot's active band.`);
  } else if (currentWaterTempF !== null) {
    score -= 4;
    reasons.push(`Water temperature is workable, but not ideal for this program.`);
  }

  if (nearshoreWaveHeightFt !== null) {
    if (
      nearshoreWaveHeightFt >= spot.idealWaveRangeFt[0] &&
      nearshoreWaveHeightFt <= spot.idealWaveRangeFt[1]
    ) {
      score += 10;
      reasons.push(`Wave height is in the range this spot wants.`);
    } else if (nearshoreWaveHeightFt > spot.idealWaveRangeFt[1] + 1) {
      score -= 14;
      reasons.push(`The nearshore wave stack is bigger than this spot likes.`);
    } else {
      score -= 5;
      reasons.push(`Wave shape is only a partial fit right now.`);
    }
  }

  if (spot.lightPreference === "low-light") {
    if (lowLight) {
      score += 10;
      reasons.push(`Low-light timing matches the feed window here.`);
    } else {
      score -= 4;
      reasons.push(`This spot gets stronger around dawn, dusk, or night edges.`);
    }
  } else if (spot.lightPreference === "day" && !lowLight) {
    score += 4;
    reasons.push(`This is a cleaner daylight read than a pure low-light play.`);
  }

  if (spot.type === "Surf" || spot.type === "Wild beach") {
    const risk = surfSnapshot?.ripCurrentRisk?.toLowerCase() ?? "";

    if (risk.includes("high")) {
      score -= 16;
      reasons.push(`High rip current risk means surf safety is the first limiter.`);
    } else if (risk.includes("moderate")) {
      score -= 8;
      reasons.push(`Moderate rip current risk means the surf play is still condition-sensitive.`);
    }
  }

  if (spot.requiresLaunchCheck) {
    score -= 3;
    reasons.push(`Playalinda always needs a launch-closure check before you commit.`);
  }

  if (isOutsideHours(spot, now)) {
    score -= 24;
    reasons.push(`This spot is outside its normal access window right now.`);
  }

  if (activeAlerts.length > 0) {
    score -= 6;
    reasons.push(`Active marine alerts add some friction to every call today.`);
  }

  const finalScore = clampScore(score);
  const tone: SpotScore["tone"] =
    finalScore >= 75 ? "go" : finalScore >= 60 ? "window" : "hold";

  return {
    spot,
    score: finalScore,
    tone,
    bestWindow: describeNextWindow(spot, tideEvents, now, sunrise, sunset),
    summary: reasons.slice(0, 2).join(" "),
    reasons,
  };
}

function buildSpeciesOutlook(
  spotScores: SpotScore[],
  now: Date,
): SpeciesOutlook[] {
  return Object.values(speciesCatalog)
    .map((species) => {
      const relevantScores = spotScores.filter((entry) =>
        entry.spot.primarySpecies.includes(species.key),
      );
      const topSpot = relevantScores[0];
      const boostedScore = clampScore(
        (topSpot?.score ?? 40) + getSpeciesSeasonBoost(species, now),
      );

      const tone: SpeciesOutlook["tone"] =
        boostedScore >= 75 ? "go" : boostedScore >= 60 ? "window" : "hold";
      const legalNote =
        species.key === "snook" ? getSnookStatus(now) : species.legalNote;

      return {
        species: {
          ...species,
          legalNote,
        },
        score: boostedScore,
        tone,
        topSpotName: topSpot?.spot.name ?? "No clear lead",
        summary:
          topSpot?.summary ??
          "Conditions are incomplete right now, so treat this as a scouting species instead of a lock.",
      };
    })
    .sort((left, right) => right.score - left.score);
}

function buildOverview(
  topSpot: SpotScore | null,
  nearshoreBuoy: BuoyReading | null,
  tideStage: TideStage,
  waterTempF: number | null,
  activeAlerts: string[],
): DashboardData["overview"] {
  if (!topSpot) {
    return {
      headline: "Live conditions are loading with fallbacks",
      status: "Scout mode",
      summary:
        "The public feeds are partially unavailable, so lean on spot pages and direct observations before committing.",
      topSpot: null,
    };
  }

  if (topSpot.score >= 75) {
    return {
      headline: `Fish ${topSpot.spot.name} first`,
      status: "Go",
      summary: `Cape is fishable right now with ${nearshoreBuoy?.waveHeightFt?.toFixed(1) ?? "?"} ft nearshore surf, ${tideStage} tide, and roughly ${waterTempF?.toFixed(1) ?? "?"}°F water. ${activeAlerts.length ? "There are active marine alerts, so fish the clean window and keep the exit easy." : topSpot.bestWindow}.`,
      topSpot,
    };
  }

  if (topSpot.score >= 60) {
    return {
      headline: `Wait for the ${topSpot.bestWindow.toLowerCase()}`,
      status: "Window",
      summary:
        "Conditions are close, but you will get paid more by timing than by grinding all day in the wrong water.",
      topSpot,
    };
  }

  return {
    headline: "Keep it short and fish the tightest window",
    status: "Hold",
    summary:
      "The feed is not wide open right now. Scout, keep the session compact, and prioritize the highest-scoring spot only.",
    topSpot,
  };
}

export async function getDashboardData(regionSlug?: string): Promise<DashboardData> {
  const region = (regionSlug ? getRegionBySlug(regionSlug) : undefined) ?? getDefaultRegion();
  const regionSpots = spots.filter((s) => s.region === region.slug);

  const now = new Date();
  const todayStamp = getTodayDateStamp(now);
  const tomorrow = new Date(now.getTime() + 24 * 60 * 60 * 1000);
  const tomorrowStamp = getTodayDateStamp(tomorrow);

  const [
    pointsPayload,
    hourlyPayload,
    alertsPayload,
    waterTempPayload,
    tidePayload,
    nearshoreText,
    offshoreText,
    marineHtml,
    surfHtml,
  ] = await Promise.all([
    fetchJson<CapePointsResponse>(buildPointsUrl(region), { headers: WEATHER_HEADERS }),
    fetchJson<HourlyForecastResponse>(buildHourlyUrl(region), {
      headers: WEATHER_HEADERS,
    }),
    fetchJson<AlertsResponse>(buildAlertsUrl(region), { headers: WEATHER_HEADERS }),
    fetchJson<{ data?: Array<{ v?: string }> }>(buildWaterTempUrl(region)),
    fetchJson<{ predictions?: Array<{ t: string; v: string; type: "H" | "L" }> }>(
      buildTidesUrl(region, todayStamp, tomorrowStamp),
    ),
    region.buoyNearshore ? fetchText(buildBuoyUrl(region.buoyNearshore)) : Promise.resolve(""),
    region.buoyOffshore ? fetchText(buildBuoyUrl(region.buoyOffshore)) : Promise.resolve(""),
    fetchText(buildMarineUrl(region), { headers: WEATHER_HEADERS }),
    fetchText(buildSurfUrl(region)),
  ]);

  const tides = parseTideEvents(tidePayload);
  const hourlyForecast = parseHourlyForecast(hourlyPayload);
  const currentHour = getCurrentHour(hourlyForecast, now);
  const nearshoreBuoy = nearshoreText ? parseBuoyReading(nearshoreText) : null;
  const offshoreBuoy = offshoreText ? parseBuoyReading(offshoreText) : null;
  const surfSnapshot = parseSurfSnapshot(surfHtml);
  const marineForecast = parseMarineForecast(marineHtml);
  const sunrise = pointsPayload?.properties?.astronomicalData?.sunrise
    ? new Date(pointsPayload.properties.astronomicalData.sunrise)
    : null;
  const sunset = pointsPayload?.properties?.astronomicalData?.sunset
    ? new Date(pointsPayload.properties.astronomicalData.sunset)
    : null;
  const { tideStage, nextTide } = getTideStage(tides, now);
  const currentWaterTempF =
    parseWaterTemperature(waterTempPayload) ?? nearshoreBuoy?.waterTempF ?? null;
  const activeAlerts =
    alertsPayload?.features
      ?.map((feature) => feature.properties?.event)
      .filter((event): event is string => Boolean(event)) ?? [];
  const lowLight = isLowLightWindow(now, sunrise, sunset);

  const spotScores = regionSpots
    .map((spot) =>
      scoreSpot(
        spot,
        now,
        tideStage,
        currentWaterTempF,
        currentHour?.windDirection ?? null,
        currentHour?.windSpeedMph ?? null,
        nearshoreBuoy?.waveHeightFt ?? null,
        lowLight,
        activeAlerts,
        surfSnapshot,
        tides,
        sunrise,
        sunset,
      ),
    )
    .sort((left, right) => right.score - left.score);

  const speciesOutlook = buildSpeciesOutlook(spotScores, now);
  const overview = buildOverview(
    spotScores[0] ?? null,
    nearshoreBuoy,
    tideStage,
    currentWaterTempF,
    activeAlerts,
  );

  return {
    overview,
    conditions: {
      generatedAt: now,
      sunrise,
      sunset,
      tideStage,
      nextTide,
      currentWaterTempF,
      currentAirTempF: currentHour?.temperatureF ?? null,
      currentWindSpeedMph: currentHour?.windSpeedMph ?? null,
      currentWindDirection: currentHour?.windDirection ?? null,
      currentForecast: currentHour?.shortForecast ?? null,
      nearshoreBuoy,
      offshoreBuoy,
      marineForecast,
      surf: surfSnapshot,
      activeAlerts,
    },
    tides,
    spotScores,
    speciesOutlook,
    rules: ruleCards,
    sources: [
      {
        label: `NOAA CO-OPS ${region.tideStation}`,
        href: `https://tidesandcurrents.noaa.gov/inventory.html?id=${region.tideStation}`,
      },
      ...(region.buoyNearshore
        ? [{
            label: `NDBC ${region.buoyNearshore} nearshore buoy`,
            href: `https://www.ndbc.noaa.gov/station_page.php?station=${region.buoyNearshore}`,
          }]
        : []),
      ...(region.buoyOffshore
        ? [{
            label: `NDBC ${region.buoyOffshore} offshore buoy`,
            href: `https://www.ndbc.noaa.gov/station_page.php?station=${region.buoyOffshore}`,
          }]
        : []),
      {
        label: "NWS hourly forecast point",
        href: buildPointsUrl(region),
      },
      {
        label: "NWS marine forecast",
        href: buildMarineUrl(region),
      },
      {
        label: "FWC regulations hub",
        href: "https://myfwc.com/fishing/saltwater/recreational/",
      },
    ],
  };
}

export function getSpotBySlug(slug: string): SpotDefinition | undefined {
  return spots.find((spot) => spot.slug === slug);
}

export function getSpeciesByKey(key: SpeciesKey): SpeciesDefinition {
  return speciesCatalog[key];
}

export function formatDashboardTimestamp(date: Date): string {
  return fullTimeFormatter.format(date);
}
