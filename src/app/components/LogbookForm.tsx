"use client";

import { useState, useCallback } from "react";
import type { SpeciesKey, ConditionsSnapshot } from "@/lib/types";
import { addTrip } from "@/lib/logbook";
import { speciesCatalog } from "@/lib/spots";

interface LogbookFormProps {
  /** Pre-fill spot when logging from a spot page */
  spotSlug?: string;
  spotName?: string;
  region?: string;
  /** Auto-captured live conditions */
  conditions?: ConditionsSnapshot | null;
  /** All available spots for the dropdown */
  spots: Array<{ slug: string; name: string; region: string }>;
  onSaved?: () => void;
  onCancel?: () => void;
}

const allSpecies = Object.values(speciesCatalog);

export default function LogbookForm({
  spotSlug,
  spotName,
  region,
  conditions,
  spots,
  onSaved,
  onCancel,
}: LogbookFormProps) {
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
  const [selectedSpot, setSelectedSpot] = useState(spotSlug ?? "");
  const [speciesTargeted, setSpeciesTargeted] = useState<SpeciesKey[]>([]);
  const [speciesCaught, setSpeciesCaught] = useState<SpeciesKey[]>([]);
  const [bait, setBait] = useState("");
  const [rig, setRig] = useState("");
  const [notes, setNotes] = useState("");
  const [rating, setRating] = useState(3);
  const [saving, setSaving] = useState(false);

  const toggleSpecies = useCallback(
    (key: SpeciesKey, list: "targeted" | "caught") => {
      const setter =
        list === "targeted" ? setSpeciesTargeted : setSpeciesCaught;
      setter((prev) =>
        prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]
      );
    },
    []
  );

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!selectedSpot || saving) return;

    setSaving(true);

    const spot = spots.find((s) => s.slug === selectedSpot);
    const skunk = speciesCaught.length === 0;

    addTrip({
      date,
      spotSlug: selectedSpot,
      spotName: spotName ?? spot?.name ?? selectedSpot,
      region: region ?? spot?.region ?? "",
      speciesTargeted,
      speciesCaught,
      bait,
      rig,
      notes,
      rating,
      skunk,
      conditions: conditions ?? null,
    });

    setSaving(false);
    onSaved?.();
  }

  return (
    <form className="logbook-form" onSubmit={handleSubmit}>
      <div className="logbook-form__header">
        <h3>Log a trip</h3>
        {onCancel && (
          <button
            type="button"
            className="logbook-form__close"
            onClick={onCancel}
          >
            ×
          </button>
        )}
      </div>

      <div className="logbook-form__row">
        <div className="logbook-form__field">
          <label className="eyebrow">Date</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>

        <div className="logbook-form__field">
          <label className="eyebrow">Spot</label>
          {spotSlug ? (
            <div className="logbook-form__locked">{spotName}</div>
          ) : (
            <select
              value={selectedSpot}
              onChange={(e) => setSelectedSpot(e.target.value)}
              required
            >
              <option value="">Select a spot...</option>
              {spots.map((s) => (
                <option key={s.slug} value={s.slug}>
                  {s.name}
                </option>
              ))}
            </select>
          )}
        </div>
      </div>

      <div className="logbook-form__field">
        <label className="eyebrow">Species targeted</label>
        <div className="logbook-form__species-grid">
          {allSpecies.map((sp) => (
            <button
              key={sp.key}
              type="button"
              className={`logbook-species-chip ${speciesTargeted.includes(sp.key) ? "logbook-species-chip--active" : ""}`}
              style={
                speciesTargeted.includes(sp.key)
                  ? { borderColor: sp.accent, color: sp.accent }
                  : undefined
              }
              onClick={() => toggleSpecies(sp.key, "targeted")}
            >
              {sp.shortLabel}
            </button>
          ))}
        </div>
      </div>

      <div className="logbook-form__field">
        <label className="eyebrow">Species caught</label>
        <div className="logbook-form__species-grid">
          {allSpecies.map((sp) => (
            <button
              key={sp.key}
              type="button"
              className={`logbook-species-chip ${speciesCaught.includes(sp.key) ? "logbook-species-chip--caught" : ""}`}
              style={
                speciesCaught.includes(sp.key)
                  ? {
                      borderColor: "var(--go)",
                      color: "var(--go)",
                      background: "rgba(34,201,137,0.12)",
                    }
                  : undefined
              }
              onClick={() => toggleSpecies(sp.key, "caught")}
            >
              {sp.shortLabel}
            </button>
          ))}
        </div>
        {speciesCaught.length === 0 && speciesTargeted.length > 0 && (
          <small className="logbook-form__skunk-hint">
            No species caught = skunk day. That data is valuable too.
          </small>
        )}
      </div>

      <div className="logbook-form__row">
        <div className="logbook-form__field">
          <label className="eyebrow">Bait / lure</label>
          <input
            type="text"
            value={bait}
            onChange={(e) => setBait(e.target.value)}
            placeholder="Live shrimp, Fishbites, paddletail..."
          />
        </div>
        <div className="logbook-form__field">
          <label className="eyebrow">Rig</label>
          <input
            type="text"
            value={rig}
            onChange={(e) => setRig(e.target.value)}
            placeholder="Double drop, Carolina, free-line..."
          />
        </div>
      </div>

      <div className="logbook-form__field">
        <label className="eyebrow">Notes</label>
        <textarea
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="What worked, what didn't, what you'd change next time..."
          rows={3}
        />
      </div>

      <div className="logbook-form__field">
        <label className="eyebrow">Rating</label>
        <div className="logbook-form__stars">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              type="button"
              className={`logbook-star ${star <= rating ? "logbook-star--active" : ""}`}
              onClick={() => setRating(star)}
            >
              ★
            </button>
          ))}
        </div>
      </div>

      {conditions && (
        <div className="logbook-form__conditions">
          <span className="eyebrow">Conditions (auto-captured)</span>
          <div className="logbook-form__conditions-grid">
            {conditions.waterTempF !== null && (
              <span>Water: {conditions.waterTempF.toFixed(1)}°F</span>
            )}
            {conditions.windDirection && conditions.windSpeedMph !== null && (
              <span>
                Wind: {conditions.windDirection} {conditions.windSpeedMph} mph
              </span>
            )}
            <span>Tide: {conditions.tideStage}</span>
            {conditions.waveHeightFt !== null && (
              <span>Wave: {conditions.waveHeightFt.toFixed(1)} ft</span>
            )}
          </div>
        </div>
      )}

      <button
        type="submit"
        className="logbook-form__submit"
        disabled={!selectedSpot || saving}
      >
        {saving ? "Saving..." : "Save trip"}
      </button>
    </form>
  );
}
