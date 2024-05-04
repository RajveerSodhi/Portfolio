import { Container, Col, Row } from "react-bootstrap";

export default function HomeHeader() {
    return (
        <Container style={{ marginTop: "4rem", marginBottom: "4rem" }}>
            <Row className="align-items-center text-center text-md-left">
                {/* Image Column */}
                <Col xs={12} lg={6} className="mb-4 mb-md-0 d-flex justify-content-center">
                    <div style={{ width: "400px", height: "400px", borderRadius: "50%", overflow: "hidden", border: "5px solid #000" }}>
                        <img src="Photo.jpg" alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                    </div>
                </Col>

                {/* Text Column */}
                <Col xs={12} lg={6} className="d-flex flex-column justify-content-center">
                    <h1 className="display-1">Rajveer Sodhi</h1>
                    <h2>Software Developer</h2>
                </Col>
            </Row>
        </Container>
    );
}