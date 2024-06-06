"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Tilt from "react-parallax-tilt";
import LogoButton from "./logo_button";

export default function DesktopNavbar() {
    const pathname = usePathname();

    return (
        <div className="hidden md:block">
            <div
                id="full-navbar"
                className="flex justify-center fixed top-0 left-0 right-0 z-50 blurry-nav pt-4 pb-8"
            >
                <Tilt tiltReverse={false} tiltMaxAngleX={0} tiltMaxAngleY={2}>
                    <nav className="flex items-center px-4 py-2 border-1 border-solid rounded-full bg-[#252525] border-[#454545] font-light transform transition duration-300 hover:scale-[1.01] ease-in-out">
                        <Link
                            href="/Icons"
                            className={`navLink ${pathname === "/Icons" ? "activeNavLink" : ""}`}
                        >
                            Icons
                        </Link>
                        <Link
                            href="#Research"
                            className={`navLink ${pathname === "#Research" ? "activeNavLink" : ""}`}
                        >
                            Research
                        </Link>
                        <Link
                            href="#About"
                            className={`navLink ${pathname === "#About" ? "activeNavLink" : ""}`}
                        >
                            About
                        </Link>
                        <Link href="/">
                            <LogoButton />
                        </Link>
                        <Link
                            href="#Projects"
                            className={`navLink ${pathname === "#Projects" ? "activeNavLink" : ""}`}
                        >
                            Projects
                        </Link>
                        <Link
                            href="#Work"
                            className={`navLink ${pathname === "#Work" ? "activeNavLink" : ""}`}
                        >
                            Work
                        </Link>
                        <Link
                            href="#Contact"
                            className={`navLink ${pathname === "#Contact" ? "activeNavLink" : ""}`}
                        >
                            Contact
                        </Link>
                    </nav>
                </Tilt>
            </div>
        </div>
    );
}