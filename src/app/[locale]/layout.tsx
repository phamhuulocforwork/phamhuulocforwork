import type { Metadata } from "next";

import { Inter } from "next/font/google";
import { notFound } from "next/navigation";

import { NextIntlClientProvider, hasLocale } from "next-intl";
import { ThemeProvider } from "next-themes";

import { ScrollToTop } from "@/components/scroll-to-top";
import { TooltipProvider } from "@/components/ui/tooltip";

import "@/styles/globals.css";

import { routing } from "@/i18n/routing";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pham Huu Loc - Portfolio",
  description: "Pham Huu Loc - Portfolio",
  keywords: [
    "Pham Huu Loc",
    "Portfolio",
    "Web Developer",
    "Graphic Designer",
    "Full-Stack Developer",
    "Software Engineer",
    "Web Developer",
  ],
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
      "vi-VN": "/vi-VN",
    },
  },
  openGraph: {
    type: "website",
    siteName: "Pham Huu Loc - Portfolio",
    locale: "vi_VN",
    url: "https://phamhuulocforwork.vercel.app",
    title: "Pham Huu Loc - Portfolio",
    description: "Pham Huu Loc - Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Pham Huu Loc - Portfolio Preview",
      },
    ],
  },
  authors: [
    {
      name: "Pham Huu Loc",
      url: "https://github.com/phamhuulocforwork",
    },
  ],
  creator: "Pham Huu Loc",
  icons: [
    {
      rel: "icon",
      url: "/favicon.ico",
    },
    {
      rel: "apple-touch-icon",
      url: "/apple-touch-icon.png",
    },
    {
      rel: "icon",
      type: "image/png",
      url: "/favicon-32x32.png",
      sizes: "32x32",
    },
    {
      rel: "icon",
      type: "image/png",
      url: "/favicon-16x16.png",
      sizes: "16x16",
    },
    {
      rel: "icon",
      type: "image/png",
      url: "/android-chrome-192x192.png",
      sizes: "192x192",
    },
    {
      rel: "icon",
      type: "image/png",
      url: "/android-chrome-512x512.png",
      sizes: "512x512",
    },
  ],
  robots: {
    index: true,
    follow: true,
  },
  manifest: "/site.webmanifest",
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <NextIntlClientProvider>
          <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
            <TooltipProvider>{children}</TooltipProvider>
          </ThemeProvider>
          <ScrollToTop />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
