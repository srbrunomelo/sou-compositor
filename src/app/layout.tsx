import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { GoogleAnalytics } from "@next/third-parties/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";

import "./globals.css";

import PlayerBar from "@/src/shared/components/PlayerBar";
import AudioEngine from "@/src/shared/components/AudioEngine";
import { PlayerProvider } from "@/src/app/providers/player";
import { GTM } from "./providers/GTM";

const GA_ID = process.env.NEXT_PUBLIC_ANALYTICS_ID || "G-MF049NCW6F";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_URL || "https://soucompositor.com.br"
  ),
  title: {
    default: "Compositor Profissional | Sou Compositor",
    template: "%s | Sou Compositor",
  },
  description:
    "Bruno Melo, compositor profissional de hits em Sertanejo, Gospel, Funk, Pagode e mais. Letras inéditas para artistas e duplas.",
  keywords: [
    "compositor",
    "compositor profissional",
    "compositor brasileiro",
    "compositor de músicas",
    "compositor sertanejo",
    "compositor gospel",
    "compositor de pagode",
    "compositor de funk",
  ],
  authors: [{ name: "Bruno Melo" }],
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "Sou Compositor",
  },
  verification: {
    google: "So1OHOhgNlRrkr1uBvUk3fsWr8YmboOcKE2Acm9D7M0",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <PlayerProvider>
          <SpeedInsights />
          <Analytics />
          <GTM />
          {children}

          <PlayerBar />
          <AudioEngine />
          <GoogleAnalytics gaId={GA_ID} />
        </PlayerProvider>
      </body>
    </html>
  );
}
