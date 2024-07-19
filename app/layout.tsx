import { Work_Sans } from "next/font/google";

import "./globals.css";
import { TooltipProvider } from "@/components/ui/tooltip";

import Room from "./Room";

export const metadata = {
  title: "Didesign",
  description:
    "A minimalist Figma clone using fabric.js and Liveblocks for realtime collaboration",
};

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
  weight: ["400", "600", "700"],
});

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang='en'>
    <head>
      <meta name='title' content='Didesign - Collaborative Design Platform' />
      <meta
        name='description'
        content='Didesign is a collaborative design platform with real-time multi-cursor interaction, cursor chat, reactions, active users list, comment bubbles, and more. Create, customize, and manage design elements effortlessly with our intuitive tools.'
      />
      <meta
        name='keywords'
        content='Didesign, collaborative design, real-time design, multi-cursor, cursor chat, design tools, canvas drawing, design collaboration, image upload, freeform drawing, undo redo, keyboard shortcuts, design history, export design'
      />
      <meta name='robots' content='index, follow' />
      <meta http-equiv='Content-Type' content='text/html; charset=utf-8' />
      <meta name='language' content='English' />
      <meta name='author' content='Rian Mandala' />
      <meta
        property='og:title'
        content='Didesign - Collaborative Design Platform'
      />
      <meta
        property='og:description'
        content='Collaborate in real-time with Didesign, featuring multi-cursor interaction, cursor chat, and various design tools for a seamless creative experience.'
      />
      <meta
        property='og:image'
        content='https://github.com/user-attachments/assets/01b13643-0012-4727-8880-aa6817e9c735'
      />
      <meta property='og:url' content='https://didesign.vercel.app/' />
      <meta property='og:type' content='website' />
      <meta name='twitter:card' content='summary_large_image' />
      <meta
        name='twitter:title'
        content='Didesign - Collaborative Design Platform'
      />
      <meta
        name='twitter:description'
        content='Experience real-time collaborative design with Didesign. Engage with multi-cursor interaction, cursor chat, reactions, and more.'
      />
      <meta
        name='twitter:image'
        content='https://github.com/user-attachments/assets/01b13643-0012-4727-8880-aa6817e9c735'
      />
      <meta name='twitter:url' content='https://didesign.vercel.app/' />
    </head>
    <body className={`${workSans.className} bg-primary-grey-200`}>
      <Room>
        <TooltipProvider>{children}</TooltipProvider>
      </Room>
    </body>
  </html>
);

export default RootLayout;
