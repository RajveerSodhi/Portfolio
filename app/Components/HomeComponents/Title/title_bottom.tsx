"use client";
import { ReactTyped } from "react-typed";

export default function TitleBottom() {
    return (
        <div className="flex justify-center flex-col items-center z-10">
            <h2 className="text-center w-full text-[1.75rem] md:text-[2.75rem]">
                <ReactTyped
                    strings={[
                        "Full Stack Developer",
                        "HCI Researcher",
                        "Responsible Leader",
                        "Enthusiastic Learner",
                    ]}
                    typeSpeed={40}
                    loop
                    backDelay={1800}
                />
            </h2>

            <p className="text-center md:w-[75%] lg:w-[60%] mt-[4rem] text-xl leading-loose">
                I am a final-year Computer Science Honours student at{" "}
                <span className="hidden md:inline">the University of British Columbia</span>
                <span className="md:hidden inline">UBC</span>, interested in{" "}
                <span className="hidden md:inline">Human-Computer Interaction</span>
                <span className="md:hidden inline">HCI</span> and{" "}
                <span className="hidden md:inline">Artificial Intelligence</span>
                <span className="md:hidden inline">AI</span>.
            </p>
        </div>
    );
}
