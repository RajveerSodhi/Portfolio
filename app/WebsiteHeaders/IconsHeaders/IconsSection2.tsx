import ScrollingIcons from "@/app/WebsiteComponents/IconsComponents/scrolling_icons";
import { Container, Row, Col } from "react-bootstrap";

export default function Section1() {
    return (
        <Container>
            <Row>
                <Col xs={12} md={6}>
                    <p className="mt-4"> I have designed a custom icon pack for iOS and iPadOS devices for lovers of monochrome minimalism! </p>
                    <p> Icons are designed to be simple and elegant, with a focus on clarity and consistency.</p>
                    <p> With over 50 unique icons available in black or white themes, this pack supports both light and dark mode setups!</p>
                </Col>
                <ScrollingIcons />
            </Row>
        </Container>
    );
}