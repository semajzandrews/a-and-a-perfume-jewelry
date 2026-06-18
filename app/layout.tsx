import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import SmoothScroll from "./components/SmoothScroll";
import "./globals.css";

// Boska (display) + Satoshi (body) load from Fontshare via <link> below.
const mono = JetBrains_Mono({ variable: "--font-mono", subsets: ["latin"], weight: ["400", "500"] });

export const metadata: Metadata = {
  title: "A and A Perfume and Jewelry · Composed by hand · Main St, Orange NJ",
  description:
    "A neighborhood perfume and jewelry gift shop on Main Street, City of Orange, NJ. Fragrances, gold and silver adornments, and gifts composed by hand. Walk in and let us help you choose.",
  openGraph: {
    title: "A and A Perfume and Jewelry · Orange NJ",
    description: "Fragrance and adornment, composed by hand on Main Street.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${mono.variable} antialiased`}>
      <head>
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=boska@400,500,700,300,401&f[]=satoshi@400,500,700,300&display=swap"
        />
      </head>
      <body className="bg-parchment text-cacao paper-grain min-h-screen">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
