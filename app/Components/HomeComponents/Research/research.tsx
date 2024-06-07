import ResearchComponent from "./research_component";
import { research } from "../../../../public/content/research_content";

export default function Research() {
    return (
        <section>
            <h1 className="mb-4 mt-12">Research</h1>
            {research.map((research, index) => (
                <ResearchComponent key={index} {...research} />
            ))}
        </section>
    );
}
