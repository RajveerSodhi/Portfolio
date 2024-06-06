"use client";
import Link from "next/link";
import { useState } from "react";
import { RiMenu4Fill } from "react-icons/ri";
import { RiCloseFill } from "react-icons/ri";
import LogoButton from "./logo_button";

export default function PhoneNavbar() {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const handleCollapse = () => setIsCollapsed(!isCollapsed);

    return (
        <div id="collapsed-navbar" className="md:hidden">
            <nav className="flex fixed top-0 left-0 right-0 z-50 blurry-nav pt-4 pb-12 px-2">
                <span
                    className={`flex-col lg:flex-row items-left md:min-w-60 ${
                        isCollapsed ? "hidden" : "flex"
                    }`}
                >
                    <Link href="/" className="py-1">
                        <LogoButton />
                    </Link>
                    <Link href="#About" className="navLink py-1">
                        About
                    </Link>
                    <Link href="#Contact" className="navLink py-1">
                        Contact
                    </Link>
                    <Link href="/Icons" className="navLink py-1">
                        Icons
                    </Link>
                    <Link href="#Research" className="navLink py-1">
                        Research
                    </Link>
                    <Link href="#Projects" className="navLink py-1">
                        Projects
                    </Link>
                    <Link href="#Work" className="navLink py-1">
                        Work
                    </Link>
                </span>
                <span>
                    <button
                        onClick={handleCollapse}
                        className="text-mywhite text-3xl absolute top-0 right-0 p-4 hover:scale-90 transition-transform ease-in-out duration:300"
                    >
                        {isCollapsed ? <RiMenu4Fill /> : <RiCloseFill />}
                    </button>
                </span>
            </nav>
        </div>
    );
}
