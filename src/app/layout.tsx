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
      <body className="font-nhgt text-white overflow-x-clip">
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}

import Link from "next/link";

const socialLinks = [{
  href: 'mailto://alexanderyang20@gmail.com',
  icon: (<svg xmlns="http://www.w3.org/2000/svg" width="2.4rem" height="2.4rem" viewBox="-20 -1000 1010 1000"><path fill="currentColor" d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280 320-200v-80L480-520 160-720v80l320 200Z" /></svg>)
}, {
  href: 'https://github.com/alextyang/',
  icon: (<svg xmlns="http://www.w3.org/2000/svg" className="mr-1" width="2.15rem" height="2.15rem" viewBox="-1 -1 24 24"><path fill="currentColor" d="M12 1.27a11 11 0 00-3.48 21.46c.55.09.73-.28.73-.55v-1.84c-3.03.64-3.67-1.46-3.67-1.46-.55-1.29-1.28-1.65-1.28-1.65-.92-.65.1-.65.1-.65 1.1 0 1.73 1.1 1.73 1.1.92 1.65 2.57 1.2 3.21.92a2 2 0 01.64-1.47c-2.47-.27-5.04-1.19-5.04-5.5 0-1.1.46-2.1 1.2-2.84a3.76 3.76 0 010-2.93s.91-.28 3.11 1.1c1.8-.49 3.7-.49 5.5 0 2.1-1.38 3.02-1.1 3.02-1.1a3.76 3.76 0 010 2.93c.83.74 1.2 1.74 1.2 2.94 0 4.21-2.57 5.13-5.04 5.4.45.37.82.92.82 2.02v3.03c0 .27.1.64.73.55A11 11 0 0012 1.27"></path></svg>)
}, {
  href: 'https://linkedin.com/in/alextyang',
  icon: (<svg xmlns="http://www.w3.org/2000/svg" width="2.4rem" height="2.4rem" viewBox="0 0 24 24"><path fill="currentColor" d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"></path></svg>)
}, {
  href: 'https://open.spotify.com/user/koopakondra',
  icon: (<svg xmlns="http://www.w3.org/2000/svg" width="2.4rem" height="2.4rem" viewBox="0 0 24 24"><path fill="currentColor" d="M17.9 10.9C14.7 9 9.35 8.8 6.3 9.75c-.5.15-1-.15-1.15-.6c-.15-.5.15-1 .6-1.15c3.55-1.05 9.4-.85 13.1 1.35c.45.25.6.85.35 1.3c-.25.35-.85.5-1.3.25m-.1 2.8c-.25.35-.7.5-1.05.25c-2.7-1.65-6.8-2.15-9.95-1.15c-.4.1-.85-.1-.95-.5c-.1-.4.1-.85.5-.95c3.65-1.1 8.15-.55 11.25 1.35c.3.15.45.65.2 1m-1.2 2.75c-.2.3-.55.4-.85.2c-2.35-1.45-5.3-1.75-8.8-.95c-.35.1-.65-.15-.75-.45c-.1-.35.15-.65.45-.75c3.8-.85 7.1-.5 9.7 1.1c.35.15.4.55.25.85M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2" /></svg>)
}];

function Footer() {
  return (
    <div className="flex flex-row w-auto flex-nowrap justify-around sm:justify-center h-12 px-3.5 mx-3.5 mb-6 -mt-3.5 gap-5">
      {socialLinks.map((social) => {
        return (
          <Link key={social.href} href={social.href} className="cursor-pointer">
            {social.icon}
          </Link>
        );
      })}
    </div>
  );
}