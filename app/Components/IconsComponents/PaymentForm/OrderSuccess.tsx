import { Container } from "react-bootstrap";
import DownloadButton from "./DownloadButton";

export default function PaymentComplete() {
    return (
        <Container className="text-center lead">
            <h1 className="display-4 my-4" > Thank You!</h1>
            <p> You can download your icons by clicking the button below.</p>
            <DownloadButton />
        </Container>
    );
}