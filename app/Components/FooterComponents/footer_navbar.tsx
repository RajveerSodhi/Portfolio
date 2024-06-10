import Link from "next/link";

export default function FooterNavbar() {
    return (
        <span className="flex flex-col lg:flex-row items-center md:min-w-60">
            <Link href="/" className="navLink">
                Home
            </Link>
            <Link href="/#work" className="navLink">
                Work
            </Link>
            <Link href="/#projects" className="navLink">
                Projects
            </Link>
            <Link href="/#research" className="navLink">
                Research
            </Link>
            <Link href="/#about" className="navLink">
                About
            </Link>
            <Link href="/#contact" className="navLink">
                Contact
            </Link>
            <Link href="/Icons" className="navLink">
                Icons
            </Link>
        </span>
    );
}
