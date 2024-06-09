"use client";

import { useState, useEffect } from "react";

export default function MyCursor() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isPointer, setIsPointer] = useState(false);

    const handleMouseMove = (e: any) => {
        setPosition({ x: e.clientX, y: e.clientY });
        const target = e.target;
        setIsPointer(window.getComputedStyle(target).getPropertyValue("cursor") === "pointer");
    };

    useEffect(() => {
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    const cursorStyle = isPointer ? { left: "-100px", top: "-100px" } : {};

    return (
        <div
            className={`my-cursor ${isPointer ? "pointer" : ""}`}
            style={{
                ...cursorStyle,
                left: `${position.x + 5}px`,
                top: `${position.y + 5}px`,
            }}
        ></div>
    );
}
