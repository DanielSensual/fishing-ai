import type {
  RuleCard,
  SpeciesDefinition,
  SpeciesKey,
  SpotDefinition,
} from "./types";

export const speciesCatalog: Record<SpeciesKey, SpeciesDefinition> = {
  snook: {
    key: "snook",
    name: "Snook",
    shortLabel: "Snook",
    accent: "#e86b4a",
    months: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    rig: "3/0-4/0 live-bait hook or paddletail on a 1/4-1/2 oz head",
    bait: "Live mullet, pilchards, or low-light soft plastics",
    tactic:
      "Fish edges, current seams, and low-light bait movement instead of blind fan casting.",
    legalNote:
      "East coast harvest is seasonal and permit-based; on April 17, 2026 the east coast harvest window is open.",
    idealWaterTempRangeF: [70, 82],
  },
  pompano: {
    key: "pompano",
    name: "Florida Pompano",
    shortLabel: "Pompano",
    accent: "#d6a94e",
    months: [1, 2, 3, 4, 10, 11, 12],
    rig: "Double-drop pompano rig with a sputnik sinker",
    bait: "Peeled shrimp, sand fleas, Fish Gum/Fishbites",
    tactic:
      "Keep casts in the troughs first; only bomb it long if the first cut is dead.",
    legalNote:
      'FWC recreational rule set: 11" fork minimum, 6 per harvester, open year-round.',
    idealWaterTempRangeF: [63, 77],
  },
  whiting: {
    key: "whiting",
    name: "Whiting",
    shortLabel: "Whiting",
    accent: "#8ecae6",
    months: [1, 2, 3, 4, 11, 12],
    rig: "Small double-drop rig with light wire and a sputnik or pyramid weight",
    bait: "Shrimp pieces, sand fleas, or Fishbites tipped with shrimp",
    tactic:
      "Move with the clean-water pocket and stay close to the first or second trough.",
    legalNote:
      "Check current local limits before harvest; use this card as a trip cue, not your final legal source.",
    idealWaterTempRangeF: [60, 75],
  },
  "black-drum": {
    key: "black-drum",
    name: "Black Drum",
    shortLabel: "Black drum",
    accent: "#7bbf8e",
    months: [1, 2, 3, 4, 12],
    rig: "Short leader bottom rig with enough lead to hold in the seam",
    bait: "Shrimp, clams, or sand fleas",
    tactic:
      "Work slower water right off structure or on the calmer side of the surf cut.",
    legalNote:
      "Use live FWC regulations for current harvest limits before keeping fish.",
    idealWaterTempRangeF: [58, 75],
  },
  sheepshead: {
    key: "sheepshead",
    name: "Sheepshead",
    shortLabel: "Sheepshead",
    accent: "#5e9ad8",
    months: [1, 2, 3, 4, 12],
    rig: "Short dropper or jig fished tight to structure",
    bait: "Shrimp, fiddler crabs, or barnacles",
    tactic:
      "Fish vertical and tight to pilings; this is a precision bite, not a long-cast bite.",
    legalNote:
      'FWC rule set: 12" minimum, 8 per person, open year-round; vessel limit 50 during March and April.',
    idealWaterTempRangeF: [60, 76],
  },
  redfish: {
    key: "redfish",
    name: "Redfish",
    shortLabel: "Redfish",
    accent: "#c45a55",
    months: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    rig: "1/8-1/4 oz jighead, weedless paddletail, or a light live-shrimp rig",
    bait: "Live shrimp, mullet chunks, or soft plastics in the seam",
    tactic:
      "Treat the channel edges as ambush lanes and fish moving current, not dead water.",
    legalNote:
      "Indian River Lagoon redfish are catch-and-release only, so this is a confidence signal more than a cooler plan.",
    idealWaterTempRangeF: [62, 82],
  },
  seatrout: {
    key: "seatrout",
    name: "Spotted Seatrout",
    shortLabel: "Trout",
    accent: "#66bb6a",
    months: [1, 2, 3, 4, 5, 9, 10, 11, 12],
    rig: "1/8 oz jighead with a soft plastic paddletail or jerk shad",
    bait: "Live shrimp under popping cork, or soft plastics in natural colors",
    tactic:
      "Work grass flat edges on falling tide; 'gator' trout hold in potholes and deeper cuts, not on top of the flat.",
    legalNote:
      'FWC: 15"-20" slot limit, 3 per harvester (northeast/south regions). Check your zone.',
    idealWaterTempRangeF: [58, 78],
  },
  tarpon: {
    key: "tarpon",
    name: "Tarpon",
    shortLabel: "Tarpon",
    accent: "#b0bec5",
    months: [4, 5, 6, 7, 8, 9],
    rig: "Heavy spinning with 60-80 lb fluorocarbon leader, 5/0-7/0 circle hook",
    bait: "Live mullet, crabs, or threadfin herring; fly anglers use tarpon toads and black death patterns",
    tactic:
      "Fish passes, bridges, and beach migration lanes at dawn. Match the bait, not the lure catalog.",
    legalNote:
      "Tarpon over 75\" require a $50 harvest tag (one per person per year). Most are catch-and-release only.",
    idealWaterTempRangeF: [74, 88],
  },
  "mangrove-snapper": {
    key: "mangrove-snapper",
    name: "Mangrove Snapper",
    shortLabel: "Mangos",
    accent: "#ef5350",
    months: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    rig: "Light fluorocarbon leader, small circle or live-bait hook, minimal weight",
    bait: "Live shrimp, pilchards, or small pieces of cut bait. Chum helps.",
    tactic:
      "Fish tight to docks, bridge pilings, mangrove roots, and jetty rock. Light line and stealth matter more than lure choice.",
    legalNote:
      'FWC: 10" total length minimum, 5 per harvester. Open year-round in state waters.',
    idealWaterTempRangeF: [65, 85],
  },
  "jack-crevalle": {
    key: "jack-crevalle",
    name: "Jack Crevalle",
    shortLabel: "Jacks",
    accent: "#ffd54f",
    months: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    rig: "Medium-heavy spinning with topwater plugs or fast-retrieve spoons",
    bait: "Topwater poppers, spoons, or live mullet when jacks are blitzing bait",
    tactic:
      "Watch for bait blowups on the surface. Cast into the mayhem, strip fast. Jacks are reaction feeders, not ambush fish.",
    legalNote: "No minimum size, no bag limit in Florida recreational waters.",
    idealWaterTempRangeF: [60, 85],
  },
  flounder: {
    key: "flounder",
    name: "Flounder",
    shortLabel: "Flounder",
    accent: "#a1887f",
    months: [10, 11, 12, 1, 2, 3],
    rig: "Jighead with a soft plastic curly-tail or live finger mullet on a knocker rig",
    bait: "Live finger mullet or mudminnows dragged slowly across sandy bottom",
    tactic:
      "Drag baits across sand-mud transitions and channel drop-offs. Flounder ambush — they don't chase. Slow down.",
    legalNote:
      'FWC: 14" total length minimum, 5 per harvester. Sept. closed season on Atlantic coast.',
    idealWaterTempRangeF: [55, 72],
  },
  "spanish-mackerel": {
    key: "spanish-mackerel",
    name: "Spanish Mackerel",
    shortLabel: "Spanish",
    accent: "#4fc3f7",
    months: [3, 4, 5, 6, 7, 8, 9, 10, 11],
    rig: "Long-shank hook or wire leader with a fast-retrieve setup",
    bait: "Gotcha plugs, Clark spoons, or live pilchards and greenbacks under a float",
    tactic:
      "Cast ahead of surface schools parallel to the beach. Speed kills — if you're not moving the lure fast, you're doing it wrong.",
    legalNote:
      'FWC: 12" fork minimum, 15 per harvester. Open year-round.',
    idealWaterTempRangeF: [68, 84],
  },
  cobia: {
    key: "cobia",
    name: "Cobia",
    shortLabel: "Cobia",
    accent: "#8d6e63",
    months: [3, 4, 5, 6],
    rig: "Heavy spinning with 3-4 oz jig or live eel/crab on wire leader",
    bait: "Live eels, crabs, or large jigs pitched to sight-fished cobia near rays and buoys",
    tactic:
      "Spot them cruising with rays or near channel markers. Pitch ahead of the fish, not on top of it.",
    legalNote:
      'FWC: 33" fork minimum, 1 per person, 2 per vessel. Open March 1 - April 30 (Atlantic).',
    idealWaterTempRangeF: [68, 80],
  },
  tripletail: {
    key: "tripletail",
    name: "Tripletail",
    shortLabel: "Tripletail",
    accent: "#9575cd",
    months: [4, 5, 6, 7, 8, 9, 10],
    rig: "Light spinning with small live shrimp or a DOA shrimp on light leader",
    bait: "Live shrimp free-lined or on light jighead, pitched to structure-holding fish",
    tactic:
      "Look for them floating sideways near buoys, crab trap floats, and channel markers. Stealth approach in the boat is critical.",
    legalNote:
      'FWC: 18" total length minimum, 2 per harvester. Open year-round.',
    idealWaterTempRangeF: [70, 85],
  },
};

export const spots: SpotDefinition[] = [
  {
    slug: "jetty-park-pier",
    name: "Jetty Park Pier",
    area: "Cape Canaveral",
    region: "space-coast",
    type: "Pier",
    summary:
      "Best first-stop when you want structure, current, easy access, and a clean read on the inlet.",
    mapPosition: { top: "34%", left: "57%" },
    coordinates: { lat: 28.4082, lng: -80.5922 },
    access: [
      "Jetty Park day-use access runs 7:00 AM to 9:00 PM.",
      "Parking requires a pass through Port Canaveral.",
      "Port rules say a license is not required from the pier.",
      "Night fishing is permitted from the pier only.",
    ],
    caution: [
      "The inlet stacks current and wind quickly.",
      "Cruise traffic and pier crowding can compress your casting lanes.",
    ],
    highlights: [
      "Strong structure bite for sheepshead and drum.",
      "Easy read on whether the port cut is alive.",
      "Good fallback when the open beach is too messy.",
    ],
    tactics: [
      {
        title: "Sheepshead / drum",
        detail:
          "Fish tight to the pier structure with shrimp or crab-style baits on short leaders.",
      },
      {
        title: "Pompano / whiting edge",
        detail:
          "Work the cleaner side of the current with a double-drop rig before reaching for a long cast.",
      },
      {
        title: "Snook low light",
        detail:
          "Look for bait in the seam and fish the change in current, not the dead center of the cut.",
      },
    ],
    primarySpecies: ["sheepshead", "black-drum", "pompano", "snook", "whiting"],
    preferredTides: ["incoming", "high"],
    preferredWindDirections: ["N", "NNE", "NE", "ENE", "E", "SE"],
    avoidWindDirections: [],
    idealWaveRangeFt: [1, 3.5],
    idealWaterTempRangeF: [68, 80],
    lightPreference: "day",
    accessHours: { open: "07:00", close: "21:00" },
  },
  {
    slug: "cocoa-beach-surf",
    name: "Cocoa Beach Surf",
    area: "Cocoa Beach",
    region: "space-coast",
    type: "Surf",
    summary:
      "This is the mobile, trough-reading play for pompano, whiting, drum, and occasional surf snook.",
    mapPosition: { top: "52%", left: "72%" },
    coordinates: { lat: 28.3200, lng: -80.6076 },
    access: [
      "Shoreline fishing here requires the right Florida saltwater licensing status.",
      "Move with the clean water and trough shape instead of locking onto one access point.",
    ],
    caution: [
      "Rip current risk matters more here than at the pier.",
      "A dirty, blown-out surf line can kill the pompano plan fast.",
    ],
    highlights: [
      "Best water-reading lab for surf patterns.",
      "Good fit for cooler-water pompano and whiting windows.",
      "Flexible if you are willing to walk and scout cuts.",
    ],
    tactics: [
      {
        title: "Pompano / whiting",
        detail:
          "Start in the first and second trough with shrimp, fleas, and Fish Gum on a pompano rig.",
      },
      {
        title: "Black drum",
        detail:
          "Slow down and keep a bait in the calmer inside edge when the surf is still fishable.",
      },
      {
        title: "Bait run snook",
        detail:
          "When bait is riding the beach, low-light artificials become much more viable than dead bait.",
      },
    ],
    primarySpecies: ["pompano", "whiting", "black-drum", "snook"],
    preferredTides: ["incoming", "high"],
    preferredWindDirections: ["W", "WSW", "SW", "S", "SSW"],
    avoidWindDirections: ["N", "NNE", "NE", "ENE", "E"],
    idealWaveRangeFt: [1.5, 3],
    idealWaterTempRangeF: [63, 78],
    lightPreference: "day",
  },
  {
    slug: "port-canaveral-channel-edge",
    name: "Port Canaveral Channel Edge",
    area: "Port Canaveral",
    region: "space-coast",
    type: "Shoreline",
    summary:
      "A tighter, current-driven shoreline play when you want snook, drum, jacks, and channel-edge ambush fish.",
    mapPosition: { top: "43%", left: "49%" },
    coordinates: { lat: 28.4100, lng: -80.6200 },
    access: [
      "Port channel shoreline fishing requires a Florida saltwater license.",
      "Treat this as a current seam and structure game, not an open-water cast-and-soak spot.",
    ],
    caution: [
      "Heavy boat traffic means you need to stay aware and keep setups compact.",
      "Strong current can make light tackle feel undergunned fast.",
    ],
    highlights: [
      "Current-driven snook and drum lane.",
      "Works even when the surf side loses shape.",
      "Useful crossover spot between ocean and lagoon mindset.",
    ],
    tactics: [
      {
        title: "Snook seam",
        detail:
          "Fish live bait or a paddletail where current breaks off structure instead of the deepest middle water.",
      },
      {
        title: "Drum / redfish",
        detail:
          "Shrimp and mullet chunk rigs work best when you let the bait sit in moving water, not slack corners.",
      },
      {
        title: "Reaction fish",
        detail:
          "Jacks and surprise fish show when bait gets pushed through the channel edge at speed.",
      },
    ],
    primarySpecies: ["snook", "black-drum", "redfish"],
    preferredTides: ["incoming", "outgoing"],
    preferredWindDirections: ["W", "NW", "SW", "S"],
    avoidWindDirections: ["NNE", "NE", "ENE"],
    idealWaveRangeFt: [0.5, 4],
    idealWaterTempRangeF: [66, 82],
    lightPreference: "low-light",
  },
  {
    slug: "playalinda-north-beaches",
    name: "Playalinda / North Beaches",
    area: "Canaveral National Seashore",
    region: "space-coast",
    type: "Wild beach",
    summary:
      "The cleaner, more natural beach program when you want room to scout water and fish a less crowded stretch.",
    mapPosition: { top: "18%", left: "66%" },
    coordinates: { lat: 28.6300, lng: -80.6600 },
    access: [
      "This run always needs a quick closure check because rocket operations can change access.",
      "Treat it like a scouting beach: walk first, then set up where the water tells you to.",
    ],
    caution: [
      "Launch-day closures can wipe out the plan even when conditions look perfect.",
      "Exposure is higher here than at Jetty Park if the wind swings northeast.",
    ],
    highlights: [
      "Lower crowding and cleaner beach profile when it is on.",
      "Good water-reading option for pompano and whiting.",
      "Higher upside for finding untouched trough structure.",
    ],
    tactics: [
      {
        title: "Pompano mobile setup",
        detail:
          "Carry light and keep moving until you find the sharpest cut, deepest first trough, or cleanest water seam.",
      },
      {
        title: "Whiting / drum",
        detail:
          "Fish smaller baits inside before assuming everything is outside the second bar.",
      },
      {
        title: "Closure discipline",
        detail:
          "Check park and launch status before the drive so you do not lose the morning to gate surprises.",
      },
    ],
    primarySpecies: ["pompano", "whiting", "black-drum", "snook"],
    preferredTides: ["incoming", "high"],
    preferredWindDirections: ["W", "WSW", "SW", "S"],
    avoidWindDirections: ["NE", "ENE", "E"],
    idealWaveRangeFt: [1, 3],
    idealWaterTempRangeF: [63, 78],
    lightPreference: "day",
    requiresLaunchCheck: true,
  },

  // ═══════════════════════════════════════════════════════════
  //  REGION 2: Indian River & Lagoon
  // ═══════════════════════════════════════════════════════════
  {
    slug: "sebastian-inlet",
    name: "Sebastian Inlet",
    area: "Sebastian",
    region: "indian-river",
    type: "Inlet",
    summary:
      "One of the most productive inlets in Florida — snook capital with year-round current and bait flow.",
    mapPosition: { top: "50%", left: "70%" },
    coordinates: { lat: 27.8578, lng: -80.4486 },
    access: [
      "Sebastian Inlet State Park charges a per-vehicle entry fee.",
      "Jetty fishing is open 24 hours.",
      "Florida saltwater license required.",
    ],
    caution: [
      "Extremely strong current on outgoing tide — heavy tackle recommended.",
      "Rocks are slippery and waves can wash over the jetty.",
    ],
    highlights: [
      "Florida's #1 snook inlet — monster fish year-round.",
      "Current funnels bait creating explosive topwater action.",
      "Both jetties fishable from shore.",
    ],
    tactics: [
      { title: "Snook inlet", detail: "Fish the shadow line with large swimbaits and live mullet. Night bite is legendary." },
      { title: "Pompano run", detail: "Work the sandy beach just south of the inlet with double-drop rigs during the fall/spring migration." },
      { title: "Spanish blitz", detail: "Cast Gotcha plugs into schools working the surface at the inlet mouth in warm months." },
    ],
    primarySpecies: ["snook", "redfish", "pompano", "spanish-mackerel", "jack-crevalle", "flounder"],
    preferredTides: ["outgoing", "incoming"],
    preferredWindDirections: ["W", "SW", "S"],
    avoidWindDirections: ["NE", "E"],
    idealWaveRangeFt: [1, 4],
    idealWaterTempRangeF: [65, 82],
    lightPreference: "any",
  },
  {
    slug: "mosquito-lagoon",
    name: "Mosquito Lagoon",
    area: "New Smyrna / Titusville",
    region: "indian-river",
    type: "Flats",
    summary:
      "The 'Redfish Capital of the World' — pristine sight-fishing flats in Canaveral National Seashore.",
    mapPosition: { top: "25%", left: "55%" },
    coordinates: { lat: 28.7833, lng: -80.7756 },
    access: [
      "Kayak or small boat access only in most areas. Launch from Eddy Creek or Bio Lab Road.",
      "Parts of the lagoon are in Canaveral National Seashore — check for closures.",
    ],
    caution: [
      "Extremely shallow — pole or trolling motor only on the flats.",
      "Mosquitoes are brutal outside of winter. Name is earned.",
    ],
    highlights: [
      "World-class sight fishing for tailing redfish on crystal-clear flats.",
      "Gator trout (large seatrout) in deeper potholes.",
      "Untouched, undeveloped ecosystem with minimal boat traffic.",
    ],
    tactics: [
      { title: "Sight-fish reds", detail: "Pole or drift the flats looking for tailing fish, then pitch a weedless gold spoon or live shrimp." },
      { title: "Gator trout", detail: "Work deeper sandy potholes amid the grass with soft plastics on light jigheads." },
      { title: "Black drum", detail: "Target oyster bars and mud flats with shrimp on a light bottom rig." },
    ],
    primarySpecies: ["redfish", "seatrout", "black-drum", "snook", "jack-crevalle"],
    preferredTides: ["high", "incoming"],
    preferredWindDirections: ["W", "NW", "SW"],
    avoidWindDirections: ["NE", "E"],
    idealWaveRangeFt: [0, 1],
    idealWaterTempRangeF: [62, 82],
    lightPreference: "day",
  },
  {
    slug: "indian-river-melbourne",
    name: "Indian River (Melbourne)",
    area: "Melbourne / Eau Gallie",
    region: "indian-river",
    type: "Flats",
    summary:
      "Wide lagoon flats and causeways offering year-round seatrout, redfish, and snook around bridge structure.",
    mapPosition: { top: "60%", left: "55%" },
    coordinates: { lat: 28.0836, lng: -80.6081 },
    access: [
      "Wade or kayak from causeway parks. Melbourne Causeway and Eau Gallie Causeway are popular.",
      "Florida saltwater license required.",
    ],
    caution: [
      "Boat traffic around causeways can be heavy on weekends.",
      "Stingrays — shuffle your feet.",
    ],
    highlights: [
      "Excellent seatrout fishing on grass flats.",
      "Bridge pilings hold snook and snapper year-round.",
      "Easy shore access from multiple causeways.",
    ],
    tactics: [
      { title: "Trout flats", detail: "Free-line live shrimp or work a popping cork over grass in 2-4 feet of water." },
      { title: "Bridge snook", detail: "Night-fish bridge shadow lines with live mullet or large paddletails." },
      { title: "Mangrove snapper", detail: "Light leader and small shrimp fished tight to dock pilings and seawall structure." },
    ],
    primarySpecies: ["seatrout", "redfish", "snook", "mangrove-snapper", "black-drum"],
    preferredTides: ["incoming", "outgoing"],
    preferredWindDirections: ["W", "NW", "SW"],
    avoidWindDirections: ["E", "NE"],
    idealWaveRangeFt: [0, 1],
    idealWaterTempRangeF: [62, 82],
    lightPreference: "any",
  },

  // ═══════════════════════════════════════════════════════════
  //  REGION 3: Daytona & Volusia
  // ═══════════════════════════════════════════════════════════
  {
    slug: "ponce-inlet-jetty",
    name: "Ponce Inlet Jetty",
    area: "Ponce Inlet",
    region: "daytona",
    type: "Inlet",
    summary:
      "One of northeast Florida's best inlets — deep water, heavy current, and big fish at the rocks.",
    mapPosition: { top: "40%", left: "75%" },
    coordinates: { lat: 29.0725, lng: -80.9270 },
    access: [
      "North and south jetty accessible by foot. South jetty from Smyrna Dunes Park.",
      "Jetty rocks are uneven — wear proper footwear.",
    ],
    caution: [
      "Strong current on tidal changes. Heavy tackle recommended.",
      "Sharks are common near the inlet — handle catch quickly.",
    ],
    highlights: [
      "Deep inlet holds big snook, redfish, and tarpon in season.",
      "Flounder run through the inlet during fall migration.",
      "Spanish mackerel school at the mouth when water is warm.",
    ],
    tactics: [
      { title: "Inlet snook", detail: "Bump heavy jigs along the bottom in current or drift live mullet through the channel." },
      { title: "Flounder drag", detail: "Bounce a bucktail or live finger mullet along sandy bottom near the jetty edges." },
      { title: "Tarpon season", detail: "Free-line live mullet in the channel during May-August dawn and dusk windows." },
    ],
    primarySpecies: ["snook", "redfish", "flounder", "tarpon", "spanish-mackerel", "mangrove-snapper"],
    preferredTides: ["outgoing", "incoming"],
    preferredWindDirections: ["W", "SW", "NW"],
    avoidWindDirections: ["NE", "E"],
    idealWaveRangeFt: [1, 4],
    idealWaterTempRangeF: [65, 82],
    lightPreference: "any",
  },
  {
    slug: "new-smyrna-beach-surf",
    name: "New Smyrna Beach Surf",
    area: "New Smyrna Beach",
    region: "daytona",
    type: "Surf",
    summary:
      "Premium surf fishing with drive-on beach access. Known for pompano migration and fall mullet run chaos.",
    mapPosition: { top: "35%", left: "68%" },
    coordinates: { lat: 29.0258, lng: -80.9200 },
    access: [
      "Drive-on beach access ($20/day vehicle fee).",
      "Set up south of the flagpole for fewer surfers.",
    ],
    caution: [
      "Known as 'Shark Bite Capital' — be aware when wading.",
      "Strong longshore current during NE wind events.",
    ],
    highlights: [
      "Drive right up to your fishing spot — ultimate surf fishing convenience.",
      "Excellent pompano and whiting in fall and spring.",
      "Mullet run brings tarpon, snook, and jacks to the beach in autumn.",
    ],
    tactics: [
      { title: "Pompano troughs", detail: "Double-drop rigs in the first and second trough during incoming tide with sand fleas and Fishbites." },
      { title: "Mullet run chaos", detail: "Fall mullet run brings predators to the beach — cast large swimbaits, spoons, or topwater." },
      { title: "Whiting grind", detail: "Small shrimp pieces on a bottom rig produced consistently in clean water windows." },
    ],
    primarySpecies: ["pompano", "whiting", "black-drum", "snook", "jack-crevalle"],
    preferredTides: ["incoming", "high"],
    preferredWindDirections: ["W", "SW", "S"],
    avoidWindDirections: ["NE", "E", "ENE"],
    idealWaveRangeFt: [1, 3],
    idealWaterTempRangeF: [63, 78],
    lightPreference: "day",
  },
  {
    slug: "daytona-beach-pier",
    name: "Daytona Beach Pier",
    area: "Daytona Beach",
    region: "daytona",
    type: "Pier",
    summary:
      "Iconic pier extending into the Atlantic — easy access, great for beginners and seasonal migrations.",
    mapPosition: { top: "20%", left: "73%" },
    coordinates: { lat: 29.2242, lng: -81.0087 },
    access: [
      "Paid pier access (fishing fee varies by season).",
      "Rod rentals available. License not required from the pier.",
    ],
    caution: [
      "Crowded on weekends — arrive early for the best spots at the T-end.",
      "King mackerel anglers need heavy gear and should coordinate around the T.",
    ],
    highlights: [
      "Year-round pier fishing with seasonal peaks for different species.",
      "No license required — great entry point for casual anglers.",
      "Seasonal king mackerel and cobia runs draw serious anglers.",
    ],
    tactics: [
      { title: "Pier pompano", detail: "Fish bottom rigs with sand fleas and shrimp on the upcurrent side during winter and spring." },
      { title: "Sheepshead structure", detail: "Drop shrimp straight down the pilings — sheepshead hold tight to the barnacles." },
      { title: "Cobia spring", detail: "Sight-fish cobia swimming near the surface along the pier in March-April. Pitch jigs ahead of them." },
    ],
    primarySpecies: ["pompano", "sheepshead", "whiting", "cobia", "spanish-mackerel"],
    preferredTides: ["incoming", "high"],
    preferredWindDirections: ["W", "SW", "S"],
    avoidWindDirections: ["NE", "ENE"],
    idealWaveRangeFt: [1, 3.5],
    idealWaterTempRangeF: [63, 80],
    lightPreference: "day",
  },

  // ═══════════════════════════════════════════════════════════
  //  REGION 4: Tampa Bay & Gulf Coast
  // ═══════════════════════════════════════════════════════════
  {
    slug: "skyway-fishing-pier",
    name: "Skyway Fishing Pier",
    area: "St. Petersburg",
    region: "tampa-bay",
    type: "Pier",
    summary:
      "The world's longest fishing pier — the old Sunshine Skyway bridge spans converted into an angler's paradise.",
    mapPosition: { top: "55%", left: "30%" },
    coordinates: { lat: 27.6154, lng: -82.6534 },
    access: [
      "Open 24 hours. $4 per vehicle entry. No fishing license required from the pier.",
      "North pier and south pier — south pier is longer with deeper water.",
    ],
    caution: [
      "Strong currents around the bridge pilings — heavy tackle recommended.",
      "Long walk to the end — bring a cart for gear.",
    ],
    highlights: [
      "World-class sheepshead fishing around the bridge pilings.",
      "Tarpon migrate through the bridge channel in summer.",
      "Kingfish, cobia, and mackerel from the deep water T-end.",
    ],
    tactics: [
      { title: "Sheepshead pilings", detail: "Drop shrimp and fiddler crabs tight to the concrete pilings. This is vertical fishing — stay tight." },
      { title: "Tarpon channel", detail: "Free-line live mullet or crabs in the deeper channel water during May-August. Heavyweight gear only." },
      { title: "Mangrove snapper", detail: "Light tackle and small shrimp at the base of the pilings. Chum to turn on the bite." },
    ],
    primarySpecies: ["sheepshead", "mangrove-snapper", "tarpon", "cobia", "spanish-mackerel", "snook"],
    preferredTides: ["incoming", "outgoing"],
    preferredWindDirections: ["E", "SE", "NE"],
    avoidWindDirections: ["W", "NW"],
    idealWaveRangeFt: [0.5, 3],
    idealWaterTempRangeF: [64, 84],
    lightPreference: "any",
  },
  {
    slug: "fort-de-soto-park",
    name: "Fort De Soto Park",
    area: "Pinellas County",
    region: "tampa-bay",
    type: "Flats",
    summary:
      "Premier Gulf Coast destination with flats, a pier, seawalls, and passes — everything an angler needs.",
    mapPosition: { top: "60%", left: "25%" },
    coordinates: { lat: 27.6236, lng: -82.7375 },
    access: [
      "County park — $5 vehicle entry fee.",
      "Gulf Pier, Bay Pier, and extensive shoreline all fishable.",
    ],
    caution: [
      "Stingrays on the flats — always shuffle.",
      "Can get crowded on weekends at the popular piers.",
    ],
    highlights: [
      "Sight-fishing snook and reds on the flats at dawn.",
      "Bay pier produces sheepshead and snapper consistently.",
      "Pass fishing for tarpon and snook during tide changes.",
    ],
    tactics: [
      { title: "Flats sight fish", detail: "Wade the Gulf-side flats at dawn for snook and redfish using soft plastics or live shrimp." },
      { title: "Pass snook", detail: "Fish Bunces Pass on outgoing tide with live bait or large swimbaits for slot snook." },
      { title: "Trout grass", detail: "Popping cork with live shrimp over the grass beds in 2-4 feet on the bay side." },
    ],
    primarySpecies: ["snook", "redfish", "seatrout", "sheepshead", "mangrove-snapper", "tarpon"],
    preferredTides: ["outgoing", "incoming"],
    preferredWindDirections: ["E", "SE", "NE"],
    avoidWindDirections: ["W", "SW"],
    idealWaveRangeFt: [0, 2],
    idealWaterTempRangeF: [64, 84],
    lightPreference: "day",
  },
  {
    slug: "gandy-bridge",
    name: "Gandy Bridge",
    area: "Tampa / St. Pete",
    region: "tampa-bay",
    type: "Bridge",
    summary:
      "The old Gandy Bridge remnants and surrounding flats create a snook and trout fishery right in downtown Tampa Bay.",
    mapPosition: { top: "40%", left: "35%" },
    coordinates: { lat: 27.8675, lng: -82.5554 },
    access: [
      "Shore access from Gandy Boat Ramp and surrounding parks.",
      "Kayak and small boat launch available at the ramp.",
    ],
    caution: [
      "Heavy boat traffic — stay visible if wading or kayaking.",
      "Night fishing around bridge lights attracts both fish and crowds.",
    ],
    highlights: [
      "Bridge shadow lines hold snook year-round — legendary night bite.",
      "Grass flats on both sides of the bridge for trout and reds.",
      "Easy access from both Tampa and St. Pete.",
    ],
    tactics: [
      { title: "Night snook", detail: "Fish the shadow/light line with live shrimp, whitebait, or large paddletails on outgoing tide." },
      { title: "Trout flats", detail: "Drift or wade the grass flats east of the bridge with popping corks and live shrimp." },
      { title: "Redfish edges", detail: "Work the mangrove shorelines and oyster bars on the higher stages of the tide." },
    ],
    primarySpecies: ["snook", "seatrout", "redfish", "jack-crevalle", "mangrove-snapper"],
    preferredTides: ["outgoing", "incoming"],
    preferredWindDirections: ["E", "N", "NE"],
    avoidWindDirections: ["W", "SW"],
    idealWaveRangeFt: [0, 1.5],
    idealWaterTempRangeF: [64, 84],
    lightPreference: "low-light",
  },

  // ═══════════════════════════════════════════════════════════
  //  REGION 5: Treasure Coast & Palm Beach
  // ═══════════════════════════════════════════════════════════
  {
    slug: "fort-pierce-inlet",
    name: "Fort Pierce Inlet",
    area: "Fort Pierce",
    region: "treasure-coast",
    type: "Inlet",
    summary:
      "Deep, high-current inlet connecting the lagoon to the Atlantic — holds big snook, tarpon, and jacks.",
    mapPosition: { top: "45%", left: "70%" },
    coordinates: { lat: 27.4734, lng: -80.2921 },
    access: [
      "Jetty Park on the south side offers shore access to the jetty rocks.",
      "North side accessible from Pepper Park.",
    ],
    caution: [
      "Extremely strong current — this is not a light tackle spot.",
      "Rocks are sharp and waves wash over during strong onshore winds.",
    ],
    highlights: [
      "Trophy snook fishing at the jetty rocks, especially at night.",
      "Summer tarpon migrate through the inlet in June-August.",
      "Flounder hold in the sandy transitions around the rocks.",
    ],
    tactics: [
      { title: "Trophy snook", detail: "Large live mullet or oversized swimbaits bumped along the jetty rocks on outgoing tide." },
      { title: "Tarpon pass", detail: "Free-line live crabs or mullet in the main channel during summer dawn windows." },
      { title: "Jacks and mackerel", detail: "Fast-retrieve spoons and topwater when bait is getting pushed through the inlet." },
    ],
    primarySpecies: ["snook", "tarpon", "jack-crevalle", "flounder", "spanish-mackerel", "tripletail"],
    preferredTides: ["outgoing", "incoming"],
    preferredWindDirections: ["W", "SW", "NW"],
    avoidWindDirections: ["E", "NE"],
    idealWaveRangeFt: [1, 4],
    idealWaterTempRangeF: [68, 84],
    lightPreference: "any",
  },
  {
    slug: "jupiter-inlet",
    name: "Jupiter Inlet",
    area: "Jupiter",
    region: "treasure-coast",
    type: "Inlet",
    summary:
      "Famous South Florida inlet with the iconic red lighthouse — snook, tarpon, and grouper at the rocks.",
    mapPosition: { top: "65%", left: "75%" },
    coordinates: { lat: 26.9448, lng: -80.0716 },
    access: [
      "Dubois Park offers jetty access on the south side.",
      "No fishing license required from the jetty in Dubois Park.",
    ],
    caution: [
      "One of the strongest currents of any Florida inlet.",
      "Sharks are common in the inlet — handle fish quickly.",
    ],
    highlights: [
      "Arguably the best snook inlet in southeast Florida.",
      "Goliath grouper hold at the rocks (catch-and-release only).",
      "Seasonal cobia runs bring sight-fishing opportunities.",
    ],
    tactics: [
      { title: "Snook rocks", detail: "Bump large swimbaits or live mullet along the jetty rocks on outgoing tide. Night is prime." },
      { title: "Cobia spring", detail: "Sight-cast jigs and live crabs to cobia cruising the surface in March-May." },
      { title: "Mangrove snapper", detail: "Light tackle with live shrimp fished at the base of the inlet rocks. Chum to hold them." },
    ],
    primarySpecies: ["snook", "tarpon", "cobia", "mangrove-snapper", "jack-crevalle", "tripletail"],
    preferredTides: ["outgoing", "incoming"],
    preferredWindDirections: ["W", "SW", "NW"],
    avoidWindDirections: ["E", "NE", "SE"],
    idealWaveRangeFt: [1, 4],
    idealWaterTempRangeF: [70, 85],
    lightPreference: "any",
  },
  {
    slug: "lake-worth-pier",
    name: "Lake Worth Pier",
    area: "Lake Worth Beach",
    region: "treasure-coast",
    type: "Pier",
    summary:
      "Classic South Florida pier with warm water year-round — pompano, snook, and seasonal pelagic action.",
    mapPosition: { top: "72%", left: "78%" },
    coordinates: { lat: 26.6134, lng: -80.0333 },
    access: [
      "Paid pier access. No fishing license required from the pier.",
      "Rod rentals and bait shop at the pier entrance.",
    ],
    caution: [
      "Popular tourist area — crowded on weekends and holidays.",
      "Strong southward longshore current during winter.",
    ],
    highlights: [
      "Warm water year-round keeps tropical species available.",
      "Pompano migration peaks in February-April.",
      "Night snook fishing around the pier lights.",
    ],
    tactics: [
      { title: "Pompano run", detail: "Sand fleas, shrimp, and Fishbites on the upcurrent side of the pier during incoming tide." },
      { title: "Snook lights", detail: "Night-fish the pier light shadows with live pilchards or large paddletails." },
      { title: "Mackerel and jacks", detail: "Fast-retrieve Gotcha plugs when schools are visible on the surface." },
    ],
    primarySpecies: ["pompano", "snook", "spanish-mackerel", "jack-crevalle", "sheepshead"],
    preferredTides: ["incoming", "high"],
    preferredWindDirections: ["W", "NW", "SW"],
    avoidWindDirections: ["E", "NE"],
    idealWaveRangeFt: [1, 3],
    idealWaterTempRangeF: [68, 84],
    lightPreference: "any",
  },

  // ═══════════════════════════════════════════════════════════
  //  REGION 6: Jacksonville & Northeast
  // ═══════════════════════════════════════════════════════════
  {
    slug: "jacksonville-beach-pier",
    name: "Jacksonville Beach Pier",
    area: "Jacksonville Beach",
    region: "jacksonville",
    type: "Pier",
    summary:
      "Northeast Florida's primary pier — strong seasonal runs for pompano, whiting, and bluefish.",
    mapPosition: { top: "20%", left: "65%" },
    coordinates: { lat: 30.2887, lng: -81.3886 },
    access: [
      "Paid pier access. No fishing license required from the pier.",
      "Bait and tackle available at the pier house.",
    ],
    caution: [
      "Water is cooler here than central Florida — species windows shift later in spring.",
      "Strong northeast swells can shut down the pier.",
    ],
    highlights: [
      "Excellent pompano and whiting during spring and fall migrations.",
      "Flounder run is strong in October-November.",
      "King mackerel and cobia from the T-end in warm months.",
    ],
    tactics: [
      { title: "Pompano migration", detail: "Double-drop rigs with sand fleas during March-May and October-November peak windows." },
      { title: "Flounder fall", detail: "Bounce live finger mullet or bucktails near the pilings during the October run." },
      { title: "Drum structure", detail: "Shrimp and cut bait on the bottom around pier pilings for black drum." },
    ],
    primarySpecies: ["pompano", "whiting", "flounder", "black-drum", "sheepshead", "spanish-mackerel"],
    preferredTides: ["incoming", "high"],
    preferredWindDirections: ["W", "SW", "S"],
    avoidWindDirections: ["NE", "E", "ENE"],
    idealWaveRangeFt: [1, 3],
    idealWaterTempRangeF: [60, 78],
    lightPreference: "day",
  },
  {
    slug: "mayport-jetties",
    name: "Mayport Jetties",
    area: "Mayport / Fort George",
    region: "jacksonville",
    type: "Inlet",
    summary:
      "The St. Johns River mouth meets the Atlantic — massive inlet holding bull reds, tarpon, and big drum.",
    mapPosition: { top: "15%", left: "62%" },
    coordinates: { lat: 30.3950, lng: -81.3961 },
    access: [
      "South jetty accessible from Huguenot Memorial Park ($5 vehicle fee).",
      "North jetty from Fort Clinch State Park (Amelia Island side).",
    ],
    caution: [
      "St. Johns River outflow creates some of the strongest current in Florida.",
      "Deep water and sharks — not for beginners without guidance.",
    ],
    highlights: [
      "Bull redfish in the 30-50 inch class from the rocks.",
      "Tarpon stage in the St. Johns mouth June-September.",
      "Flounder migration through the jetty is one of the best in the state.",
    ],
    tactics: [
      { title: "Bull reds", detail: "Cut mullet or live menhaden on heavy bottom rigs fished in the channel current." },
      { title: "Tarpon migration", detail: "Large live bait free-lined in the river mouth during warm months. Expect 100+ lb fish." },
      { title: "Flounder ambush", detail: "Drag bucktails and finger mullet along sand-rock transitions on the falling tide." },
    ],
    primarySpecies: ["redfish", "tarpon", "flounder", "black-drum", "jack-crevalle", "sheepshead"],
    preferredTides: ["outgoing", "incoming"],
    preferredWindDirections: ["W", "SW", "NW"],
    avoidWindDirections: ["NE", "E"],
    idealWaveRangeFt: [1, 5],
    idealWaterTempRangeF: [60, 82],
    lightPreference: "any",
  },
];

export const ruleCards: RuleCard[] = [
  {
    title: "Jetty Park access rule",
    summary:
      "Port Canaveral rules say beach or shore fishing is prohibited in Jetty Park, but a license is not required from the pier.",
    source: "Port Canaveral",
    href: "https://www.portcanaveral.com/docs/default-source/recreation/jetty-park/jetty-park-rules-effective-3-1-19.pdf",
  },
  {
    title: "Snook window",
    summary:
      "FWC says east coast snook harvest is open Feb. 1-May 31 and Sept. 1-Dec. 14, with a permit required if you are taking snook.",
    source: "FWC",
    href: "https://myfwc.com/news/all-news/rec-snook-harvest-0126/",
  },
  {
    title: "Indian River Lagoon redfish",
    summary:
      "FWC currently lists the Indian River Lagoon redfish region as catch-and-release only.",
    source: "FWC",
    href: "https://myfwc.com/fishing/saltwater/recreational/red-drum/",
  },
  {
    title: "Pompano baseline",
    summary:
      'FWC recreational regulations list Florida pompano at 11" fork minimum, 6 per harvester, open year-round.',
    source: "FWC",
    href: "https://myfwc.com/fishing/saltwater/recreational/permit/",
  },
  {
    title: "Shore-based shark permit",
    summary:
      "FWC requires the free shore-based shark fishing permit and course for shark targeting from shore, jetties, bridges, and piers.",
    source: "FWC",
    href: "https://myfwc.com/license/recreational/saltwater-fishing/",
  },
];
