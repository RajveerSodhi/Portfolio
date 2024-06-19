"use client";
import { useState, useEffect, useRef } from "react";
import { FaExternalLinkAlt, FaExpand, FaArrowDown, FaRegClock, FaGamepad } from "react-icons/fa";
import debounce from "lodash/debounce";

export default function MyCursor() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
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
                tooltipRef.current.style.transform = `translate(${position.x - 90}px, ${
                    position.y - 110
                }px)`;
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
                className="my-cursor"
                style={{
                    left: `${position.x}px`,
                    top: `${position.y}px`,
                }}
            ></div>
            {tooltipContent && (
                <div
                    ref={tooltipRef}
                    className={`z-[999999] pointer-events-none whitespace-nowrap will-change-transform tooltip-text fixed transition-opacity duration-300 ${
                        isHoveringSpecialComponent ? "opacity-100" : "opacity-0"
                    } bg-myblack dark:bg-mywhite text-mywhite dark:text-myblack px-4 py-2 rounded-full w-44 flex items-center justify-center shadow-lg`}
                >
                    {tooltipContent}
                </div>
            )}
        </div>
    );
}
