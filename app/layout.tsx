import "./globals.css";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";

export const metadata = {
  title: "Frame It UK | Bespoke Sports Memorabilia Framing",
  description:
    "Premium football shirt and sports memorabilia framing in Scotland. Bespoke framing for signed shirts, match-worn memorabilia, medals and presentation displays.",
  icons: {
  icon: "/icon.PNG",
},
  keywords: [
    "football shirt framing",
    "sports memorabilia framing",
    "signed shirt framing",
    "shirt framing Scotland",
    "memorabilia framing UK",
    "football memorabilia display",
    "Frame It UK",
    "custom football shirt frame",
  ],
  openGraph: {
    title: "Frame It UK",
    description:
      "Premium bespoke sports memorabilia framing.",
    url: "https://frameituk.com",
    siteName: "Frame It UK",
    locale: "en_GB",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
