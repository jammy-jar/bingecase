import type { Metadata } from "next";
import Header from './header'
import { signika } from "./font";

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
      <body className={`${signika.className} antialiased bg-zinc-900`}>
        <Header />
        <main>{children}</main>
        <footer className="flex justify-between items-center flex-wrap py-2 px-6 border-t border-slate-900/10">
          <div className="w-full block flex-grow">
            <div><p className="block">test</p></div>
            <div>
              <p className="block">James Rose</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
