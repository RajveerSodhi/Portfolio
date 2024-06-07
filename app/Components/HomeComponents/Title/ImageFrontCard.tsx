"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export default function FrontCard() {
    const theme = useTheme();

    const [myPhotoSrc, setMyPhotoSrc] = useState("/myPhoto_dark.png");

    useEffect(() => {
        if (theme.resolvedTheme === "dark") {
            setMyPhotoSrc("/myPhoto_dark.png");
        } else {
            setMyPhotoSrc("/myPhoto_light.png");
        }
    }, [theme.resolvedTheme]);

    return (
        <div className="flex justify-center">
            <Image
                className="shadow-lg rounded-[2.8rem] aspect-square h-[300px] w-[300px] max-h-[300px] max-w-[300px] border-1 border-myblack"
                src={myPhotoSrc}
                width={300}
                height={300}
                priority={true}
                alt="Rajveer Sodhi Logo"
            />
        </div>
    );
}
