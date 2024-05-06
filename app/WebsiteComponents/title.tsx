import { Col, Row } from "react-bootstrap";
import TitleName from "./title_name";
import TitleContact from "./title_contact";


export default function Title() {
    return (
        <Col xs={12} lg={6} className="d-flex flex-column justify-content-center">
            <Row className="align-items-center text-center text-md-left">
                <TitleName />
            </Row>
            <Row className="align-items-center text-center text-md-left">
                <TitleContact />
            </Row>
        </Col>
    );
}
