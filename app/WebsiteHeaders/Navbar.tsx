"use client";
import Link from "next/link";
import Image from "next/image";
// import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const pathname = usePathname();

    return (
        <div className="flex justify-center mt-2">
            <nav className="flex items-center px-4 py-2 border-1 border-solid rounded-full bg-[#252525] border-[#454545] shadow-md mt-4 font-light transform transition duration-300 hover:scale-105 ease-in-out">
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
                    <Image
                        className="inline-block mx-4 my-1"
                        src="/logo.svg"
                        width={24}
                        height={24}
                        alt="Rajveer Sodhi Logo"
                    />
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
        </div>
    );
}
