# Fishing AI Discovery Brief

Last updated: 2026-04-17
Scope: Personal-use fishing intelligence site for Florida, starting with Cape Canaveral, Jetty Park, and Cocoa Beach.

## 1. Product Goal

Build a modern, map-first fishing intelligence site that answers one question fast:

`Where should I fish today, for what species, with what setup, and is it worth going right now?`

This is not just a generic fishing forecast app. The best version is a private Florida fishing cockpit that combines:

- official environmental data
- local access/legal constraints
- spot-specific fishing heuristics
- personal logs and learned patterns

The first release should focus on Cape Canaveral, Jetty Park, and Cocoa Beach because the area has strong public data, active local reporting, and a very clear mix of surf, jetty, pier, channel, and nearshore structure.

## 2. What Already Exists Online

### Broad fishing products

1. Fishbrain
- Large social + catch dataset.
- Official site says it has 20 million+ catch locations, depth maps, waypoints, and forecasting based on verified catches and weather.
- Strong for discovery and social proof.
- Weak for local legal/access nuance and personalized Florida-specific heuristics.

2. Fishing Points
- Strong all-in-one trip planning app.
- Official help pages show fish activity, tides, weather, barometric pressure, nautical maps, wave conditions, river data, logs, and regulations.
- Strong utility layer.
- Weak on highly local interpretation for one fishery like Cape/Jetty/Cocoa.

3. Fish Rules
- Strong regulation product.
- Official site shows GPS-aware regulations, fish ID, reef locations, bookmarked map notes, and logging.
- Best for staying legal.
- Weak on tactical “should I fish this specific shoreline at this tide and wind?”

4. Garmin/Navionics Boating
- Strong charting and marine structure/navigation layer.
- Garmin support documents show government charts, community edits, relief shading, satellite imagery, tides, currents, and buoy overlays.
- Best for boat/chart users.
- Weak on shore/surf/jetty decision support and Florida fishing interpretation.

5. Smart Fishing Spots
- Saltwater-focused pitch built around AI + guide knowledge.
- Site emphasizes hot spots, weather, tides, current, and underwater structure.
- Strong positioning around “where to fish.”
- Weak on official local access/legal clarity and likely too generalized for your exact private workflow.

### Local and regional content sources

1. SpaceFish
- Active Space Coast reports for Port Canaveral offshore, Canaveral inshore, and Cocoa Beach surf.
- Useful for extracting current pattern language, species trends, bait notes, and seasonal rhythm.

2. Cocoa Beach Fishing Center
- Local bait shop presence.
- Weekly surf report points users to SpaceFish and confirms local tackle/bait availability and area focus.

3. Jetty Park / Port Canaveral
- Official visitor rules, parking, operating hours, and fishing constraints.

4. Canaveral National Seashore / Playalinda
- Official closure and access info, including rocket-launch-related restrictions.

### Market gap

The current market splits into four buckets:

- charts/maps
- forecasts/tides/weather
- regulations
- local reports

What is still missing is a clean Florida-first interface that fuses all four for one exact coastline and turns them into a recommendation engine.

That is the opening.

## 3. Best Available Data Sources for MVP

### Official and high-value sources

1. NOAA CO-OPS
- Trident Pier, Port Canaveral station `8721604`
- Official station metadata shows water level, water temp, air temp, pressure, and wind sensors.
- NOAA inventory page shows long history and current product availability.
- Best source for tide/water level and dockside conditions.

2. NWS Melbourne marine + surf forecasts
- Marine zone `AMZ552` covers Volusia-Brevard County line to Sebastian Inlet, 0-20 nm.
- NWS surf forecast includes rip current risk, surf height, water temperature, wind, and Port Canaveral tides.
- Best source for the operational “go / no-go” layer.

3. NDBC buoys
- `41113` Cape Canaveral Nearshore
- `41009` Canaveral, 20 NM east of Cape Canaveral
- Best source for wave height, period, water temp, and offshore reality checks.

4. FWC regulations and permits
- Recreational saltwater licenses and permits
- Snook rules
- Red drum regional rules
- Sheepshead rules
- Pompano/permit rules
- Best source for staying legal and for spot-specific rule overlays.

5. FWC reef/access mapping
- Statewide artificial reef download
- Brevard boating and angling guide
- Best source for map overlays and expansion into nearshore/offshore spots.

6. Brevard County lagoon/recreation maps
- Story maps for shoreline fishing, boating access, and related lagoon recreation.
- Useful for second-phase inshore and lagoon expansion.

7. NOAA CoastWatch
- Official near-real-time sea surface temperature products for the Florida-Georgia coast.
- Useful as a higher-end signal layer.

### Local intelligence sources

1. SpaceFish weekly reports
2. Cocoa Beach Fishing Center surf context
3. Jetty Park and Port Canaveral access pages
4. Webcams around Jetty Park / Port Canaveral for visual confirmation

## 4. Critical Local Facts for Cape Canaveral MVP

These matter because they change both UX and recommendation logic.

1. Jetty Park is not a generic beach spot.
- Port Canaveral says Jetty Park is open daily from `7:00 AM to 9:00 PM`.
- Parking requires a pass.
- Official Jetty Park rules state beach or shore fishing is prohibited in Jetty Park.
- Official rules also state a license is not required to fish off the pier.
- Night fishing is allowed from the fishing pier only.

2. Cape area access is affected by space operations.
- Canaveral National Seashore states portions of Playalinda can close around rocket launches and related safety operations.
- This is a real local constraint that most fishing products do not surface.

3. This fishery is highly condition-sensitive.
- NWS surf forecasts for this coast explicitly include rip current risk, surf height, water temperature, and tides.
- Local surf reports repeatedly call out trough position, clean water, bait movement, and wind direction as decisive.

4. Regulations are regional, not just statewide.
- Redfish in the Indian River Lagoon region are catch-and-release only.
- East coast snook harvest windows are region-based and seasonal.
- This means the app must map user location to the correct management region automatically.

## 5. What Knowledge the Site Needs

You need more than APIs. You need a knowledge model.

### A. Spot knowledge

For each spot:

- name
- spot type: surf, pier, jetty, shoreline, bridge, lagoon flat, reef
- access rules
- hours
- parking cost / access friction
- license requirement
- species likely there
- best tide stage
- best wind directions
- water clarity sensitivity
- ideal bait / rig / lure
- crowding tendency
- safety concerns
- notes from your own trips

### B. Environmental knowledge

- tide height and stage
- tide change timing
- wind speed and direction
- surf height
- swell period and direction
- water temperature
- air pressure / trend
- moon phase
- sunrise / sunset
- rip current risk
- storm / warning state

### C. Species knowledge

For the Cape/Jetty/Cocoa MVP, start with:

- snook
- pompano
- whiting
- black drum
- redfish
- sheepshead
- Spanish mackerel
- jack crevalle
- bluefish
- sharks as a caution/optional target layer

For each species:

- seasonality in this area
- common habitats
- preferred tide/wind/light conditions
- common presentations
- legal slot/bag/closure details
- confidence score by spot

### D. Structure knowledge

- jetty edges
- pier casting zones
- surf troughs
- cuts / runouts
- channel edges
- bridge shadow lines
- mangroves / docks for later lagoon phase
- artificial reefs / numbers for future boat mode

### E. Local heuristic knowledge

This is where the real advantage lives.

Examples:

- “Pompano bite improves when surf is fishable, water is cleaner, and the trough is defined.”
- “Jetty/pier sheepshead windows improve around structure and current.”
- “Snook windows improve around bait movement, lower light, and specific seasonal temperature bands.”
- “North/east wind plus building surf can kill one spot and improve another.”

This layer should start as manual rules and evolve from your logs.

### F. Personal learning layer

- trip log
- catches
- skunks
- bait used
- photos
- notes
- wind/tide/weather at catch time
- “repeatable pattern” extraction

That turns this from a content site into your system.

## 6. Recommended MVP Scope

### Phase 1: Cape Canaveral command center

Build only these surfaces:

1. Home dashboard
- “Can I fish Cape/Jetty/Cocoa today?”
- bite windows by spot
- conditions summary
- top species today
- warnings / closures

2. Interactive map
- Jetty Park Pier
- Port Canaveral access areas
- Cocoa Beach surf sectors
- Playalinda / Canaveral National Seashore
- future placeholders for lagoon and nearshore reefs

3. Spot pages
- conditions now
- best windows next 72 hours
- species likelihood
- legal/access notes
- recommended rigs/baits
- personal notes

4. Regulations overlay
- auto region match
- license needed / not needed
- species status
- snook/redfish/pompano/sheepshead summaries

5. Personal logbook
- add trip
- add catch/skunk
- save what worked

### Phase 2: Nearshore + lagoon expansion

- 8A / Pelican / reef layer
- Indian River Lagoon spots
- bridge and dock patterns
- better structure overlays
- webcam ingestion
- personalized scoring model

## 7. Competitive Positioning

### What this should be

`A private Florida fishing intelligence system.`

### What this should not be

- not a social network
- not a generic national fishing app
- not only a regulation checker
- not only a charting tool
- not a blog full of unstructured reports

### Core differentiation

`Official data + local spot logic + personal memory`

That combination is stronger than raw AI branding.

## 8. Naming Direction

The current hostname `FishingAi.Vercel.com` is fine as a working URL, but the long-term name should be shorter, more ownable, and less generic.

### Naming principles

- works for all of Florida later
- does not lock you into Cape Canaveral only
- feels premium and modern
- implies maps, timing, and pattern-finding

### Best name options

1. BiteAtlas
- Best overall.
- Feels map-first and statewide.
- Easy to brand.

2. TideTrace
- Strong if the product leans on timing, tide windows, and pattern tracking.

3. JettySignal
- Excellent for the first launch, but too local if the product expands statewide.

4. BlueLine
- Clean and premium, but broader and less explicitly fishing.

5. BiteWindow
- Strong if the core UX is all about “when to go.”

### Recommendation

Use:

`BiteAtlas`

Working tagline:

`Florida fishing intelligence for the spots that actually matter.`

Backup:

`TideTrace`

## 9. Design Direction

The current fishing web category is cluttered, text-heavy, and dated. The design should feel like a modern field instrument, not a forum or bait-shop CMS.

### Visual concept

`Space Coast command deck`

Blend:

- satellite / chart utility
- clean marine instrumentation
- warm Florida coastal color
- subtle aerospace precision

### Design characteristics

- map-first homepage
- dark-on-sand or deep-teal-on-cream palette, not generic black/blue
- dense but legible information panels
- cards with status color and confidence
- strong typography, not default web-app blandness

### Suggested palette

- Deep Atlantic: `#0E2A3A`
- Tidal Teal: `#0F6B6F`
- Foam: `#DFF5F2`
- Sand: `#F2E6C9`
- Alert Coral: `#E86B4A`
- Chart Gold: `#D6A94E`

### Suggested typography

- Headings: `Space Grotesk`
- Body/UI: `IBM Plex Sans`
- Numeric/weather data: `IBM Plex Mono`

### Landing page structure

1. Hero
- live Cape Canaveral conditions
- “Fish now / wait / not worth it”
- next best window

2. Map panel
- hotspots
- access points
- spot status

3. Today’s read
- tide
- wind
- surf
- water temp
- regulations
- closures

4. Target species row
- snook
- pompano
- redfish
- sheepshead
- whiting

5. Personal log insights
- what worked recently
- repeated patterns

### Mobile behavior

Mobile matters more than desktop.

The mobile version should prioritize:

- condition banner
- next bite window
- one-thumb spot switching
- tap-to-expand map
- large, readable time and tide cards

## 10. Recommended Information Architecture

### Primary nav

- Dashboard
- Map
- Spots
- Species
- Logbook
- Rules

### Spot detail template

- current score
- next 3 bite windows
- species probabilities
- setup recommendations
- access and legal notes
- recent observations
- your saved notes

## 11. MVP Recommendation Engine

Start simple.

Do not overbuild AI first.

Use a weighted scoring model:

- tide stage fit
- wind fit
- surf fit
- water temperature fit
- seasonal species fit
- access open/closed
- legal availability
- personal historical success

Return:

- spot score
- species score
- explanation

Example output:

`Jetty Park Pier scores 82/100 for sheepshead this morning because the incoming tide, manageable east swell, and structure-oriented current are favorable. Redfish scores low because Indian River Lagoon regulations are catch-and-release and this is not your best redfish setup anyway.`

That will be more trustworthy than pretending to have magic AI on day one.

## 12. Clear Build Recommendation

### Recommended product strategy

Build:

`A Florida-first private fishing command center with a scoring engine, not a generic content site.`

### Recommended first geographic scope

- Jetty Park Pier
- Port Canaveral shoreline/access context
- Cocoa Beach surf sectors
- Playalinda / Canaveral National Seashore

### Recommended first species

- snook
- pompano
- whiting
- black drum
- sheepshead
- redfish

## 13. Sources

Official and primary sources used:

- NOAA CO-OPS API docs: https://api.tidesandcurrents.noaa.gov/api/dev
- NOAA CO-OPS Trident Pier inventory: https://tidesandcurrents.noaa.gov/inventory.html?id=8721604
- NOAA CO-OPS station info: https://tidesandcurrents.noaa.gov/stations/station.jsp?id=122
- NWS Melbourne marine zones: https://www.weather.gov/marine/mlbmz
- NWS AMZ552 marine forecast: https://marine.weather.gov/MapClick.php?zoneid=AMZ552
- NWS surf forecast product: https://forecast.weather.gov/product.php?issuedby=MLB&product=SRF&site=MLB
- NDBC station 41113: https://www.ndbc.noaa.gov/station_page.php?station=41113
- NDBC station 41009: https://www.ndbc.noaa.gov/station_page.php?station=41009&tz=STN&unit=M
- Port Canaveral Jetty Park page: https://www.portcanaveral.com/recreation/jetty-park/beach-and-pier
- Jetty Park rules PDF: https://www.portcanaveral.com/docs/default-source/recreation/jetty-park/jetty-park-rules-effective-3-1-19.pdf
- FWC saltwater licenses and permits: https://myfwc.com/license/recreational/saltwater-fishing/
- FWC recreational saltwater regulations hub: https://myfwc.com/fishing/saltwater/recreational/
- FWC red drum regulations: https://myfwc.com/fishing/saltwater/recreational/red-drum/
- FWC sheepshead regulations: https://myfwc.com/fishing/saltwater/recreational/sheepshead/
- FWC permit / Florida pompano regulations: https://myfwc.com/fishing/saltwater/recreational/permit/
- FWC east coast snook opening notice dated 2026-01-29: https://myfwc.com/news/all-news/rec-snook-harvest-0126/
- FWC artificial reef download: https://myfwc.com/fishing/saltwater/artificial-reefs/locate/
- FWC Brevard boating and angling guide: https://gis.myfwc.com/boating_guides/brevard/pages/maps.html
- NOAA CoastWatch SST: https://eastcoast.coastwatch.noaa.gov/cw_goes.php
- Brevard County lagoon maps and recreation guide: https://brevardfl.gov/SaveOurLagoon/Maps

Local/market context sources:

- Fishbrain features: https://fishbrain.com/features
- Fishing Points overview: https://support.fishingpoints.app/hc/en-us/articles/26646581779090-What-is-Fishing-Points
- Fishing Points premium/features: https://fishingpoints.app/premium
- Fish Rules: https://fishrulesapp.com/
- Smart Fishing Spots: https://smartfishingspots.com/
- SpaceFish Port Canaveral page: https://spacefish.com/canaveral/
- Cocoa Beach Fishing Center weekly report page: https://cocoabeachfishingcenter.com/pages/weekly-surf-fishing-report

## 14. Best Next Step

Turn this brief into:

1. data model
2. page architecture
3. UI wireframe
4. Vercel MVP scaffold

That is enough to start building.
