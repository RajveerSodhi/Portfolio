"use client";
import ProjectComponent from "./project_component";
import { projects } from "../../../../public/content/projects_content";
import { Accordion } from "@szhsin/react-accordion";
import Placeholder from "./placeholder";
import { useEffect, useState } from "react";
import { TiSortAlphabetically } from "react-icons/ti";
import { FaRegCalendar, FaLongArrowAltDown, FaLongArrowAltUp } from "react-icons/fa";

type Project = {
    title: string;
    subtitle: string;
    link: string;
    openLink: string;
    tech: string;
    tag: string;
    showGit: boolean;
    datestamp: string;
    description: string[];
};

export default function Projects() {
    const [showPlaceholder, setShowPlaceholder] = useState(false);
    const [projectsNum, setProjectsNum] = useState(6);
    const [selectedTag, setSelectedTag] = useState("all");
    const [selectedSort, setSelectedSort] = useState("Sort by Date");
    const [selectedDownDirection, setSelectedDownDirection] = useState(false);

    const filters = ["all", "android", "data", "iOS and macOS", "ML", "web"];
    const sorts = ["Sort by Date", "Sort Alphabetically"];

    const filteredProjects = [
        ...(selectedTag === "all"
            ? projects
            : projects.filter((project) => project.tag === selectedTag)),
    ];
    const filteredLength = filteredProjects.length;
    filteredProjects.sort(selectedSort === "Sort by Date" ? sortByDate : sortByAlphabet);

    function sortByDate(a: Project, b: Project) {
        if (selectedDownDirection) {
            return a.datestamp.localeCompare(b.datestamp);
        } else {
            return -a.datestamp.localeCompare(b.datestamp);
        }
    }

    function sortByAlphabet(a: Project, b: Project) {
        if (selectedDownDirection) {
            return a.title.localeCompare(b.title);
        } else {
            return -a.title.localeCompare(b.title);
        }
    }

    useEffect(() => {
        setShowPlaceholder(filteredProjects.length % 2 != 0);
    }, [filteredProjects]);

    useEffect(() => {
        setProjectsNum(6);
    }, [selectedTag, selectedSort]);

    return (
        <section className="appear-animated" id="projects">
            <h1 className="title">Projects</h1>

            <div className="flex flex-wrap justify-center items-center gap-4 pb-8">
                {filters.map((tag, index) => (
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

            <div className="flex justify-center items-center gap-8 mb-8 px-6 py-2 card rounded-full">
                <button
                    onClick={() => setSelectedDownDirection(!selectedDownDirection)}
                    className="hover:scale-90 p-0 transition-all text-base md:text-lg transition-configuration dark:text-mywhite text-myblack text-nowrap"
                >
                    <FaLongArrowAltDown
                        className={`inline transition-transform transition-configuration ${
                            selectedDownDirection ? "" : "-rotate-180"
                        }`}
                    />
                </button>

                <span className="block w-[2px] h-[26px] bg-[#777777]"></span>

                {sorts.map((sortBy, index) => (
                    <button
                        key={index}
                        onClick={() => setSelectedSort(sortBy)}
                        className={`hover:scale-90 p-0 transition-all text-base md:text-lg mb-1 transition-configuration dark:text-mywhite text-myblack text-nowrap ${
                            selectedSort === sortBy
                                ? "dark:text-mywhite text-myblack"
                                : "dark:text-mywhite/60 text-myblack/60"
                        }`}
                    >
                        {sortBy == "Sort by Date" ? (
                            <FaRegCalendar className="inline" />
                        ) : (
                            <TiSortAlphabetically className="inline" />
                        )}
                    </button>
                ))}
            </div>

            <Accordion transition transitionTimeout={500}>
                <div className="grid grid-flow-row grid-cols-1 md:grid-cols-2 gap-6">
                    {filteredProjects.slice(0, projectsNum).map((project, index) => (
                        <ProjectComponent key={index} {...project} />
                    ))}
                    {showPlaceholder && filteredLength <= projectsNum && <Placeholder />}
                </div>
            </Accordion>
            <button
                className={`px-4 py-2 card rounded-full mt-10 hover:scale-95 transition-configuration transition-transform ${
                    filteredLength <= projectsNum ? "hidden" : ""
                }`}
                onClick={() => setProjectsNum(projectsNum + 6)}
            >
                Load More
            </button>
        </section>
    );
}
