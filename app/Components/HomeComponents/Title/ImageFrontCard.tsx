"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function FrontCard() {
    const [myPhotoSrc, setMyPhotoSrc] = useState(0);

    useEffect(() => {
        setMyPhotoSrc(Math.ceil(Math.random() * 12));
    }, []);

    function shuffleImageDesktop() {
        setTimeout(function () {
            setMyPhotoSrc(Math.ceil(Math.random() * 12));
        }, 800);
    }

    function shuffleImageMobile() {
        setMyPhotoSrc(Math.ceil(Math.random() * 12));
    }

    return (
        <div className="flex justify-center shadow-lg rounded-[2.8rem] overflow-hidden bg-gradient-to-t from-[#3749A4] to-[#546FFF] dark:from-[#A15F2F] dark:to-[#FF964B]">
            <Image
                className="aspect-square h-[300px] w-[300px] max-h-[300px] max-w-[300px] select-none"
                src={`/images/headerPhoto/img${myPhotoSrc}.webp`}
                width={300}
                height={300}
                priority={true}
                onMouseOver={shuffleImageDesktop}
                onTouchStart={shuffleImageMobile}
                alt="Rajveer Sodhi Header Photo"
            />
        </div>
    );
}
