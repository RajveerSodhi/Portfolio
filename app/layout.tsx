import type { Metadata } from "next";
import localFont from "next/font/local";
import { Providers } from "./providers";
import "./globals.css";
import Navbar from "./Components/NavbarComponents/navbar";
import Footer from "./Components/FooterComponents/footer";
import Head from "next/head";
import CursorTooltip from "./Components/cursor_tooltip";
import { GradientProvider } from "./Components/Gradient/GradientContext";
import GradientBackgroundWrapper from "./Components/Gradient/GradientBackgroundWrapper";

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
        <GradientProvider>
            <html lang="en" suppressHydrationWarning>
                <Head>
                    <title>Rajveer Sodhi</title>
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <body
                    className={`bg-mywhite dark:bg-myblack overflow-x-hidden transition-color transition-configuration ${point.className}`}
                >
                    <GradientBackgroundWrapper />
                    <CursorTooltip />
                    <Providers>
                        <Navbar />
                        <main>{children}</main>
                        <Footer />
                    </Providers>
                </body>
            </html>
        </GradientProvider>
    );
}
