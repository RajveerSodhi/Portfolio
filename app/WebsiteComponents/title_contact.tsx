import { Col } from "react-bootstrap";
import { MdEmail } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
    return (
        <Col className="d-flex flex-column flex-md-row justify-content-center align-items-center">
            <div className="mt-4 d-flex flex-column flex-md-row justify-content-center">
                <a href="mailto:rajveersodhi03@gmail.com" rel="noopener noreferrer" target="_blank" className="btn btn-primary mx-3 mb-2 contact-button email"><MdEmail /> Email</a>
                <a href="https://linkedin.com/in/rajveersodhi" rel="noopener noreferrer" target="_blank" className="btn btn-primary mx-3 mb-2  contact-button linkedin"><FaLinkedin /> LinkedIn</a>
                <a href="https://github.com/rajveersodhi" rel="noopener noreferrer" target="_blank" className="btn btn-primary mx-3 mb-2 contact-button github"><FaGithub /> GitHub</a>
            </div>
        </Col>
    );
}
