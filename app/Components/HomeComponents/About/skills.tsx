import { skills } from "../../../../public/content/skills_content";
import Skill from "./skill";

export default function Skills() {
    return (
        <section className="text-center appear-animated md:max-w-[83rem] w-auto">
            <h2 className="title">Skills</h2>
            {skills.map((skillCategory, index) => (
                <div
                    key={index}
                    className="appear-animated justify-center flex items-center flex-col mb-4"
                >
                    <h4 className="text-center">{skillCategory.category}</h4>
                    <div className="flex flex-row flex-wrap justify-center text-lg">
                        {skillCategory.skills.map((skill, index) => (
                            <Skill key={index} name={skill} />
                        ))}
                    </div>
                </div>
            ))}
        </section>
    );
}
