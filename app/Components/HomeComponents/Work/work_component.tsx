"use client";
import Image from "next/image";
import { AccordionItem } from "@szhsin/react-accordion";
import Tilt from "react-parallax-tilt";

export default function WorkComponent(props: {
    company: string;
    position: string;
    date: string;
    img: string;
    location: string;
    description: string[];
}) {
    const { company, position, date, img, location, description } = props;

    return (
        <Tilt tiltReverse={false} tiltMaxAngleX={1} tiltMaxAngleY={1}>
            <div className="hover:scale-[0.99] transition-transform duration-500 ease-in-out shadow-lg">
                <AccordionItem
                    header={
                        <div className="flex items-center p-4 text-myblack dark:text-mywhite rounded-3xl bg-[#fefefe] dark:bg-[#252525] w-full min-w-[60rem] mb-[-1rem] mt-[2.5rem] border-1 border-solid border-[#e7e7e7] dark:border-[#454545] shadow-md">
                            <div className="bg-mywhite w-auto h-auto min-w-[90px] min-h-[90px] aspect-square p-1 rounded-full flex items-center justify-center shadow-md hover:scale-105 transition-transform ease-in-out duration-500">
                                <Image
                                    src={`/images/work_photos/${img}.png`}
                                    alt={company}
                                    width={40}
                                    height={40}
                                    className="min-h-[40px] min-w-[40px] object-cover"
                                />
                            </div>
                            <div className="ml-8 text-left">
                                <h2 className="text-3xl">{position}</h2>
                                <h2 className="text-xl text-zinc-600 dark:text-zinc-300">
                                    {company}
                                </h2>
                            </div>
                        </div>
                    }
                >
                    <div className="px-6 pt-10 pb-3 bg-[#e7e7e7] dark:bg-[#454545] rounded-b-3xl">
                        {description.map((desc, index) => (
                            <li key={index} className="mb-3">
                                {desc}
                            </li>
                        ))}
                        <div className="text-zinc-500 dark:text-zinc-400 flex justify-between mt-4 mb-2">
                            <span>{location}</span>
                            <span>{date}</span>
                        </div>
                    </div>
                </AccordionItem>
            </div>
        </Tilt>
    );
}
