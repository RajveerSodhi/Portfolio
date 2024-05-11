import { Container, Row, Col, Card } from "react-bootstrap";
import ResearchComponent from "./research_component";
import { research } from "../../../public/content/research_content";

export default function Research() {
    return (
        <Container className="w-100 my-5 text-center">
            <Row className="justify-content-center d-flex align-items-stretch">
                {research.map((research, index) => (
                    <ResearchComponent key={index} {...research} />
                ))}
            </Row>
        </Container>
    );
}
