import "./globals.css";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import Script from "next/script";

export const metadata = {
  title: "Frame It UK | Bespoke Sports Memorabilia Framing",
  description:
    "Premium football shirt and sports memorabilia framing in Scotland. Bespoke framing for signed shirts, match-worn memorabilia, medals and presentation displays.",
  icons: {
    icon: "/images/Icon.PNG",
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
