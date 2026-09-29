import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  metadataBase: new URL(
    "https://frame-it-uk.com"
  ),

  title: {
    default:
      "Frame It UK | Bespoke Football Shirt Framing",

    template:
      "%s | Frame It UK",
  },

  description:
    "Bespoke football shirt and sports memorabilia framing, handmade in Scotland. Signed shirts, match-worn shirts, custom artwork, photos, plaques and fully bespoke framing.",

  keywords: [
    "football shirt framing",
    "football shirt framing Scotland",
    "shirt framing Edinburgh",
    "sports memorabilia framing",
    "signed shirt framing",
    "match worn shirt framing",
    "football memorabilia",
    "bespoke framing",
    "Frame It UK",
  ],

  openGraph: {
    title:
      "Frame It UK | Bespoke Football Shirt Framing",

    description:
      "Your shirt. Your memories. Framed. Bespoke football shirt and memorabilia framing, handmade in Scotland.",

    url:
      "https://frame-it-uk.com",

    siteName:
      "Frame It UK",

    locale:
      "en_GB",

    type:
      "website",
  },

  robots: {
    index: true,
    follow: true,
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en-GB">

      <body>
        {children}
      </body>

    </html>
  );
}
