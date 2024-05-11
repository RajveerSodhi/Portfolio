import Link from "next/link";
import { Container } from "react-bootstrap";
import IconHeader from "../WebsiteHeaders/icons_header";
import IconsDescription from "../WebsiteHeaders/icons_description";
import IconsTutorial from "../WebsiteHeaders/icons_tutorial";
import ScrollingIcons from "../WebsiteComponents/IconsComponents/scrollingIcons";
import IconPayment from "../WebsiteComponents/IconsComponents/icons_payment";
import PaymentSuccess from "../WebsiteComponents/PaymentForm/PaymentSuccess";

export default function Icons() {
    return (
        <Container className="text-center" style={{ marginTop: "8rem", maxWidth: "100%" }}>
            <IconHeader />
            <ScrollingIcons />
            <IconsDescription />
            <IconsTutorial />
            <PaymentSuccess />
            <IconPayment />
        </Container>
    );
}
