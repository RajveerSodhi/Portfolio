import { MdEmail } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
    return (
        <div className="flex flex-row">
            <a
                href="mailto:rajveersodhi03@gmail.com"
                rel="noopener noreferrer"
                target="_blank"
                className="footer-social"
            >
                <MdEmail />
            </a>
            <a
                href="https://linkedin.com/in/rajveersodhi"
                rel="noopener noreferrer"
                target="_blank"
                className="footer-social"
            >
                <FaLinkedin />
            </a>
            <a
                href="https://github.com/rajveersodhi"
                rel="noopener noreferrer"
                target="_blank"
                className="footer-social"
            >
                <FaGithub />
            </a>
        </div>
    );
}
