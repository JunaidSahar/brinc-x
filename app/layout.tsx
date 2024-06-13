import type { Metadata } from "next";
import "../style/globals.css";
import LocalFont from "next/font/local";

const typoGrostek = LocalFont({ src: "./fonts/typo-grotesk.regular.otf" });

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
      <body className={typoGrostek.className}>{children}</body>
    </html>
  );
}