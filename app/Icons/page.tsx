import Link from "next/link";
import { Container } from "react-bootstrap";
import IconHeader from "../WebsiteHeaders/icons_header";
import IconsDescription from "../WebsiteHeaders/icons_description";
import IconsButton from "../WebsiteComponents/IconsButton";
import IconsTutorial from "../WebsiteHeaders/icons_tutorial";

export default function Icons() {
    return (
        <Container className="text-center" style={{ marginTop: "8rem" }}>
            <IconHeader />
            <IconsButton />
            <IconsDescription />
            <IconsTutorial />
        </Container>
    );
}
