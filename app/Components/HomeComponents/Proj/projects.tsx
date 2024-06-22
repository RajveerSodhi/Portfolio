"use client";
import ProjectComponent from "./project_component";
import { projects } from "../../../../public/content/projects_content";
import { Accordion } from "@szhsin/react-accordion";
import Placeholder from "./placeholder";
import { useEffect, useState } from "react";

export default function Projects() {
    const [showPlaceholder, setShowPlaceholder] = useState(false);

    useEffect(() => {
        setShowPlaceholder(projects.length % 2 != 0);
    }, [projects]);

    return (
        <section className="appear-animated" id="projects">
            <h1 className="title">Projects</h1>
            <Accordion transition transitionTimeout={500}>
                <div className="grid grid-flow-row grid-cols-1 md:grid-cols-2 gap-6">
                    {projects.map((project, index) => (
                        <ProjectComponent key={index} {...project} />
                    ))}
                    {showPlaceholder && <Placeholder />}
                </div>
            </Accordion>
        </section>
    );
}
