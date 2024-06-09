"use client";
import Tilt from "react-parallax-tilt";

export default function Skill(props: { name: string }) {
    const { name } = props;

    return (
        <Tilt tiltReverse={false} tiltMaxAngleX={15} tiltMaxAngleY={15} className="appear-animated">
            <div className="py-2 px-3 m-2 w-auto hover:shadow-md hover:scale-105 transition-shadow transition-transform duration-500 ease-in-out rounded-lg bg-[#fefefe] dark:bg-[#252525] border-1 border-solid border-[#e7e7e7] dark:border-[#454545] text-myblack dark:text-mywhite">
                {name}
            </div>
        </Tilt>
    );
}
