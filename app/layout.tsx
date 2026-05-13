import "./globals.css";
import Footer from "../components/Footer";

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
      </body>
    </html>
  );
}
