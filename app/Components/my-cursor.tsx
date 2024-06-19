"use client";
import { useState, useEffect, useRef } from "react";
import { FaExternalLinkAlt, FaExpand, FaArrowDown, FaRegClock, FaGamepad } from "react-icons/fa";
import debounce from "lodash/debounce";

export default function MyCursor() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isPointer, setIsPointer] = useState(false);
    const [isHoveringSpecialComponent, setIsHoveringSpecialComponent] = useState(false);
    const [tooltipContent, setTooltipContent] = useState<React.ReactNode>(null);
    const tooltipRef = useRef<HTMLDivElement>(null);

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
                    Open Site
                    <FaExternalLinkAlt className="ml-2 text-md" />
                </>
            ),
        },
        {
            className: "cursor-research",
            content: (
                <>
                    Available Soon
                    <FaRegClock className="ml-2 text-md" />
                </>
            ),
        },
        {
            className: "cursor-placeholder",
            content: (
                <>
                    brb gaming
                    <FaGamepad className="ml-2 text-md" />
                </>
            ),
        },
    ];

    const handleMouseMove = debounce((e: MouseEvent) => {
        setPosition({ x: e.clientX, y: e.clientY });
        const target = e.target as HTMLElement;
        const targetClasses = target.classList;

        setIsPointer(window.getComputedStyle(target).getPropertyValue("cursor") === "pointer");

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
    }, 10);

    useEffect(() => {
        let requestId: number;
        const updatePosition = () => {
            if (tooltipRef.current) {
                tooltipRef.current.style.left = `${position.x + 15}px`;
                tooltipRef.current.style.top = `${position.y + 15}px`;
            }
            requestId = requestAnimationFrame(updatePosition);
        };
        requestId = requestAnimationFrame(updatePosition);
        window.addEventListener("mousemove", handleMouseMove);
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            cancelAnimationFrame(requestId);
        };
    }, [position]);

    return (
        <div className="hidden md:block">
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
                    ref={tooltipRef}
                    className={`tooltip-text fixed transition-opacity duration-300 ${
                        isHoveringSpecialComponent ? "opacity-100" : "opacity-0"
                    } bg-myblack dark:bg-mywhite text-mywhite dark:text-myblack px-4 py-2 rounded-full w-44 flex items-center justify-center shadow-lg`}
                    style={{
                        zIndex: 999999,
                        pointerEvents: "none",
                        whiteSpace: "nowrap",
                        transform: "translate(-62%, -62%)",
                        willChange: "transform",
                    }}
                >
                    {tooltipContent}
                </div>
            )}
        </div>
    );
}
