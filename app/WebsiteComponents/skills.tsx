import "../static/styles/Skills.module.css"
import { Row, Container, Card } from "react-bootstrap";

export default function Skills() {
    return (
        <Container className="text-center mt-4">
            <Row className="justify-content-center d-flex align-items-stretch mb-4">
                <h3>Languages</h3>
                <Card className="py-2 px-3 m-2 w-auto card-hover-shadow">Python</Card>
                <Card className="py-2 px-3 m-2 w-auto card-hover-shadow">Java</Card>
                <Card className="py-2 px-3 m-2 w-auto card-hover-shadow">C#</Card>
                <Card className="py-2 px-3 m-2 w-auto card-hover-shadow">Kotlin</Card>
                <Card className="py-2 px-3 m-2 w-auto card-hover-shadow">JavaScript</Card>
                <Card className="py-2 px-3 m-2 w-auto card-hover-shadow">TypeScript</Card>
                <Card className="py-2 px-3 m-2 w-auto card-hover-shadow">R</Card>
            </Row>
            <Row className="justify-content-center d-flex align-items-stretch mb-4">
                <h3>Web Development</h3>
                <Card className="py-2 px-3 m-2 w-auto card-hover-shadow">HTML</Card>
                <Card className="py-2 px-3 m-2 w-auto card-hover-shadow">CSS</Card>
                <Card className="py-2 px-3 m-2 w-auto card-hover-shadow">Tailwind CSS</Card>
                <Card className="py-2 px-3 m-2 w-auto card-hover-shadow">Bootstrap</Card>
                <Card className="py-2 px-3 m-2 w-auto card-hover-shadow">Flask</Card>
                <Card className="py-2 px-3 m-2 w-auto card-hover-shadow">Next.js</Card>
                <Card className="py-2 px-3 m-2 w-auto card-hover-shadow">React.js</Card>
                <Card className="py-2 px-3 m-2 w-auto card-hover-shadow">Node.js</Card>
                <Card className="py-2 px-3 m-2 w-auto card-hover-shadow">Express.js</Card>
                <Card className="py-2 px-3 m-2 w-auto card-hover-shadow">Axios</Card>
                <Card className="py-2 px-3 m-2 w-auto card-hover-shadow">Mongoose</Card>

            </Row>
            <Row className="justify-content-center d-flex align-items-stretch mb-4">
                <h3>Frameworks and Libraries</h3>
                <Card className="py-2 px-3 m-2 w-auto card-hover-shadow">Pandas</Card>
                <Card className="py-2 px-3 m-2 w-auto card-hover-shadow">Seaborn</Card>
                <Card className="py-2 px-3 m-2 w-auto card-hover-shadow">MatPlotLib</Card>
                <Card className="py-2 px-3 m-2 w-auto card-hover-shadow">NumPy</Card>
                <Card className="py-2 px-3 m-2 w-auto card-hover-shadow">JUnit</Card>
                <Card className="py-2 px-3 m-2 w-auto card-hover-shadow">Keras</Card>
                <Card className="py-2 px-3 m-2 w-auto card-hover-shadow">OpenCV</Card>
                <Card className="py-2 px-3 m-2 w-auto card-hover-shadow">Selenium</Card>
            </Row>
            <Row className="justify-content-center d-flex align-items-stretch">
                <h3>Tools</h3>
                <Card className="py-2 px-3 m-2 w-auto card-hover-shadow">Unity</Card>
                <Card className="py-2 px-3 m-2 w-auto card-hover-shadow">GitHub</Card>
                <Card className="py-2 px-3 m-2 w-auto card-hover-shadow">Tableau</Card>
                <Card className="py-2 px-3 m-2 w-auto card-hover-shadow">Power BI</Card>
                <Card className="py-2 px-3 m-2 w-auto card-hover-shadow">Firebase</Card>
                <Card className="py-2 px-3 m-2 w-auto card-hover-shadow">Android Studio</Card>
                <Card className="py-2 px-3 m-2 w-auto card-hover-shadow">MySQL</Card>
                <Card className="py-2 px-3 m-2 w-auto card-hover-shadow">MongoDB</Card>
            </Row>
        </Container>
    );
}