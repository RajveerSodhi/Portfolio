import Link from "next/link";
import { Container } from "react-bootstrap";
import IconHeader from "../WebsiteHeaders/icons_header";
import IconsDescription from "../WebsiteHeaders/icons_description";
import IconsTutorial from "../WebsiteHeaders/icons_tutorial";
import ScrollingIcons from "../WebsiteComponents/scrollingIcons";
import IconPayment from "../WebsiteComponents/icons_payment";
import DownloadButton from "../WebsiteComponents/PaymentForm/DownloadButton";

export default function Icons() {
    return (
        <Container className="text-center" style={{ marginTop: "8rem", maxWidth: "100%" }}>
            <IconHeader />
            <ScrollingIcons />
            <IconsDescription />
            <IconsTutorial />
            <DownloadButton />
            <IconPayment />
        </Container>
    );
}
