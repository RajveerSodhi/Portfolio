import { Container } from "react-bootstrap";
import Skills from "../WebsiteComponents/skills"

export default function HomeSkills() {
    return (
        <Container style={{ marginBottom: "4rem" }}>
            <h2 className="text-center display-4 mb-4">Skills</h2>
            <Skills />
        </Container>
    );
}