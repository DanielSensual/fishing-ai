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
};

export const spots: SpotDefinition[] = [
  {
    slug: "jetty-park-pier",
    name: "Jetty Park Pier",
    area: "Cape Canaveral",
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
