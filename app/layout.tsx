import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./fonts.css";
import "./globals.css";
import Navbar from "./_components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:{
    default :  "Nizar Abdelkarim",
    template : `%s | Nizar Albdelkarim`
  },
  openGraph : {
    description : "Nizar Abdelkarim 20 years old, Passionate about photography/videography and editing, during the years I found that I can express my self and my ideas using camera and anything visual that I can work on with feelings so I can see the results trough the display. I worked with so many clubs in my university editing and filming videos also photographing some events.",
    images : ['@/public/work/pdp.jpg']
  },
  description: "Photographer",
  metadataBase : new URL("https://nizar-abdelkarim.vercel.app"),
  keywords: ["nizar abdelkarim", "nizar", "abdelkarim", "photography", "mohamed zouine", "photo", "pictures", "mohamed", "zouine", "morocoo", "picture"]
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
