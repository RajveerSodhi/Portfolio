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

            <div>
                <div className="flex flex-wrap justify-center items-center gap-4 pb-8">
                    {filter.map((tag, index) => (
                        <button
                            key={index}
                            onClick={() => setSelectedTag(tag)}
                            className={`cursor-none rounded-full text-center items-center shadow-lg border-1 border-solid w-auto hover:scale-95 transition-all transition-configuration py-2 px-4 md:py-3 md:px-6 text-sm md:text-base ${
                                selectedTag === tag
                                    ? "dark:bg-[#fefefe] bg-[#252525] dark:border-[#e7e7e7] border-[#454545] dark:text-myblack text-mywhite"
                                    : "bg-[#fefefe] dark:bg-[#252525] border-[#e7e7e7] dark:border-[#454545] text-myblack dark:text-mywhite"
                            }`}
                        >
                            {tag}
                        </button>
                    ))}
                </div>
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
