import type { Metadata } from "next";
import localFont from "next/font/local";
import { Providers } from "./providers";
import "./globals.css";
import Navbar from "./Components/NavbarComponents/navbar";
import Footer from "./Components/FooterComponents/footer";
import Head from "next/head";
import MyCursor from "./Components/my-cursor";
import { BackgroundGradientAnimation } from "./Components/background_gradient";

const point = localFont({
    src: [
        { path: "../public/fonts/point/PointRegular.otf", weight: "400", style: "normal" },
        { path: "../public/fonts/point/PointBook.otf", weight: "300", style: "normal" },
        { path: "../public/fonts/point/PointBold.otf", weight: "700", style: "normal" },
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
            <body
                className={`bg-mywhite dark:bg-myblack overflow-x-hidden transition-color transition-configuration ${point.className}`}
            >
                <BackgroundGradientAnimation />
                <MyCursor />
                <Providers>
                    <Navbar />
                    <main>{children}</main>
                    <Footer />
                </Providers>
            </body>
        </html>
    );
}
