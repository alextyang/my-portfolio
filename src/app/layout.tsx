import type { Metadata } from "next";
import "./(lib)/font.css";
import "./globals.css";
import { SiteFooter, SiteHeader } from "./siteComponents";
import { Suspense } from "react";
import { Analytics } from "@vercel/analytics/react"
import { GoogleAnalytics } from '@next/third-parties/google'

export const metadata: Metadata = {
  title: "Alex Yang — Full-Stack Developer & Creative Technologist",
  description: "Interdisciplinary developer and designer. From projection mapping in science-communications to designing interventions for online polarization, I leverage my background in the arts to inspire out-of-the-box thinking and to bridge the gap between disciplines. ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="text-white font-nhgt overflow-x-clip">
        <Suspense>
          <SiteHeader />
        </Suspense>
        {children}
        <GoogleAnalytics gaId={"G-16E1NJ9JPL"} />
        <Analytics />
        <SiteFooter />
      </body>
    </html>
  );
}

