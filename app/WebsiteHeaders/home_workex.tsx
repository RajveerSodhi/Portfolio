import { Container } from "react-bootstrap";
import WorkEx from "../WebsiteComponents/workex"

export default function HomeWorkex() {
    return (
        <Container style={{ marginBottom: "4rem" }}>
            <h2 className="text-center display-4">Work Experience</h2>
            <WorkEx />
        </Container>
    );
}