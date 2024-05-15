import OrderSuccess from "@/app/WebsiteComponents/IconsComponents/PaymentForm/OrderSuccess";
import { Container } from "react-bootstrap";

export default function OrderComplete() {
    return (
        <Container className="d-flex justify-content-center align-items-center" style={{ height: "92vh" }}>
            <OrderSuccess />
        </Container>
    );
}
