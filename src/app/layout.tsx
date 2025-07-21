import type { Metadata, Viewport } from "next";
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
  title: "FutureLabs | Empowering Africa’s Tech Talent",
  description:
    "FutureLabs is a dynamic tech hub providing training, mentorship, and development services for tech enthusiasts, students, and companies across Africa.",
  keywords: [
    "FutureLabs",
    "Tech Hub Nigeria",
    "Learn Web Development",
    "Frontend Training",
    "Backend Training",
    "Internships for Developers",
    "Hire Developers",
    "Software Development Services",
    "Tech Training Africa",
    "App Development",
    "Website Design",
  ],
  applicationName: "FutureLabs",
  authors: [{ name: "FutureLabs", url: "https://futurelabs.ng" }],
  creator: "FutureLabs Team",
  publisher: "FutureLabs",
  metadataBase: new URL("https://futurelabs.ng"), // Replace with your production domain
  icons: {
    icon: "/favicon.ico",
  },

  // ✅ Robots Metadata
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // ✅ Sitemap Metadata
  alternates: {
    canonical: "https://futurelabs.ng",
    languages: {
      "en-US": "https://futurelabs.ng",
    },
    types: {
      "application/rss+xml": [
        {
          url: "https://futurelabs.ng/rss.xml",
        },
      ],
    },
  },

  openGraph: {
    title: "FutureLabs | Tech Training & Software Services",
    description:
      "Join FutureLabs — a tech hub committed to equipping Africa's next generation of software engineers, designers, and innovators.",
    url: "https://futurelabs.ng",
    siteName: "FutureLabs",
    images: [
      {
        url: "/images/futurelabs-og.png",
        width: 1200,
        height: 630,
        alt: "FutureLabs Tech Training and Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "FutureLabs | Africa’s Tech Talent Hub",
    description:
      "Explore FutureLabs, a platform offering tech training, internship programs, and software development services for individuals and companies.",
    site: "@futurelabs", // Update with real Twitter handle
    creator: "@futurelabs", // Update with real Twitter handle
    images: ["/images/futurelabs-og.png"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
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
