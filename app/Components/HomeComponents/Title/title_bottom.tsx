"use client";
import { ReactTyped } from "react-typed";

export default function TitleBottom() {
    return (
        <div className="flex justify-center flex-col items-center">
            <h2 className="mt-4 text-[2.75rem]">
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

            <p className="text-center w-[75%] lg:w-[60%] mt-[4rem] text-xl leading-loose">
                I am a final-year Computer Science Honours student at the University of British
                Columbia. I am interested in Human-Computer Interaction, Extended Reality, and
                Artificial Intelligence.
            </p>
        </div>
    );
}
