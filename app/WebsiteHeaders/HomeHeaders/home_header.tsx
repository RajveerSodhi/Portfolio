import { Container, Col, Row } from "react-bootstrap";
import Image from "../../WebsiteComponents/HomeComponents/Title/title_image";
import Title from "../../WebsiteComponents/HomeComponents/Title/title";

export default function HomeHeader() {
    return (
        <Container style={{ marginTop: "8rem", marginBottom: "4rem" }}>
            <Row className="align-items-center text-center text-md-left">
                <Image />
                <Title />
            </Row>
        </Container>
    );
}