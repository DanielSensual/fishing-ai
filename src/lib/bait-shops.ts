import "server-only";
import type { BaitShop } from "./types";

export const baitShops: BaitShop[] = [
  // ── Space Coast ──
  {
    name: "Cocoa Beach Fishing Center",
    region: "space-coast",
    address: "6300 N Atlantic Ave, Cape Canaveral, FL 32920",
    phone: "(321) 783-3477",
    hours: "Daily 6 AM – 6 PM",
    carries: ["Live shrimp", "Sand fleas", "Frozen bait", "Surf rigs", "Rod rentals"],
    mapsUrl: "https://maps.google.com/?q=Cocoa+Beach+Fishing+Center",
  },
  {
    name: "Sunrise Marina Bait Station",
    region: "space-coast",
    address: "505 Glen Cheek Dr, Port Canaveral, FL 32920",
    phone: "(321) 783-9535",
    hours: "Daily 6 AM – 9 PM",
    carries: ["Live shrimp", "Pinfish", "Fiddler crabs", "Mud minnows", "Offshore tackle"],
    mapsUrl: "https://maps.google.com/?q=Sunrise+Marina+Port+Canaveral",
  },
  {
    name: "Waters Edge Bait & Tackle",
    region: "space-coast",
    address: "300 Christopher Columbus Dr, Cape Canaveral, FL 32920",
    phone: "(321) 868-1929",
    hours: "Daily 6 AM – 6 PM",
    carries: ["Live bait", "Tackle", "On-site café", "Breakfast/lunch"],
    mapsUrl: "https://maps.google.com/?q=Waters+Edge+Bait+Tackle+Cape+Canaveral",
  },

  // ── Indian River & Lagoon ──
  {
    name: "Whitey's Bait & Tackle",
    region: "indian-river",
    address: "6918 N Hwy A1A, Melbourne Beach, FL 32951",
    phone: "(321) 724-1440",
    hours: "Daily 6 AM – 7 PM · Snook season weekends open until 10 PM",
    carries: ["Live shrimp", "Live mullet", "Finger mullet", "Cut bait", "Surf tackle"],
    mapsUrl: "https://maps.google.com/?q=Whiteys+Bait+Tackle+Melbourne+Beach",
  },
  {
    name: "Reel 'Em In Bait & Tackle",
    region: "indian-river",
    address: "821 US Highway 1, Sebastian, FL 32958",
    phone: "(772) 581-1027",
    hours: "Mon–Fri 6:30 AM – 6 PM · Sat–Sun 6 AM – 6 PM",
    carries: ["Live shrimp", "Fiddler crabs", "Frozen bait", "Inlet tackle", "Crab traps"],
    mapsUrl: "https://maps.google.com/?q=Reel+Em+In+Bait+Tackle+Sebastian",
  },
  {
    name: "Mosquito Lagoon Bait & Tackle",
    region: "indian-river",
    address: "451 Marina Rd, Titusville, FL 32796",
    phone: "(321) 383-5600",
    hours: "Daily 8 AM – 7 PM · After-hours: (321) 626-8608",
    carries: ["Live shrimp", "Finger mullet", "Kayak rentals", "Lagoon charts", "Fly tackle"],
    mapsUrl: "https://maps.google.com/?q=Titusville+Marina+Mosquito+Lagoon",
  },

  // ── Daytona & Volusia ──
  {
    name: "NSB Bait and Tackle",
    region: "daytona",
    address: "197 N Causeway, New Smyrna Beach, FL 32169",
    phone: "(386) 428-2841",
    hours: "Mon–Thu 5 AM – 10 PM · Fri–Sat 5 AM – 11 PM · Sun 5 AM – 10 PM",
    carries: ["Live shrimp", "Sand fleas", "Finger mullet", "Frozen bait", "Inlet rigs"],
    mapsUrl: "https://maps.google.com/?q=NSB+Bait+Tackle+New+Smyrna+Beach",
  },
  {
    name: "The Fishin' Hole",
    region: "daytona",
    address: "450 N Beach Street, Daytona Beach, FL 32114",
    phone: "(386) 252-9804",
    hours: "Mon–Sat 7 AM – 6 PM · Sun 7 AM – 2 PM",
    carries: ["Live bait", "Custom rigs", "Pier tackle", "Frozen squid", "Fishing licenses"],
    mapsUrl: "https://maps.google.com/?q=The+Fishin+Hole+Daytona+Beach",
  },
  {
    name: "Donald's Bait and Tackle",
    region: "daytona",
    address: "96 Dunlawton Ave, Port Orange, FL 32127",
    phone: "(386) 760-1871",
    hours: "Mon–Thu 6 AM – 7 PM · Fri–Sat 5 AM – 8 PM · Sun 5 AM – 7 PM",
    carries: ["Live shrimp", "Fiddler crabs", "Frozen mullet", "Surf rods", "Cast nets"],
    mapsUrl: "https://maps.google.com/?q=Donalds+Bait+Tackle+Port+Orange",
  },

  // ── Tampa Bay & Gulf Coast ──
  {
    name: "Skyway Pier Bait Shop (North)",
    region: "tampa-bay",
    address: "4905 34th St S, St. Petersburg, FL 33711",
    phone: "(727) 865-0668",
    hours: "Open 24/7 · 365 days a year",
    carries: ["Live shrimp", "Frozen bait", "Rental rods", "Tackle", "Snacks", "Ice"],
    mapsUrl: "https://maps.google.com/?q=Skyway+Fishing+Pier+North",
  },
  {
    name: "Skyway Pier Bait Shop (South)",
    region: "tampa-bay",
    address: "I-275 South Pier, Palmetto, FL 34221",
    phone: "(941) 729-0117",
    hours: "Open 24/7 · 365 days a year",
    carries: ["Live shrimp", "Frozen bait", "Rental rods", "Tackle", "Snacks"],
    mapsUrl: "https://maps.google.com/?q=Skyway+Fishing+Pier+South",
  },
  {
    name: "Skyway Bait & Tackle",
    region: "tampa-bay",
    address: "4825 US-19 Alt, Palmetto, FL 34221",
    phone: "(941) 729-7592",
    hours: "Daily 6 AM – 9 PM",
    carries: ["Live bait", "Frozen bait", "Kayak launch", "Tackle", "Cast nets"],
    mapsUrl: "https://maps.google.com/?q=Skyway+Bait+Tackle+Palmetto",
  },

  // ── Treasure Coast & Palm Beach ──
  {
    name: "Jupiter Bait & Tackle",
    region: "treasure-coast",
    address: "141 Center St, Jupiter, FL 33458",
    phone: "(561) 746-2116",
    hours: "Mon–Thu 6 AM – 9 PM · Fri–Sat 6 AM – 10 PM · Sun 6 AM – 9 PM",
    carries: ["Live shrimp", "Pilchards", "Goggle-eyes", "Offshore tackle", "Kite fishing rigs"],
    mapsUrl: "https://maps.google.com/?q=Jupiter+Bait+Tackle",
  },
  {
    name: "Little Jim Bait & Tackle",
    region: "treasure-coast",
    address: "601 N Causeway, Fort Pierce, FL 34949",
    phone: "(772) 468-2503",
    hours: "Daily 7 AM – 7 PM",
    carries: ["Live shrimp", "Finger mullet", "Frozen bait", "Inlet rigs", "Cast nets"],
    mapsUrl: "https://maps.google.com/?q=Little+Jim+Bait+Tackle+Fort+Pierce",
  },
  {
    name: "Stuart Angler",
    region: "treasure-coast",
    address: "4695 SE Dixie Hwy, Stuart, FL 34997",
    phone: "(772) 288-1219",
    hours: "Mon–Sat 6 AM – 7 PM · Sun 6 AM – 5 PM",
    carries: ["Live bait", "Frozen bait", "Inshore tackle", "Fly gear", "Fishing licenses"],
    mapsUrl: "https://maps.google.com/?q=Stuart+Angler+FL",
  },

  // ── Jacksonville & Northeast ──
  {
    name: "B&M Bait and Tackle",
    region: "jacksonville",
    address: "10950 Heckscher Dr, Jacksonville, FL 32226",
    phone: "(904) 251-3000",
    hours: "Daily 5 AM – 7 PM",
    carries: ["Live shrimp", "Mud minnows", "Finger mullet", "Frozen bait", "Cast nets"],
    mapsUrl: "https://maps.google.com/?q=B+M+Bait+Tackle+Jacksonville",
  },
  {
    name: "Beach Bait & Tackle",
    region: "jacksonville",
    address: "333 1st St N, Jacksonville Beach, FL 32250",
    phone: "(904) 241-9360",
    hours: "Daily 6 AM – 8 PM",
    carries: ["Live shrimp", "Sand fleas", "Frozen bait", "Surf rigs", "Rod rentals", "Pier tackle"],
    mapsUrl: "https://maps.google.com/?q=Beach+Bait+Tackle+Jacksonville+Beach",
  },
  {
    name: "Mayport Bait & Tackle",
    region: "jacksonville",
    address: "4540 Ocean St, Atlantic Beach, FL 32233",
    phone: "(904) 246-7575",
    hours: "Mon–Sat 5:30 AM – 7 PM · Sun 5:30 AM – 6 PM",
    carries: ["Live shrimp", "Mud minnows", "Frozen bait", "Heavy surf tackle", "Jetty rigs"],
    mapsUrl: "https://maps.google.com/?q=Mayport+Bait+Tackle+Atlantic+Beach",
  },
];

export function getBaitShopsByRegion(region: string): BaitShop[] {
  return baitShops.filter((shop) => shop.region === region);
}
