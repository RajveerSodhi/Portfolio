import Description from "./description";
import Resume from "./resume";
import Skills from "./skills";

export default function About() {
    return (
        <section className="appear-animated">
            <h1 className="title">About Me</h1>
            <Description />
            <Skills />
            <Resume />
        </section>
    );
}
