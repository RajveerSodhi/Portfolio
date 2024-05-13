import IconsPayment from "@/app/WebsiteComponents/IconsComponents/icons_payment";
import { Container, Row } from "react-bootstrap";

export default function PaymentSection() {
    return (
        <Container style={{ backgroundColor: "#78aaf6", width: "100%", maxWidth: "100%", display: "flex", justifyContent: "center", padding: "3rem 0" }}>
            <Row style={{ width: "100%", maxWidth: "80%" }}>
                <IconsPayment />
            </Row>
        </Container>
    );
}