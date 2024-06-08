"use client";
import ProjectButton from "./project_button";
import Image from "next/image";
import Tilt from "react-parallax-tilt";
import { Accordion, AccordionItem } from "@szhsin/react-accordion";
import { useState, useRef } from "react";
import Lightbox from "./lightbox";

export default function ProjectComponent(props: {
    title: string;
    subtitle: string;
    link: string;
    tech: string;
    description: string[];
}) {
    const { title, subtitle, link, tech, description } = props;
    const [openImage, setOpenImage] = useState(false);
    const zoomRef = useRef(null);

    return (
        <Tilt tiltReverse={false} tiltMaxAngleX={1} tiltMaxAngleY={1}>
            <div className="p-4 flex flex-col text-center items-center shadow-lg bg-[#fefefe] dark:bg-[#252525] border-1 border-solid border-[#e7e7e7] dark:border-[#454545] text-myblack dark:text-mywhite rounded-3xl max-w-[29rem] w-auto hover:scale-[1.01] duration-500 transition-transform ease-in-out">
                <Image
                    src={`/images/project_photos/thumbnail/${link}.png`}
                    alt={`Project Image - ${title}`}
                    width={400}
                    height={400}
                    onClick={() => setOpenImage(true)}
                    className="mb-4 select-none min-w-full aspect-auto shadow-lg rounded-t-2xl rounded-b-md object-cover cursor-pointer hover:scale-[1.01] duration-500 transition-transform ease-in-out"
                />
                <Lightbox openImage={openImage} setOpenImage={setOpenImage} link={link} />
                <div id="project-title">
                    <h2 className="mb-2">{title}</h2>
                    <h5 className="text-center mb-2 text-myblack/85 dark:text-mywhite/85">
                        {subtitle}
                    </h5>
                </div>
                <div className="hidden" id="project-description">
                    <h6 className="text-myblack/75 dark:text-mywhite/75">{tech}</h6>
                    <div className="text-myblack dark:text-mywhite mt-3 mb-1 text-left text-lg">
                        {description.map((item, index) => (
                            <li className="mb-3" key={index}>
                                {item}
                            </li>
                        ))}
                    </div>
                    <ProjectButton link={link} />
                </div>
            </div>
        </Tilt>
    );
}
