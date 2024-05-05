import { Row, Container, Card } from "react-bootstrap";

export default function Skills() {
    return (
        <Container className="text-center mt-4">
            <Row className="justify-content-center d-flex align-items-stretch mb-4">
                <h3>Languages</h3>
                <Card className="py-2 px-3 m-2 w-auto">Python</Card>
                <Card className="py-2 px-3 m-2 w-auto">Java</Card>
                <Card className="py-2 px-3 m-2 w-auto">C#</Card>
                <Card className="py-2 px-3 m-2 w-auto">Kotlin</Card>
                <Card className="py-2 px-3 m-2 w-auto">JavaScript</Card>
                <Card className="py-2 px-3 m-2 w-auto">TypeScript</Card>
                <Card className="py-2 px-3 m-2 w-auto">R</Card>
            </Row>
            <Row className="justify-content-center d-flex align-items-stretch mb-4">
                <h3>Web Development</h3>
                <Card className="py-2 px-3 m-2 w-auto">HTML</Card>
                <Card className="py-2 px-3 m-2 w-auto">CSS</Card>
                <Card className="py-2 px-3 m-2 w-auto">Tailwind CSS</Card>
                <Card className="py-2 px-3 m-2 w-auto">Bootstrap</Card>
                <Card className="py-2 px-3 m-2 w-auto">Flask</Card>
                <Card className="py-2 px-3 m-2 w-auto">Next.js</Card>
                <Card className="py-2 px-3 m-2 w-auto">React.js</Card>
                <Card className="py-2 px-3 m-2 w-auto">Node.js</Card>
                <Card className="py-2 px-3 m-2 w-auto">Express.js</Card>
                <Card className="py-2 px-3 m-2 w-auto">Axios</Card>
                <Card className="py-2 px-3 m-2 w-auto">Mongoose</Card>

            </Row>
            <Row className="justify-content-center d-flex align-items-stretch mb-4">
                <h3>Frameworks and Libraries</h3>
                <Card className="py-2 px-3 m-2 w-auto">Pandas</Card>
                <Card className="py-2 px-3 m-2 w-auto">Seaborn</Card>
                <Card className="py-2 px-3 m-2 w-auto">MatPlotLib</Card>
                <Card className="py-2 px-3 m-2 w-auto">NumPy</Card>
                <Card className="py-2 px-3 m-2 w-auto">JUnit</Card>
                <Card className="py-2 px-3 m-2 w-auto">Keras</Card>
                <Card className="py-2 px-3 m-2 w-auto">OpenCV</Card>
                <Card className="py-2 px-3 m-2 w-auto">Selenium</Card>
            </Row>
            <Row className="justify-content-center d-flex align-items-stretch">
                <h3>Tools</h3>
                <Card className="py-2 px-3 m-2 w-auto">Unity</Card>
                <Card className="py-2 px-3 m-2 w-auto">GitHub</Card>
                <Card className="py-2 px-3 m-2 w-auto">Tableau</Card>
                <Card className="py-2 px-3 m-2 w-auto">Power BI</Card>
                <Card className="py-2 px-3 m-2 w-auto">Firebase</Card>
                <Card className="py-2 px-3 m-2 w-auto">Android Studio</Card>
                <Card className="py-2 px-3 m-2 w-auto">MySQL</Card>
                <Card className="py-2 px-3 m-2 w-auto">MongoDB</Card>
            </Row>
        </Container>
    );
}