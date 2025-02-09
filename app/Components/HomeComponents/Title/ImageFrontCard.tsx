"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function FrontCard() {
    const [myPhotoSrc, setMyPhotoSrc] = useState(0);
    let hoverTimer = null;

    useEffect(() => {
        setMyPhotoSrc(Math.ceil(Math.random() * 12));
    }, []);

    function handleMouseEnter() {
        hoverTimer = setTimeout(() => {
            setMyPhotoSrc(Math.ceil(Math.random() * 12));
        }, 800);
    }

    function handleMouseLeave() {
        clearTimeout(hoverTimer);
    }

    return (
        <div className="flex justify-center shadow-lg rounded-[2.8rem] overflow-hidden bg-gradient-to-t from-[#3749A4] to-[#546FFF] dark:from-[#A15F2F] dark:to-[#FF964B]">
            <Image
                className="aspect-square h-[300px] w-[300px] max-h-[300px] max-w-[300px] select-none"
                src={`/images/headerPhoto/img${myPhotoSrc}.webp`}
                width={300}
                height={300}
                priority={true}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                alt="Rajveer Sodhi Header Photo"
            />
        </div>
    );
}
