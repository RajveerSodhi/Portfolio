"use client";
import { useState, useEffect, useRef, ReactNode, useCallback } from "react";
import { FaExternalLinkAlt, FaExpand, FaArrowDown, FaRegClock, FaGamepad } from "react-icons/fa";
import { PiCertificateBold } from "react-icons/pi";
import debounce from "lodash/debounce";

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
        className: "cursor-certificate",
        content: (
            <>
                View Certificate
                <PiCertificateBold className="ml-2 text-xl" />
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

export default function CursorTooltip() {
    const cursorRef = useRef<HTMLDivElement>(null);
    const [hoveringSpecialComponent, setHoveringSpecialComponent] = useState("");
    const tooltipContentRef = useRef<ReactNode | null>(null);

    const handleMouseMove = useCallback(
        debounce((e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const targetClasses = target.classList;

            const specialComponent = specialComponents.find((component) =>
                targetClasses.contains(component.className)
            );

            if (specialComponent) {
                setHoveringSpecialComponent(specialComponent.className);
                tooltipContentRef.current = specialComponent.content;
            } else {
                tooltipContentRef.current = null;
                setHoveringSpecialComponent("");
            }

            if (cursorRef.current) {
                cursorRef.current.style.transform = `translate3d(${e.clientX - 85}px, ${
                    e.clientY - 18
                }px, 0px)`;
            }
        }, 8),
        []
    );

    useEffect(() => {
        window.addEventListener("mousemove", handleMouseMove);
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            handleMouseMove.cancel && handleMouseMove.cancel();
        };
    }, [handleMouseMove]);

    return (
        <div
            ref={cursorRef}
            className={
                hoveringSpecialComponent != ""
                    ? "hidden md:flex pointer-events-none z-[999999] fixed whitespace-nowrap rounded-full p-2 bg-myblack dark:bg-mywhite text-mywhite dark:text-myblack w-44 h-10 items-center justify-center shadow-lg tooltip-movement"
                    : ""
            }
        >
            <span
                className={`flex items-center ${
                    hoveringSpecialComponent != "" ? "opacity-100 w-100" : "opacity-0 w-0"
                }`}
            >
                {tooltipContentRef.current}
            </span>
        </div>
    );
}
