import type { Metadata } from "next";
import { Inter, Manrope, Poppins } from "next/font/google";
import "./globals.css";
import StateContextProvider from "../app/context";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "FutureLabs | Innovate, Create, Discover", // Improved title for clarity and SEO
  description:
    "FutureLabs is your hub for innovation and technological advancement. Discover cutting-edge projects, research, and solutions that shape the future. Explore our initiatives in AI, sustainable tech, and more.", // Optimized description with keywords
  keywords: [
    "FutureLabs",
    "innovation",
    "technology",
    "AI",
    "sustainable tech",
    "research",
    "solutions",
    "future",
  ], // Added relevant keywords
  openGraph: {
    title: "FutureLabs | Innovate, Create, Discover",
    description:
      "FutureLabs is your hub for innovation and technological advancement. Discover cutting-edge projects, research, and solutions that shape the future.",
    url: "https://futurelabs.ng", // Replace with your actual website URL
    siteName: "FutureLabs",
    images: [
      {
        url: "https://futurelabs.ng/images/seoImage.jpeg", // Replace with a relevant image for social sharing
        width: 1200,
        height: 630,
        alt: "FutureLabs Innovation",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FutureLabs | Innovate, Create, Discover",
    description:
      "FutureLabs is your hub for innovation and technological advancement. Discover cutting-edge projects, research, and solutions that shape the future.",
    creator: "@FutureLabsNG", // Replace with your Twitter handle
    images: ["https://futurelabs.ng/images/seoImage.jpeg"], // Replace with a relevant image for Twitter sharing
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${manrope.variable} ${poppins.variable} font-sans mx-auto  w-full `}
      >
        <StateContextProvider>{children}</StateContextProvider>
      </body>
    </html>
  );
}
