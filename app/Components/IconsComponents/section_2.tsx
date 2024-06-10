import ScrollingIcons from "@/app/Components/IconsComponents/scrolling_icons";
import { Container, Row, Col } from "react-bootstrap";
import IconsDescription from "./description";

export default function Section1() {
    return (
        <section>
            <div>
                <div className="d-flex align-items-center">
                    <IconsDescription />
                </div>
                <ScrollingIcons />
            </div>
        </section>
    );
}
