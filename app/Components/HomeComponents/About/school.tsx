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
            className={`hover:scale-[1.02] flex-row p-6 transition-transform rounded-3xl mt-[1.3rem] md:mt-[2.5rem] min-w-full w-auto flex justify-start items-center appear-animated card cursor-school`}
        >
            <div className="cursor-school bg-mywhite w-auto h-auto min-w-[5.4rem] min-h-[5.4rem] aspect-square p-1 rounded-full flex items-center justify-center shadow-md hover:shadow-lg hover:scale-105 transition-all transition-configuration">
                <Image
                    src={`/images/education_photos/${tag}.webp`}
                    alt={`University Emblem - ${name}`}
                    width={40}
                    height={40}
                    className="cursor-school min-h-[40px] min-w-[40px] object-cover"
                />
            </div>
            <div className="flex items-start justify-center flex-col">
                <h2 className="cursor-school text-xl md:text-3xl">{name}</h2>
                <h2 className="cursor-school text-base md:text-xl text-zinc-600 dark:text-zinc-300">
                    {degree} {year}
                </h2>
                <p className="md:hover:text-myblack md:dark:hover:text-mywhite transition-color transition-configuration">
                    {location}
                </p>
            </div>
        </Tilt>
    );
}
