"use client";
import Link from "next/link";
import Tilt from "react-parallax-tilt";
import LogoButton from "./logo_button";
import ThemeSwitch from "./theme_switch";

export default function DesktopNavbar() {
    return (
        <div className="hidden md:block">
            <div
                id="full-navbar"
                className="flex justify-center fixed top-0 left-0 right-0 z-50 blurry blurry-nav-edge pt-4 pb-12 select-none  transition-color transition-configuration"
            >
                <Tilt tiltReverse={false} tiltMaxAngleX={0} tiltMaxAngleY={2}>
                    <nav className="flex items-center px-4 py-2 border-1 border-solid rounded-full bg-[#fefefe] dark:bg-[#252525] border-[#e7e7e7] dark:border-[#454545] font-light transform transition transition-configuration hover:scale-[1.01]">
                        <Link href="/#work" className="navLink">
                            Work
                        </Link>
                        <Link href="/#projects" className="navLink">
                            Projects
                        </Link>
                        <Link href="/#research" className="navLink">
                            Research
                        </Link>
                        <Link href="/">
                            <LogoButton />
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
                    </nav>
                </Tilt>
                <span className="text-3xl text-myblack/70 hover:scale-90 dark:text-mywhite/70 absolute right-0 pr-6 pt-2 transition-transform transition-configuration">
                    <ThemeSwitch />
                </span>
            </div>
        </div>
    );
}
