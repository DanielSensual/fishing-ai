import type { Metadata } from "next";
import Link from "next/link";
import AnimationProvider from "../components/AnimationProvider";
import LogbookClient from "./LogbookClient";
import { spots } from "@/lib/spots";

export const metadata: Metadata = {
  title: "Personal Logbook",
  description:
    "Your private fishing logbook — log trips, track catches, and discover patterns from your own fishing data across Florida.",
  openGraph: {
    title: "Personal Logbook | Bite Atlas",
    description:
      "Log trips, track catches, and discover your personal fishing patterns.",
  },
};

export default function LogbookPage() {
  const spotList = spots.map((s) => ({
    slug: s.slug,
    name: s.name,
    region: s.region,
  }));

  return (
    <main className="detail-shell">
      <AnimationProvider />

      <div className="detail-shell__topline">
        <Link href="/">← Back to dashboard</Link>
      </div>

      <section className="detail-hero" data-animate>
        <div>
          <span className="eyebrow">Personal Intelligence</span>
          <h1>Logbook</h1>
          <p>
            Log every trip. Track what worked. The patterns your logbook
            extracts will be more valuable than any forecast — because
            they&apos;re built from your water, your spots, your tactics.
          </p>
        </div>
      </section>

      <LogbookClient spots={spotList} />
    </main>
  );
}
