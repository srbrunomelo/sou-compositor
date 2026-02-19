import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { GoogleAnalytics } from "@next/third-parties/google";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <meta
        name="google-site-verification"
        content="So1OHOhgNlRrkr1uBvUk3fsWr8YmboOcKE2Acm9D7M0"
      />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <PlayerProvider>
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
