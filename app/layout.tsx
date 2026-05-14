import "./globals.css";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import Script from "next/script";

export const metadata = {
  title: "Frame It UK | Bespoke Football Shirt Framing Scotland",

  description:
    "Premium football shirt framing and sports memorabilia displays in Scotland. Signed shirts, match-worn memorabilia, medals and custom presentation frames.",

  icons: {
    icon: "/images/Icon.PNG",
  },

  openGraph: {
    title: "Frame It UK",
    description:
      "Premium sports memorabilia framing in Scotland.",
    url: "https://frame-it-uk.com",
    siteName: "Frame It UK",
    images: [
      {
        url: "/images/social-preview.jpg",
        width: 1200,
        height: 630,
      },
    ],
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
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-HMMKEMBNX9"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-HMMKEMBNX9');
          `}
        </Script>

        {children}
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
