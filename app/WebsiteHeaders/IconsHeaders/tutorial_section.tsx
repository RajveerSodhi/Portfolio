import IconsTutorial from "@/app/WebsiteComponents/IconsComponents/icons_tutorial";
import { Container } from "react-bootstrap";

export default function TutorialSection() {
    return (
        <Container style={{ backgroundColor: "#78aaf6", width: "100% ", maxWidth: "100% ", display: "flex", flexDirection: "column", justifyContent: "center", padding: "3rem 0" }}>
            <h4 className="display-4">Not sure how to use an Icon Pack?</h4>
            <IconsTutorial />
        </ Container>
    );
}