"use client";

import dynamic from "next/dynamic";

const MapView = dynamic(() => import("./MapView"), { ssr: false });

interface MapSpot {
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

export default function MapWrapper({
  spots,
  center,
  zoom,
  className,
}: {
  spots: MapSpot[];
  center?: [number, number];
  zoom?: number;
  className?: string;
}) {
  return <MapView spots={spots} center={center} zoom={zoom} className={className} />;
}
