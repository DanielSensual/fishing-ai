import type { SpeciesKey } from "./types";

export interface MonthlyFishing {
  month: number;
  name: string;
  shortName: string;
  headline: string;
  summary: string;
  topSpecies: SpeciesKey[];
  /** Seasonal fishing tips for the month */
  tips: string[];
  /** Water temp range typical for the month */
  typicalWaterTempF: [number, number];
  /** Overall vibe */
  rating: "peak" | "good" | "slow";
}

export const seasonalCalendar: MonthlyFishing[] = [
  {
    month: 1,
    name: "January",
    shortName: "Jan",
    headline: "Winter Sheepshead Peak",
    summary: "Cold fronts push sheepshead and black drum tight to structure. Jetties, bridge pilings, and docks are the move. Pompano migration starts on beaches if water stays above 62°F.",
    topSpecies: ["sheepshead", "black-drum", "pompano", "whiting", "flounder"],
    tips: [
      "Fish incoming tide on jetties for sheepshead — fiddler crabs or shrimp on light jigheads, tight to the rocks.",
      "Pompano pushing through the first trough — short casts with Fishbites-tipped double-drop rigs.",
      "Flounder staged on sandy bottom near channel drops — slow-drag live finger mullet.",
      "Black drum respond to cut shrimp on bottom rigs near bridge fenders and dock pilings.",
      "Whiting bite stays consistent in the wash — small hooks, small baits, keep it simple.",
    ],
    typicalWaterTempF: [58, 67],
    rating: "good",
  },
  {
    month: 2,
    name: "February",
    shortName: "Feb",
    headline: "Pompano Migration in Full Swing",
    summary: "The pompano run intensifies along Atlantic beaches. Sheepshead remain locked to structure. Early signs of seatrout activity on warming flats. This is prime surf fishing season.",
    topSpecies: ["pompano", "sheepshead", "whiting", "black-drum", "flounder", "seatrout"],
    tips: [
      "Pompano run is heating up — sand fleas and Fishbites in the first and second troughs produce all day.",
      "Sheepshead still stacked on pilings — fish the last 2 hours of incoming for best odds.",
      "Look for the first warm-water seatrout bite on shallow flats during afternoon sun.",
      "Whiting and black drum are bonus catches on almost any bottom rig in the surf.",
      "Post-front days with light west wind often produce the best pompano conditions.",
    ],
    typicalWaterTempF: [60, 70],
    rating: "peak",
  },
  {
    month: 3,
    name: "March",
    shortName: "Mar",
    headline: "Spring Transition — Everything Wakes Up",
    summary: "Water temps cross 70°F and the ecosystem flips. Snook start feeding aggressively. Spanish mackerel show up along beaches. Cobia migration begins near channel markers and rays.",
    topSpecies: ["snook", "pompano", "spanish-mackerel", "cobia", "sheepshead", "seatrout"],
    tips: [
      "Snook feeding picks up at dawn and dusk — live mullet or paddletails along seawalls and jetties.",
      "First cobia sightings near channel markers and following stingrays — pitch jigs ahead, not on top.",
      "Spanish mackerel appear along beaches — Gotcha plugs and Clark spoons, fast retrieve.",
      "Pompano run still strong but shifting north — adjust your beach based on water clarity.",
      "Sheepshead season peaks before spawning ends — last call for easy limits on structure.",
    ],
    typicalWaterTempF: [67, 75],
    rating: "peak",
  },
  {
    month: 4,
    name: "April",
    shortName: "Apr",
    headline: "Peak Diversity — Everything is Biting",
    summary: "April is arguably the best month to fish Florida. Snook, redfish, seatrout, tarpon, cobia, spanish mackerel, and tripletail are all active. Every spot type produces.",
    topSpecies: ["snook", "redfish", "seatrout", "cobia", "tarpon", "spanish-mackerel", "tripletail"],
    tips: [
      "Tarpon start showing in passes and along beaches — live crabs and mullet on heavy tackle.",
      "Cobia migration peaks — sight-fish from jetties, piers, and bridges on calm days.",
      "Snook are aggressive on outgoing tide at inlets — live pilchards or DOA shrimp.",
      "Tripletail start appearing on crab trap floats and channel markers — stealth approach.",
      "Redfish and seatrout are crushing topwater on early-morning flats bites.",
      "This is the month to fish — cancel your meetings.",
    ],
    typicalWaterTempF: [72, 79],
    rating: "peak",
  },
  {
    month: 5,
    name: "May",
    shortName: "May",
    headline: "Tarpon Season Opens",
    summary: "Tarpon migration is in full swing along beaches and through passes. Snook are pre-spawn and aggressive. Spanish mackerel schools blanket nearshore waters. Summer pattern locks in.",
    topSpecies: ["tarpon", "snook", "spanish-mackerel", "redfish", "jack-crevalle", "tripletail", "mangrove-snapper"],
    tips: [
      "Tarpon stacked in passes on outgoing tide — live threadfin herring or crabs, 60-80lb leader.",
      "Snook pre-spawn feed is aggressive — fish beach spawning aggregations at dusk.",
      "Spanish mackerel blitzing bait — watch for diving birds, cast past the school and retrieve fast.",
      "Jack crevalle blowups become common — topwater poppers for violent strikes.",
      "Mangrove snapper bite picks up around docks and bridges — downsize everything.",
    ],
    typicalWaterTempF: [76, 83],
    rating: "peak",
  },
  {
    month: 6,
    name: "June",
    shortName: "Jun",
    headline: "Summer Heat — Early Mornings Win",
    summary: "Water temps push into the 80s. Fish feed aggressively at dawn and dusk. Tarpon still running. Snook spawn on beaches. Afternoon thunderstorms create post-storm feeding windows.",
    topSpecies: ["tarpon", "snook", "mangrove-snapper", "jack-crevalle", "redfish", "spanish-mackerel", "tripletail"],
    tips: [
      "Fish the first two hours of light — everything feeds before the heat shuts them down.",
      "Snook spawning on beaches at night — large females on live mullet at inlet mouths.",
      "Tarpon still pushing through passes — early morning and late evening are the windows.",
      "Afternoon thunderstorms trigger aggressive feeding — get back out 30 minutes after the storm passes.",
      "Mangrove snapper are thick around structure — use live shrimp on small hooks with chum.",
    ],
    typicalWaterTempF: [80, 86],
    rating: "good",
  },
  {
    month: 7,
    name: "July",
    shortName: "Jul",
    headline: "Beat the Heat — Night Fishing Shines",
    summary: "Peak summer heat pushes the best bites to dawn, dusk, and after dark. Snook spawn continues. Mangrove snapper fishing is excellent on structure. Tarpon winding down but still around.",
    topSpecies: ["snook", "mangrove-snapper", "tarpon", "jack-crevalle", "redfish", "spanish-mackerel"],
    tips: [
      "Night fishing under bridge lights for snook is a top-tier summer pattern — live shrimp or pilchards.",
      "Mangrove snapper limits are easy around docks and bridges with live shrimp and light line.",
      "Beat the heat — dawn patrol or night trips. Midday is for bait shopping.",
      "Jack crevalle schools still blitzing bait on flats and near passes.",
      "Spanish mackerel hang near nearshore reefs and artificial structures.",
    ],
    typicalWaterTempF: [82, 88],
    rating: "good",
  },
  {
    month: 8,
    name: "August",
    shortName: "Aug",
    headline: "Dog Days — Patience Pays",
    summary: "Hottest month. Fish are there but feeding windows are narrow. Dawn patrol is mandatory. Tarpon season wraps up. Snook spawn winds down. Start watching for early fall signs.",
    topSpecies: ["snook", "mangrove-snapper", "redfish", "jack-crevalle", "tarpon", "spanish-mackerel"],
    tips: [
      "First light is the only guaranteed window — be in position before sunrise.",
      "Snook spawn winding down — transitioning back to inlets and bridges.",
      "Late August front-runners: first redfish bull schools start forming for fall.",
      "Live bait is king in August — pilchards, pinfish, or greenbacks.",
      "Hydrate. Seriously. Bring twice the water you think you need.",
    ],
    typicalWaterTempF: [83, 89],
    rating: "slow",
  },
  {
    month: 9,
    name: "September",
    shortName: "Sep",
    headline: "Fall Transition Begins",
    summary: "First cold fronts trigger the fall mullet run — the biggest event on the Florida fishing calendar. Everything with teeth lines up to eat. Redfish, snook, tarpon, and jacks go into overdrive.",
    topSpecies: ["snook", "redfish", "tarpon", "jack-crevalle", "seatrout", "mangrove-snapper"],
    tips: [
      "Mullet run starts — finger mullet is the bait of the month. Every predator is keyed on it.",
      "Snook stack at inlet mouths eating mullet on outgoing tide — live mullet, free-lined.",
      "Redfish bull schools start showing on beaches — sight-cast with spoons or cut mullet.",
      "Tarpon make a September push following the mullet — last chance before they head south.",
      "The fishing gets better every week from here through December.",
    ],
    typicalWaterTempF: [80, 86],
    rating: "peak",
  },
  {
    month: 10,
    name: "October",
    shortName: "Oct",
    headline: "Mullet Run Peak — Best Month of Fall",
    summary: "The mullet run is in full force. Snook, redfish, tarpon remnants, and jacks are demolishing bait schools. Pompano start showing again. Seatrout bite picks up on cooling flats.",
    topSpecies: ["snook", "redfish", "pompano", "seatrout", "jack-crevalle", "flounder", "spanish-mackerel"],
    tips: [
      "Mullet run peak — follow the bait, follow the fish. Beaches, inlets, and passes are on fire.",
      "Pompano return to the surf — sand fleas and Fishbites as water drops below 77°F.",
      "Seatrout bite improves dramatically on grass flats — topwater early, soft plastics midday.",
      "Flounder start their fall migration — fish channel edges with live finger mullet.",
      "October is arguably the most exciting fishing month in Florida. Get out there.",
    ],
    typicalWaterTempF: [74, 82],
    rating: "peak",
  },
  {
    month: 11,
    name: "November",
    shortName: "Nov",
    headline: "Fall Run Continues — Cooler Water = Hungry Fish",
    summary: "Water cools into the 70s and fish feed aggressively to build winter reserves. Pompano run strengthens. Seatrout and redfish are crushing it on flats. Sheepshead return to structure.",
    topSpecies: ["pompano", "seatrout", "redfish", "snook", "flounder", "sheepshead", "whiting"],
    tips: [
      "Pompano run in full force — the beaches are producing limits on good tide days.",
      "Seatrout activity explodes on cooling flats — popping corks and live shrimp are deadly.",
      "Sheepshead return to jetties and bridges — fiddler crabs and shrimp on light tackle.",
      "Flounder bite peaks around Thanksgiving — work sandy channel edges slow.",
      "Snook still feeding but moving into winter holds — bridges, docks, warm-water outfalls.",
    ],
    typicalWaterTempF: [68, 77],
    rating: "peak",
  },
  {
    month: 12,
    name: "December",
    shortName: "Dec",
    headline: "Winter Setup — Structure Rules",
    summary: "Cold fronts become frequent. Fish move to warm-water refuges — power plant outfalls, deep bridge channels, and protected lagoon areas. Sheepshead and black drum peak on structure.",
    topSpecies: ["sheepshead", "black-drum", "pompano", "whiting", "seatrout", "flounder", "redfish"],
    tips: [
      "Sheepshead piling up on jetties and bridge pilings — this is their premier month.",
      "Black drum respond to cold fronts by moving tight to structure — cut shrimp on bottom rigs.",
      "Pompano still running on Atlantic beaches through Christmas — fish the warm-water pockets.",
      "Post-front warming trends trigger aggressive feeding windows — hit the water 24-48 hours after a front passes.",
      "Seatrout move to deeper grass edges and channel drops — adjust your depth.",
    ],
    typicalWaterTempF: [60, 70],
    rating: "good",
  },
];

export function getCurrentMonthFishing(): MonthlyFishing {
  const now = new Date();
  const month = now.getMonth() + 1; // 1-indexed
  return seasonalCalendar.find((m) => m.month === month) ?? seasonalCalendar[0];
}

export function getMonthFishing(month: number): MonthlyFishing {
  return seasonalCalendar.find((m) => m.month === month) ?? seasonalCalendar[0];
}
