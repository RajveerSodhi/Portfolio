import { Container, Row, Col, Card } from "react-bootstrap";

export default function WorkEx() {
    return (
        <Container className="w-100 my-5 text-center">
            <Row className="justify-content-center">
                <Col xs={12} md={8} className="mb-4">
                    <Card className="p-4 shadow" style={{ borderRadius: "20px" }}>
                        <h4 className="fw-bold mb-4">Software Developer Intern</h4>
                        <h6 className="text-muted fw-bold">Data Poem</h6>
                        <p className="text-muted mb-2">Santa Clara, California, USA (Remote)  |  May 2024 - Present</p>
                        <hr className="mb-4" />
                        <ul className="text-muted mb-2">
                            <li>Coming Soon</li>
                            <li>Coming Soon</li>
                        </ul>
                    </Card>
                </Col>

                <Col xs={12} md={8} className="mb-4">
                    <Card className="p-4 shadow" style={{ borderRadius: "20px" }}>
                        <h4 className="fw-bold mb-4">Undergraduate Researcher</h4>
                        <h6 className="text-muted fw-bold">University of British Columbia</h6>
                        <p className="text-muted mb-2">Kelowna, BC  |  Sep 2023 - Present</p>
                        <hr className="mb-4" />
                        <ul className="text-muted mb-2">
                            <li>Conducted a study in Human-Computer Interaction (HCI) with 18 participants to compare cutting-edge command selection techniques using head-mounted displays, such as Hand-Proximate User Interface (HPUI) and gaze-tracked input.</li>
                            <li>Explored the principles of In-Vehicle Infotainment Systems and built implementations of HPUI with C# and the Unity XR Toolkit.</li>
                            <li>Investigated the usablity of unencumbered interaction techniques for head mounted displays while walking.</li>
                        </ul>
                    </Card>
                </Col>

                <Col xs={12} md={8} className="mb-4">
                    <Card className="p-4 shadow" style={{ borderRadius: "20px" }}>
                        <h4 className="fw-bold mb-4">Website Administrator</h4>
                        <h6 className="text-muted fw-bold">Niteo Africa</h6>
                        <p className="text-muted mb-2">Kelowna, BC  |  Sep 2023 - Present</p>
                        <hr className="mb-4" />
                        <ul className="text-muted mb-2">
                            <li>Administered Niteo Africa's WordPress-based website, incorporating blog posts and event information and diligently updating website plugins, resulting in a 150% increase in website viewership since assuming the role.</li>
                            <li>Communicated concerns and insights to the Executive Director through detailed monthly reports to ensure regular progress.</li>
                        </ul>
                    </Card>
                </Col>

                <Col xs={12} md={8} className="mb-4">
                    <Card className="p-4 shadow" style={{ borderRadius: "20px" }}>
                        <h4 className="fw-bold mb-4">Software Developer Intern</h4>
                        <h6 className="text-muted fw-bold">University of British Columbia</h6>
                        <p className="text-muted mb-2">Kelowna, BC  |  Sep 2023 - Dec 2023</p>
                        <hr className="mb-4" />
                        <ul className="text-muted mb-2">
                            <li>Spearheaded the development of a module within a graphical Decision Support System in Java for long-term degree planning, which is expected to help over 10,000 students plan courses and streamline discussions with academic advisors.</li>
                            <li>Added support for over 120 complex degree configurations and used Google CP-SAT Solver to build an optimization model for an optimal plan, along with various code refactoring and improvements to the optimizer.</li>
                        </ul>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}