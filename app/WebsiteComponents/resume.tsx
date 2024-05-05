import { Container } from "react-bootstrap";

export default function Resume() {
    return (
        <Container className="d-flex justify-content-center mt-4">
            <iframe
                className="shadow"
                title="Resume"
                src="/resume.pdf"
                style={{ width: "70%", height: "900px", borderRadius: "20px" }}
            ></iframe>
        </Container>
    );
}