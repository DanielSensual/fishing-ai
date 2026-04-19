import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for Bite Atlas — Florida fishing intelligence.",
};

export default function PrivacyPage() {
  return (
    <main className="page-shell" style={{ maxWidth: 880, margin: "0 auto", padding: "4rem 1.5rem 6rem" }}>
      <div style={{ marginBottom: "2rem" }}>
        <span className="eyebrow">Privacy Policy</span>
        <h1 style={{ marginTop: "0.25rem" }}>Bite Atlas</h1>
        <p style={{ color: "var(--ink-soft)", maxWidth: 720 }}>
          Bite Atlas is a Florida fishing intelligence app. This page explains
          what data the app uses and how it is handled.
        </p>
        <p style={{ fontSize: "0.8rem", color: "var(--ink-muted)" }}>
          Last updated: April 19, 2026
        </p>
      </div>

      <section style={{ marginBottom: "2rem" }}>
        <h2>Data we use</h2>
        <ul style={{ paddingLeft: "1.25rem", lineHeight: 1.8, color: "var(--ink-soft)" }}>
          <li>
            <strong style={{ color: "var(--ink)" }}>Location:</strong> used to show local fishing conditions,
            nearby spots, tides, and regional guidance.
          </li>
          <li>
            <strong style={{ color: "var(--ink)" }}>Photos and camera access:</strong> used only when you choose
            to take or upload fishing photos.
          </li>
          <li>
            <strong style={{ color: "var(--ink)" }}>App interactions and diagnostics:</strong> used for basic
            product analytics, crash troubleshooting, and performance
            improvement.
          </li>
          <li>
            <strong style={{ color: "var(--ink)" }}>Chat questions:</strong> messages you send to the Captain
            AI are processed to return fishing advice. Messages are not stored
            permanently.
          </li>
        </ul>
      </section>

      <section style={{ marginBottom: "2rem" }}>
        <h2>How data is used</h2>
        <ul style={{ paddingLeft: "1.25rem", lineHeight: 1.8, color: "var(--ink-soft)" }}>
          <li>To provide live fishing conditions and recommendations.</li>
          <li>To generate AI responses when you use the Captain chat.</li>
          <li>To improve app reliability and diagnose crashes.</li>
          <li>To display relevant content, spots, species, and gear.</li>
        </ul>
      </section>

      <section style={{ marginBottom: "2rem" }}>
        <h2>What we do not do</h2>
        <ul style={{ paddingLeft: "1.25rem", lineHeight: 1.8, color: "var(--ink-soft)" }}>
          <li>We do not sell your personal data.</li>
          <li>We do not collect sensitive data beyond what you choose to provide.</li>
          <li>We do not use photos or location for advertising or tracking.</li>
          <li>We do not share data with third-party ad networks.</li>
        </ul>
      </section>

      <section style={{ marginBottom: "2rem" }}>
        <h2>Third-party services</h2>
        <p style={{ color: "var(--ink-soft)", lineHeight: 1.7 }}>
          The app relies on third-party services to provide live weather,
          marine, and mapping data (NOAA, NWS, NDBC). These services may process requests needed
          to return the information you request. The app also uses Vercel
          Analytics for anonymized usage metrics and Google Gemini for AI chat responses.
        </p>
      </section>

      <section style={{ marginBottom: "2rem" }}>
        <h2>Data retention</h2>
        <p style={{ color: "var(--ink-soft)", lineHeight: 1.7 }}>
          Bite Atlas does not maintain user accounts or persistent user profiles.
          Chat messages are processed in real-time and are not stored after the
          session ends. Analytics data is anonymized and aggregated.
        </p>
      </section>

      <section>
        <h2>Contact</h2>
        <p style={{ color: "var(--ink-soft)", lineHeight: 1.7 }}>
          For questions about this privacy policy or the app, contact us at{" "}
          <a href="mailto:daniel@ghostaisystems.com" style={{ color: "var(--tidal-teal)" }}>
            daniel@ghostaisystems.com
          </a>
          {" "}or visit{" "}
          <a href="https://fishing-ai-nine.vercel.app" style={{ color: "var(--tidal-teal)" }}>
            fishing-ai-nine.vercel.app
          </a>.
        </p>
      </section>
    </main>
  );
}
