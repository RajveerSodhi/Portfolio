"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export default function LogoButton() {
    const theme = useTheme();

    const [logoSrc, setLogoSrc] = useState("/logo.svg");

    useEffect(() => {
        if (theme.resolvedTheme === "dark") {
            setLogoSrc("/logo.svg");
        } else {
            setLogoSrc("/logo_dark.svg");
        }
    }, [theme.resolvedTheme]);

    return (
        <Image
            className="inline-block mx-4 my-1 hover:scale-90 transition-transform duration-300 ease-in-out"
            src={logoSrc}
            width={24}
            height={24}
            alt="Rajveer Sodhi Logo"
        />
    );
}
