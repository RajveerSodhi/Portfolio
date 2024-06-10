import ResumeButton from "./resume_button";
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import ContactButton from "./contact_button";

export default function Contact() {
    return (
        <section className="appear-animated flex flex-col justify-center items-center">
            <h1 className="title">Let's Get in Touch</h1>
            <div className="appear-animated flex flex-col md:flex-row gap-4 mb-12">
                <ContactButton href="mailto:rajveersodhi03@gmail.com" text="Mail" />
                <ContactButton href="https://www.linkedin.com/in/rajveersodhi/" text="LinkedIn" />
                <ContactButton href="https://www.github.com/rajveersodhi" text="GitHub" />
            </div>
            <ResumeButton />
        </section>
    );
}
