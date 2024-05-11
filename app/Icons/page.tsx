import { Container } from "react-bootstrap";
import IconHeader from "../WebsiteHeaders/IconsHeaders/icons_header";
import IconsDescription from "../WebsiteHeaders/IconsHeaders/icons_description";
import IconsTutorial from "../WebsiteHeaders/IconsHeaders/icons_tutorial";
import PaymentSuccess from "../WebsiteComponents/IconsComponents/PaymentForm/PaymentSuccess";
import ScrollingIcons from "../WebsiteComponents/IconsComponents/scrolling_icons";
import IconsPayment from "../WebsiteComponents/IconsComponents/icons_payment";

export default function Icons() {
    return (
        <Container className="text-center" style={{ marginTop: "8rem", maxWidth: "100%" }}>
            <IconHeader />
            <ScrollingIcons />
            <IconsDescription />
            <IconsTutorial />
            <PaymentSuccess />
            <IconsPayment />
        </Container>
    );
}
