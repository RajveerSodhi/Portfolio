import Description from "./description";
import Skills from "./skills";

export default function About() {
    return (
        <section className="appear-animated" id="about">
            <h1 className="title">About Me</h1>
            <Description />
            <Skills />
        </section>
    );
}
