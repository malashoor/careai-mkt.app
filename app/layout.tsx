import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { localeCodes } from "@/i18n/config";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const site = process.env.NEXT_PUBLIC_SITE_URL ?? "https://careai.app";

export const metadata: Metadata = {
  metadataBase: new URL(site),
  title: { default: 'CareAI', template: '%s • CareAI' },
  description: 'Companionship, health monitoring, and reminders for seniors.',
  icons: {
    icon: [
      { url: '/favicon.ico?v=20250913' },
      { url: '/favicon-32x32.png?v=20250913', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png?v=20250913', sizes: '16x16', type: 'image/png' },
      { url: '/icon.svg?v=20250913', type: 'image/svg+xml' },
    ],
    apple: [{ url: '/apple-touch-icon.png?v=20250913', sizes: '180x180' }],
  },
  manifest: '/site.webmanifest',
  alternates: {
    languages: Object.fromEntries(
      localeCodes.map(code => [code, `${site}/${code}`])
    ),
  },
  openGraph: {
    title: 'CareAI',
    url: 'https://careai.app',
    siteName: 'CareAI',
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'CareAI' },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
