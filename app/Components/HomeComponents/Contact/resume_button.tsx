"use client";
import { useState } from "react";
import { IoDocumentText } from "react-icons/io5";

export default function Resume() {
    const [hovered, setHovered] = useState(false);

    return (
        <a
            className="no-underline text-2xl py-4 px-12 text-center flex flex-row items-center rounded-full shadow-md hover:scale-[0.95] transition-transform transition-configuration dark:bg-[#fefefe] bg-[#252525] border-1 border-solid dark:border-[#e7e7e7] border-[#454545] dark:text-myblack text-mywhite"
            download
            href="/resume.pdf"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            Download Resume
            <IoDocumentText
                className={`text-2xl max-h-6 transition-all transition-configuration overflow-hidden ${
                    hovered
                        ? "max-w-20 ml-4 opacity-100 visible"
                        : "max-w-0 opacity-0 mx-0 invisible"
                }`}
            />
        </a>
    );
}
