import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTopButton from "@/components/ScrollToTopButton";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-montserrat',
});

export const metadata: Metadata = {
  title: "Express Analytics - Data Cleaning Services",
  description: "Professional data cleaning services for businesses. Clean 200K records for just $1,000.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" style={{ background: '#f5f6fa' }}>
      <body className={`${montserrat.className} ${montserrat.variable}`} style={{ background: '#f5f6fa' }}>
        <Navbar />
        <main className="min-h-screen">
          <div className="site-container">
            {children}
          </div>
        </main>
        <Footer />
        <ScrollToTopButton />
      </body>
    </html>
  );
}
