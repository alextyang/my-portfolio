import type { Metadata } from "next";
import "./(lib)/font.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Alex Yang, Full-Stack Developer & Creative Technologist",
  description: "Interdisciplinary developer and designer. From projection mapping in science-communications to designing interventions for online polarization, I leverage my background in the arts to inspire out-of-the-box thinking and to bridge the gap between disciplines. ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-nhgt">{children}</body>
    </html>
  );
}
