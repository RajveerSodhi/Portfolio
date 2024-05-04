import { Container } from "react-bootstrap";
import Research from "../WebsiteComponents/research"

export default function HomeResearch() {
    return (
        <Container style={{ marginBottom: "4rem" }}>
            <h2 className="text-center display-4">Research</h2>
            <Research />
        </Container>
    );
}