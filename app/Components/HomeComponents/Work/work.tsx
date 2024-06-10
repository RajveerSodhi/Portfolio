"use client";
import WorkComponent from "./work_component";
import { work } from "../../../../public/content/work_content";
import { Accordion } from "@szhsin/react-accordion";

export default function Work() {
    return (
        <section className="appear-animated" id="work">
            <h1>Work Experience</h1>
            <Accordion
                transition
                transitionTimeout={500}
                className="mx-auto max-w-[60rem] flex flex-col w-full items-center justify-center"
            >
                {work.map((item, index) => (
                    <WorkComponent key={index} {...item} />
                ))}
            </Accordion>
        </section>
    );
}
