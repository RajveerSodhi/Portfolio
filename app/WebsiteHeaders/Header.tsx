"use client";
import { useState } from "react";

export default function Header() {
    const [isNavCollapsed, setIsNavCollapsed] = useState(true);
    const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand mx-2" href="#">
                <img src="/portfolio_logo.svg" width="30" height="30" alt="" />
            </a>
            <button
                className="navbar-toggler"
                type="button"
                onClick={handleNavCollapse}
                aria-controls="navbarNavAltMarkup"
                aria-expanded={isNavCollapsed ? "false" : "true"}  // Convert boolean to string
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarNavAltMarkup">
                <div className="navbar-nav justify-content-end w-100">
                    <a className="nav-item nav-link active" href="#">Home <span className="sr-only">(current)</span></a>
                    <a className="nav-item nav-link" href="#">SL</a>
                    <a className="nav-item nav-link" href="#">Icons</a>
                    <a className="nav-item nav-link" href="#">Contact</a>
                </div>
            </div>
        </nav>
    );
}
