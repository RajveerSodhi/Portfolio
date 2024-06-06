import IPhone from "@/app/Components/IconsComponents/iPhone";
import { Container, Row, Col } from "react-bootstrap";

export default function Section1() {
    return (
        <Container
            style={{
                backgroundColor: "#78aaf6",
                width: "100%",
                maxWidth: "100%",
                display: "flex",
                justifyContent: "center",
                padding: "3rem 0",
            }}
        >
            <Row style={{ width: "100%", maxWidth: "80%" }}>
                <Col className="d-flex align-items-center justify-content-center">
                    <IPhone />
                </Col>
                <Col xs={12} md={6} className="d-flex align-items-center mt-2 lead">
                    <div>
                        <h4 className="display-4" style={{ marginBottom: "2rem" }}>
                            For Lovers of <strong>Monochrome Minimalism</strong>
                        </h4>
                        <p style={{ marginBottom: "2rem" }}>
                            Simple, clean and modern icon pack for your iOS and iPadOS devices.
                            Icons are designed to be simple and elegant, with a focus on clarity and
                            consistency.
                        </p>
                        <p style={{ marginBottom: "0px" }}>
                            <em>Try playing with the switches below the iPhone!</em>
                        </p>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}
