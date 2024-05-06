import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./fonts.css";
import "./globals.css";
import Navbar from "./_components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="px-12 py-8" >
        <Navbar/>
        {children}</body>
    </html>
  );
}
