"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export default function FrontCard() {
    const theme = useTheme();

    const [myPhotoSrc, setMyPhotoSrc] = useState("/images/myPhoto/light.webp");

    useEffect(() => {
        if (theme.resolvedTheme === "dark") {
            setMyPhotoSrc("/images/myPhoto/dark.webp");
        } else {
            setMyPhotoSrc("/images/myPhoto/light.webp");
        }
    }, [theme.resolvedTheme]);

    return (
        <div className="flex justify-center">
            <Image
                className="shadow-lg rounded-[2.8rem] aspect-square h-[300px] w-[300px] max-h-[300px] max-w-[300px] select-none"
                src={myPhotoSrc}
                width={300}
                height={300}
                priority={true}
                alt="Rajveer Sodhi Headshot"
            />
        </div>
    );
}
