import Link from "next/link";

export default function FooterNavbar() {
    return (
        <span>
            <Link href="/" className="navLink">
                Home
            </Link>
            <Link href="#About" className="navLink">
                About
            </Link>
            <Link href="#Contact" className="navLink">
                Contact
            </Link>
            <Link href="/Icons" className="navLink">
                Icons
            </Link>
            <Link href="#Research" className="navLink">
                Research
            </Link>
            <Link href="#Projects" className="navLink">
                Projects
            </Link>
            <Link href="#Work" className="navLink">
                Work
            </Link>
        </span>
    );
}
