"use client";
import ReactCardFlip from "react-card-flip";
import ImageBackCard from "./ImageBackCard";
import ImageFrontCard from "./ImageFrontCard";
import { useState } from "react";
import Tilt from "react-parallax-tilt";

export default function ImageCard() {
    const [isFlipped, setIsFlipped] = useState(false);

    function flipToBack() {
        setIsFlipped(true);
    }

    function flipToFront() {
        setIsFlipped(false);
    }

    return (
        <Tilt trackOnWindow={!isFlipped} tiltReverse={true} tiltMaxAngleX={8} tiltMaxAngleY={8}>
            <div onMouseOver={flipToBack} onMouseLeave={flipToFront} className="my-4">
                <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
                    <ImageFrontCard />
                    <ImageBackCard />
                </ReactCardFlip>
            </div>
        </Tilt>
    );
}
