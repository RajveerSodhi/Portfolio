import { Container, Row, Col, Card } from "react-bootstrap";

export default function Education() {
    return (
        <Container className="w-100 my-5 text-center">
            <Row className="justify-content-center">
                <Col xs={12} md={8} className="mb-4">
                    <Card className="p-5 shadow" style={{ borderRadius: "15px" }}>
                        <h5 className="fw-bold">University of British Columbia</h5>
                        <h6 className="text-muted fw-bold">Batchelor of Science (Honours in Computer Science, Minor in Data Science)</h6>
                        <p className="text-muted mb-4">Kelowna, BC, Canada  |  2021 - 2026</p>
                        <p className="text-muted mb-1"><strong>GPA: </strong>4.33</p>
                        <p className="text-muted"><strong>Notable Coursework: </strong>Data Structures, Software Engineering, Machine Learning, Artificial Intelligence, Introduction to Data Analysis, Human-Computer Interaction, Database Systems</p>
                    </Card>
                </Col>

                <Col xs={12} md={8} className="mb-4">
                    <Card className="p-5 shadow" style={{ borderRadius: "15px" }}>
                        <h5 className="fw-bold">Heritage Xperiential Learning School</h5>
                        <h6 className="text-muted fw-bold">High School Diploma, Central Board of Secondary Education</h6>
                        <p className="text-muted mb-4">Gurgaon, Haryana, India  |  2017 - 2021</p>
                        <p className="text-muted mb-1"><strong>Final Grade: </strong>95.6%</p>
                        <p className="text-muted"><strong>Coursework: </strong>English, Physics, Chemistry, Mathematics, Computer Science</p>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}
