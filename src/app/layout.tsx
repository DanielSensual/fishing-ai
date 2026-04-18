import type { Metadata, Viewport } from "next";
import {
  IBM_Plex_Mono,
  IBM_Plex_Sans,
  Space_Grotesk,
} from "next/font/google";
import "./globals.css";
import CaptainChat from "./components/CaptainChat";

const headingFont = Space_Grotesk({
  variable: "--font-heading",
  subsets: ["latin"],
});

const bodyFont = IBM_Plex_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const monoFont = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#060d18",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://fishing-ai-nine.vercel.app"),
  title: {
    default: "Bite Atlas | Florida Fishing Intelligence",
    template: "%s | Bite Atlas",
  },
  description:
    "Live Florida fishing intelligence — real-time spot scores, tide-matched tactics, species guides, and bait shop directory across Space Coast, Indian River, Daytona, Tampa Bay, Treasure Coast, and Jacksonville.",
  openGraph: {
    type: "website",
    siteName: "Bite Atlas",
    title: "Bite Atlas | Florida Fishing Intelligence",
    description:
      "AI-scored fishing spots across 6 Florida regions. Live conditions, detailed tactics, and real bait shop intel.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bite Atlas | Florida Fishing Intelligence",
    description:
      "AI-scored fishing spots across 6 Florida regions. Live conditions, detailed tactics, and real bait shop intel.",
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Bite Atlas",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${headingFont.variable} ${bodyFont.variable} ${monoFont.variable}`}
      style={{ colorScheme: "dark" }}
    >
      <body>
        {children}
        <CaptainChat />
      </body>
    </html>
  );
}
