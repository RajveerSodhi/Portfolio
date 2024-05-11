import Link from "next/link";
import { Container } from "react-bootstrap";

export default function DownloadButton() {
    return (
        <Container className="download">
            <Link download href="./icons.zip" className="download-button">Dowload Now</Link>
        </Container>
    );
}