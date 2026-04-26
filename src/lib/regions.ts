import "server-only";

export interface RegionConfig {
  slug: string;
  name: string;
  shortName: string;
  coast: "atlantic" | "gulf";
  /** NWS gridpoint for hourly forecast (e.g. "MLB/57,66") */
  nwsGridPoint: string;
  /** NWS office code (e.g. "MLB") */
  nwsOffice: string;
  /** NOAA CO-OPS tide station ID */
  tideStation: string;
  /** NWS marine zone for alerts (e.g. "AMZ552") */
  marineZone: string;
  /** NDBC buoy station ID for wave/water temp, or null */
  buoyNearshore: string | null;
  buoyOffshore: string | null;
  /** Water temp station — may differ from tide station */
  waterTempStation: string;
  /** Map center point */
  center: { lat: number; lng: number };
  /** Map zoom level */
  zoom: number;
}

export const regions: RegionConfig[] = [
  {
    slug: "space-coast",
    name: "Space Coast",
    shortName: "Space Coast",
    coast: "atlantic",
    nwsGridPoint: "MLB/57,66",
    nwsOffice: "MLB",
    tideStation: "8721604",
    marineZone: "AMZ552",
    buoyNearshore: "41113",
    buoyOffshore: "41009",
    waterTempStation: "8721604",
    center: { lat: 28.41, lng: -80.61 },
    zoom: 11,
  },
  {
    slug: "indian-river",
    name: "Indian River & Lagoon",
    shortName: "Indian River",
    coast: "atlantic",
    nwsGridPoint: "MLB/56,43",
    nwsOffice: "MLB",
    tideStation: "8722004",
    marineZone: "AMZ552",
    buoyNearshore: "41113",
    buoyOffshore: "41009",
    waterTempStation: "8722004",
    center: { lat: 27.86, lng: -80.46 },
    zoom: 10,
  },
  {
    slug: "daytona",
    name: "Daytona & Volusia",
    shortName: "Daytona",
    coast: "atlantic",
    nwsGridPoint: "JAX/67,10",
    nwsOffice: "JAX",
    tideStation: "8721120",
    marineZone: "AMZ555",
    buoyNearshore: null,
    buoyOffshore: "41009",
    waterTempStation: "8721120",
    center: { lat: 29.21, lng: -81.01 },
    zoom: 10,
  },
  {
    slug: "tampa-bay",
    name: "Tampa Bay & Gulf Coast",
    shortName: "Tampa Bay",
    coast: "gulf",
    nwsGridPoint: "TBW/79,83",
    nwsOffice: "TBW",
    tideStation: "8726607",
    marineZone: "GMZ856",
    buoyNearshore: null,
    buoyOffshore: "42036",
    waterTempStation: "8726607",
    center: { lat: 27.76, lng: -82.63 },
    zoom: 10,
  },
  {
    slug: "anna-maria-sarasota",
    name: "Anna Maria & Sarasota",
    shortName: "AMI/Sarasota",
    coast: "gulf",
    nwsGridPoint: "TBW/62,78",
    nwsOffice: "TBW",
    tideStation: "8726282",
    marineZone: "GMZ853",
    buoyNearshore: "42098",
    buoyOffshore: null,
    waterTempStation: "8726282",
    center: { lat: 27.5311, lng: -82.7334 },
    zoom: 11,
  },
  {
    slug: "treasure-coast",
    name: "Treasure Coast & Palm Beach",
    shortName: "Treasure Coast",
    coast: "atlantic",
    nwsGridPoint: "MFL/55,104",
    nwsOffice: "MFL",
    tideStation: "8722125",
    marineZone: "AMZ550",
    buoyNearshore: null,
    buoyOffshore: "41114",
    waterTempStation: "8722125",
    center: { lat: 27.18, lng: -80.17 },
    zoom: 10,
  },
  {
    slug: "jacksonville",
    name: "Jacksonville & Northeast",
    shortName: "Jacksonville",
    coast: "atlantic",
    nwsGridPoint: "JAX/68,34",
    nwsOffice: "JAX",
    tideStation: "8720218",
    marineZone: "AMZ572",
    buoyNearshore: null,
    buoyOffshore: "41112",
    waterTempStation: "8720218",
    center: { lat: 30.33, lng: -81.39 },
    zoom: 10,
  },
];

export function getRegionBySlug(slug: string): RegionConfig | undefined {
  return regions.find((r) => r.slug === slug);
}

export function getDefaultRegion(): RegionConfig {
  return regions[0]; // Space Coast
}

/** All region slugs for static generation */
export function getAllRegionSlugs(): string[] {
  return regions.map((r) => r.slug);
}
