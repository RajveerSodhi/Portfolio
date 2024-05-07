import { Card, Col } from 'react-bootstrap';

export default function WorkExComponent(props: { company: string, position: string, date: string, location: string, description: string[] }) {
    return (
        <Col xs={12} md={8} className="mb-4">
            <Card className="p-4 shadow card-radius">
                <h4 className="fw-bold mb-4">{props.position}</h4>
                <h6 className="text-muted fw-bold">{props.company}</h6>
                <p className="text-muted mb-2">{props.location}  |  {props.date}</p>
                <hr className="mb-4" />
                <ul className="text-muted mb-2">
                    {props.description.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </Card>
        </Col>
    );
}