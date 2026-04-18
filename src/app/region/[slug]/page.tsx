import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";

import {
  formatDashboardTimestamp,
  getDashboardData,
  getSpeciesByKey,
  getSpotBySlug,
} from "@/lib/fishing-data";
import { regions, getRegionBySlug } from "@/lib/regions";
import { getBaitShopsByRegion } from "@/lib/bait-shops";
import AnimationProvider from "../../components/AnimationProvider";
import ScoreArc from "../../components/ScoreArc";
import MapWrapper from "../../components/MapWrapper";

export const dynamic = "force-dynamic";

type RegionPageProps = {
  params: Promise<{ slug: string }>;
};

function ToneChip({
  tone,
  children,
}: {
  tone: "go" | "window" | "hold";
  children: React.ReactNode;
}) {
  return (
    <span className="tone-chip" data-tone={tone}>
      {children}
    </span>
  );
}

function ConditionStat({
  label,
  value,
  helper,
}: {
  label: string;
  value: string;
  helper?: string;
}) {
  return (
    <article className="condition-stat">
      <span className="eyebrow">{label}</span>
      <strong>{value}</strong>
      {helper ? <small>{helper}</small> : null}
    </article>
  );
}

function spotImageExists(slug: string): boolean {
  const knownImages = [
    "jetty-park-pier", "cocoa-beach-surf", "port-canaveral-channel-edge", "playalinda-north-beaches",
    "sebastian-inlet", "mosquito-lagoon", "skyway-fishing-pier",
    "ponce-inlet-jetty", "jupiter-inlet", "fort-de-soto-park",
    "mayport-jetties", "jacksonville-beach-pier", "fort-pierce-inlet",
  ];
  return knownImages.includes(slug);
}

function speciesImageExists(key: string): boolean {
  const knownImages = [
    "snook", "pompano", "whiting", "black-drum", "sheepshead", "redfish",
    "seatrout", "tarpon", "mangrove-snapper", "jack-crevalle", "flounder",
    "spanish-mackerel", "cobia", "tripletail",
  ];
  return knownImages.includes(key);
}

export default async function RegionPage({ params }: RegionPageProps) {
  const { slug } = await params;
  const region = getRegionBySlug(slug);
  
  if (!region) {
    notFound();
  }

  const dashboard = await getDashboardData(slug);
  const baitShops = getBaitShopsByRegion(slug);
  const topSpecies = dashboard.speciesOutlook.slice(0, 8);
  const topSpotSlug = dashboard.overview.topSpot?.spot.slug;
  const topSpot = topSpotSlug ? getSpotBySlug(topSpotSlug) : undefined;
  const currentWaterTempF = dashboard.conditions.currentWaterTempF;
  const nearshoreWaveHeightFt =
    dashboard.conditions.nearshoreBuoy?.waveHeightFt;
  const nearshoreDominantPeriod =
    dashboard.conditions.nearshoreBuoy?.dominantPeriodSec;
  const currentWindDirection = dashboard.conditions.currentWindDirection;
  const currentWindSpeedMph = dashboard.conditions.currentWindSpeedMph;

  const mapSpots = dashboard.spotScores.map((entry) => ({
    slug: entry.spot.slug,
    name: entry.spot.name,
    area: entry.spot.area,
    score: entry.score,
    tone: entry.tone,
    bestWindow: entry.bestWindow,
    summary: entry.summary,
    lat: entry.spot.coordinates.lat,
    lng: entry.spot.coordinates.lng,
  }));

  return (
    <main className="page-shell">
      <AnimationProvider />

      {/* ─── Hero ─── */}
      <section className="hero">
        <div className="hero__topline">
          <div>
            <span className="eyebrow">{region.name} command deck</span>
            <h1>Fishing AI</h1>
          </div>
          <nav className="hero__nav" aria-label="Primary">
            <a href="#map">Map</a>
            <a href="#spots">Spots</a>
            <a href="#species">Species</a>
            <a href="#bait-shops">Bait shops</a>
            <a href="#rules">Rules</a>
          </nav>
        </div>

        {/* ── Region Selector ── */}
        <nav className="region-selector" aria-label="Select fishing region">
          {regions.map((r) => (
            <Link
              key={r.slug}
              href={r.slug === "space-coast" ? "/" : `/region/${r.slug}`}
              className={`region-pill${r.slug === slug ? " region-pill--active" : ""}`}
            >
              {r.shortName}
            </Link>
          ))}
        </nav>

        <div className="hero__grid">
          <article className="signal-card signal-card--primary">
            <div className="signal-card__header">
              <ToneChip tone={dashboard.overview.topSpot?.tone ?? "hold"}>
                <span className="live-pulse" />
                {dashboard.overview.status}
              </ToneChip>
              <small>
                Updated{" "}
                {formatDashboardTimestamp(dashboard.conditions.generatedAt)}
              </small>
            </div>
            <h2>{dashboard.overview.headline}</h2>
            <p>{dashboard.overview.summary}</p>
            {topSpot ? (
              <div className="signal-card__cta">
                <Link href={`/spots/${topSpot.slug}`}>
                  Open {topSpot.name}
                </Link>
                <span>{dashboard.overview.topSpot?.bestWindow}</span>
              </div>
            ) : null}
          </article>

          <div className="signal-card signal-card--stack">
            <ConditionStat
              label="Water"
              value={
                currentWaterTempF !== null
                  ? `${currentWaterTempF.toFixed(1)}°F`
                  : "Unavailable"
              }
              helper={`NOAA Station ${region.waterTempStation}`}
            />
            <ConditionStat
              label="Nearshore wave"
              value={
                typeof nearshoreWaveHeightFt === "number"
                  ? `${nearshoreWaveHeightFt.toFixed(1)} ft`
                  : "Unavailable"
              }
              helper={
                typeof nearshoreDominantPeriod === "number"
                  ? `${nearshoreDominantPeriod}s period`
                  : region.buoyNearshore ? `NDBC ${region.buoyNearshore}` : "No buoy"
              }
            />
            <ConditionStat
              label="Wind"
              value={
                currentWindDirection && currentWindSpeedMph !== null
                  ? `${currentWindDirection} ${currentWindSpeedMph} mph`
                  : "Unavailable"
              }
              helper={dashboard.conditions.currentForecast ?? "NWS hourly"}
            />
            <ConditionStat
              label="Tide"
              value={dashboard.conditions.tideStage}
              helper={
                dashboard.conditions.nextTide
                  ? `Next ${
                      dashboard.conditions.nextTide.type === "H"
                        ? "high"
                        : "low"
                    } ${dashboard.conditions.nextTide.localTimeLabel}`
                  : "NOAA tides"
              }
            />
          </div>
        </div>

        <div className="metric-ribbon">
          <div>
            <span className="eyebrow">Surf call</span>
            <strong>
              {dashboard.conditions.surf?.ripCurrentRisk ?? "Unavailable"}
            </strong>
            <small>
              {dashboard.conditions.surf?.surfHeight ??
                "NWS surf feed unavailable"}
            </small>
          </div>
          <div>
            <span className="eyebrow">Sunrise / sunset</span>
            <strong>
              {dashboard.conditions.sunrise
                ? `${formatDashboardTimestamp(dashboard.conditions.sunrise)}`
                : "Unavailable"}
            </strong>
            <small>
              {dashboard.conditions.sunset
                ? `Sunset ${formatDashboardTimestamp(
                    dashboard.conditions.sunset
                  )}`
                : "Astronomy feed unavailable"}
            </small>
          </div>
          <div>
            <span className="eyebrow">Marine alerts</span>
            <strong>
              {dashboard.conditions.activeAlerts.length
                ? dashboard.conditions.activeAlerts.join(", ")
                : "None active"}
            </strong>
            <small>{region.marineZone} watchlist</small>
          </div>
        </div>
      </section>

      {/* ─── Interactive Map ─── */}
      <section className="section" id="map" data-animate>
        <div className="section__head">
          <div>
            <span className="eyebrow">Live intelligence map</span>
            <h2>Where to fish first</h2>
          </div>
          <p>
            Markers pulse with the live score. Green means go, amber means
            window, red means hold. Click any marker for the full read.
          </p>
        </div>

        <div className="map-layout">
          <MapWrapper spots={mapSpots} />

          <aside className="map-sidebar">
            <h3>Live notes</h3>
            <ul className="bullet-list">
              <li>
                Scores update with every page load using live NOAA data for {region.name}.
              </li>
              <li>
                Each spot is scored based on local tide, water temp, wind, waves, and species windows.
              </li>
              <li>
                Tap any marker on the map for the full read and best window.
              </li>
            </ul>
            <div className="inline-source">
              <span className="eyebrow">Right now</span>
              <strong>
                {dashboard.conditions.currentForecast ?? "Forecast unavailable"}
              </strong>
              <small>
                {dashboard.conditions.marineForecast[0]?.summary ??
                  "Marine text unavailable"}
              </small>
            </div>
          </aside>
        </div>
      </section>

      {/* ─── Spot Board ─── */}
      <section className="section" id="spots" data-animate>
        <div className="section__head">
          <div>
            <span className="eyebrow">Spot board</span>
            <h2>Live score by location</h2>
          </div>
          <p>
            Decision layer for {region.name}: score, next window, why it is
            working, and where the friction is.
          </p>
        </div>

        <div className="card-grid" data-animate-stagger>
          {dashboard.spotScores.map((entry) => (
            <article className="spot-card" key={entry.spot.slug}>
              {spotImageExists(entry.spot.slug) && (
                <div className="spot-card__image">
                  <Image
                    src={`/images/spots/${entry.spot.slug}.png`}
                    alt={entry.spot.name}
                    width={600}
                    height={340}
                    style={{ width: '100%', height: 'auto', borderRadius: 'var(--radius-lg) var(--radius-lg) 0 0', objectFit: 'cover', maxHeight: '200px' }}
                  />
                </div>
              )}
              <div className="spot-card__header">
                <div>
                  <span className="eyebrow">{entry.spot.area}</span>
                  <h3>{entry.spot.name}</h3>
                </div>
                <ScoreArc score={entry.score} tone={entry.tone} />
              </div>
              <p>{entry.spot.summary}</p>
              <p className="spot-card__summary">{entry.summary}</p>
              <div className="spot-card__meta">
                <span>{entry.spot.type}</span>
                <span>{entry.bestWindow}</span>
              </div>
              <ul className="bullet-list">
                {entry.reasons.slice(0, 3).map((reason) => (
                  <li key={reason}>{reason}</li>
                ))}
              </ul>
              <div className="tag-row">
                {entry.spot.primarySpecies.map((speciesKey) => {
                  const species = getSpeciesByKey(speciesKey);
                  return (
                    <span className="tag" key={species.key}>
                      {species.shortLabel}
                    </span>
                  );
                })}
              </div>
              <Link className="spot-card__link" href={`/spots/${entry.spot.slug}`}>
                Open spot page →
              </Link>
            </article>
          ))}
        </div>
      </section>

      {/* ─── Species ─── */}
      <section className="section" id="species" data-animate>
        <div className="section__head">
          <div>
            <span className="eyebrow">Species + tactics</span>
            <h2>What is worth targeting</h2>
          </div>
          <p>
            The score leans on live conditions for {region.name}. The tactic text leans on
            regional heuristics, not generic national app copy.
          </p>
        </div>

        <div className="card-grid card-grid--species" data-animate-stagger>
          {topSpecies.map((entry) => (
            <article className="species-card" key={entry.species.key}>
              {speciesImageExists(entry.species.key) && (
                <div className="species-card__image">
                  <Image
                    src={`/images/species/${entry.species.key}.png`}
                    alt={entry.species.name}
                    width={600}
                    height={340}
                    style={{ width: '100%', height: 'auto', borderRadius: 'var(--radius-lg) var(--radius-lg) 0 0', objectFit: 'cover', maxHeight: '180px' }}
                  />
                </div>
              )}
              <div className="species-card__header">
                <div>
                  <span className="eyebrow">
                    Best spot: {entry.topSpotName}
                  </span>
                  <h3>{entry.species.name}</h3>
                </div>
                <ScoreArc score={entry.score} tone={entry.tone} />
              </div>
              <p>{entry.summary}</p>
              <dl className="species-card__details">
                <div>
                  <dt>Rig</dt>
                  <dd>{entry.species.rig}</dd>
                </div>
                <div>
                  <dt>Bait</dt>
                  <dd>{entry.species.bait}</dd>
                </div>
                <div>
                  <dt>Tactic</dt>
                  <dd>{entry.species.tactic}</dd>
                </div>
                <div>
                  <dt>Rule note</dt>
                  <dd>{entry.species.legalNote}</dd>
                </div>
              </dl>
            </article>
          ))}
        </div>
      </section>

      {/* ─── Bait Shops ─── */}
      <section className="section" id="bait-shops" data-animate>
        <div className="section__head">
          <div>
            <span className="eyebrow">Bait shops + hours</span>
            <h2>Where to gear up</h2>
          </div>
          <p>
            Real hours, real phone numbers for {region.name}. Call ahead for live bait
            availability — it changes with the tide.
          </p>
        </div>

        <div className="card-grid card-grid--shops" data-animate-stagger>
          {baitShops.map((shop) => (
            <article className="shop-card" key={shop.name}>
              <div className="shop-card__header">
                <h3>{shop.name}</h3>
                <span className="shop-card__hours">{shop.hours}</span>
              </div>
              <address className="shop-card__address">{shop.address}</address>
              <a className="shop-card__phone" href={`tel:${shop.phone.replace(/[^\d+]/g, "")}`}>
                {shop.phone}
              </a>
              <div className="tag-row">
                {shop.carries.slice(0, 4).map((item) => (
                  <span className="tag" key={item}>{item}</span>
                ))}
              </div>
              {shop.mapsUrl ? (
                <a
                  className="shop-card__link"
                  href={shop.mapsUrl}
                  rel="noreferrer"
                  target="_blank"
                >
                  Open in Maps →
                </a>
              ) : null}
            </article>
          ))}
        </div>
      </section>

      {/* ─── Rules ─── */}
      <section className="section" id="rules" data-animate>
        <div className="section__head">
          <div>
            <span className="eyebrow">Rules + sources</span>
            <h2>What can change the trip</h2>
          </div>
          <p>
            This is a trip-planning surface, not a legal substitute. Every rule
            card links back to the source it was built from.
          </p>
        </div>

        <div className="rules-layout">
          <div className="rule-grid" data-animate-stagger>
            {dashboard.rules.map((rule) => (
              <article className="rule-card" key={rule.title}>
                <span className="eyebrow">{rule.source}</span>
                <h3>{rule.title}</h3>
                <p>{rule.summary}</p>
                <a href={rule.href} rel="noreferrer" target="_blank">
                  Open source →
                </a>
              </article>
            ))}
          </div>

          <aside className="sources-panel">
            <span className="eyebrow">Live feeds in use</span>
            <h3>Source stack</h3>
            <ul className="bullet-list">
              {dashboard.sources.map((source) => (
                <li key={source.href}>
                  <a href={source.href} rel="noreferrer" target="_blank">
                    {source.label}
                  </a>
                </li>
              ))}
            </ul>
            <p>
              Official NOAA data + regional heuristics for {region.name}.
            </p>
          </aside>
        </div>
      </section>
    </main>
  );
}
