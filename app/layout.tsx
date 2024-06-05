import type { Metadata } from "next";
import localFont from "next/font/local"

import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./WebsiteHeaders/Navbar";
import Footer from "./WebsiteHeaders/Footer";
import Head from "next/head";

const point = localFont({
  src: [
    { path: "../public/fonts/point/PointRegular.otf", weight: "400" },
    { path: "../public/fonts/point/PointBold.otf", weight: "700" },
    { path: "../public/fonts/point/PointMediumItalic.otf", style: "italic" },
  ],
  variable: '--font-point',
});

export const metadata: Metadata = {
  title: "Rajveer Sodhi",
  description: "Rajveer Sodhi's Portfolio Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${point.variable} font-sans`}>
      <Head>
        <title>Rajveer Sodhi</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className="bg-zinc-800" style={{ overflowX: "hidden" }}>
        <Navbar />
        <main >
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
