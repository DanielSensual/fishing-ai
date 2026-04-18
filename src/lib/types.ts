export type SpeciesKey =
  | "snook"
  | "pompano"
  | "whiting"
  | "black-drum"
  | "sheepshead"
  | "redfish"
  | "seatrout"
  | "tarpon"
  | "mangrove-snapper"
  | "jack-crevalle"
  | "flounder"
  | "spanish-mackerel"
  | "cobia"
  | "tripletail";

export type TideStage = "incoming" | "outgoing" | "high" | "low" | "unknown";

export interface SpeciesDefinition {
  key: SpeciesKey;
  name: string;
  shortLabel: string;
  accent: string;
  months: number[];
  rig: string;
  bait: string;
  tactic: string;
  legalNote: string;
  idealWaterTempRangeF: [number, number];
}

export interface SpotDefinition {
  slug: string;
  name: string;
  area: string;
  region: string; // region slug from regions.ts
  type: "Pier" | "Surf" | "Shoreline" | "Wild beach" | "Inlet" | "Flats" | "Bridge";
  summary: string;
  mapPosition: { top: string; left: string };
  coordinates: { lat: number; lng: number };
  access: string[];
  caution: string[];
  highlights: string[];
  tactics: Array<{ title: string; detail: string }>;
  primarySpecies: SpeciesKey[];
  preferredTides: TideStage[];
  preferredWindDirections: string[];
  avoidWindDirections: string[];
  idealWaveRangeFt: [number, number];
  idealWaterTempRangeF: [number, number];
  lightPreference: "any" | "day" | "low-light";
  accessHours?: { open: string; close: string };
  requiresLaunchCheck?: boolean;
}

export interface RuleCard {
  title: string;
  summary: string;
  source: string;
  href: string;
}

export interface TideEvent {
  time: Date;
  localTimeLabel: string;
  heightFt: number;
  type: "H" | "L";
}

export interface WeatherHour {
  startTime: string;
  endTime: string;
  temperatureF: number;
  windSpeedMph: number;
  windDirection: string;
  shortForecast: string;
  precipitationChance: number;
  isDaytime: boolean;
}

export interface MarinePeriod {
  label: string;
  summary: string;
  seas: string | null;
  waveDetail: string | null;
}

export interface SurfSnapshot {
  ripCurrentRisk: string | null;
  surfHeight: string | null;
  waterTemperature: string | null;
  weather: string | null;
  wind: string | null;
  portCanaveralHighTide: string | null;
  portCanaveralLowTide: string | null;
}

export interface BuoyReading {
  observedAt: Date;
  waveHeightFt: number | null;
  dominantPeriodSec: number | null;
  averagePeriodSec: number | null;
  meanWaveDirection: number | null;
  waterTempF: number | null;
}

export interface LiveConditions {
  generatedAt: Date;
  sunrise: Date | null;
  sunset: Date | null;
  tideStage: TideStage;
  nextTide: TideEvent | null;
  currentWaterTempF: number | null;
  currentAirTempF: number | null;
  currentWindSpeedMph: number | null;
  currentWindDirection: string | null;
  currentForecast: string | null;
  nearshoreBuoy: BuoyReading | null;
  offshoreBuoy: BuoyReading | null;
  marineForecast: MarinePeriod[];
  surf: SurfSnapshot | null;
  activeAlerts: string[];
}

export interface SpotScore {
  spot: SpotDefinition;
  score: number;
  tone: "go" | "window" | "hold";
  bestWindow: string;
  summary: string;
  reasons: string[];
}

export interface SpeciesOutlook {
  species: SpeciesDefinition;
  score: number;
  tone: "go" | "window" | "hold";
  topSpotName: string;
  summary: string;
}

export interface SourceLink {
  label: string;
  href: string;
}

export interface DashboardData {
  overview: {
    headline: string;
    status: string;
    summary: string;
    topSpot: SpotScore | null;
  };
  conditions: LiveConditions;
  tides: TideEvent[];
  spotScores: SpotScore[];
  speciesOutlook: SpeciesOutlook[];
  rules: RuleCard[];
  sources: SourceLink[];
}
