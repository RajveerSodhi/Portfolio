import { certificates } from "../../../../public/content/certificates_content";
import Certificate from "./certificate";

export default function Certificates() {
    return (
        <section className="appear-animated" id="certifications">
            <h1 className="title">Certifications</h1>
            <div className="grid grid-flow-row grid-cols-1 md:grid-cols-2 gap-6">
                {certificates.map((certificate, index) => (
                    <Certificate
                        key={index}
                        name={certificate.name}
                        issuer={certificate.issuer}
                        date={certificate.date}
                        credentialID={certificate.credentialID}
                        link={certificate.link}
                    />
                ))}
            </div>
        </section>
    );
}
