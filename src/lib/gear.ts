export interface GearItem {
  name: string;
  category: string;
  description: string;
  price: string;
  amazonUrl: string;
  bestFor: string[];
}

export const gearCategories = [
  {
    id: "rods-reels",
    name: "Rods & Reels",
    icon: "🎣",
    items: [
      {
        name: "Penn Battle III 3000 Spinning Combo",
        category: "Spinning Combo",
        description: "The workhorse. 7' medium-heavy spinning combo that handles everything from pompano to snook. Full metal body reel with HT-100 drag. This is what most Florida pier and surf anglers start with — and many never leave.",
        price: "$119.99",
        amazonUrl: "https://amzn.to/4tnNfkr",
        bestFor: ["Surf fishing", "Pier fishing", "Jetty fishing"],
      },
      {
        name: "Daiwa BG 4000 Spinning Reel",
        category: "Spinning Reel",
        description: "Bombproof build quality for the angler who wades, kayaks, and abuses gear. Oversized Digigear drive and waterproof drag. Pair with a 7' medium-heavy rod for snook, redfish, and jacks.",
        price: "$149.99",
        amazonUrl: "https://amzn.to/4tfU07L",
        bestFor: ["Inshore", "Inlet fishing", "Kayak fishing"],
      },
      {
        name: "Ugly Stik GX2 7' Medium Spinning Combo",
        category: "Spinning Combo",
        description: "Unbreakable and under $60. The GX2 has survived more dock drops, truck beds, and drunk fishing trips than any rod in history. Perfect beginner setup for seatrout, whiting, and flounder.",
        price: "$54.99",
        amazonUrl: "https://amzn.to/4cTzpAc",
        bestFor: ["Beginners", "Flats fishing", "Light inshore"],
      },
      {
        name: "Penn Slammer IV 4500 Spinning Reel",
        category: "Spinning Reel",
        description: "When the tarpon shows up and you need to not lose. Full IPX6 sealed body, 30 lbs of drag, CNC gear technology. This is your big-game inshore reel.",
        price: "$249.99",
        amazonUrl: "https://amzn.to/4tfU07L",
        bestFor: ["Tarpon", "Cobia", "Bull redfish"],
      },
    ],
  },
  {
    id: "terminal-tackle",
    name: "Terminal Tackle",
    icon: "🪝",
    items: [
      {
        name: "Owner Mutu Light Circle Hooks (2/0-4/0)",
        category: "Circle Hooks",
        description: "The gold standard for live bait fishing in Florida. Light wire for better hook penetration, circle design for clean jaw hookups. Use 2/0 for shrimp, 3/0-4/0 for mullet and pilchards.",
        price: "$7.49",
        amazonUrl: "https://amzn.to/4tQP6Oj",
        bestFor: ["Snook", "Redfish", "Tarpon"],
      },
      {
        name: "Hayabusa Pompano Rig (6-pack)",
        category: "Pre-tied Rigs",
        description: "Pre-tied double-drop rigs with orange floats and gold hooks. Saves time on the beach and produces as well as custom-tied rigs for most anglers.",
        price: "$11.99",
        amazonUrl: "https://amzn.to/48F8cPk",
        bestFor: ["Pompano", "Whiting", "Black drum"],
      },
      {
        name: "Fishbites E-Z Flea (Sand Flea Flavor)",
        category: "Artificial Bait",
        description: "When you can't find live sand fleas, these are the next best thing. Tip them on your pompano rig hooks for scent attraction. They stay on the hook better than real fleas in heavy current.",
        price: "$5.99",
        amazonUrl: "https://amzn.to/4dS9Kcl",
        bestFor: ["Pompano", "Whiting", "Sheepshead"],
      },
      {
        name: "Sputnik Sinkers 3oz (4-pack)",
        category: "Weights",
        description: "Spider-leg design digs into sand and holds your rig in position through strong current and surf. Essential for beach fishing. The legs fold when you reel in for easy retrieval.",
        price: "$14.99",
        amazonUrl: "https://amzn.to/4tU584I",
        bestFor: ["Surf fishing", "Pompano", "Inlet fishing"],
      },
      {
        name: "Seaguar Blue Label Fluorocarbon Leader 25lb",
        category: "Leader Material",
        description: "Near-invisible underwater with excellent abrasion resistance. 25lb is the sweet spot for most Florida inshore species — heavy enough for snook mouths, light enough for spooky seatrout.",
        price: "$12.99",
        amazonUrl: "https://amzn.to/4cg9P61",
        bestFor: ["All species", "Clear water", "Finesse presentations"],
      },
    ],
  },
  {
    id: "lures",
    name: "Lures & Soft Plastics",
    icon: "🐟",
    items: [
      {
        name: "DOA Shrimp 3\" (Natural) 3-pack",
        category: "Soft Plastic",
        description: "The most productive artificial bait in Florida inshore history. Weight-forward design gives a natural fall. Free-line it, put it under a cork, or slow-hop it on a jighead. It just works.",
        price: "$6.99",
        amazonUrl: "https://amzn.to/42mc8Rn",
        bestFor: ["Seatrout", "Redfish", "Snook"],
      },
      {
        name: "Hogy Paddle Tail 5\" (Olive) 8-pack",
        category: "Soft Plastic",
        description: "Premium paddletail that out-swims most competitors. The tail thumps at any speed. Rig it on a 1/4 oz jighead for snook, redfish, and flounder. The olive color works everywhere.",
        price: "$9.99",
        amazonUrl: "https://amzn.to/4sH1uiU",
        bestFor: ["Snook", "Redfish", "Flounder"],
      },
      {
        name: "Gotcha Plug 1oz (Silver)",
        category: "Casting Plug",
        description: "The spanish mackerel killer. Cast it past the school, rip it back fast. The erratic darting action triggers mackerel, bluefish, and jacks. If they're busting bait on the surface, this is the play.",
        price: "$5.49",
        amazonUrl: "https://amzn.to/42kMWuw",
        bestFor: ["Spanish mackerel", "Bluefish", "Jacks"],
      },
      {
        name: "Rapala X-Rap 10 Saltwater (Olive Mulet)",
        category: "Hard Bait",
        description: "Suspending jerkbait that imitates a wounded mullet. Twitch-pause-twitch retrieve is deadly in tidal creeks and around mangroves. Snook, seatrout, and redfish eat this thing.",
        price: "$12.99",
        amazonUrl: "https://amzn.to/4ckLkaj",
        bestFor: ["Snook", "Seatrout", "Redfish"],
      },
    ],
  },
  {
    id: "accessories",
    name: "Accessories & Tools",
    icon: "🧰",
    items: [
      {
        name: "Bubba Blade 7\" Tapered Fillet Knife",
        category: "Fillet Knife",
        description: "Non-slip grip even with bloody hands. Flexible tapered blade that follows the backbone perfectly. This is what the charter captains use. Stainless steel that actually resists saltwater corrosion.",
        price: "$34.99",
        amazonUrl: "https://amzn.to/3Qlu77U",
        bestFor: ["Fish cleaning", "All species"],
      },
      {
        name: "Plano 3600 Tackle Box (4-pack)",
        category: "Storage",
        description: "The industry-standard utility box. Adjustable dividers fit everything from pompano rigs to jigheads. Clear lid so you can see what's inside. Stack them in any tackle bag.",
        price: "$14.99",
        amazonUrl: "https://amzn.to/4tZJBgz",
        bestFor: ["Organization", "All fishing styles"],
      },
      {
        name: "Ego S2 Slider Fishing Net 19\"",
        category: "Landing Net",
        description: "Telescoping handle extends your reach. Rubber-coated netting protects fish and prevents hook tangles. Sized right for seatrout through snook without being unwieldy.",
        price: "$49.99",
        amazonUrl: "https://amzn.to/4sMpT6F",
        bestFor: ["Catch and release", "Pier fishing", "Kayak fishing"],
      },
      {
        name: "SIMMS Solarflex Sun Gloves",
        category: "Sun Protection",
        description: "UPF 50+ protection for all-day sun exposure. The grip pattern actually works with wet hands and rod handles. Your hands will thank you after a 10-hour pier session.",
        price: "$39.99",
        amazonUrl: "https://amzn.to/4cgG1IQ",
        bestFor: ["Sun protection", "All-day fishing"],
      },
    ],
  },
];

export function getRecommendedGear(keywords: string[], limit: number = 2): GearItem[] {
  const allItems = gearCategories.flatMap((c) => c.items);
  
  if (!keywords || keywords.length === 0) {
    return allItems.slice(0, limit);
  }

  const scored = allItems.map((item) => {
    let score = 0;
    const itemText = [item.name, item.description, ...item.bestFor].join(" ").toLowerCase();
    
    keywords.forEach((tag) => {
      const lowerTag = tag.toLowerCase();
      // Boost heavily if it's explicitly explicitly listed in the bestFor array
      if (item.bestFor.some((f) => f.toLowerCase().includes(lowerTag))) {
        score += 10;
      } else if (itemText.includes(lowerTag)) {
        score += 2;
      }
    });

    return { item, score };
  });

  const matches = scored.filter((s) => s.score > 0).sort((a, b) => b.score - a.score);

  if (matches.length === 0) {
     // Return generic essentials if no strong match found
     return [allItems[16], allItems[13]].slice(0, limit); // Gloves and Pliers/Box
  }

  return matches.slice(0, limit).map((m) => m.item);
}
