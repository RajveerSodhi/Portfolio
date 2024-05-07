import { Card, Col } from "react-bootstrap";

export default function ResearchComponent(props: { title: string, status: string }) {
    return (
        <Col xs={12} md={4} className="mb-4 d-flex">
            <Card className="p-4 shadow h-100  card-radius">
                <h4 className="fw-bold mb-2">{props.title}</h4>
                <hr className="mb-4" />
                <h5 className="text-muted">{props.status}</h5>
            </Card>
        </Col>
    );
}