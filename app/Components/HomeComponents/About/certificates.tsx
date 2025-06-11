import { certificates } from "../../../../public/content/certificates_content";
import Certificate from "./certificate_component";

export default function Certificates() {
    return (
        <section className="text-center appear-animated md:max-w-[83rem] w-full">
            <h4 className="text-center text-xl md:text-2xl mb-4">Certifications</h4>

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
