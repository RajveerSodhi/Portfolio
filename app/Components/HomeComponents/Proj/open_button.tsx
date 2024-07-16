"use client";
import { useState } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

export default function OpenButton(props: { link: string }) {
    const [hovered, setHovered] = useState(false);

    return (
        <a
            className="ml-6 text-3xl p-2 no-underline text-myblack dark:text-mywhite bg-[#f0f0f0] dark:bg-[#333333] rounded-full inline-flex max-w-12 hover:max-w-56 hover:scale-105 transition-all transition-configuration flex-row items-center justify-center"
            rel="noopener noreferrer"
            target="_blank"
            href={`https://${props.link}`}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <FaExternalLinkAlt className="scale-[0.8]" />
            <span
                className={`text-lg max-h-6 transition-all transition-configuration overflow-hidden flex items-center justify-center ${
                    hovered
                        ? "max-w-40 mx-2 opacity-100 visible"
                        : "max-w-0 opacity-0 mx-0 invisible"
                }`}
            >
                Open
            </span>
        </a>
    );
}
