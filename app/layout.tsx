import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Frame It UK | Bespoke Football Shirt Framing",
  description:
    "Bespoke football shirt and sports memorabilia framing, handmade in Scotland. Custom designs, signed shirts, match-worn shirts, photos, plaques and artwork.",
  keywords: [
    "football shirt framing",
    "shirt framing Scotland",
    "sports memorabilia framing",
    "signed shirt framing",
    "football memorabilia",
    "Frame It UK",
  ],
  openGraph: {
    title: "Frame It UK | Bespoke Football Shirt Framing",
    description:
      "Your shirt. Your memories. Framed. Bespoke football shirt and memorabilia framing handmade in Scotland.",
    type: "website",
    locale: "en_GB",
    siteName: "Frame It UK",
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
