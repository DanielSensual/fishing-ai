import Link from "next/link";
import type { Metadata } from "next";

import AnimationProvider from "../components/AnimationProvider";

export const metadata: Metadata = {
  title: "Fishing Gear Store — Recommended Tackle",
  description:
    "Field-tested tackle recommendations for Florida saltwater fishing. Rods, reels, rigs, baits, and accessories that actually work — curated by anglers, not algorithms.",
  openGraph: {
    title: "Fishing Gear Store | Bite Atlas",
    description:
      "Curated tackle recommendations for Florida saltwater fishing. Every item is field-tested.",
  },
};

import { gearCategories } from "@/lib/gear";

export default function GearStorePage() {
  return (
    <main className="detail-shell">
      <AnimationProvider />

      <div className="detail-shell__topline">
        <Link href="/">← Back to dashboard</Link>
      </div>

      <section className="detail-hero" data-animate>
        <div>
          <span className="eyebrow">Tackle Shop</span>
          <h1>Recommended Gear</h1>
          <p>
            Field-tested tackle recommendations for Florida saltwater fishing.
            Every item on this page has caught fish in Florida waters — no filler,
            no influencer deals, just gear that works.
          </p>
          <small style={{ opacity: 0.5, display: "block", marginTop: "0.5rem" }}>
            Links support Bite Atlas through the Amazon Associates program at no extra cost to you.
          </small>
        </div>
      </section>

      {/* Category nav */}
      <nav className="gear-nav" data-animate>
        {gearCategories.map((cat) => (
          <a key={cat.id} href={`#${cat.id}`} className="gear-nav__link">
            <span>{cat.icon}</span>
            <span>{cat.name}</span>
          </a>
        ))}
      </nav>

      {/* Gear sections */}
      {gearCategories.map((category) => (
        <section key={category.id} id={category.id} className="gear-section" data-animate>
          <h2 className="gear-section__title">
            <span>{category.icon}</span> {category.name}
          </h2>
          <div className="gear-grid">
            {category.items.map((item) => (
              <article key={item.name} className="gear-card">
                <div className="gear-card__body">
                  <span className="eyebrow">{item.category}</span>
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                  <div className="gear-card__tags">
                    {item.bestFor.map((tag) => (
                      <span key={tag} className="gear-tag">{tag}</span>
                    ))}
                  </div>
                </div>
                <div className="gear-card__footer">
                  <span className="gear-card__price">{item.price}</span>
                  <a
                    href={item.amazonUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="gear-card__buy"
                  >
                    View on Amazon →
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>
      ))}
    </main>
  );
}
