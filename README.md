# Fishing AI

A Vercel-ready Next.js MVP for a private Cape Canaveral fishing command deck.

The first build covers:

- Jetty Park Pier
- Cocoa Beach surf
- Port Canaveral channel edge
- Playalinda / north beaches

It pulls live public data from NOAA, NDBC, and NWS, then layers Space Coast-specific heuristics on top to score the current bite by spot and species.

## Getting Started

Install and run the app:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

For a production build:

```bash
npm run build
npm run start
```

## Stack

- Next.js 16 App Router
- TypeScript
- Plain CSS
- Server-rendered public-data fetches at request time

## Data Sources

- NOAA CO-OPS Trident Pier `8721604`
- NDBC nearshore buoy `41113`
- NDBC offshore buoy `41009`
- NWS hourly point forecast
- NWS marine and surf products
- FWC regulations and access rules

## Notes

- The site is intentionally server-rendered so a deploy does not depend on build-time fishing data being available.
- Rules are summarized for trip planning, but every rule card links back to the source. Treat the links as the final legal authority.
- Product discovery and source research live in [docs/cape-canaveral-discovery.md](/Users/danielcastillo/Downloads/Fishing%20AI/docs/cape-canaveral-discovery.md).

## Deploy

Push to Vercel as a standard Next.js project. No secrets are required for this version.
