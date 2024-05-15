import IconsPayment from "@/app/WebsiteComponents/IconsComponents/PaymentForm/icons_payment";
import { Container, Row } from "react-bootstrap";

export default function PaymentSection() {
    return (
        <Container style={{ width: "100%", maxWidth: "100%", display: "flex", justifyContent: "center", padding: "2rem 0" }}>
            <Row style={{ width: "100%", maxWidth: "60%", padding: "2rem" }}>
                <h4 className="display-4">Download the pack!</h4>
                <p className="lead">If you would like to support me, you can pay whatever you would like to get the icons - even $0!</p>
                <IconsPayment />
            </Row>
        </Container>
    );
}