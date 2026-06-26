import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollObserver from "@/components/ScrollObserver";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata = {
  title: "Outpro.India | Premium Corporate Operations & Business Solutions",
  description: "Accelerate your business with Outpro.India. We deliver elite offshore staffing, bespoke BPO operations, digital transformation, and professional consulting services optimized for growth and efficiency.",
  keywords: ["offshore staffing", "BPO India", "business process outsourcing", "digital transformation", "corporate consulting", "Outpro India"],
  authors: [{ name: "Outpro.India Team" }],
  robots: "index, follow",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${outfit.variable}`}
    >
      <body>
        <ScrollObserver />
        <Header />
        <main style={{ flex: 1 }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
