"use client";
import ProjectComponent from "./project_component";
import { projects } from "../../../../public/content/projects_content";
import { Accordion } from "@szhsin/react-accordion";

export default function Projects() {
    return (
        <section className="appear-animated" id="projects">
            <h1 className="title">Projects</h1>
            <Accordion transition transitionTimeout={500}>
                <div className="grid grid-flow-row grid-cols-1 md:grid-cols-2 gap-4">
                    {projects.map((project, index) => (
                        <span className="grid-item" key={index}>
                            <ProjectComponent {...project} />
                        </span>
                    ))}
                </div>
            </Accordion>
        </section>
    );
}
