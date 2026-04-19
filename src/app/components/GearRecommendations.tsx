import { getRecommendedGear } from "@/lib/gear";

interface GearRecommendationsProps {
  keywords: string[];
  limit?: number;
}

export default function GearRecommendations({ keywords, limit = 2 }: GearRecommendationsProps) {
  const items = getRecommendedGear(keywords, limit);

  if (!items || items.length === 0) return null;

  return (
    <article className="detail-card">
      <span className="eyebrow">Tackle Shop</span>
      <h2>Recommended Gear</h2>
      <p style={{ opacity: 0.8, marginBottom: "1.5rem" }}>
        Captain-approved tackle that produces in these specific conditions.
      </p>

      <div className="gear-grid" style={{ gridTemplateColumns: "1fr", gap: "1rem" }}>
        {items.map((item) => (
          <div key={item.name} className="gear-card" style={{ padding: "1.25rem", margin: 0 }}>
            <div className="gear-card__body">
              <span className="eyebrow">{item.category}</span>
              <h3 style={{ fontSize: "1.1rem" }}>{item.name}</h3>
              <p style={{ fontSize: "0.9rem", lineHeight: 1.4 }}>{item.description}</p>
            </div>
            <div className="gear-card__footer" style={{ marginTop: "1rem", paddingTop: "1rem" }}>
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
          </div>
        ))}
      </div>
    </article>
  );
}
