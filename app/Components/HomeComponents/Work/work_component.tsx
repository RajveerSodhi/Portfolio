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
            <div className="p-6 hover:scale-[1.02] transition-shaodw transition-transform text-myblack dark:text-mywhite rounded-3xl bg-[#fefefe] shadow-md hover:shadow-lg transition-configuration dark:bg-[#252525] mt-[2.5rem] min-w-full w-auto flex flex-col justify-center items-center appear-animated border-1 border-solid border-[#e7e7e7] dark:border-[#454545]">
                <AccordionItem
                    className="w-full"
                    header={
                        <div className="cursor-details flex items-center w-full">
                            <WorkImage img={img} company={company} tld={tld} />
                            <div className="cursor-details ml-8 text-left">
                                <h2 className="cursor-details text-3xl">{position}</h2>
                                <h2 className="cursor-details text-xl text-zinc-600 dark:text-zinc-300">
                                    {company}
                                </h2>
                            </div>
                        </div>
                    }
                >
                    <div className="pt-8">
                        {description.map((desc, index) => (
                            <li key={index} className="mb-3">
                                {desc}
                            </li>
                        ))}
                        <div className="text-zinc-500 dark:text-zinc-400 flex justify-between mt-4 mb-2">
                            <span className="hover:text-myblack dark:hover:text-mywhite transition-color transition-configuration">
                                {location}
                            </span>
                            <span className="hover:text-myblack dark:hover:text-mywhite transition-color transition-configuration">
                                {date}
                            </span>
                        </div>
                    </div>
                </AccordionItem>
            </div>
        </Tilt>
    );
}
