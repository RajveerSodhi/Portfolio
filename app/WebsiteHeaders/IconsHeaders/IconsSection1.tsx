import { Container, Row, Col } from "react-bootstrap";

export default function Section1() {
    return (
        <Container style={{ backgroundColor: "#91a0b5", width: "100%", maxWidth: "100%", display: "flex", justifyContent: "center", padding: " 2rem 0", marginBottom: "2rem" }}>
            <Row style={{ width: "100%", maxWidth: "80%" }}>
                <Col>
                    <img src="iphone_frame.png" alt="iphone_frame" style={{ width: "50%" }} />
                </Col>
                <Col xs={12} md={6} style={{ marginTop: "1rem" }}>
                    <h1>Minimal Icon Pack!</h1>
                    <p className="lead" style={{ marginBottom: "0px" }}>Simple, clean and modern icon pack for your everyday use.</p>
                </Col>
            </Row>
        </Container>
    );
}