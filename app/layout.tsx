import "./globals.css";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";

export const metadata = {
  title: "Frame It UK",
  description: "Bespoke sports memorabilia framing",
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
