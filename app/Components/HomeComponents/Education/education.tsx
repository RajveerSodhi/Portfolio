import { Container, Row } from "react-bootstrap";
import EducationComponent from "./education_component";
import { education } from "../../../../public/content/education_content";

export default function Education() {
    return (
        <Container className="w-100 my-5 text-center">
            <Row className="justify-content-center">
                {education.map((edu, index) => (
                    <EducationComponent key={index} {...edu} />
                ))}
            </Row>
        </Container>
    );
}
