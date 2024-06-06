import { Container, Row } from "react-bootstrap";
import WorkComponent from "./work_component";
import { work } from "../../../../public/content/work_content";

export default function Work() {
    return (
        <Container className="w-100 my-5 text-center">
            <Row className="justify-content-center">
                {work.map((work, index) => (
                    <WorkComponent key={index} {...work} />
                ))}
            </Row>
        </Container>
    );
}
