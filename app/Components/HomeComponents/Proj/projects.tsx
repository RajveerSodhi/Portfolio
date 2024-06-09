"use client";
import ProjectComponent from "./project_component";
import { projects } from "../../../../public/content/projects_content";
import { Accordion } from "@szhsin/react-accordion";

export default function Projects() {
    return (
        <section>
            <h1 className="mb-4 mt-12">Projects</h1>
            <Accordion transition transitionTimeout={500}>
                <div className="grid grid-flow-row grid-cols-1 md:grid-cols-2 gap-4 mx-4 masonry">
                    {projects.map((project, index) => (
                        <span className="item">
                            <ProjectComponent key={index} {...project} />
                        </span>
                    ))}
                </div>
            </Accordion>
        </section>
    );
}
