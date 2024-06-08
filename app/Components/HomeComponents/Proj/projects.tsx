import ProjectComponent from "./project_component";
import { projects } from "../../../../public/content/projects_content";

export default function Projects() {
    return (
        <section>
            <h1 className="mb-4 mt-12">Projects</h1>
            <div className="grid grid-flow-row grid-cols-1 md:grid-cols-2 gap-4 mx-4">
                {projects.map((project, index) => (
                    <ProjectComponent key={index} {...project} />
                ))}
            </div>
        </section>
    );
}
