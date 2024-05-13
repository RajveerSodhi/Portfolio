import { Container } from "react-bootstrap";

export default function IconsHeader() {
    return (
        <Container style={{ marginBottom: "5rem" }}>
            <h1 className="display-1" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                <img src="logo_bnw.svg" alt="Rajveer Sodhi Logo Badge" style={{ display: "inline-block", height: "0.75em", marginRight: "0.5em" }} />
                iOS Icon Pack
            </h1>
        </Container>
    );
}