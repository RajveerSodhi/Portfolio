import Research from "./WebsiteHeaders/HomeHeaders/home_research";
import Skills from "./WebsiteHeaders/HomeHeaders/home_skills";
import Header from "./WebsiteHeaders/HomeHeaders/home_header"
import Resume from "./WebsiteHeaders/HomeHeaders/home_resume"
import Description from "./WebsiteHeaders/HomeHeaders/home_description";
import Education from "./WebsiteHeaders/HomeHeaders/home_education";
import WorkEx from "./WebsiteHeaders/HomeHeaders/home_workex";
import Projects from "./WebsiteHeaders/HomeHeaders/home_projects";

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
