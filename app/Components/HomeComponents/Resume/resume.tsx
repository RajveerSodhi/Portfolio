import { useState, useEffect } from "react";
import { Container, Button } from "react-bootstrap";

export default function Resume() {
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
        const updateScreenSize = () => { setIsSmallScreen(window.innerWidth <= 768); };
        updateScreenSize();
        window.addEventListener("resize", updateScreenSize);
        return () => { window.removeEventListener("resize", updateScreenSize); };
    }, []);

    return (
        <Container className="d-flex justify-content-center mt-4">
            {!isSmallScreen ? (
                <iframe
                    className="shadow"
                    title="Resume"
                    src="/resume.pdf"
                    style={{ width: "70%", height: "900px", borderRadius: "20px" }}
                ></iframe>
            ) : (
                <a className="btn btn-light project-link mt-3 p-2" download href="/resume.pdf">
                    Download Resume
                </a>
            )}
        </Container>
    );
}
