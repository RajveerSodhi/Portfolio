import Research from "./Components/HomeComponents/Research/research";
import Title from "./Components/HomeComponents/Title/title";
import Work from "./Components/HomeComponents/Work/work";
import Projects from "./Components/HomeComponents/Proj/projects";
import About from "./Components/HomeComponents/About/about";
import Contact from "./Components/HomeComponents/Contact/contact";
import { BackgroundGradientAnimation } from "./Components/background_gradient";

export default function Home() {
    return (
        <>
            <BackgroundGradientAnimation />
            <Title />
            <Work />
            <Projects />
            <Research />
            <About />
            <Contact />
        </>
    );
}
