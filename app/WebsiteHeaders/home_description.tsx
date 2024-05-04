import { Container } from "react-bootstrap";
import Description from "../WebsiteComponents/description";

export default function HomeDescription() {
    return (
        <Container style={{ marginBottom: "4rem" }}>
            <h2 className="text-center">Nice to meet you!</h2>
            <Description />
        </Container>
    );
}