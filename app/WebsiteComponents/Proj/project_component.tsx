import { Col, Card } from 'react-bootstrap';
import ProjectButton from './project_button';

export default function ProjectComponent(props: { title: string, link: string, tech: string, date: string, description: string[] }) {
    return (
        <Col xs={12} md={8} className="mb-4">
            <Card className="p-4 shadow card-radius">
                <h4 className="fw-bold mb-4">{props.title}</h4>
                <h6 className="text-muted fw-bold">{props.tech}</h6>
                <p className="text-muted mb-2">{props.date}</p>
                <hr className="mb-4" />
                <img src={`../../content/project_photos/${props.link}.png`} alt={`Project Image - ${props.title}`} className="mb-4 project-image" />
                <ul className="text-muted my-2" style={{ textAlign: "left" }}>
                    {props.description.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
                <ProjectButton link={props.link} />
            </Card>
        </Col>
    );

}