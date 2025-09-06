import School from "./school";
import { schools } from "../../../../public/content/education_content";

export default function Education() {
    return (
        <section className="text-center appear-animated md:max-w-[83rem] w-full">
            <div className="grid grid-flow-row grid-cols-1 md:grid-cols-2 gap-6">
                {schools.map((school, index) => (
                    <School
                        key={index}
                        name={school.name}
                        tag={school.tag}
                        year={school.year}
                        degree={school.degree}
                        location={school.location}
                    />
                ))}
            </div>
        </section>
    );
}
