import { Container, Row, Col, Card } from "react-bootstrap";

export default function Research() {
    return (
        <Container className="w-100 my-5 text-center">
            <Row className="justify-content-center d-flex align-items-stretch">
                <Col xs={12} md={4} className="mb-4 d-flex">
                    <Card className="p-4 shadow h-100" style={{ borderRadius: "20px" }}>
                        <h4 className="fw-bold mb-2">Comparison of Unencumbered Interaction Techniques in Head Mounted Displays</h4>
                        <hr className="mb-4" />
                        <h5 className="text-muted">In Review</h5>
                    </Card>
                </Col>

                <Col xs={12} md={4} className="mb-4 d-flex">
                    <Card className="p-4 shadow h-100" style={{ borderRadius: "20px" }}>
                        <h4 className="fw-bold mb-2">Analysing Unencumbered Interaction Techniques in Head Mounted Displays while Walking</h4>
                        <hr className="mb-4" />
                        <h5 className="text-muted">In Progress</h5>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}
