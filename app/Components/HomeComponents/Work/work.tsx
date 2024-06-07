import WorkComponent from "./work_component";
import { work } from "../../../../public/content/work_content";

export default function Work() {
    return (
        <section>
            <h1 className="mb-4">Work Experience</h1>
            {work.map((item, index) => (
                <WorkComponent key={index} {...item} />
            ))}
        </section>
    );
}
