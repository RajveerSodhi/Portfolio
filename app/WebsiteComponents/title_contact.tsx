import { Col } from "react-bootstrap";
import { MdEmail } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
    return (
        <Col className="d-flex flex-column flex-md-row justify-content-center align-items-center">
            <div className="mt-4 d-flex flex-column flex-md-row justify-content-center">
                <a href="mailto:rajveersodhi03@gmail.com" rel="noopener noreferrer" target="_blank" className="btn btn-primary mx-3 mb-2" style={{ width: "9rem", backgroundColor: "#c71610", border: "none" }}><MdEmail /> Email</a>
                <a href="https://linkedin.com/in/rajveersodhi" rel="noopener noreferrer" target="_blank" className="btn btn-primary mx-3 mb-2" style={{ width: "9rem", backgroundColor: "#0a66c2", border: "none" }}><FaLinkedin /> LinkedIn</a>
                <a href="https://github.com/rajveersodhi" rel="noopener noreferrer" target="_blank" className="btn btn-primary mx-3 mb-2" style={{ width: "9rem", backgroundColor: "#303a50", border: "none" }}><FaGithub /> GitHub</a>
            </div>
        </Col>
    );
}
