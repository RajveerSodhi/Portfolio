"use client";
import WorkComponent from "./work_component";
import { work } from "../../../../public/content/work_content";
import { Accordion } from "@szhsin/react-accordion";

export default function Work() {
    return (
        <section>
            <h1>Work Experience</h1>
            <div className="mx-auto my-4 w-[60rem] flex items-center justify-center">
                <Accordion transition transitionTimeout={250}>
                    {work.map((item, index) => (
                        <WorkComponent key={index} {...item} />
                    ))}
                </Accordion>
            </div>
        </section>
    );
}
