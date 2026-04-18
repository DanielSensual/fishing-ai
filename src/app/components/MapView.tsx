"use client";

import { useEffect, useRef } from "react";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";

interface SpotMarker {
  slug: string;
  name: string;
  area: string;
  score: number;
  tone: "go" | "window" | "hold";
  bestWindow: string;
  summary: string;
  lat: number;
  lng: number;
}

const TONE_COLORS: Record<string, string> = {
  go: "#22c989",
  window: "#e6a030",
  hold: "#e05555",
};

const DARK_STYLE: maplibregl.StyleSpecification = {
  version: 8,
  name: "Dark Ocean",
  sources: {
    "carto-dark": {
      type: "raster",
      tiles: [
        "https://a.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}@2x.png",
        "https://b.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}@2x.png",
        "https://c.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}@2x.png",
      ],
      tileSize: 256,
      attribution: '&copy; <a href="https://carto.com">CARTO</a>',
    },
  },
  layers: [
    {
      id: "carto-tiles",
      type: "raster",
      source: "carto-dark",
      minzoom: 0,
      maxzoom: 19,
    },
  ],
};

export default function MapView({
  spots,
  center,
  zoom = 11,
  className = "",
}: {
  spots: SpotMarker[];
  center?: [number, number];
  zoom?: number;
  className?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<maplibregl.Map | null>(null);

  const mapCenter: [number, number] = center ?? [-80.61, 28.44];

  useEffect(() => {
    if (!containerRef.current || mapRef.current) return;

    const map = new maplibregl.Map({
      container: containerRef.current,
      style: DARK_STYLE,
      center: mapCenter,
      zoom,
      pitch: 20,
      bearing: -5,
    });

    map.addControl(new maplibregl.NavigationControl({ showCompass: true }), "top-right");

    map.on("load", () => {
      for (const spot of spots) {
        const color = TONE_COLORS[spot.tone] || TONE_COLORS.hold;

        // Outer pulse ring
        const pulseEl = document.createElement("div");
        pulseEl.style.cssText = `
          width: 48px; height: 48px;
          border-radius: 50%;
          background: radial-gradient(circle, ${color}44, transparent 70%);
          border: 2px solid ${color}88;
          animation: pulseDot 2.5s ease-in-out infinite;
          cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          transition: transform 0.2s ease;
        `;

        // Inner score label
        const inner = document.createElement("div");
        inner.style.cssText = `
          width: 28px; height: 28px;
          border-radius: 50%;
          background: ${color};
          display: flex; align-items: center; justify-content: center;
          font-family: system-ui; font-size: 11px; font-weight: 800; color: #fff;
          box-shadow: 0 0 16px ${color}66;
        `;
        inner.textContent = String(spot.score);
        pulseEl.appendChild(inner);

        pulseEl.addEventListener("mouseenter", () => {
          pulseEl.style.transform = "scale(1.2)";
        });
        pulseEl.addEventListener("mouseleave", () => {
          pulseEl.style.transform = "scale(1)";
        });

        const marker = new maplibregl.Marker({ element: pulseEl, anchor: "center" })
          .setLngLat([spot.lng, spot.lat])
          .addTo(map);

        const popup = new maplibregl.Popup({
          offset: 30,
          closeButton: false,
          maxWidth: "260px",
        }).setHTML(`
          <div class="map-popup">
            <span class="eyebrow">${spot.area}</span>
            <h4>${spot.name}</h4>
            <p>${spot.summary}</p>
            <span class="tone-chip" data-tone="${spot.tone}" style="margin-bottom:8px">${spot.score}</span>
            <br/>
            <a href="/spots/${spot.slug}">Open spot page →</a>
          </div>
        `);

        marker.setPopup(popup);
      }
    });

    mapRef.current = map;

    return () => {
      map.remove();
      mapRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      ref={containerRef}
      className={`map-container ${className}`}
      style={{ width: "100%", minHeight: "540px" }}
    />
  );
}
