import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import Navbar from '@/components/ui/navbar';
import "./globals.css";

const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ecommerce with Strapi",
  description: "Welcome to our ecommerce made with strapi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${urbanist.variable} antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
