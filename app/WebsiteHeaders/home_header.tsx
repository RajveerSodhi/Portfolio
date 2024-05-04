import { Container, Col, Row } from "react-bootstrap";
import Image from "../WebsiteComponents/title_image";
import Title from "../WebsiteComponents/title";

export default function HomeHeader() {
    return (
        <Container style={{ marginTop: "4rem", marginBottom: "2rem" }}>
            <Row className="align-items-center text-center text-md-left">
                <Image />
                <Title />
            </Row>
        </Container>
    );
}