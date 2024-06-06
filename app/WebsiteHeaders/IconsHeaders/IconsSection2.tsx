import ScrollingIcons from "@/app/Components/IconsComponents/scrolling_icons";
import { Container, Row, Col } from "react-bootstrap";
import IconsDescription from "./icons_description";

export default function Section1() {
    return (
        <Container style={{ padding: "3rem 0" }}>
            <Row>
                <Col xs={12} md={6} className="d-flex align-items-center">
                    <IconsDescription />
                </Col>
                <ScrollingIcons />
            </Row>
        </Container>
    );
}
