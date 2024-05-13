import IPhone from "@/app/WebsiteComponents/IconsComponents/iPhone";
import { Container, Row, Col } from "react-bootstrap";

export default function Section1() {
    return (
        <Container style={{ backgroundColor: "#78aaf6", width: "100%", maxWidth: "100%", display: "flex", justifyContent: "center", padding: "3rem 0", marginBottom: "2rem" }}>
            <Row style={{ width: "100%", maxWidth: "80%" }}>
                <Col className="d-flex align-items-center justify-content-center">
                    <IPhone />
                </Col>
                <Col xs={12} md={6} className="d-flex align-items-center">
                    <div>
                        <h1>Minimal Icon Pack!</h1>
                        <p className="lead" style={{ marginBottom: "0px" }}>Simple, clean and modern icon pack for your everyday use.</p>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}
