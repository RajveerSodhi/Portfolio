"use client";
import { useState, useEffect } from "react";
import { FaExternalLinkAlt, FaExpand, FaArrowDown, FaRegClock, FaGamepad } from "react-icons/fa";
import debounce from "lodash/debounce";

export default function MyCursor() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
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
        window.addEventListener("mousemove", handleMouseMove);
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, [position]);

    return (
        <div className="hidden md:block">
            <div
                className={`pointer-events-none will-change-transform z-[999999] fixed rounded-full
                    ${
                        isHoveringSpecialComponent
                            ? " whitespace-nowrap bg-myblack dark:bg-mywhite text-mywhite dark:text-myblack px-4 py-2 w-44 flex items-center justify-center shadow-lg transition-transform ease-out duration-300"
                            : "cursor-blur border-2 border-solid border-[#ffffff2b] mix-blend-difference bg-white p-2"
                    }
                `}
                style={{
                    transform: `translate3d(${
                        position.x - (isHoveringSpecialComponent ? 90 : 10)
                    }px, ${position.y - 105}px, 0px)`,
                }}
            >
                {tooltipContent}
            </div>
        </div>
    );
}
