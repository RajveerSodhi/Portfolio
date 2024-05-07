import Link from "next/link";
import { Container } from "react-bootstrap";

export default function Icons() {
    return (
        <Container className="text-center" style={{ marginTop: "8rem" }}>
            <h1 className="display-1 mb-4">iOS Icon Pack</h1>
            <Link download href="./icons.zip" className="display-4">Dowload now!</Link>
            <p className="mt-4">I have designed a custom icon pack for iOS and iPadOS devices for lovers of monochrome minimalism!</p>
            <p>Icons are designed to be simple and elegant, with a focus on clarity and consistency.</p>
            <p>With over 50 unique icons available in black or white themes, this pack supports both light and dark mode setups!</p>
            <a href="https://youtu.be/AEGI3GRemDY?si=vYcjU7WiWEkIE8zW" target="_blank" rel="noopener noreferrer">Not sure how to use an icon pack? Click Here.</a>
        </Container>
    );
}
