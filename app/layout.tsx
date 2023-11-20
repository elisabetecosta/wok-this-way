import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import NavBar from "@/components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Wok This Way",
  description: "Find the best Chinese buffets around the world",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}