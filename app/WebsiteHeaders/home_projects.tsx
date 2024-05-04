import { Container } from "react-bootstrap";
import Projects from "../WebsiteComponents/projects"

export default function HomeProjects() {
    return (
        <Container style={{ marginBottom: "4rem" }}>
            <h2 className="text-center display-4">Projects</h2>
            <Projects />
        </Container>
    );
}