import { GoogleGenAI } from "@google/genai";
import fs from "fs";
import path from "path";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

const images = [
  {
    slug: "indian-river-melbourne",
    prompt:
      "Cinematic golden hour view of the Indian River Lagoon near Melbourne Florida, wide calm lagoon water with seagrass flats visible underneath, a causeway bridge in the background with bridge lights starting to glow, wade fisherman standing knee-deep casting a popping cork, pelicans flying overhead, warm teal and copper color palette, photorealistic, no text or watermarks",
  },
  {
    slug: "lake-worth-pier",
    prompt:
      "Cinematic view of the Lake Worth Beach fishing pier in Palm Beach County Florida at dawn, long wooden pier stretching into turquoise Atlantic water, tropical palm trees framing the foreground, anglers fishing from the pier railing, warm golden light with deep blue ocean, South Florida tropical atmosphere, photorealistic, vibrant teal and gold color grading, no text or watermarks",
  },
];

const outDir = path.join(process.cwd(), "public/images/spots");

for (const img of images) {
  const outFile = path.join(outDir, `${img.slug}.png`);
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
