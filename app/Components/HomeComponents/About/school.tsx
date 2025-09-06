"use client";
import Image from "next/image";
import Tilt from "react-parallax-tilt";

export default function School(props: {
    name: string;
    tag: string;
    year: string;
    degree: string;
    location: string;
}) {
    const { name, tag, year, degree, location } = props;

    return (
        <Tilt
            tiltReverse={false}
            tiltMaxAngleX={3}
            tiltMaxAngleY={2}
            gyroscope={true}
            className={`hover:scale-[1.02] flex-row p-2 min-w-[380px] transition-transform rounded-full flex justify-start gap-3 items-center appear-animated card cursor-school`}
        >
            <div
                className={`cursor-school bg-mywhite w-auto h-auto min-w-[50px] min-h-[50px] aspect-square p-1 rounded-full flex items-center justify-center shadow-md`}
            >
                <Image
                    src={`/images/education_photos/${tag}.webp`}
                    alt={`University Emblem - ${name}`}
                    width={25}
                    height={25}
                    className={`cursor-school min-h-[25px] min-w-[25px] object-cover`}
                />
            </div>
            <div className={`cursor-school flex items-start justify-center flex-col`}>
                <h3 className={`cursor-school text-base md:text-lg`}>{name}</h3>
                <h2
                    className={`cursor-school text-base md:text-base text-zinc-600 dark:text-zinc-300`}
                >
                    {degree} {year}
                </h2>
                {/* <p className={`cursor-school mt-2 md:hover:text-myblack md:dark:hover:text-mywhite transition-color transition-configuration`}>
                    {location}
                </p> */}
            </div>
        </Tilt>
    );
}
