import ProjectComponent from "./project_component";
import { projects } from "../../../../public/content/projects_content";

export default function Projects() {
    return (
        <section>
            <h1>Projects</h1>
            {projects.map((project, index) => (
                <ProjectComponent key={index} {...project} />
            ))}
        </section>
    );
}
