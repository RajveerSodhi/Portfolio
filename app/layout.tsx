import type { Metadata } from "next";
import localFont from "next/font/local";
import { Providers } from "./providers";
import Script from "next/script";
import "./globals.css";
import Navbar from "./Components/NavbarComponents/navbar";
import Footer from "./Components/FooterComponents/footer";
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
    icons: { icon: "/favicon.ico" },
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
                <head>
                    {/* Google Analytics */}
                    <Script
                        strategy="afterInteractive"
                        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.G_ANALYTICS_KEY}`}
                    ></Script>
                    <Script id="ga-init" strategy="afterInteractive">
                        {`window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());

                    gtag('config', ${process.env.G_ANALYTICS_KEY});`}
                    </Script>
                </head>

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
