"use client";

import { useState } from "react";
import { getTripsForSpot } from "@/lib/logbook";
import { speciesCatalog } from "@/lib/spots";
import type { TripLog } from "@/lib/types";

interface SpotTripHistoryProps {
  spotSlug: string;
}

export default function SpotTripHistory({ spotSlug }: SpotTripHistoryProps) {
  const [trips] = useState<TripLog[]>(() => getTripsForSpot(spotSlug));

  if (trips.length === 0) return null;

  return (
    <article className="detail-card">
      <span className="eyebrow">Your logbook</span>
      <h2>History at this spot</h2>
      <div className="logbook-history">
        {trips.map((trip) => (
          <div key={trip.id} className="logbook-history__entry">
            <div className="logbook-history__header">
              <strong>
                {new Date(trip.date).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </strong>
              <span className="logbook-history__rating">
                {"★".repeat(trip.rating)}
                {"☆".repeat(5 - trip.rating)}
              </span>
            </div>
            <div className="logbook-history__species">
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
            {trip.bait && (
              <small>
                Bait: {trip.bait}
                {trip.rig ? ` · Rig: ${trip.rig}` : ""}
              </small>
            )}
            {trip.notes && <p className="logbook-history__notes">{trip.notes}</p>}
            {trip.conditions && (
              <div className="logbook-history__conditions">
                {trip.conditions.tideStage !== "unknown" && (
                  <span>{trip.conditions.tideStage} tide</span>
                )}
                {trip.conditions.waterTempF !== null && (
                  <span>{trip.conditions.waterTempF.toFixed(0)}°F</span>
                )}
                {trip.conditions.windDirection && (
                  <span>{trip.conditions.windDirection} wind</span>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </article>
  );
}
