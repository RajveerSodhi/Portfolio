import ResearchComponent from "./research_component";
import { research } from "../../../../public/content/research_content";

export default function Research() {
    return (
        <section className="appear-animated" id="research">
            <h1 className="title">Research</h1>
            <div className="grid grid-flow-row grid-cols-1 md:grid-cols-2 gap-6">
                {research.map((research, index) => (
                    <ResearchComponent key={index} {...research} />
                ))}
            </div>
        </section>
    );
}
