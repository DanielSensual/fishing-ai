import { GoogleGenAI } from "@google/genai";
import fs from "fs";
import path from "path";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

const images = [
  {
    slug: "space-coast-hero",
    prompt: "Cinematic wide panoramic view of Cape Canaveral and the Space Coast Florida at golden hour, rocket launch pad visible in the far distance, jetty rocks with crashing waves in the foreground, fishing rod silhouette against the sunset, warm orange teal and gold color palette, photorealistic, dramatic lighting, no text",
  },
  {
    slug: "tampa-bay-hero",
    prompt: "Cinematic aerial view of Tampa Bay Florida at sunset, the Sunshine Skyway Bridge spanning across the calm bay water, fishing boats anchored near the bridge pylons, mangrove islands scattered across the bay, warm purple and gold sunset sky reflecting on water, photorealistic, no text",
  },
  {
    slug: "daytona-hero",
    prompt: "Cinematic sunset view of Daytona Beach Florida from the pier looking south, the famous wide sandy beach stretching into the distance, families on the boardwalk, waves breaking on shore, the iconic beach skyline with hotels in warm golden light, photorealistic, teal and amber tones, no text",
  },
  {
    slug: "treasure-coast-hero",
    prompt: "Cinematic sunrise view of Jupiter Inlet Florida, the red Jupiter lighthouse in the background, crystal clear turquoise water flowing through the inlet rocks, pelicans diving for fish, tropical vegetation framing the scene, warm golden dawn light, photorealistic, no text",
  },
  {
    slug: "jacksonville-hero",
    prompt: "Cinematic dawn view of Jacksonville Beach fishing pier Florida, the long wooden pier extending into the dark blue Atlantic Ocean, distant lightning on the horizon, early morning surf breaking below, dramatic purple and teal sky, fishing rod holders silhouetted on the pier railing, photorealistic, no text",
  },
  {
    slug: "calendar-spring",
    prompt: "Cinematic underwater split-shot photo of Florida saltwater fishing, above water shows a mangrove shoreline at golden hour, below water shows a school of snook swimming near mangrove roots with clear green water, warm teal and gold tones, photorealistic, no text or watermarks",
  },
];

const outDir = path.join(process.cwd(), "public/images");

// Create regions directory if needed
const regionsDir = path.join(outDir, "regions");
if (!fs.existsSync(regionsDir)) {
  fs.mkdirSync(regionsDir, { recursive: true });
}

for (const img of images) {
  const outFile = path.join(img.slug.includes("hero") ? regionsDir : outDir, `${img.slug}.png`);
  if (fs.existsSync(outFile)) {
    console.log(`⏭  ${img.slug} already exists, skipping`);
    continue;
  }

  console.log(`🎨 Generating ${img.slug}...`);
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-pro-image-preview",
      contents: img.prompt,
      config: {
        responseModalities: ["image", "text"],
      },
    });

    const part = response.candidates?.[0]?.content?.parts?.find(
      (p) => p.inlineData?.mimeType?.startsWith("image/")
    );

    if (part?.inlineData?.data) {
      const buf = Buffer.from(part.inlineData.data, "base64");
      fs.writeFileSync(outFile, buf);
      console.log(`✅ Saved ${outFile} (${(buf.length / 1024).toFixed(0)} KB)`);
    } else {
      console.error(`❌ No image data returned for ${img.slug}`);
    }
  } catch (err) {
    console.error(`❌ Failed ${img.slug}:`, err.message);
  }
}

console.log("\nDone!");
