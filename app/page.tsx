import Research from "./WebsiteHeaders/HomeHeaders/home_research";
import Skills from "./WebsiteHeaders/HomeHeaders/home_skills";
import Header from "./Components/HomeComponents/Title/title";
import Resume from "./WebsiteHeaders/HomeHeaders/home_resume";
import Work from "./Components/HomeComponents/Work/work";
import Projects from "./Components/HomeComponents/Proj/projects";

export default function Home() {
    return (
        <>
            <Header />
            <Work />
            <Projects />
            <Research />
            {/* <Skills /> */}
            {/* <Resume /> */}
        </>
    );
}
