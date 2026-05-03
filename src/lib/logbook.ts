/**
 * Logbook — localStorage-first personal trip logger
 * No backend required. All data stays on device.
 * Can migrate to Supabase later if needed.
 */

import type { TripLog, TripPattern, LogbookStats, SpeciesKey } from "./types";
import { speciesCatalog } from "./spots";

const STORAGE_KEY = "bite-atlas-logbook";

function generateId(): string {
  return `trip_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
}

/* ── CRUD ── */

export function getTrips(): TripLog[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const trips = JSON.parse(raw) as TripLog[];
    return trips.sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
  } catch {
    return [];
  }
}

export function addTrip(trip: Omit<TripLog, "id" | "createdAt">): TripLog {
  const trips = getTrips();
  const newTrip: TripLog = {
    ...trip,
    id: generateId(),
    createdAt: new Date().toISOString(),
  };
  trips.push(newTrip);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(trips));
  return newTrip;
}

export function updateTrip(
  id: string,
  updates: Partial<Omit<TripLog, "id" | "createdAt">>
): TripLog | null {
  const trips = getTrips();
  const index = trips.findIndex((t) => t.id === id);
  if (index === -1) return null;
  trips[index] = { ...trips[index], ...updates };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(trips));
  return trips[index];
}

export function deleteTrip(id: string): boolean {
  const trips = getTrips();
  const filtered = trips.filter((t) => t.id !== id);
  if (filtered.length === trips.length) return false;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered));
  return true;
}

export function getTripsForSpot(spotSlug: string): TripLog[] {
  return getTrips().filter((t) => t.spotSlug === spotSlug);
}

/* ── Stats ── */

export function getStats(): LogbookStats {
  const trips = getTrips();

  if (trips.length === 0) {
    return {
      totalTrips: 0,
      totalCatches: 0,
      totalSkunks: 0,
      topSpot: null,
      topSpecies: null,
      averageRating: 0,
    };
  }

  const spotCounts = new Map<string, number>();
  const speciesCounts = new Map<SpeciesKey, number>();
  let totalCatches = 0;
  let totalSkunks = 0;
  let ratingSum = 0;

  for (const trip of trips) {
    spotCounts.set(trip.spotName, (spotCounts.get(trip.spotName) ?? 0) + 1);

    if (trip.skunk) {
      totalSkunks++;
    } else {
      totalCatches++;
    }

    ratingSum += trip.rating;

    for (const species of trip.speciesCaught) {
      speciesCounts.set(species, (speciesCounts.get(species) ?? 0) + 1);
    }
  }

  let topSpot: LogbookStats["topSpot"] = null;
  let maxSpotCount = 0;
  for (const [name, count] of spotCounts) {
    if (count > maxSpotCount) {
      maxSpotCount = count;
      topSpot = { name, count };
    }
  }

  let topSpecies: LogbookStats["topSpecies"] = null;
  let maxSpeciesCount = 0;
  for (const [key, count] of speciesCounts) {
    if (count > maxSpeciesCount) {
      maxSpeciesCount = count;
      const speciesDef = speciesCatalog[key];
      topSpecies = { name: speciesDef?.name ?? key, count };
    }
  }

  return {
    totalTrips: trips.length,
    totalCatches,
    totalSkunks,
    topSpot,
    topSpecies,
    averageRating: ratingSum / trips.length,
  };
}

/* ── Pattern Extraction ── */

export function getPatterns(): TripPattern[] {
  const trips = getTrips();
  if (trips.length < 2) return [];

  const patterns: TripPattern[] = [];

  // Pattern 1: Species + Tide correlation
  const speciesTide = new Map<
    string,
    { catches: number; total: number; tide: string }
  >();
  for (const trip of trips) {
    if (!trip.conditions?.tideStage || trip.conditions.tideStage === "unknown")
      continue;
    for (const species of trip.speciesCaught) {
      const key = `${species}:${trip.conditions.tideStage}`;
      const entry = speciesTide.get(key) ?? {
        catches: 0,
        total: 0,
        tide: trip.conditions.tideStage,
      };
      entry.catches++;
      entry.total++;
      speciesTide.set(key, entry);
    }
    for (const species of trip.speciesTargeted) {
      if (!trip.speciesCaught.includes(species)) {
        const key = `${species}:${trip.conditions.tideStage}`;
        const entry = speciesTide.get(key) ?? {
          catches: 0,
          total: 0,
          tide: trip.conditions.tideStage,
        };
        entry.total++;
        speciesTide.set(key, entry);
      }
    }
  }

  for (const [key, data] of speciesTide) {
    if (data.total >= 2 && data.catches / data.total >= 0.6) {
      const speciesKey = key.split(":")[0] as SpeciesKey;
      const speciesDef = speciesCatalog[speciesKey];
      const name = speciesDef?.name ?? speciesKey;
      patterns.push({
        label: `${name} + ${data.tide} tide`,
        detail: `You've caught ${name} on ${data.tide} tide ${data.catches} out of ${data.total} trips (${Math.round((data.catches / data.total) * 100)}% hit rate).`,
        confidence: data.catches / data.total,
        tripCount: data.total,
      });
    }
  }

  // Pattern 2: Spot productivity
  const spotResults = new Map<
    string,
    { catches: number; skunks: number; name: string }
  >();
  for (const trip of trips) {
    const entry = spotResults.get(trip.spotSlug) ?? {
      catches: 0,
      skunks: 0,
      name: trip.spotName,
    };
    if (trip.skunk) {
      entry.skunks++;
    } else {
      entry.catches++;
    }
    spotResults.set(trip.spotSlug, entry);
  }

  for (const [, data] of spotResults) {
    const total = data.catches + data.skunks;
    if (total >= 2) {
      const rate = data.catches / total;
      if (rate >= 0.7) {
        patterns.push({
          label: `${data.name} is producing`,
          detail: `You've caught fish ${data.catches} out of ${total} trips to ${data.name} (${Math.round(rate * 100)}% productivity).`,
          confidence: rate,
          tripCount: total,
        });
      } else if (rate <= 0.3 && total >= 3) {
        patterns.push({
          label: `${data.name} has been tough`,
          detail: `Only ${data.catches} catches in ${total} trips to ${data.name}. Consider switching spots or tactics.`,
          confidence: 1 - rate,
          tripCount: total,
        });
      }
    }
  }

  // Pattern 3: Best wind direction for catches
  const windResults = new Map<string, { catches: number; total: number }>();
  for (const trip of trips) {
    if (!trip.conditions?.windDirection) continue;
    const wind = trip.conditions.windDirection;
    const entry = windResults.get(wind) ?? { catches: 0, total: 0 };
    entry.total++;
    if (!trip.skunk) entry.catches++;
    windResults.set(wind, entry);
  }

  for (const [wind, data] of windResults) {
    if (data.total >= 3 && data.catches / data.total >= 0.7) {
      patterns.push({
        label: `${wind} wind days produce`,
        detail: `${data.catches} out of ${data.total} trips with ${wind} wind resulted in catches (${Math.round((data.catches / data.total) * 100)}%).`,
        confidence: data.catches / data.total,
        tripCount: data.total,
      });
    }
  }

  return patterns.sort((a, b) => b.confidence - a.confidence);
}

/* ── Export ── */

export function exportTrips(): string {
  return JSON.stringify(getTrips(), null, 2);
}

export function importTrips(json: string): number {
  try {
    const imported = JSON.parse(json) as TripLog[];
    if (!Array.isArray(imported)) return 0;
    const existing = getTrips();
    const existingIds = new Set(existing.map((t) => t.id));
    const newTrips = imported.filter((t) => t.id && !existingIds.has(t.id));
    const merged = [...existing, ...newTrips];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(merged));
    return newTrips.length;
  } catch {
    return 0;
  }
}
