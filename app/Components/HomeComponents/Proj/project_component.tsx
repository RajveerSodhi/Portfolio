import ProjectButton from "./project_button";
import Image from "next/image";
import { Accordion, AccordionItem } from "@szhsin/react-accordion";

export default function ProjectComponent(props: {
    title: string;
    subtitle: string;
    link: string;
    tech: string;
    description: string[];
}) {
    const { title, subtitle, link, tech, description } = props;

    return (
        <div className="p-4 flex flex-col text-center items-center shadow-md bg-[#fefefe] dark:bg-[#252525] border-1 border-solid border-[#e7e7e7] dark:border-[#454545] text-myblack dark:text-mywhite rounded-3xl w-[30rem] m-3">
            <Image
                src={`/images/project_photos/${link}.png`}
                alt={`Project Image - ${title}`}
                width={400}
                height={400}
                className="mb-4 select-none min-w-full aspect-auto shadow-md rounded-t-2xl rounded-b-md object-cover"
            />
            <h2 className="mb-2">{title}</h2>
            <h5 className="text-center mb-2 text-myblack/85 dark:text-mywhite/85">{subtitle}</h5>
            <h6 className="text-myblack/75 dark:text-mywhite/75">{tech}</h6>
            <div className="text-myblack dark:text-mywhite my-2 text-left text-lg">
                {description.map((item, index) => (
                    <li className="mb-3">{item}</li>
                ))}
            </div>
            <ProjectButton link={link} />
        </div>
    );
}
