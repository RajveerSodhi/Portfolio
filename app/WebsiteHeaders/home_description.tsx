import { Container } from "react-bootstrap";
import Description from "../WebsiteComponents/description";

export default function HomeDescription() {
    return (
        <Container>
            <h2 className="w-100 text-center">Nice to meet you!</h2>
            <Description />
        </Container>
    );
}