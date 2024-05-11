import { Container } from "react-bootstrap";
import DownloadButton from "./DownloadButton";

export default function PaymentComplete() {
    return (
        <>
            <h1 className="display-4 my-4" > Payment Complete!</h1>
            <Container className="text-center lead">
                <p> Thank you for your support!</p>
                <p> You can download your icons by clicking the button below.</p>
            </Container>
            <DownloadButton />
        </>
    );
}