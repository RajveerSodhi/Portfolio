import ContactButton from "./contact_button";

export default function Contact() {
    return (
        <section className="appear-animated">
            <h1 className="title">Let's Get in Touch</h1>
            <div className="flex flex-col md:flex-row">
                <ContactButton />
                <ContactButton />
                <ContactButton />
            </div>
        </section>
    );
}
