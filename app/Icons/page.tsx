import { Container } from "react-bootstrap";
import IconHeader from "../WebsiteHeaders/IconsHeaders/icons_header";
import IconsTutorial from "../WebsiteHeaders/IconsHeaders/icons_tutorial";
import IconsPayment from "../WebsiteComponents/IconsComponents/icons_payment";
import Section1 from "../WebsiteHeaders/IconsHeaders/IconsSection1";
import Section2 from "../WebsiteHeaders/IconsHeaders/IconsSection2";

export default function Icons() {
    return (
        <Container className="text-center" style={{ marginTop: "8rem", maxWidth: "100%" }}>
            <IconHeader />
            <Section1 />
            <Section2 />
            <IconsTutorial />
            <IconsPayment />
        </Container>
    );
}
