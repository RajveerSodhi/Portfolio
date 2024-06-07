import type { Metadata } from "next";
import localFont from "next/font/local";
import { Providers } from "./providers";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/NavbarComponents/navbar";
import Footer from "./Components/FooterComponents/footer";
import Head from "next/head";

const point = localFont({
    src: [
        { path: "../public/fonts/point/PointRegular.otf", weight: "400", style: "normal" },
        { path: "../public/fonts/point/PointBook.otf", weight: "300", style: "normal" },
        { path: "../public/fonts/point/PointBold.otf", weight: "700", style: "normal" },
        { path: "../public/fonts/point/PointMediumItalic.otf", weight: "400", style: "italic" },
    ],
    variable: "--font-point",
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
        <html lang="en" suppressHydrationWarning>
            <Head>
                <title>Rajveer Sodhi</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <body className={`bg-mywhite dark:bg-myblack overflow-x-hidden ${point.className}`}>
                <Providers>
                    <Navbar />
                    <main>{children}</main>
                    <Footer />
                </Providers>
            </body>
        </html>
    );
}
