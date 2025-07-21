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
    "FutureLabs is a dynamic tech hub providing training, mentorship, and development services for tech enthusiasts, students, and companies across Africa. Discover cutting-edge projects, AI solutions, and sustainable tech innovations.",
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
    "Innovation",
    "AI",
    "Sustainable Tech",
    "Tech Solutions",
  ],
  applicationName: "FutureLabs",
  authors: [{ name: "FutureLabs", url: "https://futurelabs.ng" }],
  creator: "FutureLabs Team",
  publisher: "FutureLabs",
  metadataBase: new URL("https://futurelabs.ng"),

  icons: {
    icon: "/favicon.ico",
  },

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
    title: "FutureLabs | Empowering Africa’s Tech Talent",
    description:
      "Join FutureLabs — a tech hub committed to equipping Africa's next generation of software engineers, designers, and innovators. Explore our innovations in AI, sustainable tech, and software development.",
    url: "https://futurelabs.ng",
    siteName: "FutureLabs",
    images: [
      {
        url: "https://futurelabs.ng/images/seoImage.jpeg",
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
    title: "FutureLabs | Empowering Africa’s Tech Talent",
    description:
      "Explore FutureLabs, a platform offering tech training, internship programs, and software development services. Discover our work in AI, sustainable tech, and digital innovation.",
    site: "@FutureLabsNG",
    creator: "@FutureLabsNG",
    images: ["https://futurelabs.ng/images/seoImage.jpeg"],
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
