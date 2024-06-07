"use client";
import ReactCurvedText from "react-curved-text";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export default function BackCard() {
    const theme = useTheme();

    const [logoSrc, setLogoSrc] = useState("/logo.svg");
    const [textColor, setTextColor] = useState("#000000");

    useEffect(() => {
        if (theme.resolvedTheme === "dark") {
            setLogoSrc("/logo_dark.svg");
            setTextColor("#000000");
        } else {
            setLogoSrc("/logo.svg");
            setTextColor("#FFFFFF");
        }
    }, [theme.resolvedTheme]);

    return (
        <div className="flex justify-center shadow-lg rounded-[2.8rem] aspect-square h-[300px] w-[300px] max-h-[300px] max-w-[300px] border-1 border-mywhite bg-myblack dark:border-myblack dark:bg-mywhite select-none">
            <Image
                className="absolute top-0 left-0 right-0 bottom-0 m-auto"
                src={logoSrc}
                width={80}
                height={80}
                priority={true}
                alt="Rajveer Sodhi Logo"
            />
            <ReactCurvedText
                text="SCROLL DOWN 👨‍💻 TO KNOW MORE 👨‍💻"
                width={300}
                height={300}
                cx={150}
                cy={150}
                rx={70}
                ry={70}
                reversed={true}
                textProps={{ style: { fontSize: "23", color: "#123ABC" } }}
                textPathProps={{ fill: textColor }}
                tspanProps={{ dy: "-32" }}
                svgProps={{ className: "curved-text" }}
            />
        </div>
    );
}
