import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "My Fair Lady Cleaning | Trusted & Insured Cleaning in Pocono Lake, PA",
  description: "Professional residential, Airbnb turnover, and commercial cleaning. Licensed & insured (Harborway). Serving Pocono Lake, Blakeslee, and expanding areas. 5-star rated.",
  keywords: ["cleaning service pocono lake", "airbnb turnover", "vacation rental cleaning", "commercial janitorial services", "house cleaning blakeslee", "move out cleaning"],
  openGraph: {
    title: "My Fair Lady Cleaning | Trusted & Insured",
    description: "Professional residential & commercial cleaning in the Poconos. Licensed, insured, and 5-star rated.",
    type: "website",
    locale: "en_US",
    url: "https://myfairladycleaning.com",
    siteName: "My Fair Lady Cleaning",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${inter.variable} antialiased min-h-screen flex flex-col font-sans`}
      >
        <JsonLd />
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
