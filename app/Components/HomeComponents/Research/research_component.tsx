"use client";
import Tilt from "react-parallax-tilt";

export default function ResearchComponent(props: { title: string; status: string }) {
    const { title, status } = props;

    return (
        <Tilt
            tiltReverse={false}
            tiltMaxAngleX={2}
            tiltMaxAngleY={2}
            gyroscope={true}
            className="appear-animated"
        >
            <div className="cursor-research py-6 px-4 h-full flex flex-col text-center items-center shadow-lg bg-[#fefefe] dark:bg-[#252525] border-1 border-solid border-[#e7e7e7] dark:border-[#454545] text-myblack dark:text-mywhite rounded-3xl max-w-[29rem] w-auto hover:scale-[1.01] transition-configuration transition-transform">
                <h3 className="cursor-research mb-4 text-lg md:text-2xl grow">{title}</h3>
                <h5 className="cursor-research text-base md:text-lg text-zinc-500 dark:text-zinc-400 hover:text-myblack dark:hover:text-mywhite transition-color transition-configuration">
                    {status}
                </h5>
            </div>
        </Tilt>
    );
}
