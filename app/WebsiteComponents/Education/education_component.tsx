import { Card, Col } from 'react-bootstrap';

export default function EducationComponent(props: { institute: string, degree: string, location: string, date: string, details: string[][] }) {
    return (
        <Col xs={12} md={8} className="mb-4">
            <Card className="p-4 shadow card-radius">
                <h4 className="fw-bold mb-4">
                    {props.institute}
                </h4>
                <h6 className="text-muted fw-bold">
                    {props.degree}
                </h6>
                <p className="text-muted mb-2">{props.location}  |  {props.date}</p>
                <hr className="mb-4" />
                {props.details.map((item, index) => (
                    <p key={index} className="text-muted mb-2" style={{ textAlign: "left" }}><strong>{item[0]}: </strong> {item[1]}</p>
                ))}
            </Card>
        </Col>
    );
}