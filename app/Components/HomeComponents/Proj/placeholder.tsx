"use client";
import Image from "next/image";
import { useState } from "react";
import ReactCardFlip from "react-card-flip";
import Tilt from "react-parallax-tilt";

export default function Placeholder() {
    const [isFlipped, setIsFlipped] = useState(false);

    function flipToBack() {
        setIsFlipped(true);
    }

    function flipToFront() {
        setIsFlipped(false);
    }

    return (
        <Tilt
            tiltReverse={false}
            tiltMaxAngleX={1}
            tiltMaxAngleY={1}
            gyroscope={false}
            className="cursor-placeholder"
        >
            <div className="cursor-placeholder hidden md:flex appear-animated p-4 flex-col justify-center w-full h-full max-h-[444px] hover:scale-[1.01] transition-transform rounded-3xl card">
                <Tilt
                    tiltReverse={false}
                    tiltMaxAngleX={8}
                    tiltMaxAngleY={8}
                    gyroscope={false}
                    trackOnWindow={!isFlipped}
                >
                    <div onMouseOver={flipToBack} onMouseLeave={flipToFront}>
                        <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
                            <Image
                                src="/images/memoji/front.webp"
                                width={200}
                                height={200}
                                alt="Rajveer Memoji Working"
                                className="rounded-full select-none shadow-xl border border-solid border-cardlightborder dark:border-carddarkborder cursor-auto"
                            ></Image>
                            <Image
                                src="/images/memoji/back.webp"
                                width={200}
                                height={200}
                                alt="Rajveer Memoji Yawning"
                                className="rounded-full select-none shadow-xl border border-solid border-cardlightborder dark:border-carddarkborder cursor-auto"
                            ></Image>
                        </ReactCardFlip>
                    </div>
                </Tilt>

                <h2 className="text-3xl mt-4 mb-2 cursor-placeholder">More Coming Soon!</h2>
                <h5 className="text-xl text-center mb-2 text-myblack/85 dark:text-mywhite/85 cursor-placeholder">
                    I&apos;m always up to something
                </h5>
            </div>
        </Tilt>
    );
}
