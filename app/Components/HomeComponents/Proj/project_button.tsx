"use client";
import { useState } from "react";
import { FaGithub } from "react-icons/fa";

export default function ProjectButton(props: { link: string }) {
    const [hovered, setHovered] = useState(false);

    return (
        <a
            className="text-3xl p-2 no-underline text-myblack dark:text-mywhite bg-[#f0f0f0] dark:bg-[#333333] rounded-full inline-flex max-w-12 hover:max-w-56 hover:scale-105 transition-all duration-500 ease-in-out flex-row items-center justify-center"
            rel="noopener noreferrer"
            target="_blank"
            href={`https://github.com/RajveerSodhi/${props.link}`}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <FaGithub />
            <span
                className={`text-lg max-h-6 transition-all duration-500 ease-in-out overflow-hidden ${
                    hovered
                        ? "max-w-40 mx-2 opacity-100 visible"
                        : "max-w-0 opacity-0 mx-0 invisible"
                }`}
            >
                View
            </span>
        </a>
    );
}
