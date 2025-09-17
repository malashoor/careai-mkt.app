import "../globals.css";
import { ReactNode } from "react";
import { getDictionary } from "@/i18n/getDictionary";
import { isRTL, localeCodes } from "@/i18n/config";
import { htmlDir } from "@/lib/i18n/dir";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateStaticParams() {
  return localeCodes.map(code => ({ locale: code }));
}

export default async function LocaleLayout({
  children, params,
}: { children: ReactNode; params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  return (
    <html lang={locale} dir={htmlDir(locale)}>
      <head>
        <link rel="icon" href="/icons/favicon.ico?v=1" sizes="any" />
        <link rel="icon" type="image/svg+xml" href="/icons/favicon.svg?v=1" />
        <link rel="apple-touch-icon" href="/icons/favicon-180.png?v=1" sizes="180x180" />
        <link rel="mask-icon" href="/icons/safari-pinned-tab.svg?v=1" color="#0B1324" />
        <link rel="manifest" href="/icons/site.webmanifest" />
        <meta name="theme-color" content="#0B1324" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="min-h-screen bg-white text-slate-900">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Navbar locale={locale} dict={dict} />
            <main>{children}</main>
            <Footer locale={locale} dict={dict} />
          </div>
        </div>
      </body>
    </html>
  );
}
