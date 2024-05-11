import { Container, Row } from "react-bootstrap";
import WorkExComponent from "./workex_component";
import { workex } from "../../../public/content/workex_content";

export default function WorkEx() {
    return (
        <Container className="w-100 my-5 text-center">
            <Row className="justify-content-center">
                {workex.map((work, index) => (
                    <WorkExComponent key={index} {...work} />
                ))}
            </Row>
        </Container>
    );
}