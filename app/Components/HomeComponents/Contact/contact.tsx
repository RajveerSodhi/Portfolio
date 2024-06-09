import Resume from "./resume";
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import ContactButton from "./contact_button";

export default function Contact() {
    return (
        <section className="appear-animated flex flex-col justify-center items-center">
            <h1 className="title">Let's Get in Touch</h1>
            <div className="text-lg flex flex-row">
                <span>
                    <MdEmail /> rajveersodhi03@gmail.com
                </span>{" "}
                |{" "}
                <span>
                    <FaMapMarkerAlt /> Kelowna, BC
                </span>
            </div>
            <Resume />
            <div className="flex flex-col md:flex-row gap-4">
                <ContactButton href="mailto:rajveersodhi03@gmail.com" text="Mail" />
                <ContactButton href="https://www.linkedin.com/in/rajveer-sodhi/" text="LinkedIn" />
                <ContactButton href="https://www.github.com/rajveer-sodhi" text="GitHub" />
            </div>
        </section>
    );
}
