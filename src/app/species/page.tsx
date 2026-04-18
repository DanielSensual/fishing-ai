import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

import { speciesCatalog } from "@/lib/spots";
import type { SpeciesKey } from "@/lib/types";
import AnimationProvider from "../components/AnimationProvider";

export const metadata: Metadata = {
  title: "Florida Fishing Species Guide",
  description:
    "Complete species guide for Florida saltwater fishing — 14 species with FWC regulations, seasonal patterns, tackle recommendations, and where to find them across 6 regions.",
  openGraph: {
    title: "Florida Fishing Species Guide | Bite Atlas",
    description:
      "14 saltwater species with regulations, best months, rigs, and tactics. From snook to tarpon, pompano to cobia.",
  },
};

const MONTH_NAMES = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
];

function speciesImageExists(key: string): boolean {
  const knownImages = [
    "snook", "pompano", "whiting", "black-drum", "sheepshead", "redfish",
    "seatrout", "tarpon", "mangrove-snapper", "jack-crevalle", "flounder",
    "spanish-mackerel", "cobia", "tripletail",
  ];
  return knownImages.includes(key);
}

export default function SpeciesIndexPage() {
  const speciesEntries = Object.values(speciesCatalog);

  return (
    <main className="detail-shell">
      <AnimationProvider />

      <div className="detail-shell__topline">
        <Link href="/">← Back to dashboard</Link>
      </div>

      <section className="detail-hero" data-animate>
        <div>
          <span className="eyebrow">Species Intelligence</span>
          <h1>Florida Fishing Species Guide</h1>
          <p>
            14 saltwater species across 6 Florida regions — FWC regulations,
            seasonal peaks, recommended rigs, and which spots to target.
          </p>
        </div>
      </section>

      <section className="species-index-grid" data-animate>
        {speciesEntries.map((species) => (
          <Link
            key={species.key}
            href={`/species/${species.key}`}
            className="species-index-card"
            style={{ "--species-accent": species.accent } as React.CSSProperties}
          >
            {speciesImageExists(species.key) && (
              <div className="species-index-card__image">
                <Image
                  src={`/images/species/${species.key}.png`}
                  alt={species.name}
                  width={400}
                  height={250}
                  style={{ width: "100%", height: "auto", objectFit: "cover", borderRadius: "var(--radius-lg) var(--radius-lg) 0 0" }}
                />
              </div>
            )}
            <div className="species-index-card__body">
              <h2>{species.name}</h2>
              <p className="species-index-card__tactic">{species.tactic}</p>
              <div className="species-index-card__meta">
                <span className="species-index-card__temp">
                  {species.idealWaterTempRangeF[0]}–{species.idealWaterTempRangeF[1]}°F
                </span>
                <span className="species-index-card__months">
                  {species.months.map((m) => MONTH_NAMES[m - 1]).join(" · ")}
                </span>
              </div>
              <small className="species-index-card__legal">{species.legalNote}</small>
            </div>
          </Link>
        ))}
      </section>
    </main>
  );
}
