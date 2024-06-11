"use client";
import Image from "next/image";
import Tilt from "react-parallax-tilt";

export default function Placeholder(props: { visbile: boolean }) {
    const { visible } = props;

    return (
        <Tilt tiltReverse={false} tiltMaxAngleX={1} tiltMaxAngleY={1} gyroscope={false}>
            <div
                className={`appear-animated p-4 flex flex-col flex-grow text-center justify-center items-center shadow-lg bg-[#fefefe] dark:bg-[#252525] border-1 border-solid border-[#e7e7e7] dark:border-[#454545] text-myblack dark:text-mywhite rounded-3xl w-[29rem] h-[478px] hover:scale-[1.01] transition-transform transition-configuration ${
                    visible ? "" : "hidden"
                }`}
            >
                <Image
                    src="/images/memoji.jpeg"
                    width={200}
                    height={200}
                    className="rounded-full"
                ></Image>
                <h2 className="text-3xl mt-4 mb-2">More Coming Soon!</h2>
                <h5 className="text-center mb-2 text-myblack/85 dark:text-mywhite/85">
                    I'm always up to something.
                </h5>
            </div>
        </Tilt>
    );
}
