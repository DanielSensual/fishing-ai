import type { Metadata, Viewport } from "next";
import {
  IBM_Plex_Mono,
  IBM_Plex_Sans,
  Space_Grotesk,
} from "next/font/google";
import "./globals.css";

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
    default: "Fishing AI | Cape Canaveral Command Deck",
    template: "%s | Fishing AI",
  },
  description:
    "Live Cape Canaveral fishing intelligence — real-time scores for Jetty Park, Cocoa Beach, Playalinda, and Port Canaveral.",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Fishing AI",
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
      <body>{children}</body>
    </html>
  );
}
