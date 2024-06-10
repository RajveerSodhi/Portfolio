"use client";
import { useState, useEffect } from "react";
import { FaExternalLinkAlt, FaExpand, FaArrowDown } from "react-icons/fa";

export default function MyCursor() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isPointer, setIsPointer] = useState(false);
    const [isHoveringSpecialComponent, setIsHoveringSpecialComponent] = useState(false);
    const [tooltipContent, setTooltipContent] = useState<React.ReactNode>(null);

    const specialComponents = [
        {
            className: "cursor-details",
            content: (
                <>
                    View Details
                    <FaArrowDown className="ml-2 text-md" />
                </>
            ),
        },
        {
            className: "cursor-image",
            content: (
                <>
                    Open Image
                    <FaExpand className="ml-2 text-md" />
                </>
            ),
        },
        {
            className: "cursor-website",
            content: (
                <>
                    Open Website
                    <FaExternalLinkAlt className="ml-2 text-md" />
                </>
            ),
        },
    ];

    const handleMouseMove = (e: MouseEvent) => {
        setPosition({ x: e.clientX, y: e.clientY });
        const target = e.target as HTMLElement;
        const targetClasses = target.classList;

        setIsPointer(window.getComputedStyle(target).getPropertyValue("cursor") === "pointer");

        // Check if the target has any special component classes
        const specialComponent = specialComponents.find((component) =>
            targetClasses.contains(component.className)
        );
        if (specialComponent) {
            setIsHoveringSpecialComponent(true);
            setTooltipContent(specialComponent.content);
        } else {
            setIsHoveringSpecialComponent(false);
            setTooltipContent(null);
        }
    };

    useEffect(() => {
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <>
            <div
                className={`my-cursor ${isPointer ? "pointer" : ""} ${
                    isHoveringSpecialComponent ? "special-hover" : ""
                }`}
                style={{
                    left: `${position.x}px`,
                    top: `${position.y}px`,
                }}
            ></div>
            {tooltipContent && (
                <div
                    className="tooltip-text fixed bg-myblack dark:bg-mywhite text-mywhite dark:text-myblack px-4 py-2 rounded-full w-46 flex items-center justify-center shadow:lg"
                    style={{
                        left: `${position.x + 15}px`,
                        top: `${position.y + 15}px`,
                        zIndex: 999999,
                        pointerEvents: "none",
                        whiteSpace: "nowrap",
                    }}
                >
                    {tooltipContent}
                </div>
            )}
        </>
    );
}
