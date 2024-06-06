"use client";
import { ReactTyped } from "react-typed";

export default function TitleBottom() {
    return (
        <div className="text-zinc-50 flex justify-center flex-col items-center">
            <h2 className="mt-4 text-[2.75rem]">
                <ReactTyped
                    strings={["Full Stack Developer", "HCI Researcher", "Mobile App Developer"]}
                    typeSpeed={40}
                    loop
                    backDelay={1800}
                />
            </h2>

            <p className="text-center w-[70%] mt-[4rem] text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, repellat? Culpa
                omnis ad totam, tempore sed architecto at fuga alias corporis ratione? Accusantium
                repellendus exercitationem fugit repellat harum molestias omnis.
            </p>
        </div>
    );
}
