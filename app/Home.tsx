import Research from "./WebsiteHeaders/home_research";
import Skills from "./WebsiteHeaders/home_skills";
import Header from "./WebsiteHeaders/home_header"
import Resume from "./WebsiteHeaders/home_resume"
import Description from "./WebsiteHeaders/home_description";
import Education from "./WebsiteHeaders/home_education";
import WorkEx from "./WebsiteHeaders/home_workex";
import Projects from "./WebsiteHeaders/home_projects";

export default function Home() {
    return (
        <>
            <Header />
            <Description />
            <Education />
            <WorkEx />
            <Projects />
            <Research />
            <Skills />
            <Resume />
        </>
    );
}