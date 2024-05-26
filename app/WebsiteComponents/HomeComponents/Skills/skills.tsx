import { Row, Container } from "react-bootstrap";
import Skill from "./Skill";
import { skills } from "../../../../public/content/skills_content";

export default function Skills() {
    return (
        <Container className="text-center mt-4">
            {skills.map((skillCategory, index) => (
                <Row key={index} className="justify-content-center d-flex align-items-stretch mb-4">
                    <h3>{skillCategory.category}</h3>
                    {skillCategory.skills.map((skill, index) => (
                        <Skill key={index} name={skill} />
                    ))}
                </Row>
            ))}
        </Container>
    );
}