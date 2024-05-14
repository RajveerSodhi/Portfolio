import { Container } from "react-bootstrap";
import IconHeader from "../WebsiteHeaders/IconsHeaders/icons_header";
import TutorialSection from "../WebsiteHeaders/IconsHeaders/tutorial_section";
import Section1 from "../WebsiteHeaders/IconsHeaders/IconsSection1";
import Section2 from "../WebsiteHeaders/IconsHeaders/IconsSection2";
import PaymentSection from "../WebsiteHeaders/IconsHeaders/paymentSection";

export default function Icons() {
    return (
        <Container className="text-center" style={{ marginTop: "8rem", maxWidth: "100%" }}>
            <IconHeader />
            <Section1 />
            <Section2 />
            <TutorialSection />
            <PaymentSection />
        </Container>
    );
}
