"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import type { TripLog, TripPattern, LogbookStats } from "@/lib/types";
import {
  getTrips,
  deleteTrip,
  getStats,
  getPatterns,
  exportTrips,
  importTrips,
} from "@/lib/logbook";
import { speciesCatalog } from "@/lib/spots";
import LogbookForm from "../components/LogbookForm";

interface LogbookClientProps {
  spots: Array<{ slug: string; name: string; region: string }>;
}

export default function LogbookClient({ spots }: LogbookClientProps) {
  const [trips, setTrips] = useState<TripLog[]>(() => getTrips());
  const [stats, setStats] = useState<LogbookStats | null>(() => getStats());
  const [patterns, setPatterns] = useState<TripPattern[]>(() => getPatterns());
  const [showForm, setShowForm] = useState(false);
  const [filter, setFilter] = useState<"all" | "catches" | "skunks">("all");

  const refresh = useCallback(() => {
    setTrips(getTrips());
    setStats(getStats());
    setPatterns(getPatterns());
  }, []);

  const filteredTrips = trips.filter((t) => {
    if (filter === "catches") return !t.skunk;
    if (filter === "skunks") return t.skunk;
    return true;
  });

  function handleDelete(id: string) {
    if (confirm("Delete this trip log?")) {
      deleteTrip(id);
      refresh();
    }
  }

  function handleExport() {
    const json = exportTrips();
    const blob = new Blob([json], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `bite-atlas-logbook-${new Date().toISOString().split("T")[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
  }

  function handleImport() {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = ".json";
    input.onchange = (e) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = () => {
        const count = importTrips(reader.result as string);
        if (count > 0) {
          refresh();
          alert(`Imported ${count} new trips.`);
        } else {
          alert("No new trips to import.");
        }
      };
      reader.readAsText(file);
    };
    input.click();
  }

  /* ── Empty State ── */
  if (trips.length === 0 && !showForm) {
    return (
      <section className="logbook-empty" data-animate>
        <div className="logbook-empty__icon">📓</div>
        <h2>No trips logged yet</h2>
        <p>
          Your logbook is empty. After your next trip, log the conditions, what
          you caught, and what worked — the system will start extracting patterns
          that no forecast can give you.
        </p>
        <div className="logbook-empty__actions">
          <button
            className="logbook-form__submit"
            onClick={() => setShowForm(true)}
          >
            Log your first trip
          </button>
          <button className="logbook-import-btn" onClick={handleImport}>
            Import backup
          </button>
        </div>
      </section>
    );
  }

  return (
    <>
      {/* ── Stats Bar ── */}
      {stats && stats.totalTrips > 0 && (
        <section className="metric-ribbon" data-animate>
          <div>
            <small className="eyebrow">Trips</small>
            <strong>{stats.totalTrips}</strong>
          </div>
          <div>
            <small className="eyebrow">Catch rate</small>
            <strong>
              {stats.totalTrips > 0
                ? Math.round(
                    (stats.totalCatches / stats.totalTrips) * 100
                  )
                : 0}
              %
            </strong>
          </div>
          <div>
            <small className="eyebrow">Avg rating</small>
            <strong>
              {"★".repeat(Math.round(stats.averageRating))}
              {"☆".repeat(5 - Math.round(stats.averageRating))}
            </strong>
          </div>
          {stats.topSpot && (
            <div>
              <small className="eyebrow">Top spot</small>
              <strong>{stats.topSpot.name}</strong>
            </div>
          )}
          {stats.topSpecies && (
            <div>
              <small className="eyebrow">Top species</small>
              <strong>{stats.topSpecies.name}</strong>
            </div>
          )}
          <div>
            <small className="eyebrow">Skunks</small>
            <strong>{stats.totalSkunks}</strong>
          </div>
        </section>
      )}

      {/* ── Patterns ── */}
      {patterns.length > 0 && (
        <section className="detail-card" data-animate>
          <span className="eyebrow">Pattern recognition</span>
          <h2>What your data says</h2>
          <div className="logbook-patterns">
            {patterns.map((p, i) => (
              <div key={i} className="logbook-pattern">
                <div className="logbook-pattern__header">
                  <strong>{p.label}</strong>
                  <span
                    className="tone-chip"
                    data-tone={
                      p.confidence >= 0.75
                        ? "go"
                        : p.confidence >= 0.5
                          ? "window"
                          : "hold"
                    }
                  >
                    {Math.round(p.confidence * 100)}%
                  </span>
                </div>
                <p>{p.detail}</p>
                <small>{p.tripCount} trips analyzed</small>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ── Actions ── */}
      <div className="logbook-actions" data-animate>
        <button
          className="logbook-form__submit"
          onClick={() => setShowForm(true)}
        >
          + Log a trip
        </button>
        <div className="logbook-filters">
          {(["all", "catches", "skunks"] as const).map((f) => (
            <button
              key={f}
              className={`logbook-filter ${filter === f ? "logbook-filter--active" : ""}`}
              onClick={() => setFilter(f)}
            >
              {f === "all" ? "All" : f === "catches" ? "Catches" : "Skunks"}
            </button>
          ))}
        </div>
        <div className="logbook-io">
          <button className="logbook-import-btn" onClick={handleExport}>
            Export
          </button>
          <button className="logbook-import-btn" onClick={handleImport}>
            Import
          </button>
        </div>
      </div>

      {/* ── Form ── */}
      {showForm && (
        <section data-animate>
          <LogbookForm
            spots={spots}
            onSaved={() => {
              setShowForm(false);
              refresh();
            }}
            onCancel={() => setShowForm(false)}
          />
        </section>
      )}

      {/* ── Trip List ── */}
      <section className="logbook-list" data-animate>
        {filteredTrips.map((trip) => (
          <article key={trip.id} className="logbook-entry">
            <div className="logbook-entry__header">
              <div>
                <Link href={`/spots/${trip.spotSlug}`} className="logbook-entry__spot">
                  {trip.spotName}
                </Link>
                <time className="logbook-entry__date">
                  {new Date(trip.date).toLocaleDateString("en-US", {
                    weekday: "short",
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </time>
              </div>
              <div className="logbook-entry__meta">
                <span className="logbook-entry__rating">
                  {"★".repeat(trip.rating)}
                  {"☆".repeat(5 - trip.rating)}
                </span>
                <button
                  className="logbook-entry__delete"
                  title="Delete trip"
                  onClick={() => handleDelete(trip.id)}
                >
                  ×
                </button>
              </div>
            </div>

            <div className="logbook-entry__species">
              {trip.skunk ? (
                <span className="logbook-history__skunk">Skunk 🦨</span>
              ) : (
                trip.speciesCaught.map((key) => {
                  const sp = speciesCatalog[key];
                  return (
                    <span
                      key={key}
                      className="tag"
                      style={{ borderColor: sp?.accent, color: sp?.accent }}
                    >
                      {sp?.shortLabel ?? key}
                    </span>
                  );
                })
              )}
            </div>

            {(trip.bait || trip.rig) && (
              <div className="logbook-entry__tackle">
                {trip.bait && <span>🪱 {trip.bait}</span>}
                {trip.rig && <span>🎣 {trip.rig}</span>}
              </div>
            )}

            {trip.notes && (
              <p className="logbook-entry__notes">{trip.notes}</p>
            )}

            {trip.conditions && (
              <div className="logbook-entry__conditions">
                {trip.conditions.tideStage !== "unknown" && (
                  <span className="logbook-condition-pill">
                    {trip.conditions.tideStage}
                  </span>
                )}
                {trip.conditions.waterTempF !== null && (
                  <span className="logbook-condition-pill">
                    {trip.conditions.waterTempF.toFixed(0)}°F
                  </span>
                )}
                {trip.conditions.windDirection && (
                  <span className="logbook-condition-pill">
                    {trip.conditions.windDirection}{" "}
                    {trip.conditions.windSpeedMph ?? ""}
                    {trip.conditions.windSpeedMph !== null ? " mph" : ""}
                  </span>
                )}
                {trip.conditions.waveHeightFt !== null && (
                  <span className="logbook-condition-pill">
                    {trip.conditions.waveHeightFt.toFixed(1)} ft
                  </span>
                )}
              </div>
            )}
          </article>
        ))}
      </section>
    </>
  );
}
