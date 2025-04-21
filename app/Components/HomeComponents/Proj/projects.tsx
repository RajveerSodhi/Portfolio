"use client";
import ProjectComponent from "./project_component";
import { projects } from "../../../../public/content/projects_content";
import { Accordion } from "@szhsin/react-accordion";
import Placeholder from "./placeholder";
import { useEffect, useState } from "react";

export default function Projects() {
    const [showPlaceholder, setShowPlaceholder] = useState(false);
    const [selectedTag, setSelectedTag] = useState("all");
    const filter = ["all", "android", "data", "iOS and macOS", "ML", "web"];
    const sort = ["Sort Alphabetically", "Sort by Date"];

    const filteredProjects =
        selectedTag === "all"
            ? projects
            : projects.filter((project) => project.tag === selectedTag);

    useEffect(() => {
        setShowPlaceholder(filteredProjects.length % 2 != 0);
    }, [filteredProjects]);

    return (
        <section className="appear-animated" id="projects">
            <h1 className="title">Projects</h1>

            <div className="flex flex-wrap justify-center items-center gap-4 pb-8">
                {filter.map((tag, index) => (
                    <button
                        key={index}
                        onClick={() => setSelectedTag(tag)}
                        className={`rounded-full hover:scale-95 transition-all py-2 px-4 md:py-3 md:px-6 text-sm md:text-base text-center items-center shadow-lg border border-solid w-auto transition-configuration ${
                            selectedTag === tag
                                ? "dark:bg-cardlightbg bg-carddarkbg dark:border-cardlightborder border-carddarkborder dark:text-myblack text-mywhite"
                                : "bg-cardlightbg dark:bg-carddarkbg border-cardlightborder dark:border-carddarkborder text-myblack dark:text-mywhite"
                        }`}
                    >
                        {tag}
                    </button>
                ))}
            </div>

            <Accordion transition transitionTimeout={500}>
                <div className="grid grid-flow-row grid-cols-1 md:grid-cols-2 gap-6">
                    {filteredProjects.map((project, index) => (
                        <ProjectComponent key={index} {...project} />
                    ))}
                    {showPlaceholder && <Placeholder />}
                </div>
            </Accordion>
        </section>
    );
}
