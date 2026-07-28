import Research from "./Components/HomeComponents/Research/research";
import Title from "./Components/HomeComponents/Title/title";
import Certifications from "./Components/HomeComponents/Certifications/certificates";
import Work from "./Components/HomeComponents/Work/work";
import Projects from "./Components/HomeComponents/Proj/projects";
import About from "./Components/HomeComponents/About/about";
import Contact from "./Components/HomeComponents/Contact/contact";
import AshDash from "./Components/HomeComponents/Game/game";

export default function Home() {
    return (
        <>
            <Title />
            <Work />
            <Projects />
            <Research />
            <Certifications />
            <About />
            <Contact />
            <AshDash />
        </>
    );
}
