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
      "Snook harvest is coast- and region-specific; check FWC before keeping fish and carry a snook permit if harvesting.",
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
      "Redfish rules are region-specific in Florida. Check the current FWC zone before keeping fish.",
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
      "The Malcolm E. McLouth Fishing Pier — a 1,200-foot lit pier at the mouth of Port Canaveral inlet. Structure, current, deep water, and cruise ship wakes all in one controlled-access spot. Best first-stop when the inlet is alive.",
    mapPosition: { top: "34%", left: "57%" },
    coordinates: { lat: 28.4082, lng: -80.5922 },
    access: [
      "Park hours are 7:00 AM to 9:00 PM daily. Night fishing is permitted from the pier only (30 min before sunset to 30 min after sunrise).",
      "Parking requires a day pass or annual pass — purchase online at shop.portcanaveral.com or at the gate with credit card. No cash accepted.",
      "No fishing license is required to fish from the pier (Florida pier exemption).",
      "Shore fishing inside the park is prohibited — pier and jetty rocks only.",
      "No pets allowed on the pier or beach.",
      "No glass containers on the beach. No bicycles, skateboards, or scooters on the pier or boardwalk.",
      "Fish-cleaning stations with running water are available at the pier base.",
      "Campground store open Mon–Thu & Sat–Sun 9 AM – 6 PM, Fridays 9 AM – 7 PM. Sells ice, snacks, and basic tackle.",
    ],
    caution: [
      "The inlet stacks current and wind quickly — if the outgoing tide meets a strong NE wind, the seam gets violent fast.",
      "Cruise ship traffic creates large wakes that can swamp the jetty rocks. Watch for departure schedules.",
      "Pier crowding on weekends can compress casting lanes. Arrive before 7 AM or fish the weekdays.",
      "Port Canaveral is a slow-speed, minimum-wake zone — but commercial vessels still throw significant wake at the inlet mouth.",
      "Strong current during tide changes can snap light leaders. Use 20–30 lb fluorocarbon on anything near the rocks.",
    ],
    highlights: [
      "Strong year-round structure bite — sheepshead, black drum, and mangrove snapper hold on the pilings.",
      "One of the best land-based snook spots on the Space Coast during low-light periods.",
      "Incoming tides bring mackerel, tarpon, cobia, and bluefish chasing bait through the inlet.",
      "Outgoing tides flush shrimp and crustaceans from the port basin — the jetty rocks become a feeding lane.",
      "Slack tide is when to fish tight to the structure — current drops and presentations get precise.",
      "Good fallback when the open beach is blown out. The inlet provides shelter from direct swells.",
    ],
    tactics: [
      {
        title: "Sheepshead on structure",
        detail:
          "Fish tight to the pier pilings with live fiddler crabs or shrimp on a 1/0 hook with a short 18-inch fluorocarbon leader. Use just enough weight to hold bottom. They hit light — set the hook on the second tap, not the first.",
      },
      {
        title: "Black drum — bottom rig",
        detail:
          "Fish-finder rig with a 3 oz egg sinker, 30 lb leader, and a 3/0 circle hook baited with half a blue crab or cut shrimp. Cast near the jetty rocks on the incoming tide. Let them eat — circle hooks set themselves.",
      },
      {
        title: "Pompano & whiting — double drop",
        detail:
          "Standard double-dropper rig with No. 2 hooks and a 2–4 oz pyramid sinker. Bait with sand fleas, fresh-peeled shrimp, or Fishbites. Work the clean side of the current, not the dead center of the cut. Short casts outproduce long bombs here.",
      },
      {
        title: "Snook — low light free-line",
        detail:
          "Free-line a live pin fish or finger mullet with no weight on 20 lb fluorocarbon leader along the current seam during dusk or after dark. Fish the change in current direction, not the center of the flow. Set the drag loose — they'll run.",
      },
      {
        title: "Spanish mackerel — incoming tide",
        detail:
          "When the tide pushes in and you see bait flipping on the surface, throw a 1 oz silver spoon or Got-Cha plug on a 7.5 ft medium rod with 12 lb braid. Fast retrieve, no pause. The bite is violent and short — be ready with a second cast.",
      },
      {
        title: "Mangrove snapper — night bite",
        detail:
          "At night under the pier lights, free-line live shrimp on a small 1/0 hook with 15 lb fluoro leader. Let it drift naturally into the shadow line. They're leader-shy — the lighter you go, the more you'll hook.",
      },
      {
        title: "Bait collection",
        detail:
          "Throw a cast net in the sandy areas near the jetty base for pilchards and greenbacks. Or use a sabiki rig off the pier to load up on bait. Avoid casting the net near the rocks — you'll shred it.",
      },
    ],
    primarySpecies: ["sheepshead", "black-drum", "pompano", "snook", "whiting", "mangrove-snapper", "spanish-mackerel", "redfish"],
    preferredTides: ["incoming", "high"],
    preferredWindDirections: ["N", "NNE", "NE", "ENE", "E", "SE"],
    avoidWindDirections: [],
    idealWaveRangeFt: [1, 3.5],
    idealWaterTempRangeF: [68, 80],
    lightPreference: "any",
    accessHours: { open: "07:00", close: "21:00" },
  },
  {
    slug: "cocoa-beach-surf",
    name: "Cocoa Beach Surf",
    area: "Cocoa Beach",
    region: "space-coast",
    type: "Surf",
    summary:
      "The mobile, trough-reading play for pompano, whiting, and drum. Five miles of fishable beach between 5th Street and Patrick AFB — walk until the water tells you to stop.",
    mapPosition: { top: "52%", left: "72%" },
    coordinates: { lat: 28.3200, lng: -80.6076 },
    access: [
      "Florida saltwater fishing license required for shoreline fishing.",
      "Public beach access at multiple street-end parks. Best parking at Lori Wilson Park, Shepard Park, or the metered lots along A1A.",
      "No vehicle beach driving — this is a walk-and-scout fishery.",
      "Tackle carts strongly recommended. You'll move 3–5 times until you find the right trough.",
      "Dawn is prime time. Beach crowds thin out the fishing options by 10 AM on weekends.",
    ],
    caution: [
      "Rip current risk is real — never wade deeper than waist without knowing the break pattern. Check NWS surf forecast.",
      "A dirty, blown-out surf line after a NE blow will kill the pompano plan. If the water is chocolate brown, drive to the inlet instead.",
      "Stingrays hold in the troughs. Shuffle your feet, every single step.",
      "Portuguese man-of-war wash up periodically in winter — check the sand before you set up.",
      "School shark traffic increases when mullet are running. Watch for bowed rods and move if sharks are eating everything.",
    ],
    highlights: [
      "Best surf pompano water on the Space Coast — fish the color break between green and brown water.",
      "Whiting are the most reliable producer in any conditions. If nothing else bites, whiting will.",
      "First trough in 2–3 ft of water is the money zone. The second bar is bonus territory.",
      "Black drum stack up in the deeper holes during February-March cold snaps.",
      "Snook cruise the beach during September mullet run — topwater blowups on calm mornings.",
      "Excellent water-reading lab — learn to read cuts, color changes, and trough depth here and it translates everywhere.",
    ],
    tactics: [
      {
        title: "Pompano — double drop rig",
        detail:
          "Two No. 2 short-shank hooks on dropper loops, 18 inches apart, with a 2–3 oz pyramid sinker on the bottom. Bait with sand fleas (hook through the horn), fresh-peeled shrimp, or Fishbites in orange or pink. Cast to the first trough on incoming tide. Don't reel — let the current move the bait. If no bite in 10 minutes, move 50 yards.",
      },
      {
        title: "Whiting — light bottom rig",
        detail:
          "Single No. 4 hook on a 12-inch fluorocarbon leader with a 1 oz pyramid sinker. Small pieces of shrimp, cut sandworm, or Fishbites. Cast into the inside edge of the first trough. Whiting hit fast and hard — you'll feel a sharp double-tap. Set immediately.",
      },
      {
        title: "Black drum — Carolina rig",
        detail:
          "3/0 circle hook on 25 lb fluorocarbon, 2 oz egg sinker running on the main line above a barrel swivel. Half a blue crab, large shrimp, or cut clam. Cast past the second bar and let it sit. They'll hit slow — wait for the rod tip to load before you lift.",
      },
      {
        title: "Surf snook — mullet run",
        detail:
          "September through November when mullet are running the beach. Throw a 4-inch white paddletail on a 3/8 oz jighead with 30 lb fluoro leader on 15 lb braid. Parallel the beach at first light. The hit feels like you snagged a log that starts moving.",
      },
      {
        title: "Reading the troughs",
        detail:
          "Walk the beach at low tide first. Look for darker green water between the sandbars — that's the trough. Look for cuts in the outer bar where water flows through — that's where fish enter and exit. Sand fleas digging in wet sand = pompano territory.",
      },
    ],
    primarySpecies: ["pompano", "whiting", "black-drum", "snook", "redfish"],
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
      "The channel cuts run 500 feet wide and 46 feet deep here — this is a current-driven ambush fishery along the port seawalls and riprap where snook, drum, and jacks stage on every tide change.",
    mapPosition: { top: "43%", left: "49%" },
    coordinates: { lat: 28.4100, lng: -80.6200 },
    access: [
      "Florida saltwater fishing license required for shoreline/seawall fishing.",
      "Access points along George King Blvd and Glen Cheek Dr on the south side of the port.",
      "Port Canaveral is a working harbor — obey all posted no-fishing and security zones near cruise terminals.",
      "Best access after 6 PM when commercial traffic slows and the shadow lines form along the seawalls.",
      "Parking available at Rodney Ketcham Park and Freddie Patrick Park.",
    ],
    caution: [
      "Heavy commercial and cruise ship traffic — wakes can be sudden and large. Keep your gear compact and stay alert.",
      "Strong current during mid-tide makes light tackle useless. Minimum 20 lb braid with 30 lb fluoro leader near the rocks.",
      "Port security will stop you if you wander into restricted zones near the cruise terminals. Know the boundaries.",
      "The channel bottom drops fast — don't wade. This is a cast-from-shore game.",
      "Manatees frequent the warm outflows — if you hook one, cut the line immediately.",
    ],
    highlights: [
      "Current-driven snook lane — fish stack on the seam where moving water meets slack water behind the riprap.",
      "Works even when the surf side is blown out. The port provides wind shelter from NE and E.",
      "Black drum in the 20–40 lb class work the barnacles on the channel walls during winter.",
      "Jack crevalle blitz when bait gets pushed through the channel at speed — explosive topwater action.",
      "Sheepshead on the riprap year-round. If you can see barnacles, there are sheepshead.",
    ],
    tactics: [
      {
        title: "Snook — current seam",
        detail:
          "Fish a live pinfish or large shrimp on a 3/0 circle hook with 30 lb fluoro leader, free-lined with no weight. Cast upcurrent of the seam where moving water breaks off the riprap structure. Let the bait drift naturally into the eddy. Snook sit facing into the current and ambush from behind the rocks.",
      },
      {
        title: "Black drum — barnacle wall",
        detail:
          "3/0 circle hook with half a blue crab or large shrimp, 2 oz egg sinker, 30 lb leader. Drop straight down along the seawall pilings at the base. Let the bait sit — drum use their chin barbels to find food, not their eyes. Night bite is best.",
      },
      {
        title: "Sheepshead — riprap vertical",
        detail:
          "1/0 hook, 15 lb fluoro, small piece of shrimp or fiddler crab. Drop right against the barnacle-covered riprap. They hit light — you'll feel a barely perceptible tick. Short-stroke the hookset, don't swing for the fences.",
      },
      {
        title: "Jack crevalle — topwater blitz",
        detail:
          "When you see bait showering on the surface, throw any loud topwater plug or 1 oz silver spoon on 30 lb braid. Speed reel. Jacks don't care about finesse — they care about speed. Be ready for a fight that's way above the fish's weight class.",
      },
      {
        title: "Redfish — riprap edges",
        detail:
          "Cut mullet or live shrimp on a fish-finder rig, cast parallel along the riprap edge on incoming tide. Reds cruise the edges looking for crabs getting flushed out of the rocks. The bite feels like a slow pull — don't jerk, just reel tight and lift.",
      },
    ],
    primarySpecies: ["snook", "black-drum", "redfish", "sheepshead", "jack-crevalle"],
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
      "Thirteen miles of undeveloped federal beach inside Canaveral National Seashore — no condos, no crowds, no bait shops. This is the scouting fishery where you read water, walk until you find the cut, and have the beach to yourself.",
    mapPosition: { top: "18%", left: "66%" },
    coordinates: { lat: 28.6300, lng: -80.6600 },
    access: [
      "Canaveral National Seashore entrance fee required ($20/vehicle or America the Beautiful pass).",
      "Gates open at 6 AM (sunrise), close at 6 PM in winter and 8 PM in summer. You MUST be out by closing.",
      "Always check for SpaceX/NASA launch closures before driving — the park closes within a blast radius and you won't know until you hit the gate. Check kennedyspacecenter.com or NPS alerts.",
      "Numbered parking lots along the beach road. Lots 1–5 are closest to the fishable structure. Lot 13 is the remote walk-in end.",
      "No beach driving permitted. Bring a tackle cart — some lots require a 200-yard walk to the surf.",
      "No bait shops in the park. Stock up at Cocoa Beach Fishing Center or Waters Edge before the 20-minute drive.",
      "Florida saltwater fishing license required.",
    ],
    caution: [
      "NASA/SpaceX launch-day closures can wipe out the plan even when conditions are perfect. Check the launch schedule the night before.",
      "Exposure is higher here than anywhere on the Space Coast — no wind shelter, no buildings, no cover. If the wind swings NE at 15+, you're fishing sideways.",
      "Remote beach with no lifeguards. Rip currents are more dangerous here because there's no one to see you. Fish with a buddy.",
      "Rattlesnakes and gators are present in the dune areas. Stick to the sand and surf line.",
      "Sun exposure is extreme — no shade for miles. Full sun protection is mandatory, not optional.",
    ],
    highlights: [
      "Lowest fishing pressure on the Space Coast. If you find the right trough, you'll have it alone.",
      "Cleaner water than Cocoa Beach — less runoff, more visibility, better pompano action.",
      "Higher upside for finding untouched trough structure that hasn't been bombed by 50 rods all morning.",
      "Whiting stack up in the troughs and can produce limits before 8 AM.",
      "Occasional cobia swimming the beach in spring — you'll see them cruising the surface.",
      "Photography is world-class. The backdrop of untouched dunes and the Vehicle Assembly Building on the horizon is unique to this beach.",
    ],
    tactics: [
      {
        title: "Pompano — mobile scout rig",
        detail:
          "Same double-drop rig as Cocoa Beach, but the strategy is different here. Walk the beach first with no rod. Look for the sharpest-defined trough with green-clean water. Look for sand flea holes in the wet sand — that's your target zone. Then set up. If no bite in 15 minutes, keep moving south.",
      },
      {
        title: "Whiting — volume play",
        detail:
          "No. 4 hook, 1 oz pyramid, small shrimp or Fishbites. Cast 30 yards into the first trough. Whiting travel in schools — once you catch one, stay put. They'll bite every 2–3 minutes until the school moves. This is your backup plan when pompano aren't cooperating.",
      },
      {
        title: "Black drum — deep trough",
        detail:
          "Larger bait (half crab, large shrimp) on a 3/0 circle hook with a Carolina rig. Target the deeper sections between sandbars where the water looks noticeably darker. Drum hold in these deeper pockets waiting for food to wash through the cuts.",
      },
      {
        title: "Closure discipline",
        detail:
          "Check three things before the drive: 1) NPS park status (operational?), 2) NASA/SpaceX launch schedule (any window today?), 3) NWS surf forecast (fishable conditions?). If any of the three fails, pivot to Jetty Park or Cocoa Beach instead of burning the morning.",
      },
    ],
    primarySpecies: ["pompano", "whiting", "black-drum", "snook", "redfish"],
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
      "Florida's most famous snook inlet — Sebastian Inlet State Park funnels Indian River Lagoon water into the Atlantic through a narrow, high-current rock cut. Monster snook, explosive jack crevalle blitzes, and year-round diversity from shore.",
    mapPosition: { top: "50%", left: "70%" },
    coordinates: { lat: 27.8578, lng: -80.4486 },
    access: [
      "Sebastian Inlet State Park — $8 per vehicle entry fee. Open 24 hours for fishing.",
      "Jetty fishing is open 24/7 — bring headlamps and glow sticks for the night bite.",
      "North jetty (Brevard side) and south jetty (Indian River County side) both fishable from shore.",
      "Catwalks along both jetties provide access to deeper water without climbing rocks.",
      "Bait shop and fish-cleaning station available inside the park.",
      "Florida saltwater fishing license required unless fishing from the catwalks (check current pier exemption status).",
      "Campground reservations available through ReserveAmerica — book early for winter snook season.",
    ],
    caution: [
      "Extremely strong current on outgoing tide — this is not a light tackle spot. Minimum 30 lb braid, 40 lb fluoro leader for snook.",
      "Rocks are slippery with algae, especially on the ocean side. Korkers or studded wading boots are not optional, they're mandatory.",
      "Waves wash over the jetty during strong E/NE swells. People have been swept off. Check the surf forecast.",
      "Crowds are heavy on weekends and during snook season. Night fishing (weeknights) is the local move for space.",
      "Sharks patrol the inlet mouth — land your fish fast and don't leave stringers in the water.",
    ],
    highlights: [
      "Florida's #1 land-based snook spot — fish over 40 inches are caught from the rocks regularly.",
      "Current funnels baitfish creating explosive topwater blitzes of jacks, blues, and mackerel.",
      "Both jetties fishable from shore — north jetty for ocean side, south jetty for the calmer lagoon edge.",
      "Flounder hold in the sand-rock transition zones at the base of both jetties during fall migration.",
      "Night bite under the catwalk lights is legendary — snook, snapper, and big jacks stack in the shadow lines.",
      "One of the few inlets where you can sight-fish tarpon from the rocks during late spring and summer.",
    ],
    tactics: [
      {
        title: "Snook — night jetty",
        detail:
          "6–8 inch white or chartreuse paddletail on a 3/4 oz jighead, 40 lb fluoro leader on 30 lb braid. Cast upcurrent and let the bait swing through the shadow line created by the catwalk lights. The hit will feel like you snagged the bottom — then the bottom will start running. Keep the drag set at 25% of line strength.",
      },
      {
        title: "Pompano — south beach",
        detail:
          "Work the sandy beach just south of the south jetty with a double-drop rig during fall (Oct-Nov) and spring (March-April) migration. Sand fleas and Fishbites. The pompano stage where the inlet current meets the longshore drift.",
      },
      {
        title: "Spanish mackerel — inlet mouth",
        detail:
          "When you see bait spraying on the surface at the inlet mouth, throw a 1 oz Gotcha plug or silver spoon on 12–15 lb braid. Burn the retrieve. Mackerel won't hit a slow-moving bait. Wire leader optional — they'll cut 20 lb fluoro occasionally.",
      },
      {
        title: "Flounder — rock transitions",
        detail:
          "Bounce a 3/8 oz white bucktail tipped with a strip of fresh-cut mullet belly along the sand-rock transitions at the base of the jetty. Flounder lie flat waiting for bait to come to them. The bite feels like a heavy weight — wait 3 seconds before setting.",
      },
      {
        title: "Jack crevalle — topwater chaos",
        detail:
          "When the jacks are busting bait on the surface, any topwater or fast-retrieve spoon will work. Use 30 lb braid minimum — jacks fight above their weight class. The first run will burn 40 yards of line before you can think.",
      },
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
      "The 'Redfish Capital of the World' — crystal-clear, ultra-shallow seagrass flats inside Canaveral National Seashore. Pristine sight-fishing for tailing redfish, gator trout in deep potholes, and total backcountry solitude.",
    mapPosition: { top: "25%", left: "55%" },
    coordinates: { lat: 28.7833, lng: -80.7756 },
    access: [
      "Kayak, canoe, or small skiff (draft under 12 inches) only. No airboats permitted in the national seashore.",
      "Primary launches: Eddy Creek (south side), Bio Lab Road boat ramp (Titusville side), Riverbreeze Park (Oak Hill).",
      "Parts of the lagoon are inside Canaveral National Seashore — check for NASA/SpaceX launch closures.",
      "No motorized boats in the 'no-motor zones' around the bird islands. Trolling motors only in most flats areas.",
      "Florida saltwater fishing license required. Indian River Lagoon redfish are currently catch-and-release only.",
      "No bait shops inside the lagoon. Stock up in Titusville (Mosquito Lagoon Bait & Tackle, 451 Marina Rd).",
    ],
    caution: [
      "Extremely shallow — run aground at anything over idle speed. Pole, paddle, or use trolling motor ONLY on the flats.",
      "Mosquitoes are brutal outside of December-February. The name is earned. Heavy DEET or Thermacell is mandatory.",
      "No-see-ums at dawn and dusk during warm months can be worse than the mosquitoes. Long sleeves.",
      "Oyster bars are razor-sharp. Wear booties if you plan to wade. Cuts get infected fast in warm lagoon water.",
      "Limited cell coverage in the backcountry. File a float plan and carry a VHF radio or Garmin inReach.",
    ],
    highlights: [
      "World-class sight fishing for tailing redfish on crystal-clear grass flats — fish see you before you see them.",
      "Gator trout (seatrout over 25 inches) hold in the sandy potholes amid the seagrass. Deeper holes = bigger fish.",
      "Untouched, undeveloped ecosystem with minimal boat traffic. If you pole 500 yards off the main channel, you're alone.",
      "Black drum school on the oyster bars during winter — you'll hear them crunching shells before you see them.",
      "Snook have expanded into the lagoon system and are holdover year-round now around creek mouths and mangrove edges.",
      "One of the few places in Florida where the fishing experience hasn't changed in 50 years.",
    ],
    tactics: [
      {
        title: "Sight-fish reds — gold spoon",
        detail:
          "Pole or drift the flats watching for tailing fish (copper-gold flash or 'pushes' in the grass). Once spotted, lead the fish by 3–5 feet with a weedless gold spoon (Johnson Sprite 1/4 oz) or a live shrimp under a popping cork. Cast ahead of the direction they're moving, not on top of them. They'll spook in 6 inches of water.",
      },
      {
        title: "Gator trout — pothole hunting",
        detail:
          "Look for sandy potholes (white spots) amid the dark seagrass. Big trout hold in these cleared-out spots waiting to ambush. Throw a 3-inch soft plastic on a 1/8 oz jighead in root beer or natural color. Let it sink to the bottom of the pothole, then twitch it. The eat is a sharp thump.",
      },
      {
        title: "Black drum — oyster bars",
        detail:
          "Fresh shrimp on a 1/0 circle hook with a light split shot. Cast onto the up-current edge of an exposed oyster bar and let the bait wash off the edge into the deeper trough. Drum cruise the bar edges looking for crabs and worms. Patience — they take their time.",
      },
      {
        title: "Snook — creek mouths",
        detail:
          "Focus on the creek and channel mouths on outgoing tide. Snook stage at the point where moving water meets open flat. Live finger mullet free-lined or a 4-inch paddletail on 20 lb fluoro. Fish the last 2 hours of outgoing — that's when the concentration peaks.",
      },
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
      "Wide-open lagoon flats and causeway bridges offering year-round seatrout, redfish, and snook. Melbourne Causeway and Eau Gallie Causeway create shadow lines and current that stack predators right at your feet.",
    mapPosition: { top: "60%", left: "55%" },
    coordinates: { lat: 28.0836, lng: -80.6081 },
    access: [
      "Wade, kayak, or fish from causeway catwalks. Melbourne Causeway, Eau Gallie Causeway, and Pineda Causeway all have shore access.",
      "Free parking at causeway parks on both sides. Kayak launches at Ballard Park and Front Street Park.",
      "Florida saltwater fishing license required. Indian River Lagoon redfish are catch-and-release only.",
      "Bridge fishing after dark requires headlamps. The catwalks are narrow — respect other anglers' space.",
      "Bait available at Whitey's (Melbourne Beach). Stock up before crossing the causeway.",
    ],
    caution: [
      "Boat traffic around causeway bridges is heavy on weekends — stay visible if wading. Wear a light or bright shirt.",
      "Stingrays are very active on the grass flats, especially in warmer months. Shuffle your feet relentlessly.",
      "Bridge pilings create strong current during tide changes. Keep your drag set — snook will wrap you around the pilings instantly.",
      "Manatee zones restrict boat speeds but kayakers still need to be alert to boat wakes.",
      "Water quality in parts of the Indian River has declined in recent years — algae blooms can shut down fishing temporarily.",
    ],
    highlights: [
      "Excellent seatrout fishing on grass flats adjacent to the causeways — popping cork territory.",
      "Bridge pilings hold snook year-round. The night bite under causeway lights is the most reliable snook fishery in the region.",
      "Mangrove snapper stack up around dock pilings and seawalls during summer — light tackle finesse fishing at its best.",
      "Easy shore access from multiple causeways means you're never more than 15 minutes from fishable water.",
      "Kayak anglers can reach oyster bar flats and mangrove shorelines that boats can't access.",
      "Redfish tail on the shallower grass flats during high tide windows — sight-fishing from a kayak is productive.",
    ],
    tactics: [
      {
        title: "Trout — popping cork",
        detail:
          "Live shrimp under a popping cork set 18–24 inches deep over grass flats in 2–4 feet of water. Pop the cork sharply every 15 seconds to attract trout. The eat will pull the cork under — wait for it to stay down, then set. Best on incoming tide when trout push onto the flats to feed.",
      },
      {
        title: "Bridge snook — night shadow",
        detail:
          "Live mullet or 5-inch white paddletail on 30 lb fluoro leader. Cast upcurrent and let the bait sweep into the shadow line created by bridge lights. Snook face into the current on the shadow/light edge waiting for bait to silhouette. Set the drag to 30% — they'll run for the pilings immediately.",
      },
      {
        title: "Mangrove snapper — dock pilings",
        detail:
          "12 lb fluoro leader, No. 1 hook, small live shrimp or cut shrimp. Drop right against dock pilings and seawall edges. Snapper are leader-shy — the lighter you go, the more bites you get. Chum with crushed shrimp to concentrate them.",
      },
      {
        title: "Redfish — oyster bar edges",
        detail:
          "Gold spoon or live shrimp on a weedless hook. Target the edges of exposed oyster bars on the higher tide stages. Reds cruise the bar perimeter looking for crabs. Cast to the slightly deeper water just off the bar edge, not on top of it.",
      },
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
      "One of Northeast Florida's deepest and most productive inlets — the Halifax River empties through a narrow rock cut with 30+ feet of depth at the mouth. Big snook, flounder migration, and summer tarpon all accessible from the jetty rocks.",
    mapPosition: { top: "40%", left: "75%" },
    coordinates: { lat: 29.0725, lng: -80.9270 },
    access: [
      "North jetty accessible by foot from Lighthouse Point Park ($10 vehicle entry).",
      "South jetty accessible from Smyrna Dunes Park (free, but limited hours — closes at sunset).",
      "Jetty rocks are large and uneven — wear studded boots or Korkers. Sneakers will get you hurt.",
      "Florida saltwater fishing license required.",
      "No bait shops at the jetties. NSB Bait and Tackle (197 N Causeway) is the closest shop — 10 minute drive.",
      "Parking fills early on weekends at Lighthouse Point Park. Arrive before 7 AM.",
    ],
    caution: [
      "Strong current during mid-tide changes — 30 lb braid minimum with 40 lb fluoro leader near the rocks.",
      "Sharks are common near the inlet mouth — bull sharks feed on bait in the channel. Land fish fast.",
      "Waves wash over the north jetty during strong NE swells. If water is coming over the rocks, don't go out.",
      "Boat traffic through the inlet is constant — don't cast across the channel when boats are transiting.",
      "Rocks are covered in sharp barnacles. Carry bandages — everyone bleeds the first time.",
    ],
    highlights: [
      "Deep inlet holds big snook in the 30–40 inch class. Night fishing at the rocks is the local play.",
      "Flounder run through the inlet during fall migration (October-November) — one of the best flounder spots in Volusia.",
      "Spanish mackerel school at the mouth in packs when water temp hits 72°F+. Aggressive, fast-paced action.",
      "Summer tarpon (June-August) stage in the inlet channel — sight-cast from the rocks at dawn.",
      "Mangrove snapper hold at the base of the jetty rocks year-round. Night fishing with chum is deadly.",
      "Ponce Inlet Lighthouse visible from both jetties — the landmark helps you orient in low light.",
    ],
    tactics: [
      {
        title: "Snook — night jetty bump",
        detail:
          "Heavy 3/4 oz jighead with a 6-inch paddletail in white or chartreuse on 40 lb fluoro. Cast upcurrent and bump the jig along the bottom near the rock edges. Snook ambush from the rock crevices. The hit feels like a hard stop — set immediately and reel hard to keep them out of the rocks.",
      },
      {
        title: "Flounder — bucktail drag",
        detail:
          "3/8 oz white bucktail tipped with a strip of fresh mullet belly. Cast to the sandy transitions between rock and sand at the jetty base. Drag slowly along the bottom — flounder hit and hold. Wait 3 full seconds, then set with a long sweep.",
      },
      {
        title: "Tarpon — dawn free-line",
        detail:
          "Large live mullet (8–10 inches) free-lined in the main channel during June-August dawn windows. 50 lb leader, 6/0 circle hook, heavy spinning or conventional gear. When the tarpon rolls on the surface, cast 20 feet ahead of the direction it's moving. Let it eat — don't set on the jump.",
      },
      {
        title: "Spanish mackerel — speed retrieve",
        detail:
          "1 oz Gotcha plug or silver casting spoon on 12 lb braid. Maximum speed retrieve — mackerel hit moving targets. No wire leader needed but add 12 inches of 30 lb fluoro to prevent cutoffs from teeth. Work the inlet mouth on incoming tide.",
      },
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
      "Premium surf fishing with drive-on beach access — pull your truck onto the sand and fish from your tailgate. Known for pompano migration runs, the legendary September mullet run, and warm-water species year-round.",
    mapPosition: { top: "35%", left: "68%" },
    coordinates: { lat: 29.0258, lng: -80.9200 },
    access: [
      "Drive-on beach access — $20/day vehicle fee during staffed hours. Pay at the beach ramp.",
      "Beach ramps at Flagler Ave (27th Ave ramp), 3rd Avenue, and Mary McLeod Bethune Beach.",
      "Set up south of the main beach-goer zones (south of Flagler) for fewer swimmers and surfers.",
      "Florida saltwater fishing license required for surf fishing.",
      "NSB Bait and Tackle (197 N Causeway) is the go-to shop. Open as early as 5 AM.",
      "Soft sand sections can trap 2WD vehicles after rain. 4WD recommended or stick to the hard-packed sand near the water line.",
    ],
    caution: [
      "Known as 'Shark Bite Capital of the World' — don't wade in murky water, especially near the inlet during bait runs.",
      "Strong longshore current during NE wind events. If you can feel the sand moving under your feet, the fish can feel you.",
      "Vehicles drive the beach — watch your rod holders and keep kids/pets close to your setup.",
      "Portuguese man-of-war and jellyfish wash up periodically, especially after strong onshore winds.",
      "If the surf is blown out and chocolate brown, the fishing is dead. Drive to Ponce Inlet instead.",
    ],
    highlights: [
      "Drive right up to your fishing spot — the ultimate surf fishing convenience. Set up chairs. Open the cooler.",
      "Excellent pompano and whiting during fall (Oct-Nov) and spring (March-April) migrations.",
      "The September mullet run brings tarpon, snook, jacks, and bluefish to the beach in absolute chaos.",
      "Warm water keeps some species (especially whiting) active year-round — unlike north of Daytona.",
      "Long, flat beach gives you miles of fishable troughs to scout if one section isn't producing.",
    ],
    tactics: [
      {
        title: "Pompano — drive and scout",
        detail:
          "Drive the beach slowly and look for green water with visible cuts in the sandbars. Park there. Double-drop rig with No. 2 hooks, sand fleas or Fishbites, 2–3 oz pyramid sinker. Cast to the first trough on incoming tide. No bite in 15 minutes — drive 200 yards and try again.",
      },
      {
        title: "Mullet run mayhem",
        detail:
          "September-October when you see bait spraying along the beach. Throw a 5-inch white paddletail on a 1/2 oz jighead with 30 lb fluoro on 20 lb braid. Work parallel to the beach through the bait school. Expect snook, tarpon, jacks, and bluefish — anything that eats is fair game.",
      },
      {
        title: "Whiting — reliable backup",
        detail:
          "No. 4 hook, small shrimp pieces, 1 oz pyramid sinker. Cast into the first trough. Whiting are the most reliable bite in any conditions — they'll eat when nothing else will. Good for filling the cooler when the glamour species aren't cooperating.",
      },
      {
        title: "Drum — deep holes",
        detail:
          "3/0 circle hook with half a blue crab or large shrimp on a Carolina rig. Target the darker water between the sandbars during February-March. Black drum stage in deeper pools during cold snaps. Let the bait sit — they'll find it.",
      },
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
      "Iconic Daytona Beach boardwalk pier extending 1,000 feet into the Atlantic — the most accessible pier on the Volusia Coast. Rod rentals, bait shop on site, no license required. King mackerel and cobia from the T-end draw serious anglers in warm months.",
    mapPosition: { top: "20%", left: "73%" },
    coordinates: { lat: 29.2242, lng: -81.0087 },
    access: [
      "Paid fishing admission (rates vary by season, typically $6–8 adults). Spectator admission lower.",
      "Rod rentals and tackle available at the pier house — you can fish without bringing any gear.",
      "No fishing license required from the pier (Florida pier exemption).",
      "Open daily, typically 6 AM to midnight. Hours vary by season — call ahead (386) 228-0006.",
      "Boardwalk restaurants and shops adjacent — good for families mixing fishing with beach day.",
      "The T-end gets claimed early by king mackerel anglers on warm mornings. Arrive at opening for prime spots.",
    ],
    caution: [
      "Crowded on weekends and holidays — casting lanes get tight. Share space and communicate with neighbors.",
      "King mackerel anglers using heavy gear and live bait kite rigs take priority at the T-end. Don't cast over their lines.",
      "Strong NE swells can shut down safe pier operations. Check conditions before driving.",
      "Pelicans and seagulls will steal your bait if you don't watch it. Seriously — they're aggressive.",
      "The walk to the T-end is long. Bring a cart for heavy tackle.",
    ],
    highlights: [
      "Year-round pier fishing with distinct seasonal peaks: pompano/whiting (winter-spring), mackerel/cobia (spring-summer), drum (fall-winter).",
      "No license required — the easiest entry point for beginners and tourists who want to try fishing.",
      "King mackerel run from April through October. Fish in the 20–40 lb class from the T-end.",
      "Cobia sight-fishing from the pier in March-May — watch for dark shapes cruising near the surface.",
      "Sheepshead hold on the pilings year-round — the most reliable bite when nothing else is working.",
      "Pier lights attract bait at night, which brings snook, snapper, and jacks under the structure.",
    ],
    tactics: [
      {
        title: "Pompano — pier bottom rig",
        detail:
          "Double-drop rig with No. 2 hooks, sand fleas or shrimp, 2–3 oz pyramid sinker. Fish the upcurrent side of the pier in the first 200 feet during winter and spring. Pompano travel close to the beach — you don't need to be at the T-end.",
      },
      {
        title: "Sheepshead — piling drop",
        detail:
          "Live shrimp or fiddler crab on a 1/0 hook with 15 lb fluoro and a small split shot. Drop straight down next to the pilings. Sheepshead hit like they're nibbling — feel for the lightest tap, then short-stroke the hookset upward.",
      },
      {
        title: "Cobia — sight cast",
        detail:
          "Sight-fish cobia cruising past the pier in March-May. Pre-rig a 1 oz jig with a 4-inch curly tail in brown or green, 30 lb fluoro leader. When you spot a cobia shadow, pitch the jig 10 feet ahead of the fish, let it sink, and twitch it. They'll either eat it or ignore it — no second chances.",
      },
      {
        title: "King mackerel — live bait",
        detail:
          "Live goggle-eye, blue runner, or threadfin on a stinger rig (two treble hooks) with wire leader, fished on a balloon or kite from the T-end. 30 lb conventional outfit. When the balloon dips, free-spool for 5 seconds, engage the drag, and reel tight. Don't strike — just reel.",
      },
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
      "The world's longest fishing pier — remnants of the old Sunshine Skyway Bridge converted into two massive piers spanning deep Tampa Bay water. Open 24/7, 365 days. Sheepshead on the pilings, tarpon in the channel, kingfish from the T-end.",
    mapPosition: { top: "55%", left: "30%" },
    coordinates: { lat: 27.6154, lng: -82.6534 },
    access: [
      "Open 24 hours a day, 7 days a week, 365 days a year. No exceptions.",
      "$4 per vehicle entry fee. No fishing license required from the pier.",
      "North pier (Pinellas/St. Pete side) and south pier (Manatee/Palmetto side) — both operational.",
      "South pier is longer (1.5 miles) with deeper water and better access to the main shipping channel.",
      "Bait shops on both piers open 24/7 — live shrimp, frozen bait, tackle, rod rentals, snacks, ice.",
      "North pier bait shop: (727) 865-0668. South pier: (941) 729-0117.",
      "The walk to the end is over a mile on the south pier. Bring a cart, water, and sunscreen. There's no shade past the bait shop.",
    ],
    caution: [
      "Strong currents around the bridge pilings — heavy tackle (30 lb+) recommended for anything near the pilings.",
      "The walk to the T-end is 1.5 miles on the south pier. You will be in the sun the entire time. Dehydration is real.",
      "Tarpon hooked in the channel can spool a reel in seconds. Heavy conventional gear only for tarpon.",
      "Night fishing is productive but the pier is long and dark past the bait shop. Bring headlamps and glow sticks.",
      "Wind exposure is extreme on the open bridge structure. Gulf winds hit unobstructed. Secure your gear.",
    ],
    highlights: [
      "World-class sheepshead fishing around the massive bridge pilings — they're covered in barnacles and holding fish all year.",
      "Tarpon migrate through the Skyway channel in summer (May-August). Fish over 100 lbs are hooked from the pier regularly.",
      "Kingfish, cobia, and Spanish mackerel from the deep-water T-end sections.",
      "Mangrove snapper stack up at the piling bases — chum and patience produce consistent catches.",
      "24/7 access means you can fish the prime dawn, dusk, and night windows without worrying about park hours.",
      "One of the only piers in Florida where you can fish 40+ feet of water from shore.",
    ],
    tactics: [
      {
        title: "Sheepshead — piling vertical",
        detail:
          "Live shrimp or fiddler crab on a 1/0 hook with 15 lb fluoro leader and a small split shot. Drop straight to the base of the concrete pilings. Keep line tight and feel for the lightest tap. Sheepshead have hard mouths — use sharp hooks and short-stroke the hookset. Sheepshead are here 12 months a year. The most reliable bite on the pier.",
      },
      {
        title: "Tarpon — heavy channel",
        detail:
          "Live mullet (10–12 inches), live crab, or threadfin herring on a 7/0 circle hook with 80 lb fluoro leader, fished on heavy spinning (50 lb braid) or conventional gear. Free-line in the channel current at the T-end. When the tarpon eats, reel tight and DO NOT set the hook — circle hooks do the work. Clear the area — tarpon runs and jumps will cross every line around you.",
      },
      {
        title: "Mangrove snapper — chum and finesse",
        detail:
          "Chum with small pieces of cut shrimp and sardine to draw snapper out of the pilings. Fish a small No. 2 hook with a tiny piece of shrimp or cut sardine on 10 lb fluoro — no weight. Let it drift with the current into the chum slick. Snapper are extremely leader-shy. Three-pound test is not too light.",
      },
      {
        title: "Spanish mackerel — fast spoon",
        detail:
          "1 oz silver spoon or Gotcha plug on 12–15 lb braid. Fast retrieve parallel to the pier. Mackerel run in schools — when one hits, cast back to the same spot immediately. Add 12 inches of 30 lb fluoro to prevent cutoffs. The bite happens in 10-minute windows, then they move on.",
      },
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
      "Pinellas County's premier fishing destination — 1,136 acres of beaches, flats, seagrass, mangroves, two fishing piers, and Bunces Pass. Wade-fishing for snook on white sand Gulf flats at sunrise is as good as it gets in Tampa Bay.",
    mapPosition: { top: "60%", left: "25%" },
    coordinates: { lat: 27.6236, lng: -82.7375 },
    access: [
      "Pinellas County park — $5 per vehicle entry fee. Open from sunrise to sunset (vehicle must exit by closing).",
      "Gulf Pier (500 ft) and Bay Pier (1,000 ft) — both fishable. No license required from the piers.",
      "Extensive wade-fishing shoreline on the Gulf side, North Beach, and the Arrowhead area.",
      "Kayak launches at the main boat ramp and the North Beach parking area.",
      "Florida saltwater fishing license required for shore and wade fishing (not needed on the piers).",
      "No bait shops inside the park — Skyway Bait & Tackle (Palmetto) is the closest. Stock up before the drive.",
    ],
    caution: [
      "Stingrays are extremely active on the Gulf flats — shuffle every step. This is non-negotiable.",
      "Weekend crowds can be heavy at both piers. The flats and passes are less pressured.",
      "Bunces Pass current is strong during mid-tide. If wading the pass, know the depth before you commit.",
      "No pets on the beach or piers. Leave dogs at home.",
      "Manatee zones restrict boat speeds throughout the park waters.",
    ],
    highlights: [
      "Sight-fishing snook and redfish on the crystal-clear Gulf-side flats at dawn — world-class wade fishing.",
      "Bay pier produces sheepshead and mangrove snapper consistently, all year.",
      "Bunces Pass fishes like a mini-inlet — snook, tarpon, and jacks stack on the outgoing tide.",
      "North Beach is less crowded and offers better wading flats than the main beach area.",
      "The park's mix of Gulf, Bay, pass, and pier fishing means you can always find productive water regardless of wind direction.",
      "Osprey, pelicans, dolphins, and manatees everywhere. The wildlife experience is as good as the fishing.",
    ],
    tactics: [
      {
        title: "Snook — dawn wade",
        detail:
          "Wade the Gulf-side flats at first light in knee-deep water. Use a 4-inch white or chartreuse paddletail on a 1/4 oz jighead with 25 lb fluoro leader. Cast along the beach parallel to shore. Snook cruise the edge where sand meets grass. The hit will be sudden and explosive — keep your drag set properly.",
      },
      {
        title: "Bunces Pass — outgoing tide",
        detail:
          "Fish the outgoing tide from the sandy points at the edges of Bunces Pass. Large live bait (pinfish, mullet) on a 3/0 circle hook free-lined in the current. Snook, tarpon, and big jacks stage at the pass entrance waiting for food to flush out of the bay.",
      },
      {
        title: "Trout — popping cork grass",
        detail:
          "Live shrimp under a popping cork set 2 feet deep over the grass beds on the bayward side of the park. Pop the cork, let it sit 15 seconds, pop again. Trout are territorial on grass — once you find one, there are more. Focus on the grass/sand transitions.",
      },
      {
        title: "Redfish — mangrove edges",
        detail:
          "Kayak or wade the mangrove shorelines on the interior bayward side during higher tide stages. Gold weedless spoon or live shrimp cast tight to the mangrove root overhang. Reds tuck into the root systems at high water looking for crabs. The eat happens within 2 seconds of the bait landing — be ready.",
      },
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
      "The old Gandy Bridge remnants and surrounding grass flats create one of Tampa Bay's most accessible fisheries — legendary night snook under the bridge lights, year-round trout on the surrounding flats, and jacks blitzing through the channel.",
    mapPosition: { top: "40%", left: "35%" },
    coordinates: { lat: 27.8675, lng: -82.5554 },
    access: [
      "Shore access from Gandy Boat Ramp and surrounding parks. Free parking.",
      "Kayak and small boat launch available at the Gandy Boat Ramp (north side).",
      "Bridge fishing from the old Gandy Bridge catwalk (when accessible). Check current status — access varies.",
      "Wade-fishing the grass flats on the south side of the bridge on low tides.",
      "Florida saltwater fishing license required.",
      "No bait shops at the bridge. Gandy Bait & Tackle is nearby on Gandy Blvd.",
    ],
    caution: [
      "Heavy boat traffic around the bridge — stay visible if wading or kayaking. Wear a light-colored shirt or wading belt light.",
      "Night fishing under bridge lights attracts crowds on weekends. Weeknight sessions are better for space.",
      "Current through the bridge span is fastest at half-tide — plan your weight and leader size accordingly.",
      "Stingrays on the grass flats. Shuffle. Every. Step.",
      "Water quality can degrade after heavy rainfall — check Hillsborough County advisories.",
    ],
    highlights: [
      "Bridge shadow/light lines hold snook year-round — the Gandy night snook bite is legendary in Tampa Bay.",
      "Grass flats on both sides of the bridge hold trout and reds within easy kayak or wade distance.",
      "Easy access from both Tampa and St. Pete — 15 minutes from downtown either city.",
      "Jack crevalle blitz through the bridge channel when mullet or whitebait schools push through.",
      "Mangrove snapper hold in the deeper structure around the old bridge footings.",
      "One of the few places in urban Tampa Bay where you can catch five different species in one session.",
    ],
    tactics: [
      {
        title: "Night snook — shadow line",
        detail:
          "Fish the exact edge where bridge light meets shadow with live whitebait (scaled sardines) or a 5-inch white paddletail on a 3/8 oz jighead and 30 lb fluoro leader. Snook face into the current sitting on the shadow side, ambushing bait that gets silhouetted in the light. Cast upcurrent and let the bait drift into the zone. The eat is a sudden, jarring stop.",
      },
      {
        title: "Trout — popping cork drift",
        detail:
          "Live shrimp under a popping cork, drifting over the grass flats east of the bridge on incoming tide. Target 2–4 feet of water with visible grass. Pop the cork sharply every 20 seconds. Focus on the transitions where grass meets open sand — that's the ambush zone.",
      },
      {
        title: "Redfish — mangrove edges",
        detail:
          "Kayak the mangrove shorelines east of the bridge during the top of the incoming tide. Gold weedless spoon or live shrimp cast within 6 inches of the roots. Reds push into the mangrove roots at high water to ambush crabs and shrimp getting flushed out.",
      },
      {
        title: "Jack crevalle — bridge channel",
        detail:
          "When you see bait busting on the surface near the bridge channel, throw any topwater plug, spoon, or loud crankbait on 30 lb braid. Jacks are not leader-shy — they're pure aggression. Be ready for a 20-minute fight on any jack over 10 lbs.",
      },
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
  //  REGION 5: Anna Maria & Sarasota
  // ═══════════════════════════════════════════════════════════
  {
    slug: "keyes-marina-bimini-bay",
    name: "Keyes Marina / Bimini Bay",
    area: "Holmes Beach",
    region: "anna-maria-sarasota",
    type: "Shoreline",
    summary:
      "Protected AMI backwater with marina docks, Bimini Bay shade lines, nearby grass, and mangrove edges. This is the finesse inshore play when clear water and an incoming tide pull snook and redfish off the channels and onto the shallow edges.",
    mapPosition: { top: "47%", left: "45%" },
    coordinates: { lat: 27.5021, lng: -82.7122 },
    access: [
      "Best fished by skiff, kayak, or from clearly legal public access around the marina basin and bay edges.",
      "Island Discount Tackle is at Keyes Marina, 5503 Marina Dr, and is the first stop for live shrimp, shiners, leader, ice, and local color.",
      "Florida saltwater fishing license required unless you are on a properly licensed charter or exempt.",
      "Respect private docks inside Bimini Bay. Fish public water and do not step onto private platforms, lifts, or seawalls.",
      "Perico Island grass flats are a short move east when the marina docks get too bright or crowded.",
    ],
    caution: [
      "Clear AMI water makes fish leader-shy. Heavy leader and hardware will cost bites.",
      "Boat traffic, dock lines, lifts, and barnacles punish loose drag settings.",
      "Skip-casting under docks creates conflict fast. Give residents and moored boats room.",
      "Manatee zones and idle-speed areas are common around the canals and marina approaches.",
      "Stingrays and oyster edges are real on the nearby flats. Shuffle and wear proper footwear.",
    ],
    highlights: [
      "Incoming tide pulls snook and redfish from the deeper cuts toward mangroves, docks, and grass edges.",
      "Bimini Bay shade lines can hold oversized snook once the sun gets high.",
      "Select shrimp, shiners, or pilchards outfish noisy lures when visibility is 6-8 feet.",
      "Nervous water, mullet wakes, and small bait flipping are better tells than blind casting.",
      "Good fallback when Gulf beaches are too bright, crowded, or wind-exposed.",
    ],
    tactics: [
      {
        title: "Snook — dock skip",
        detail:
          "Skip a live shiner, pilchard, or select shrimp as far under the dock shade as you can reach. Use a #1 or 1/0 circle hook, 20 lb fluorocarbon leader, and no extra weight unless current forces it. Let the bait swim naturally and keep the rod low so the first run does not saw you off.",
      },
      {
        title: "Redfish — mangrove edge",
        detail:
          "On the top half of the incoming tide, pitch a live shrimp or small gold spoon within a foot of the mangrove roots. Reds nose into the shade looking for shrimp and crabs. If you miss the root line by several feet, reel in and recast instead of dragging dead water.",
      },
      {
        title: "Trout — Perico grass potholes",
        detail:
          "Slide to the Perico grass when the docks slow down. Work a live shrimp under a popping cork or a 3-inch natural paddletail across white sand potholes in 2-4 feet. Let the bait pause over the light sand; the eat usually happens on the stall.",
      },
      {
        title: "Snapper — stealth chum",
        detail:
          "Small mangrove snapper hold tight to dock posts and riprap. Free-line a tiny shrimp piece or pilchard chunk on 10-15 lb fluorocarbon after tossing a few thumbnail-sized chum pieces upcurrent. Light line beats heavy sinkers here.",
      },
    ],
    primarySpecies: ["snook", "redfish", "seatrout", "mangrove-snapper"],
    preferredTides: ["incoming", "high"],
    preferredWindDirections: ["E", "SE", "NE"],
    avoidWindDirections: ["W", "NW"],
    idealWaveRangeFt: [0, 1.5],
    idealWaterTempRangeF: [68, 84],
    lightPreference: "low-light",
  },
  {
    slug: "rod-and-reel-pier",
    name: "Rod & Reel Pier",
    area: "Anna Maria North End",
    region: "anna-maria-sarasota",
    type: "Pier",
    summary:
      "Classic north-end AMI pier structure with mackerel lanes, snapper shade, and snook cruising the pilings. It is a compact, high-percentage stop when bait is visible and the tide is still moving.",
    mapPosition: { top: "20%", left: "55%" },
    coordinates: { lat: 27.5356, lng: -82.7335 },
    access: [
      "Confirm current pier access and fishing rules before you commit; hours and access can change after storms or repairs.",
      "Carry a Florida saltwater fishing license unless current posted pier rules clearly say the operator license covers anglers.",
      "Parking is limited on the north end. Arrive early and keep gear compact.",
      "Use the pier edge, shadow line, and downcurrent corners instead of blocking walkways or restaurant access.",
      "Bring pliers, a dehooker, and a small hoop net if you plan to lift fish from the deck.",
    ],
    caution: [
      "Spanish mackerel cut light leader instantly. Add short wire or heavier bite tippet only when they are the target.",
      "Pelicans and gulls track live shrimp and shiny plugs. Pause casts when birds are low over the lane.",
      "Weekend crowding compresses casting lanes. Fast horizontal retrieves are not safe when people are crossing behind you.",
      "Snook hooked beside the pilings turn sideways fast. Do not bring ultralight tackle to a structure fight.",
      "Storm damage and repairs can change access. Check local status before making this the only plan.",
    ],
    highlights: [
      "Fast silver spoons and Got-Cha plugs produce Spanish mackerel when bait is flipping near the pier.",
      "Small live shrimp under a popping cork is the backup when mackerel ignore metal.",
      "Mangrove snapper and sheepshead hold tight to shaded pilings and barnacle growth.",
      "Early tarpon of the season can ghost past the pier and north-end lanes on warm April mornings.",
      "Low-light snook use the pier shadow and shallow edge before boat traffic builds.",
    ],
    tactics: [
      {
        title: "Spanish mackerel — speed retrieve",
        detail:
          "Throw a 3/4-1 oz silver spoon or Got-Cha plug parallel to the bait lane and retrieve fast. If you think you are burning it too quickly, speed up. Mackerel feed in short windows, so cast back immediately after a strike or follow.",
      },
      {
        title: "Snapper — piling finesse",
        detail:
          "Use a small live shrimp or shrimp piece on a No. 2 hook with 10-15 lb fluorocarbon. Fish it with minimal weight so it drifts naturally beside the pilings. Chum with tiny pieces, not handfuls, or the fish will eat the free food and ignore the hook.",
      },
      {
        title: "Snook — shadow-line drift",
        detail:
          "Free-line a pilchard, shiner, or select shrimp along the shaded side of the pier on moving water. Cast upcurrent and let the bait sweep naturally into the shadow. Close the bail early because the first pull is straight back to the pilings.",
      },
      {
        title: "Tarpon — observe first",
        detail:
          "If large shadows roll through, stop blind casting and watch direction. Pitch a live crab, pinfish, or large threadfin ahead of the travel lane on heavy leader. Most pier tarpon shots are one-cast opportunities.",
      },
    ],
    primarySpecies: ["spanish-mackerel", "mangrove-snapper", "snook", "tarpon", "sheepshead"],
    preferredTides: ["incoming", "high"],
    preferredWindDirections: ["E", "SE", "S"],
    avoidWindDirections: ["W", "NW"],
    idealWaveRangeFt: [0, 2],
    idealWaterTempRangeF: [68, 84],
    lightPreference: "any",
  },
  {
    slug: "bean-point-current-seams",
    name: "Bean Point Current Seams",
    area: "Anna Maria North End",
    region: "anna-maria-sarasota",
    type: "Inlet",
    summary:
      "The north tip of Anna Maria where Gulf water, Tampa Bay flow, beach troughs, and sandbar edges collide. Fish it like a small pass: seams first, then troughs, then the quiet edge once the current peaks.",
    mapPosition: { top: "13%", left: "45%" },
    coordinates: { lat: 27.5432, lng: -82.7443 },
    access: [
      "Walk-in beach access only, with limited neighborhood parking. Arrive early and keep the footprint light.",
      "No bait shop or facilities at the point. Bring water, pliers, leader, and sun protection.",
      "Florida saltwater fishing license required for shore fishing unless exempt.",
      "Fish outside guarded swimming areas and follow posted beach rules, nesting closures, and local signage.",
      "Polarized amber or brown lenses matter here because the best casts are to visible troughs, seams, and bait schools.",
    ],
    caution: [
      "This is high-current water. Do not wade deep around the tip or on a hard tide swing.",
      "Boat traffic cuts close to the channel edge. Stay visible and do not cast into navigation lanes.",
      "Sandbars and drop-offs shift after storms. Test every step before committing weight.",
      "Afternoon sea breeze can turn a clean Gulf side into crossed chop quickly.",
      "Long walks back in heat are part of the trip. Pack lighter than you would for a pier session.",
    ],
    highlights: [
      "Incoming tide before the high turn creates clean current seams for snook, trout, jacks, and mackerel.",
      "Gold spoons and natural paddletails cover water without spooking fish in clear water.",
      "Big seatrout sit in potholes and sandy depressions near the grass and trough edges.",
      "Snook cruise parallel to the beach, often inside where most anglers cast over them.",
      "Tarpon and large rays can slide the outer bar during late spring and early summer warmups.",
    ],
    tactics: [
      {
        title: "Current seam — gold spoon",
        detail:
          "Cast a 1/4 oz gold spoon across the seam and retrieve just fast enough to keep it wobbling above the grass. Start on the inside seam before throwing long. Snook, trout, and jacks often sit on the softer edge, not the ripping center.",
      },
      {
        title: "Snook — beach parallel",
        detail:
          "Walk quietly and cast a white or natural paddletail parallel to shore in the first trough. Keep the lure inside the drop, especially at first light. Most beach snook are within a rod-length or two of the sand.",
      },
      {
        title: "Gator trout — pothole pause",
        detail:
          "Work a 3-inch shrimp imitation or paddletail over sandy potholes. Let it fall into the light spot, twitch twice, and pause. Larger trout use those depressions as ambush bowls when the tide starts easing off.",
      },
      {
        title: "Tarpon — moving shadow shot",
        detail:
          "If tarpon show on the outside bar, stop casting at smaller fish. Position ahead of the travel direction and lead the fish with a live crab, threadfin, or soft-plastic eel profile on heavy leader. Do not drop the bait on their heads.",
      },
    ],
    primarySpecies: ["snook", "seatrout", "tarpon", "spanish-mackerel", "jack-crevalle"],
    preferredTides: ["incoming", "outgoing"],
    preferredWindDirections: ["E", "SE", "S"],
    avoidWindDirections: ["W", "NW"],
    idealWaveRangeFt: [0, 2],
    idealWaterTempRangeF: [68, 84],
    lightPreference: "low-light",
  },
  {
    slug: "longboat-pass-bridge",
    name: "Longboat Pass Bridge",
    area: "Bradenton Beach / Longboat Key",
    region: "anna-maria-sarasota",
    type: "Bridge",
    summary:
      "High-current bridge and pass structure at the south end of AMI. Pilings, rocks, a deep hole, and a hard tide exchange make this the move when the flats go slack or the bite shifts to flow.",
    mapPosition: { top: "74%", left: "53%" },
    coordinates: { lat: 27.4435, lng: -82.6896 },
    access: [
      "Use legal shoreline, bridge, and park access around Longboat Pass and Coquina Beach. Watch posted bridge restrictions.",
      "Coquina Beach parking and facilities make this easier to stage than the north-end walk-in spots.",
      "Florida saltwater fishing license required unless you are fishing from a covered licensed pier or exempt.",
      "Bring heavier leader, extra jigs, and a landing plan before fishing close to the rocks.",
      "This is a strong backup during the slack/turn window because pass water keeps moving longer than flats water.",
    ],
    caution: [
      "Current around the bridge can be too fast for light jigheads. Scale weight to bottom contact, not habit.",
      "Rocks, barnacles, and piling bases break fish off fast. Retie after every rub.",
      "Boat traffic is constant through the pass. Keep casts out of the channel and watch your backswing.",
      "Oversized snook and tarpon need room. Do not fish locked drag from the rocks.",
      "Bridge access and construction restrictions change. Posted signs win over app notes.",
    ],
    highlights: [
      "Bridge shade and current breaks hold snook when the sun gets high.",
      "The south-side pilings and nearby hole are prime for weighted shrimp, bucktails, and live pinfish.",
      "Mangrove snapper and sheepshead use the rocks and piling bases as year-round structure.",
      "Spanish mackerel push bait through the pass when the Gulf side is clean and flat.",
      "Early-season tarpon can slide the pass on warm moving-water windows.",
    ],
    tactics: [
      {
        title: "Bridge pilings — weighted shrimp",
        detail:
          "Rig a live shrimp on a 1/4-1/2 oz jighead or knocker rig and drift it tight to the downcurrent side of the piling. Keep contact without anchoring the bait in one place. Snook and snapper sit where the current softens.",
      },
      {
        title: "Bucktail — pass sweep",
        detail:
          "Throw a 1/2 oz white bucktail upcurrent and let it sweep along the bridge shadow. Lift just enough to keep it above the rocks. This is a clean way to cover mackerel, snook, jacks, and snapper without soaking bait.",
      },
      {
        title: "Deep hole — live pinfish",
        detail:
          "Drop a live pinfish or large shrimp to the bottom near the deeper hole off the rocks with enough weight to hold. Use 30-40 lb leader and a circle hook. Give big fish time to turn before you lift.",
      },
      {
        title: "Snapper — chum the eddy",
        detail:
          "Set up on the soft side of the current and feed small pieces of shrimp or sardine. Drift a tiny bait back naturally on light fluorocarbon. If the bait spins, you are using too much weight.",
      },
    ],
    primarySpecies: ["snook", "mangrove-snapper", "spanish-mackerel", "tarpon", "sheepshead"],
    preferredTides: ["incoming", "outgoing", "high"],
    preferredWindDirections: ["E", "SE", "NE"],
    avoidWindDirections: ["W", "SW"],
    idealWaveRangeFt: [0, 2.5],
    idealWaterTempRangeF: [68, 84],
    lightPreference: "any",
  },
  {
    slug: "coquina-ami-beach-troughs",
    name: "Coquina & AMI Beach Troughs",
    area: "Bradenton Beach / Holmes Beach",
    region: "anna-maria-sarasota",
    type: "Surf",
    summary:
      "Walkable Gulf beach program for pompano, whiting, cruising snook, and mackerel when southeast wind lays the surf down. The target is the trough between dry sand and the first bar, not the horizon.",
    mapPosition: { top: "68%", left: "43%" },
    coordinates: { lat: 27.4529, lng: -82.6927 },
    access: [
      "Coquina Beach offers public parking, restrooms, and a long walkable shoreline.",
      "Anna Maria Public Beach and Manatee Beach are useful north-side alternatives when the trough looks cleaner there.",
      "Fish outside posted swimming zones and move when beach traffic builds.",
      "Florida saltwater fishing license required for shore fishing unless exempt.",
      "Bring a small shoulder bag, bait cooler, and sand spike so you can walk until you find the deeper lane.",
    ],
    caution: [
      "Do not cast near swimmers, shorebirds, or turtle nesting areas. Move instead of forcing a bad lane.",
      "Light surf can still hide rip current cuts. Read the water before wading.",
      "Clear water means pompano see heavy rigs. Downsize hooks and floats when the bite gets picky.",
      "Afternoon sea breeze often adds side sweep. Carry pyramid and sputnik sinkers.",
      "Hot sand and long beach walks punish overpacked carts.",
    ],
    highlights: [
      "Spring beach troughs produce pompano and whiting on sand fleas, shrimp, and shrimp-flavor Fishbites.",
      "Flat Gulf mornings let you sight-fish snook cruising just off the sand.",
      "Spanish mackerel and jacks show when bait schools get pushed tight to the beach.",
      "Outgoing afternoon flow can make potholes and trough edges more defined.",
      "This is the best family-friendly option when the inshore docks are too tight or technical.",
    ],
    tactics: [
      {
        title: "Pompano — two-hook trough rig",
        detail:
          "Use a two-hook pompano rig with small floats, No. 1 or No. 2 hooks, and enough pyramid or sputnik weight to hold. Tip with sand fleas, peeled shrimp, or shrimp Fishbites. Start in the first trough before casting past the bar.",
      },
      {
        title: "Whiting — short cast",
        detail:
          "Downsize to small shrimp pieces on a light double-drop rig and cast just past the shore break. Whiting often feed inside the pompano line. If taps are constant but hookups are low, shorten the bait and hook gap.",
      },
      {
        title: "Beach snook — low-light walk",
        detail:
          "At first light or late afternoon, walk slowly and throw a small white paddletail or live pilchard parallel to the sand. Keep the bait in the trough. Stop when you see shadows, then cast ahead of the fish instead of at it.",
      },
      {
        title: "Mackerel — bait busts",
        detail:
          "Keep a silver spoon or small Got-Cha ready. When glass minnows or sardines shower, cast to the edge of the bust and retrieve fast. Add a short bite leader if cutoffs start.",
      },
    ],
    primarySpecies: ["pompano", "whiting", "snook", "spanish-mackerel"],
    preferredTides: ["outgoing", "incoming"],
    preferredWindDirections: ["E", "SE", "NE"],
    avoidWindDirections: ["W", "SW", "NW"],
    idealWaveRangeFt: [0.5, 2],
    idealWaterTempRangeF: [64, 80],
    lightPreference: "day",
  },

  // ═══════════════════════════════════════════════════════════
  //  REGION 6: Treasure Coast & Palm Beach
  // ═══════════════════════════════════════════════════════════
  {
    slug: "fort-pierce-inlet",
    name: "Fort Pierce Inlet",
    area: "Fort Pierce",
    region: "treasure-coast",
    type: "Inlet",
    summary:
      "Deep, high-current inlet connecting the Indian River Lagoon to the Atlantic Ocean — monster snook at the jetty rocks, summer tarpon staging in the channel, and flounder holding in the sandy transitions. Serious tackle for serious fish.",
    mapPosition: { top: "45%", left: "70%" },
    coordinates: { lat: 27.4734, lng: -80.2921 },
    access: [
      "South jetty accessible from Fort Pierce Inlet State Park ($6/vehicle). Open sunrise to sunset for vehicle access.",
      "North side accessible from Pepper Park (free parking). Walk to the jetty rocks.",
      "Jetty rocks are accessible 24/7 for fishing even when the park vehicle gate closes.",
      "Florida saltwater fishing license required.",
      "Little Jim Bait & Tackle (601 N Causeway) is 5 minutes away — open daily 7 AM – 7 PM.",
      "Fish-cleaning tables available at the state park.",
    ],
    caution: [
      "Extremely strong current on outgoing tide — this is heavy tackle territory. 40 lb braid minimum with 50 lb fluoro leaders.",
      "Rocks are sharp and barnacle-covered. Boots required. Cuts from these rocks get infected fast in salt water.",
      "Waves wash over the jetty during strong E/NE swells. If water is coming over the rocks, don't go out.",
      "Bull sharks feed in the inlet channel — land fish quickly and don't keep a stringer in the water.",
      "Boat traffic is constant during daylight — don't cast across the channel.",
    ],
    highlights: [
      "Trophy snook fishing at the jetty rocks — fish over 40 inches from shore. Night is the prime window.",
      "Summer tarpon (June-August) stage in the inlet channel. Sight-cast to rolling fish from the south jetty.",
      "Flounder hold in the sand-rock transitions — one of the Treasure Coast's best flounder spots.",
      "Tripletail stage on the channel markers and buoys near the inlet — sight-fish from shore or kayak.",
      "Jack crevalle blitzes when bait gets funneled through the inlet on outgoing tide.",
    ],
    tactics: [
      {
        title: "Trophy snook — live mullet jetty",
        detail:
          "Large live mullet (8–12 inches) on a 5/0 circle hook with 50 lb fluoro leader on 40 lb braid. Free-line along the jetty rocks on outgoing tide. Snook sit in the rock crevices and ambush from the downcurrent side. Fish from sunset to 2 AM for the best window. Keep the drag tight — they'll wrap you around the rocks.",
      },
      {
        title: "Tarpon — dawn channel",
        detail:
          "Live crab, large mullet, or threadfin on a 7/0 circle hook with 80 lb fluoro leader on 50 lb braid. Free-line in the main channel during dawn hours in June-August. Watch for rolling fish on the surface — cast 20 feet ahead of the roll. 100+ lb fish are common.",
      },
      {
        title: "Flounder — sandy transitions",
        detail:
          "3/8 oz white or chartreuse bucktail tipped with fresh-cut mullet belly. Work the sand-rock transitions at the jetty base on falling tide. Drag slowly along the bottom. Flounder hit and hold — wait 3 seconds before sweeping the rod to set.",
      },
      {
        title: "Jack crevalle — topwater blitz",
        detail:
          "Any loud topwater plug or 1 oz casting spoon on 30 lb braid. When jacks are busting bait on the surface, cast into the melee and reel fast. Jacks fight way above their weight class. Expect a 20-minute battle with anything over 10 lbs.",
      },
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
      "The iconic South Florida inlet beneath the red Jupiter Lighthouse — deep, powerful current funneling the Loxahatchee River into the Atlantic. World-class snook on the rocks, goliath grouper at the base, and spring cobia runs that draw anglers from across the state.",
    mapPosition: { top: "65%", left: "75%" },
    coordinates: { lat: 26.9448, lng: -80.0716 },
    access: [
      "South jetty accessible from Dubois Park ($15/vehicle on weekends, $10 weekdays for non-residents).",
      "North side accessible from Jupiter Beach Park (free). Walk south to the inlet rocks.",
      "No fishing license required from the jetty within Dubois Park (pier exemption).",
      "Dubois Park closes at sunset. Night fishing requires accessing the rocks from outside the park.",
      "Jupiter Bait & Tackle (141 Center St) — open Mon-Thu 6 AM – 9 PM, Fri-Sat 6 AM – 10 PM.",
      "The rocks are close to the waterline and waves wash over during tidal changes. Wear studded boots.",
    ],
    caution: [
      "One of the strongest currents of any Florida inlet — heavy tackle is mandatory. 40+ lb braid, 50 lb fluoro minimum.",
      "Goliath grouper hold at the rock base and will eat your fish on the way in. Fight fish hard and fast to avoid losing them.",
      "Sharks (bull and blacktip) are common in the inlet — land fish quickly.",
      "Waves crash over the south jetty rocks during strong E swells. If the water is washing over the rocks, don't go out.",
      "Extremely popular among serious anglers. Spots on the rocks are claimed early — arrive before dawn for prime position.",
    ],
    highlights: [
      "Arguably the best land-based snook inlet in Southeast Florida. Fish over 40 inches are caught regularly.",
      "Goliath grouper (catch-and-release only) hold at the jetty base — fish that can exceed 400 lbs.",
      "Spring cobia runs (March-May) bring sight-fishing opportunities as cobia cruise near the surface past the rocks.",
      "Mangrove snapper and mutton snapper hold deep at the rock base — finesse fishing in heavy current.",
      "The Jupiter Lighthouse provides a stunning backdrop — one of the most photogenic fishing spots in Florida.",
      "Tarpon stage in the inlet during late spring and summer — free-line live bait in the channel for fish over 100 lbs.",
    ],
    tactics: [
      {
        title: "Snook — night jetty rocks",
        detail:
          "Large live mullet (8–10 inches) or oversized swimbaits (6–8 inch) bumped along the jetty rocks on outgoing tide. 50 lb fluoro leader on 40 lb braid. Fish the shadow lines where rock structure meets open water. Night from 9 PM to 2 AM is the prime window for trophy-class fish.",
      },
      {
        title: "Cobia — spring sight-cast",
        detail:
          "Pre-rig a 2 oz bucktail jig with a 4-inch curly tail in brown or green, 30 lb fluoro leader. Stand high on the rocks and watch for dark shapes cruising 1–3 feet below the surface in March-May. Pitch the jig 15 feet ahead of the fish, let it sink to their depth, and twitch. One shot — they eat or they don't.",
      },
      {
        title: "Mangrove snapper — deep finesse",
        detail:
          "Small No. 1 hook with a tiny piece of shrimp or cut sardine on 12 lb fluoro leader. Drop straight to the base of the jetty rocks on the downcurrent side. Snapper hold deep and tight to structure. Chum with cut shrimp pieces to bring them out. Light tackle only — they're extremely leader-shy in clear water.",
      },
      {
        title: "Tarpon — live bait channel",
        detail:
          "Live mullet or live crab on a 7/0 circle hook with 80 lb fluoro leader on 50 lb braid or conventional gear. Free-line in the main channel current during dawn in June-August. When tarpon are rolling on the surface, cast ahead of the roll direction. The eat is a sudden, heavy weight — don't set on the jump.",
      },
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
      "Classic South Florida ocean pier with warm water year-round — the Gulf Stream passes closer to shore here than almost anywhere in Florida, keeping tropical species available 12 months. Great pompano pier, reliable night snook under the lights, and seasonal pelagic action.",
    mapPosition: { top: "72%", left: "78%" },
    coordinates: { lat: 26.6134, lng: -80.0333 },
    access: [
      "Paid pier fishing access (rates vary by season, typically $5–7 adults). Spectator admission available.",
      "Rod rentals and bait shop at the pier entrance. You can fish with zero gear.",
      "No fishing license required from the pier (Florida pier exemption).",
      "Open daily — hours vary by season. Call ahead: (561) 533-7387.",
      "Free parking along Lake Avenue and metered spots at the beach. Arrive early on weekends.",
      "Restaurants and coffee shops along Lake Avenue — good for pre-dawn fuel.",
    ],
    caution: [
      "Popular tourist and beach area — crowded on weekends and holidays. Expect to share space.",
      "Strong southward longshore current during winter months. Adjust your casting angle.",
      "Pelicans and seagulls are aggressive — watch your bait and hooked fish.",
      "The close Gulf Stream proximity means occasional larger predators (sharks, barracuda) show up at the pier.",
      "Walk to the T-end is moderate but in full sun. Bring water.",
    ],
    highlights: [
      "Gulf Stream proximity keeps water warm year-round — tropical species available when north Florida is shut down by cold.",
      "Pompano migration peaks in February-April. One of the most reliable pompano piers on the SE coast.",
      "Night snook fishing around the pier lights is excellent. Snook hold in the shadow/light lines year-round.",
      "Seasonal Spanish mackerel blitzes from the T-end — fast-paced, multi-fish action.",
      "Sheepshead on the pilings year-round — the backup bite that never fails.",
      "Jack crevalle, blue runners, and bar jacks provide constant action between the prime species windows.",
    ],
    tactics: [
      {
        title: "Pompano — pier migration",
        detail:
          "Double-drop rig with No. 2 hooks, sand fleas, fresh shrimp, or Fishbites in pink/orange. Fish the upcurrent side of the pier during incoming tide in February-April. Pompano travel in schools tight to the beach — fish the first 200 feet of pier, not necessarily the T-end.",
      },
      {
        title: "Snook — pier lights night",
        detail:
          "Live pilchard or sardine on a 3/0 circle hook with 25 lb fluoro, free-lined in the light/shadow edge cast from the pier. Snook sit on the dark side of the shadow line facing into current, ambushing bait that gets illuminated. Fish from 9 PM to midnight for the most consistent window.",
      },
      {
        title: "Mackerel and jacks — fast retrieve",
        detail:
          "1 oz Gotcha plug or silver spoon on 12 lb braid. Maximum speed retrieve when you see schools working the surface. Add 12 inches of 30 lb fluoro for mackerel teeth. Jacks don't care about leader — they care about speed. The bite window lasts 10–20 minutes, then the school moves.",
      },
      {
        title: "Sheepshead — piling reliable",
        detail:
          "Live shrimp or fiddler crab on a 1/0 hook with 15 lb fluoro and a split shot. Drop right against the barnacle-covered pilings. The most consistent bite on the pier year-round. When nothing else is working, sheepshead will eat.",
      },
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
  //  REGION 7: Jacksonville & Northeast
  // ═══════════════════════════════════════════════════════════
  {
    slug: "jacksonville-beach-pier",
    name: "Jacksonville Beach Pier",
    area: "Jacksonville Beach",
    region: "jacksonville",
    type: "Pier",
    summary:
      "Northeast Florida's primary ocean pier — 1,320 feet extending into the Atlantic. Strong seasonal runs for pompano and whiting in spring/fall, excellent flounder during the October-November migration, and king mackerel from the T-end in summer.",
    mapPosition: { top: "20%", left: "65%" },
    coordinates: { lat: 30.2887, lng: -81.3886 },
    access: [
      "Paid pier fishing access (rates vary — typically $5–6 adults, $3 kids). Cash and card accepted.",
      "Rod rentals and basic tackle available at the pier house.",
      "No fishing license required from the pier (Florida pier exemption).",
      "Open daily — hours vary by season. Call (904) 241-1515 for current hours.",
      "Beach Bait & Tackle (333 1st St N) is within walking distance for additional gear and live bait.",
      "Parking at the pier lot fills early on weekends. Arrive before 7 AM or use the lots on 2nd/3rd Avenue.",
    ],
    caution: [
      "Water is cooler here than central Florida — species windows shift 2–3 weeks later in spring and earlier in fall.",
      "Strong NE swells can shut down the pier or make it unfishable. Check NWS Jacksonville surf forecast.",
      "King mackerel anglers claim the T-end spots early. Coordinate around their live bait setups.",
      "Strong longshore current during NE wind events. Adjust sinker weight and casting angle accordingly.",
      "Seagulls and pelicans are aggressive bait thieves. Don't leave anything unattended.",
    ],
    highlights: [
      "Excellent pompano and whiting during spring (March-May) and fall (October-November) migrations.",
      "Flounder run in October-November is one of the best in Northeast Florida. Target pilings and sand transitions.",
      "King mackerel and cobia from the T-end in April-October. Fish in the 20–40 lb class.",
      "Black drum hold on the pilings year-round — reliable winter bite when other species are slow.",
      "Sheepshead season (January-March) produces consistent catches on the barnacle-covered pilings.",
      "Spanish mackerel blitzes from May-September provide fast-paced action from mid-pier.",
    ],
    tactics: [
      {
        title: "Pompano — spring/fall migration",
        detail:
          "Double-drop rig with No. 2 hooks, sand fleas, fresh shrimp, or Fishbites. 2–3 oz pyramid sinker. Fish the upcurrent side of the pier in the first 300 feet during incoming tide. Pompano migration peaks are March-May and October-November. Move along the pier until you find the school.",
      },
      {
        title: "Flounder — October piling drag",
        detail:
          "3/8 oz white bucktail tipped with fresh-cut mullet belly or a live finger mullet. Work along the sand at the base of the pilings during the October-November run. Drag slowly — flounder hit and hold. Wait 3 full seconds before sweeping the rod up to set.",
      },
      {
        title: "Black drum — piling structure",
        detail:
          "Large shrimp or half a blue crab on a 3/0 circle hook with 25 lb fluoro, fished on the bottom tight to the pilings. Drum use their chin barbels to find food — they don't strike visually. Let the bait sit and wait for the slow, heavy pull. Circle hooks set themselves.",
      },
      {
        title: "Sheepshead — winter pilings",
        detail:
          "Live fiddler crab or shrimp on a 1/0 hook with 15 lb fluoro and a split shot. Drop right against the pilings. January-March is peak season. They hit like they're nibbling — feel for the lightest tick and short-stroke the hookset upward. Sharp hooks are critical.",
      },
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
      "The St. Johns River mouth meets the Atlantic Ocean — one of the largest and most powerful inlets on Florida's East Coast. The river outflow creates massive current that holds bull redfish in the 30–50 inch class, staging tarpon over 100 lbs, and one of the state's best flounder migrations.",
    mapPosition: { top: "15%", left: "62%" },
    coordinates: { lat: 30.3950, lng: -81.3961 },
    access: [
      "South jetty accessible from Huguenot Memorial Park ($5 vehicle fee). Drive onto the beach and walk to the jetty.",
      "North jetty accessible from Fort Clinch State Park (Amelia Island side, $6/vehicle). Longer walk but less crowded.",
      "Both jetties fishable 24/7. Night fishing is productive — bring headlamps and glow sticks.",
      "Florida saltwater fishing license required.",
      "B&M Bait and Tackle (10950 Heckscher Dr) — open daily 5 AM – 7 PM. The closest full-service shop.",
      "4WD recommended for Huguenot beach driving, especially after rain. Soft sand sections can trap 2WD vehicles.",
      "Naval Station Mayport is across the river — no access to the north bank channel edge.",
    ],
    caution: [
      "St. Johns River outflow creates some of the strongest current of any inlet in Florida. This is HEAVY tackle territory — 40+ lb braid, 50+ lb fluoro leaders, heavy sinkers.",
      "Deep water immediately off the jetty rocks — the channel drops to 40+ feet. Don't wade.",
      "Sharks (bull, blacktip, hammerhead) are common in the inlet mouth. Land fish fast, don't use stringers.",
      "Navy vessel traffic creates massive wakes. Watch for ships entering/leaving the naval station.",
      "Rocks are large, uneven, and slippery with algae. Studded boots or Korkers mandatory. Falls here end trips.",
      "This is not a beginner spot. The current, depth, and sharks demand experienced tackle and awareness.",
    ],
    highlights: [
      "Bull redfish in the 30–50 inch class (catch-and-release for oversized reds) from the jetty rocks — the signature catch.",
      "Tarpon stage in the St. Johns River mouth from June-September. Fish over 100 lbs are hooked from shore.",
      "Flounder migration through the jetty rocks in October-November is one of the best in Florida.",
      "Black drum in the 20–40 lb class hold near the jetty base during winter months.",
      "Jack crevalle blitz the inlet mouth when bait gets pushed out on the river outflow — explosive topwater action.",
      "Sheepshead on the jetty rocks year-round. The most reliable backup bite when the big fish aren't eating.",
    ],
    tactics: [
      {
        title: "Bull reds — heavy bottom rig",
        detail:
          "Large cut mullet chunk (4-inch piece) or live menhaden/finger mullet on a 7/0 circle hook with 50 lb fluoro leader, 4–6 oz bank sinker to hold bottom in the current. Cast into the channel current and let it soak. The bite feels like a slow, heavy pull — don't jerk. Just reel tight and lift. These fish run hard and long — let the drag do the work. 20+ minute fights are normal.",
      },
      {
        title: "Tarpon — summer river mouth",
        detail:
          "Large live menhaden (pogies), mullet, or blue crab on a 8/0 circle hook with 80 lb fluoro leader on 50 lb braid or heavy conventional tackle. Free-line or use a large float in the channel current during dawn and dusk windows in June-September. Expect fish over 100 lbs. Clear the area when hooked — tarpon runs and jumps will cross every line around you.",
      },
      {
        title: "Flounder — fall bucktail drag",
        detail:
          "1/2 oz white bucktail tipped with a strip of fresh mullet belly or a live finger mullet on a stinger hook. Drag across the sandy transitions at the base of the jetty rocks during October-November on falling tide. Flounder lie flat in the sand waiting for bait to come over them. The bite feels like you picked up a weight — wait 3 full seconds, then sweep the rod to set.",
      },
      {
        title: "Sheepshead — jetty rock vertical",
        detail:
          "Live fiddler crab or large shrimp on a 1/0 hook with 20 lb fluoro and enough weight to hold bottom against the current. Drop right against the barnacle-covered jetty rocks. Short-stroke the hookset — sheepshead have hard, crushing mouths. The most reliable bite on the jetty year-round.",
      },
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
      "FWC manages snook by coast and region. Atlantic and Gulf harvest windows differ, and a snook permit is required if you are taking fish.",
    source: "FWC",
    href: "https://myfwc.com/fishing/saltwater/recreational/snook/",
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
