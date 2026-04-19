import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { speciesCatalog, spots } from "@/lib/spots";
import { getRegionBySlug } from "@/lib/regions";
import type { SpeciesKey } from "@/lib/types";
import AnimationProvider from "../../components/AnimationProvider";
import GearRecommendations from "../../components/GearRecommendations";

type SpeciesPageProps = {
  params: Promise<{ slug: string }>;
};

const MONTH_NAMES_FULL = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

function isValidSpeciesKey(slug: string): slug is SpeciesKey {
  return slug in speciesCatalog;
}

export async function generateMetadata({ params }: SpeciesPageProps): Promise<Metadata> {
  const { slug } = await params;
  if (!isValidSpeciesKey(slug)) return {};

  const species = speciesCatalog[slug];
  const peakMonths = species.months.slice(0, 3).map((m) => MONTH_NAMES_FULL[m - 1]).join(", ");

  return {
    title: `${species.name} — Florida Fishing Guide`,
    description: `How to catch ${species.name} in Florida — ${species.rig}. Best months: ${peakMonths}. ${species.legalNote}`,
    openGraph: {
      title: `${species.name} Fishing Guide | Bite Atlas`,
      description: `Complete ${species.name} tactics, regulations, and where to find them across Florida.`,
      images: [`/images/species/${species.key}.png`],
    },
  };
}

export default async function SpeciesDetailPage({ params }: SpeciesPageProps) {
  const { slug } = await params;

  if (!isValidSpeciesKey(slug)) {
    notFound();
  }

  const species = speciesCatalog[slug];

  // Reverse-lookup: which spots have this species?
  const spotsWithSpecies = spots.filter((s) =>
    s.primarySpecies.includes(slug)
  );

  // Group spots by region
  const spotsByRegion = new Map<string, typeof spotsWithSpecies>();
  for (const spot of spotsWithSpecies) {
    const regionName = getRegionBySlug(spot.region)?.name ?? spot.region;
    if (!spotsByRegion.has(regionName)) {
      spotsByRegion.set(regionName, []);
    }
    spotsByRegion.get(regionName)!.push(spot);
  }

  // Collect all tactics that mention this species across all spots
  const relevantTactics: Array<{ spotName: string; spotSlug: string; title: string; detail: string }> = [];
  for (const spot of spotsWithSpecies) {
    for (const tactic of spot.tactics) {
      const titleLower = tactic.title.toLowerCase();
      const speciesTerms = [species.name.toLowerCase(), species.shortLabel.toLowerCase(), species.key.toLowerCase()];
      if (speciesTerms.some((term) => titleLower.includes(term))) {
        relevantTactics.push({
          spotName: spot.name,
          spotSlug: spot.slug,
          title: tactic.title,
          detail: tactic.detail,
        });
      }
    }
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    name: `${species.name} — Florida Fishing Guide`,
    description: species.tactic,
    about: {
      "@type": "Thing",
      name: species.name,
    },
  };

  return (
    <main className="detail-shell">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AnimationProvider />

      <div className="detail-shell__topline">
        <Link href="/species">← All species</Link>
      </div>

      {/* Hero */}
      <section className="species-detail-hero" data-animate>
        <div className="species-detail-hero__image">
          <Image
            src={`/images/species/${species.key}.png`}
            alt={species.name}
            width={600}
            height={400}
            priority
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "var(--radius-xl)",
              objectFit: "cover",
              maxHeight: "350px",
            }}
          />
        </div>
        <div className="species-detail-hero__info">
          <span className="eyebrow" style={{ color: species.accent }}>
            Species Guide
          </span>
          <h1>{species.name}</h1>
          <p className="species-detail-hero__tactic">{species.tactic}</p>
          <div className="species-detail-hero__badges">
            <span className="species-badge" style={{ borderColor: species.accent }}>
              {species.idealWaterTempRangeF[0]}–{species.idealWaterTempRangeF[1]}°F
            </span>
            <span className="species-badge" style={{ borderColor: species.accent }}>
              {spotsWithSpecies.length} spots
            </span>
          </div>
        </div>
      </section>

      <section className="detail-grid" data-animate>
        {/* Regulations card */}
        <article className="detail-card">
          <span className="eyebrow">FWC Regulations</span>
          <h2>Legal info</h2>
          <p>{species.legalNote}</p>
          <small style={{ opacity: 0.6 }}>
            Always verify current regulations at{" "}
            <a href="https://myfwc.com/fishing/saltwater/recreational/" target="_blank" rel="noopener noreferrer" style={{ color: "var(--c-teal)" }}>
              myfwc.com
            </a>{" "}
            before harvest.
          </small>
        </article>

        {/* Tackle card */}
        <article className="detail-card">
          <span className="eyebrow">Recommended Tackle</span>
          <h2>Rig &amp; bait</h2>
          <div className="stack-list">
            <div>
              <strong>Rig</strong>
              <p>{species.rig}</p>
            </div>
            <div>
              <strong>Bait</strong>
              <p>{species.bait}</p>
            </div>
          </div>
        </article>

        {/* Season card */}
        <article className="detail-card">
          <span className="eyebrow">Seasonal pattern</span>
          <h2>Best months</h2>
          <div className="species-month-grid">
            {Array.from({ length: 12 }, (_, i) => {
              const monthNum = i + 1;
              const isActive = species.months.includes(monthNum);
              return (
                <span
                  key={monthNum}
                  className={`species-month-cell ${isActive ? "species-month-cell--active" : ""}`}
                  style={isActive ? { backgroundColor: species.accent, color: "#fff" } : {}}
                >
                  {MONTH_NAMES_FULL[i].slice(0, 3)}
                </span>
              );
            })}
          </div>
        </article>

        {/* Regional spots card */}
        <article className="detail-card detail-card--col2">
          <span className="eyebrow">Where to find them</span>
          <h2>Top spots by region</h2>
          <div className="species-card__spots">
            {Array.from(spotsByRegion.entries()).map(([region, regionSpots]) => (
              <div key={region} className="species-card__region">
                <h3>{region}</h3>
                <div className="species-card__tags">
                  {regionSpots.map((s) => (
                    <Link key={s.slug} href={`/spots/${s.slug}`} className="spot-tag">
                      {s.name}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
            {spotsWithSpecies.length === 0 && (
              <p style={{ opacity: 0.6 }}>No prime spots mapped currently.</p>
            )}
          </div>
        </article>

        {/* Spot-specific tactics for this species */}
        {relevantTactics.length > 0 && (
          <article className="detail-card">
            <span className="eyebrow">Spot-specific tactics</span>
            <h2>How anglers target {species.shortLabel}</h2>
            <div className="stack-list">
              {relevantTactics.map((tactic) => (
                <div key={`${tactic.spotSlug}-${tactic.title}`}>
                  <strong>
                    <Link href={`/spots/${tactic.spotSlug}`} style={{ color: "var(--c-teal)" }}>
                      {tactic.spotName}
                    </Link>
                    {" — "}{tactic.title}
                  </strong>
                  <p>{tactic.detail}</p>
                </div>
              ))}
            </div>
          </article>
        )}
      </section>

      {/* Affiliate Gear Injection */}
      <section className="detail-grid" style={{ marginTop: "1rem", paddingBottom: "4rem" }} data-animate>
        <GearRecommendations keywords={[species.name, species.shortLabel]} limit={2} />
      </section>
    </main>
  );
}
