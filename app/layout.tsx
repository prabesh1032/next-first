import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Meridian Systems",
  description: "Managed cloud & IT operations that hold the line.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col bg-[#05070D] font-sans text-[#E7EBF3] selection:bg-[#22D3EE]/30">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}