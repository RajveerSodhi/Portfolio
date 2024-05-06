import { Container } from "react-bootstrap";
import Education from "../WebsiteComponents/education"

export default function HomeEducation() {
    return (
        <Container style={{ marginBottom: "4rem" }}>
            <h2 className="text-center display-4">Education</h2>
            <Education />
        </Container>
    );
}