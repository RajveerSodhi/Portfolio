"use client";
import Tilt from "react-parallax-tilt";

export default function ResearchComponent(props: { title: string; status: string }) {
    const { title, status } = props;

    return (
        <Tilt
            tiltReverse={false}
            tiltMaxAngleX={1}
            tiltMaxAngleY={1}
            gyroscope={true}
            className="appear-animated"
        >
            <div className="p-4 h-100 flex flex-col text-center items-center shadow-lg bg-[#fefefe] dark:bg-[#252525] border-1 border-solid border-[#e7e7e7] dark:border-[#454545] text-myblack dark:text-mywhite rounded-3xl max-w-[29rem] w-auto hover:scale-[1.01] duration-500 transition-transform ease-in-out">
                <div className="grow">
                    <h3 className="mb-4">{title}</h3>
                </div>
                <h5 className="text-zinc-500 dark:text-zinc-400 hover:text-myblack dark:hover:text-mywhite transition-color duration-500 ease-in-out">
                    {status}
                </h5>
            </div>
        </Tilt>
    );
}
