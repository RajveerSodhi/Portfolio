import { Container } from "react-bootstrap";

export default function IconsTutorial() {
    return (
        <Container className="lead mt-4">
            <ul style={{ textAlign: "left", marginBottom: "4rem" }}>
                <li>Download the icons from this website to your phone</li>
                <li>Open the Shortcuts app</li>
                <li>Create a new shortcut to open an app of your choice</li>
                <li>Press the arrow next to the name of the shortcut and click on Add to Home Screen</li>
                <li>Customize the name of the app (I like to leave it blank!)</li>
                <li>Select Choose File for the app icon</li>
                <li>Find the appropriate icon from the folder you downloaded and select it</li>
                <li>Click Add, and that's it!</li>
            </ul>
            <a href="https://youtu.be/AEGI3GRemDY?si=vYcjU7WiWEkIE8zW" target="_blank" rel="noopener noreferrer" className="lead" style={{ textDecoration: "none", color: "#000", backgroundColor: "#FFF", padding: "1rem", borderRadius: "15px" }}>Click here for a tutorial on YouTube!</a>
        </ Container>
    );
}