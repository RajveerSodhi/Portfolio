"use client";
import ProjectButton from "./project_button";
import Image from "next/image";
import Tilt from "react-parallax-tilt";
import { AccordionItem } from "@szhsin/react-accordion";
import { useState } from "react";
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

    return (
        <Tilt tiltReverse={false} tiltMaxAngleX={1} tiltMaxAngleY={1} gyroscope={false}>
            <AccordionItem
                className="appear-animated flex flex-col text-center items-center shadow-lg bg-[#fefefe] dark:bg-[#252525] border-1 border-solid border-[#e7e7e7] dark:border-[#454545] text-myblack dark:text-mywhite rounded-3xl max-w-[29rem] w-auto hover:scale-[1.01] transition-transform transition-configuration"
                header={
                    <div className="cursor-details p-4">
                        <Tilt
                            tiltReverse={false}
                            tiltMaxAngleX={2}
                            tiltMaxAngleY={2}
                            gyroscope={true}
                            glareEnable={true}
                            glareReverse={true}
                            glareMaxOpacity={0.2}
                            glareBorderRadius="1rem"
                        >
                            <Image
                                src={`/images/project_photos/thumbnail/${link}.png`}
                                alt={`Project Image - ${title}`}
                                width={400}
                                height={400}
                                onClick={() => setOpenImage(true)}
                                className="cursor-image mb-4 select-none min-w-full aspect-auto shadow-md hover:shadow-xl rounded-t-2xl rounded-b-md object-cover hover:scale-[1.01] transition-configuration transition-all"
                            />
                        </Tilt>
                        <Lightbox openImage={openImage} setOpenImage={setOpenImage} link={link} />
                        <h2 className="cursor-details mb-2">{title}</h2>
                        <h5 className="cursor-details text-center mb-2 text-myblack/85 dark:text-mywhite/85">
                            {subtitle}
                        </h5>
                    </div>
                }
            >
                <div id="project-description" className="p-4 max-w-[448px]">
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
            </AccordionItem>
        </Tilt>
    );
}
