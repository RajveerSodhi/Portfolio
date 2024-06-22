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
        <Tilt tiltReverse={false} tiltMaxAngleX={1} tiltMaxAngleY={1} gyroscope={false}>
            <div className="cursor-placeholder appear-animated select-none p-4 flex-col text-center justify-center items-center shadow-lg bg-[#fefefe] dark:bg-[#252525] border-1 border-solid border-[#e7e7e7] dark:border-[#454545] text-myblack dark:text-mywhite rounded-3xl w-full h-full max-h-[444px] hover:scale-[1.01] transition-transform transition-configuration md:flex">
                <Tilt
                    tiltReverse={false}
                    tiltMaxAngleX={7}
                    tiltMaxAngleY={7}
                    gyroscope={false}
                    trackOnWindow={!isFlipped}
                >
                    <div onMouseOver={flipToBack} onMouseLeave={flipToFront}>
                        <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
                            <Image
                                src="/images/memoji/front.jpeg"
                                width={200}
                                height={200}
                                alt="Rajveers Memoji Working"
                                className="rounded-full select-none shadow-xl border-1 border-solid border-[#e7e7e7] dark:border-[#454545]"
                            ></Image>
                            <Image
                                src="/images/memoji/back.jpeg"
                                width={200}
                                height={200}
                                alt="Rajveers Memoji Yawning"
                                className="rounded-full select-none shadow-xl border-1 border-solid border-[#e7e7e7] dark:border-[#454545]"
                            ></Image>
                        </ReactCardFlip>
                    </div>
                </Tilt>

                <h2 className="cursor-placeholder text-3xl mt-4 mb-2">More Coming Soon!</h2>
                <h5 className="cursor-placeholder text-xl text-center mb-2 text-myblack/85 dark:text-mywhite/85">
                    I&apos;m always up to something
                </h5>
            </div>
        </Tilt>
    );
}
