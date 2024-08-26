"use client";
import { useState, useEffect, useRef, ReactNode } from "react";
import { FaExternalLinkAlt, FaExpand, FaArrowDown, FaRegClock, FaGamepad } from "react-icons/fa";
import debounce from "lodash/debounce";

export default function MyCursor() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const cursorRef = useRef<HTMLDivElement>(null);
    const [isHoveringSpecialComponent, setIsHoveringSpecialComponent] = useState(false);
    const tooltipContentRef = useRef<ReactNode | null>(null);

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
            tooltipContentRef.current = specialComponent.content;
        } else {
            setIsHoveringSpecialComponent(false);
            tooltipContentRef.current = null;
        }

        if (cursorRef.current) {
            cursorRef.current.style.transform = `translate3d(
                ${e.clientX - 10}px,
                ${e.clientY - 105}px,
                0px
            )`;
        }
    }, 10);

    useEffect(() => {
        window.addEventListener("mousemove", handleMouseMove);
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, [position]);

    return (
        <div
            ref={cursorRef}
            className={`hidden md:flex pointer-events-none will-change-transform z-[999999] fixed rounded-full p-2 w-0 h-0 cursor-to-tooltip 
                ${
                    isHoveringSpecialComponent
                        ? " whitespace-nowrap bg-myblack dark:bg-mywhite text-mywhite dark:text-myblack w-44 h-10 items-center justify-center shadow-lg tooltip-movement"
                        : "cursor-grayscale mix-blend-difference bg-white"
                }
            `}
        >
            <span
                className={`flex items-center transition-all duration-300 ease-in-out ${
                    isHoveringSpecialComponent ? "opacity-100 w-100" : "opacity-0 w-0"
                }`}
            >
                {tooltipContentRef.current}
            </span>
        </div>
    );
}
