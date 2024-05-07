import { Container, Row, Col, Card } from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa";
import ProjectButton from "./project_button";

export default function Projects() {
    return (
        <Container className="w-100 my-5 text-center">
            <Row className="justify-content-center">
                <Col xs={12} md={8} className="mb-4">
                    <Card className="p-4 shadow card-radius">
                        <h4 className="fw-bold mb-4">Personal Website</h4>
                        <h6 className="text-muted fw-bold">Next.ts, Bootstrap, Tailwind CSS, TypeScript</h6>
                        <p className="text-muted mb-2">May 2024</p>
                        <hr className="mb-4" />
                        <ul className="text-muted mb-2">
                            <li>Created a personal website showcasing my technical skills, work experience, research, and more.</li>
                            <li>Developed using the Next.ts framework in TypeScript and styled with Bootstrap Tailwind CSS.</li>
                        </ul>
                        <ProjectButton link="Portfolio" />
                    </Card>
                </Col>

                <Col xs={12} md={8} className="mb-4">
                    <Card className="p-4 shadow card-radius">
                        <h4 className="fw-bold mb-4">EduPool: E-Learning Platform</h4>
                        <h6 className="text-muted fw-bold">Python, HTML, CSS, JavaScript, SQL</h6>
                        <p className="text-muted mb-2">Apr 2024</p>
                        <hr className="mb-4" />
                        <ul className="text-muted mb-2">
                            <li>Collaborated in developing a Flask-based e-learning platform, employing Agile methodologies, CI/CD practices, UML for system design, and Test-Driven Development (TDD) with Selenium for automated testing and deployment to ensure quality and performance.</li>
                            <li>Implemented core features like user authentication, course management, discussion portals, assignment submissions, and grading.</li>
                        </ul>
                        <ProjectButton link="EduPool" />
                    </Card>
                </Col>

                <Col xs={12} md={8} className="mb-4">
                    <Card className="p-4 shadow card-radius">
                        <h4 className="fw-bold mb-4">Gestura: Sign Langauge to English Converter</h4>
                        <h6 className="text-muted fw-bold">Python, HTML, CSS, JavaScript</h6>
                        <p className="text-muted mb-2">Jan 2024</p>
                        <hr className="mb-4" />
                        <ul className="text-muted mb-2">
                            <li>BC Hacks 5.0 Hackathon Winner</li>
                            <li>Led a cross-functional team in developing a full-stack website, using Node.js to translate American Sign Language into English, integrating a gesture-recognition machine learning model developed with Keras and OpenCV.</li>
                            <li>Implemented the Google Translate and Text-to-Speech API to enhance the project&apos;s capabilities by generating multilingual text and speech outputs for the translations.</li>
                        </ul>
                        <ProjectButton link="Gestura" />
                    </Card>
                </Col>

                <Col xs={12} md={8} className="mb-4">
                    <Card className="p-4 shadow card-radius">
                        <h4 className="fw-bold mb-4">TransitMate: Ride Sharing App Prototype</h4>
                        <h6 className="text-muted fw-bold">Java, XML</h6>
                        <p className="text-muted mb-2">Dec 2023</p>
                        <hr className="mb-4" />
                        <ul className="text-muted mb-2">
                            <li>Engineered a high-fidelity prototype for a ride-sharing app in Android Studio, seamlessly integrating the Google Maps API.</li>
                            <li>Applied HCI fundamentals by conducting multiple rounds of requirements gathering and user testing to refine the user experience.</li>
                            <li>Utilized object-oriented principles to ensure efficient code organization, enhancing maintainability and scalability of the app.</li>
                        </ul>
                        <ProjectButton link="TransitMate" />
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}