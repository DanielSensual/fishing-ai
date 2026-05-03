"use client";

import { useState } from "react";
import type { ConditionsSnapshot } from "@/lib/types";
import LogbookForm from "./LogbookForm";

interface LogbookButtonProps {
  spotSlug: string;
  spotName: string;
  region: string;
  conditions?: ConditionsSnapshot | null;
  spots: Array<{ slug: string; name: string; region: string }>;
}

export default function LogbookButton({
  spotSlug,
  spotName,
  region,
  conditions,
  spots,
}: LogbookButtonProps) {
  const [showForm, setShowForm] = useState(false);
  const [saved, setSaved] = useState(false);

  if (saved) {
    return (
      <div className="logbook-saved">
        <span>✓ Trip logged</span>
        <button onClick={() => { setSaved(false); setShowForm(false); }}>
          Log another
        </button>
      </div>
    );
  }

  if (showForm) {
    return (
      <LogbookForm
        spotSlug={spotSlug}
        spotName={spotName}
        region={region}
        conditions={conditions}
        spots={spots}
        onSaved={() => setSaved(true)}
        onCancel={() => setShowForm(false)}
      />
    );
  }

  return (
    <button
      className="logbook-cta"
      onClick={() => setShowForm(true)}
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" />
      </svg>
      Log this trip
    </button>
  );
}
