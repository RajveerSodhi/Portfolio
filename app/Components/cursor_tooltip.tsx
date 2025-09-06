"use client";
import { useState, useEffect, useRef, ReactNode, useCallback } from "react";
import {
    FaExternalLinkAlt,
    FaExpand,
    FaArrowDown,
    FaRegClock,
    FaGamepad,
    FaUniversity,
} from "react-icons/fa";
import { PiCertificateBold } from "react-icons/pi";

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
        className: "cursor-school",
        content: (
            <>
                Studying Hard
                <FaUniversity className="ml-2 text-xl" />
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
    const showingTooltip = hoveringSpecialComponent !== "";
    const rafRef = useRef<number | null>(null);
    const lastPos = useRef({ x: 0, y: 0 });

    useEffect(() => {
        const el = cursorRef.current;
        if (!el) return;

        const onMove = (e: PointerEvent) => {
            lastPos.current.x = e.clientX;
            lastPos.current.y = e.clientY;

            if (rafRef.current == null) {
                rafRef.current = requestAnimationFrame(() => {
                    el.style.transform = `translate3d(${lastPos.current.x}px, ${lastPos.current.y}px, 0)`;
                    rafRef.current = null;
                });
            }
        };

        window.addEventListener("pointermove", onMove, { passive: true });
        return () => {
            window.removeEventListener("pointermove", onMove);
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
        };
    }, []);

    const onOver = useCallback(
        (e: Event) => {
            const t = e.target as HTMLElement | null;
            if (!t) return;

            // allow matching if the class is on a parent
            const selector = specialComponents.map((s) => `.${s.className}`).join(", ");
            const host = t.closest?.(selector) as HTMLElement | null;

            if (host) {
                const match = specialComponents.find((s) => host.classList.contains(s.className))!;
                if (match.className !== hoveringSpecialComponent) {
                    setHoveringSpecialComponent(match.className);
                    tooltipContentRef.current = match.content;
                }
            } else if (hoveringSpecialComponent !== "") {
                setHoveringSpecialComponent("");
                tooltipContentRef.current = null;
            }
        },
        [hoveringSpecialComponent]
    );

    useEffect(() => {
        window.addEventListener("mouseover", onOver, true); // capture phase helps
        return () => window.removeEventListener("mouseover", onOver, true);
    }, [onOver]);

    return (
        <div
            ref={cursorRef}
            aria-hidden
            className={`fixed z-[999999] pointer-events-none -translate-x-1/2 -translate-y-1/2
                [@media(pointer:coarse)]:hidden ${showingTooltip ? "tooltip-movement" : ""}`}
            style={{ inset: 0 }}
        >
            {/* Default cursor */}
            <div className={`custom-cursor ${showingTooltip ? "opacity-0" : "opacity-100"}`} />

            {/* Tooltip cursor */}
            <div
                style={{ transform: "translate(0%, calc(-50%))" }}
                className={`cursor-tooltip 
                    ${
                        showingTooltip
                            ? "opacity-100 scale-100 translate-y-[-20px]"
                            : "opacity-0 scale-90 translate-y-[-20px]"
                    }
                    w-44 h-10`}
            >
                {tooltipContentRef.current}
            </div>
        </div>
    );
}
