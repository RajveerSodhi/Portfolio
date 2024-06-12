"use client";
import { useState } from "react";
import { FaArrowDown, FaArrowRight } from "react-icons/fa6";

export default function ResumeView() {
    const [viewResume, setViewResume] = useState(false);

    return (
        <div className="mt-12 hidden md:flex flex-col items-center justify-center text-2xl">
            <div
                className="hover:scale-90 transition-transform transition-configuration mb-4 flex flex-row"
                onClick={() => setViewResume(!viewResume)}
            >
                Or View Here{" "}
                <span className="ml-2 text-center flex items-center justify-center">
                    {viewResume ? <FaArrowDown /> : <FaArrowRight />}
                </span>
            </div>
            <iframe
                className={`shadow-lg w-[80vh] h-[85vh] aspect-auto rounded-2xl ${
                    viewResume ? "block" : "hidden"
                }`}
                title="Resume"
                src="/resume.pdf"
            ></iframe>
        </div>
    );
}
