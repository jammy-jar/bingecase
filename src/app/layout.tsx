import type { Metadata } from "next";
import Header from '@/app/header'
import { signika } from "@/app/font";

import "./globals.css";

export const metadata: Metadata = {
  title: "BingeCase",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${signika.className} antialiased bg-zinc-900`}>{children}</body>
    </html>
  );
}
