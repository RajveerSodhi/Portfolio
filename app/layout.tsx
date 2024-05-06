import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import InstallBootstrap from "./components/InstallBoostrap";
import Header from "./WebsiteHeaders/Header";
import Footer from "./WebsiteHeaders/Footer";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

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
    <html lang="en">
      <Head>
        <title>Rajveer Sodhi</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className={inter.className}>
        <InstallBootstrap />
        <Header />
        <main className="bg-slate-100">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
