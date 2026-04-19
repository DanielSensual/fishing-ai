import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

import {
  formatDashboardTimestamp,
  getDashboardData,
  getSpeciesByKey,
  getSpotBySlug,
} from "@/lib/fishing-data";
import { getRegionBySlug } from "@/lib/regions";
import AnimationProvider from "../../components/AnimationProvider";
import ScoreArc from "../../components/ScoreArc";
import MapWrapper from "../../components/MapWrapper";
import GearRecommendations from "../../components/GearRecommendations";
import TideChart from "../../components/TideChart";
import MoonPhase from "../../components/MoonPhase";

export const revalidate = 1800;

type SpotPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: SpotPageProps): Promise<Metadata> {
  const { slug } = await params;
  const spot = getSpotBySlug(slug);
  if (!spot) return {};

  const region = getRegionBySlug(spot.region);
  const speciesNames = spot.primarySpecies.slice(0, 4).map((k) => {
    const s = getSpeciesByKey(k);
    return s.name;
  }).join(", ");

  return {
    title: `${spot.name} — ${spot.area} Fishing`,
    description: `${spot.summary.slice(0, 155)}... Target species: ${speciesNames}. Live conditions, access info, and detailed tactics.`,
    openGraph: {
      title: `${spot.name} | Bite Atlas`,
      description: `Fishing intelligence for ${spot.name} in ${region?.name ?? spot.area}. ${spot.type} spot with ${spot.tactics.length} detailed tactics.`,
      images: [`/images/spots/${spot.slug}.png`],
    },
  };
}

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

function spotImageExists(slug: string): boolean {
  const knownImages = [
    "jetty-park-pier", "cocoa-beach-surf", "port-canaveral-channel-edge", "playalinda-north-beaches",
    "sebastian-inlet", "mosquito-lagoon", "skyway-fishing-pier",
    "ponce-inlet-jetty", "jupiter-inlet", "fort-de-soto-park",
    "mayport-jetties", "jacksonville-beach-pier", "fort-pierce-inlet",
    "new-smyrna-beach-surf", "daytona-beach-pier", "gandy-bridge",
    "indian-river-melbourne", "lake-worth-pier",
  ];
  return knownImages.includes(slug);
}

export default async function SpotPage({ params }: SpotPageProps) {
  const { slug } = await params;
  const spot = getSpotBySlug(slug);

  if (!spot) {
    notFound();
  }

  const dashboard = await getDashboardData(spot.region);
  const spotScore = dashboard.spotScores.find(
    (entry) => entry.spot.slug === slug
  );

  if (!spotScore) {
    notFound();
  }

  const currentWaterTempF = dashboard.conditions.currentWaterTempF;
  const nearshoreWaveHeightFt =
    dashboard.conditions.nearshoreBuoy?.waveHeightFt;
  const currentWindDirection = dashboard.conditions.currentWindDirection;
  const currentWindSpeedMph = dashboard.conditions.currentWindSpeedMph;

  const mapSpots = [
    {
      slug: spot.slug,
      name: spot.name,
      area: spot.area,
      score: spotScore.score,
      tone: spotScore.tone,
      bestWindow: spotScore.bestWindow,
      summary: spotScore.summary,
      lat: spot.coordinates.lat,
      lng: spot.coordinates.lng,
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TouristAttraction",
    name: spot.name,
    description: spot.summary,
    geo: {
      "@type": "GeoCoordinates",
      latitude: spot.coordinates.lat,
      longitude: spot.coordinates.lng,
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: spot.area,
      addressRegion: "FL",
      addressCountry: "US",
    },
    touristType: "Fishing",
    isAccessibleForFree: false,
  };

  return (
    <main className="detail-shell">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AnimationProvider />

      <div className="detail-shell__topline">
        <Link href={spot.region === "space-coast" ? "/" : `/region/${spot.region}`}>← Back to dashboard</Link>
        <small>
          Updated{" "}
          {formatDashboardTimestamp(dashboard.conditions.generatedAt)}
        </small>
      </div>

      {spotImageExists(spot.slug) && (
        <div className="detail-hero__banner" data-animate>
          <Image
            src={`/images/spots/${spot.slug}.png`}
            alt={spot.name}
            width={1200}
            height={500}
            priority
            style={{ width: '100%', height: 'auto', borderRadius: 'var(--radius-xl)', objectFit: 'cover', maxHeight: '320px' }}
          />
        </div>
      )}

      <section className="detail-hero" data-animate>
        <div>
          <span className="eyebrow">{spot.area}</span>
          <h1>{spot.name}</h1>
          <p>{spot.summary}</p>
        </div>
        <div className="detail-hero__signal">
          <ScoreArc score={spotScore.score} tone={spotScore.tone} size={80} />
          <ToneChip tone={spotScore.tone}>
            <span className="live-pulse" />
            {spotScore.score}
          </ToneChip>
          <strong>{spotScore.bestWindow}</strong>
          <small>{spotScore.summary}</small>
        </div>
      </section>

      {/* Mini map zoomed to this spot */}
      <section className="section" data-animate>
        <MapWrapper
          spots={mapSpots}
          center={[spot.coordinates.lng, spot.coordinates.lat]}
          zoom={14}
        />
      </section>

      {/* Tide Chart + Moon Phase */}
      <section className="tide-moon-row" data-animate>
        <TideChart
          curve={dashboard.tideCurve.map((p) => ({ time: p.time, heightFt: p.heightFt }))}
          events={dashboard.tides.map((t) => ({
            time: t.time.toISOString(),
            heightFt: t.heightFt,
            type: t.type,
            label: t.localTimeLabel,
          }))}
          now={new Date().toISOString()}
          sunrise={dashboard.conditions.sunrise?.toISOString()}
          sunset={dashboard.conditions.sunset?.toISOString()}
        />
        <MoonPhase />
      </section>

      <section className="detail-grid" data-animate>
        <article className="detail-card">
          <span className="eyebrow">Why it scores this way</span>
          <h2>Current read</h2>
          <ul className="bullet-list">
            {spotScore.reasons.map((reason) => (
              <li key={reason}>{reason}</li>
            ))}
          </ul>
        </article>

        <article className="detail-card">
          <span className="eyebrow">Access</span>
          <h2>Before you go</h2>
          <ul className="bullet-list">
            {spot.access.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>

        <article className="detail-card">
          <span className="eyebrow">Why this spot</span>
          <h2>Highlights</h2>
          <ul className="bullet-list">
            {spot.highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>

        <article className="detail-card">
          <span className="eyebrow">Hazards</span>
          <h2>Trip friction</h2>
          <ul className="bullet-list">
            {spot.caution.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>

        <article className="detail-card">
          <span className="eyebrow">Hot setups</span>
          <h2>Hooks, baits, and lanes</h2>
          <div className="stack-list">
            {spot.tactics.map((tactic) => (
              <div key={tactic.title}>
                <strong>{tactic.title}</strong>
                <p>{tactic.detail}</p>
              </div>
            ))}
          </div>
        </article>

        {/* Affiliate Gear Injection */}
        <GearRecommendations keywords={[spot.type, ...spot.primarySpecies]} limit={2} />

        <article className="detail-card">
          <span className="eyebrow">Live conditions</span>
          <h2>What the feeds say</h2>
          <dl className="species-card__details">
            <div>
              <dt>Water</dt>
              <dd>
                {currentWaterTempF !== null
                  ? `${currentWaterTempF.toFixed(1)}°F`
                  : "Unavailable"}
              </dd>
            </div>
            <div>
              <dt>Nearshore wave</dt>
              <dd>
                {typeof nearshoreWaveHeightFt === "number"
                  ? `${nearshoreWaveHeightFt.toFixed(1)} ft`
                  : "Unavailable"}
              </dd>
            </div>
            <div>
              <dt>Wind</dt>
              <dd>
                {currentWindDirection && currentWindSpeedMph !== null
                  ? `${currentWindDirection} ${currentWindSpeedMph} mph`
                  : "Unavailable"}
              </dd>
            </div>
            <div>
              <dt>Tide stage</dt>
              <dd>{dashboard.conditions.tideStage}</dd>
            </div>
          </dl>
        </article>

        <article className="detail-card">
          <span className="eyebrow">Target species</span>
          <h2>Best fits here</h2>
          <div className="stack-list">
            {spot.primarySpecies.map((key) => {
              const species = getSpeciesByKey(key);
              return (
                <div key={species.key}>
                  <strong>
                    <Link href={`/species/${species.key}`} style={{ color: "var(--c-teal)" }}>
                      {species.name}
                    </Link>
                  </strong>
                  <p>{species.tactic}</p>
                  <small>{species.legalNote}</small>
                </div>
              );
            })}
          </div>
        </article>
      </section>
    </main>
  );
}
