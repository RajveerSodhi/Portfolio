import { Container, Row } from "react-bootstrap";
import ProjectComponent from "./project_component";
import { projects } from "../../../public/content/projects_content";

export default function Projects() {
    return (
        <Container className="w-100 my-5 text-center">
            <Row className="justify-content-center">
                {projects.map((project, index) => (
                    <ProjectComponent key={index} {...project} />
                ))}
            </Row>
        </Container>
    );
}