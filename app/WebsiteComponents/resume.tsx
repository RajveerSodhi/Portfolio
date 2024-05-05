import { Container } from "react-bootstrap";

export default function Resume() {
    return (
        <Container className="d-flex justify-content-center">
            <iframe
                title="Resume"
                src="/resume.pdf"
                style={{ width: "70%", height: "800px", borderRadius: "20px" }}
            ></iframe>
        </Container>
    );
}