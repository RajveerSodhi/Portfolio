import { Card, Col } from "react-bootstrap";

export default function ResearchComponent(props: { title: string, status: string }) {
    return (
        <Col xs={12} md={4} className="mb-4 d-flex">
            <Card className="p-4 shadow h-100 d-flex flex-column card-radius">
                <div className="flex-grow-1">
                    <h4 className="mb-2">{props.title}</h4>
                </div>
                <div className="mt-auto">
                    <hr className="mb-4" />
                    <h5 className="text-muted">{props.status}</h5>
                </div>
            </Card>
        </Col>
    );
}
