import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://frame-it-uk.com"),

  title: {
    default:
      "Football Shirt Framing Scotland | Frame It UK",
    template:
      "%s | Frame It UK",
  },

  description:
    "Bespoke football shirt framing and sports memorabilia framing in Scotland. Signed shirts, match-worn shirts, custom artwork, photo displays, plaques, double shirt frames and fully bespoke designs.",

  keywords: [
    "football shirt framing",
    "football shirt framing Scotland",
    "shirt framing Scotland",
    "shirt framing Edinburgh",
    "football shirt frame",
    "signed shirt framing",
    "match worn shirt framing",
    "sports memorabilia framing",
    "football memorabilia framing",
    "custom shirt framing",
    "bespoke shirt framing",
    "Frame It UK",
  ],

  alternates: {
    canonical: "https://frame-it-uk.com",
  },

  openGraph: {
    title:
      "Football Shirt Framing Scotland | Frame It UK",

    description:
      "Your shirt. Your memories. Framed. Bespoke football shirt and sports memorabilia framing handmade in Scotland.",

    url: "https://frame-it-uk.com",

    siteName: "Frame It UK",

    locale: "en_GB",

    type: "website",

    images: [
      {
        url: "/images/work/assgaard-hero.jpeg.jpg",
        width: 1200,
        height: 630,
        alt: "Bespoke football shirt framing by Frame It UK",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Football Shirt Framing Scotland | Frame It UK",

    description:
      "Bespoke football shirt and sports memorabilia framing handmade in Scotland.",

    images: [
      "/images/work/assgaard-hero.jpeg.jpg",
    ],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB">
      <body>{children}</body>
    </html>
  );
}
