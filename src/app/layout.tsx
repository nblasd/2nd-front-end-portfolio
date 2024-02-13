import type { Metadata } from "next";
import { Asap } from "next/font/google";
import "./globals.css";

const mont = Asap({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "This is my portfolio created by me.I have used Next.js and GSAP for animation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={mont.className}>{children}</body>
    </html>
  );
}
