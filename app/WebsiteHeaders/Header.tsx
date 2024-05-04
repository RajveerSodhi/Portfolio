"use client";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
    const [isNavCollapsed, setIsNavCollapsed] = useState(true);
    const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
            <Link className="navbar-brand mx-2" href="/">
                <img src="/portfolio_logo.svg" width="30" height="30" alt="Rajveer Sodhi Logo" />
            </Link>
            <button
                className="navbar-toggler"
                type="button"
                onClick={handleNavCollapse}
                aria-controls="navbarNavAltMarkup"
                aria-expanded={isNavCollapsed ? "false" : "true"}
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarNavAltMarkup">
                <div className="navbar-nav justify-content-end w-100" style={{ "fontSize": "1.2rem" }}>
                    <Link className="nav-item nav-link mx-2 active" href="/">Home</Link>
                    <Link className="nav-item nav-link mx-2 active" href="/SL">Supplemental Learning</Link>
                    <Link className="nav-item nav-link mx-2 active" href="/Icons">Icon Pack</Link>
                    <Link className="nav-item nav-link mx-2 active" href="/Contact">Contact</Link>
                </div>
            </div>
        </nav>
    );
}
