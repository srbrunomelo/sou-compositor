import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import PlayerBar from "@/src/shared/components/PlayerBar";
import AudioEngine from "@/src/shared/components/AudioEngine";
import { PlayerProvider } from "@/src/app/providers/player";
import { GTM } from "./providers/GTM";

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
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <PlayerProvider>
          <GTM />
          {children}

          <PlayerBar />
          <AudioEngine />
        </PlayerProvider>
      </body>
    </html>
  );
}
