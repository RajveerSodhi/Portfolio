"use client";
import ReactCardFlip from "react-card-flip";
import ImageBackCard from "./ImageBackCard";
import ImageFrontCard from "./ImageFrontCard";
import { useEffect, useState } from "react";
import Tilt from "react-parallax-tilt";

export default function ImageCard() {
    const [isFlipped, setIsFlipped] = useState(false);
    const [width, setWidth] = useState<number>(0);

    function flipToBack() {
        setIsFlipped(true);
    }

    function flipToFront() {
        setIsFlipped(false);
    }

    function handleWindowSizeChange() {
        setWidth(window.innerWidth);
    }
    useEffect(() => {
        setWidth(window.innerWidth);

        window.addEventListener("resize", handleWindowSizeChange);
        return () => {
            window.removeEventListener("resize", handleWindowSizeChange);
        };
    }, []);

    const isOnDesktop = width > 768;

    return (
        <div onMouseOver={flipToBack} onMouseLeave={flipToFront} className="my-8">
            {isOnDesktop ? (
                <Tilt
                    trackOnWindow={!isFlipped}
                    tiltReverse={true}
                    tiltMaxAngleX={8}
                    tiltMaxAngleY={8}
                    gyroscope={false}
                    glareEnable={true}
                    glareReverse={true}
                    glareMaxOpacity={0.2}
                    glareBorderRadius="2.8rem"
                >
                    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
                        <ImageFrontCard />
                        <ImageBackCard />
                    </ReactCardFlip>
                </Tilt>
            ) : (
                <ImageFrontCard />
            )}
        </div>
    );
}
