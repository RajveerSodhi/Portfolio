"use client";
import { AccordionItem } from "@szhsin/react-accordion";
import Tilt from "react-parallax-tilt";
import WorkImage from "./work_image";

export default function WorkComponent(props: {
    company: string;
    tld: string;
    position: string;
    date: string;
    img: string;
    location: string;
    description: string[];
}) {
    const { company, position, tld, date, img, location, description } = props;

    return (
        <Tilt
            className="w-full"
            tiltReverse={false}
            tiltMaxAngleX={1}
            tiltMaxAngleY={1}
            gyroscope={true}
            glareEnable={false}
            glareReverse={true}
            glareMaxOpacity={0.05}
            glareBorderRadius="1.5rem"
        >
            <div className="p-6 hover:scale-[1.02] transition-transform rounded-3xl mt-[1.3rem] md:mt-[2.5rem] min-w-full w-auto flex flex-col justify-center appear-animated card">
                <AccordionItem
                    className="w-full"
                    header={
                        <div className="cursor-details flex items-center w-full">
                            <WorkImage img={img} company={company} tld={tld} />
                            <div className="cursor-details ml-4 md:ml-8 text-left">
                                <h2 className="cursor-details text-xl md:text-3xl">{position}</h2>
                                <h2 className="cursor-details text-base md:text-xl text-zinc-600 dark:text-zinc-300">
                                    {company}
                                </h2>
                            </div>
                        </div>
                    }
                >
                    <div className="pt-8">
                        {description.map((desc, index) => (
                            <li key={index} className="mb-3 text-sm md:text-base text-left">
                                {desc}
                            </li>
                        ))}
                        <div className="text-zinc-500 dark:text-zinc-400 text-sm md:text-base flex justify-between mt-6 mb-2">
                            <span className="md:hover:text-myblack md:dark:hover:text-mywhite transition-color transition-configuration">
                                {location}
                            </span>
                            <span className="md:hover:text-myblack md:dark:hover:text-mywhite transition-color transition-configuration">
                                {date}
                            </span>
                        </div>
                    </div>
                </AccordionItem>
            </div>
        </Tilt>
    );
}
