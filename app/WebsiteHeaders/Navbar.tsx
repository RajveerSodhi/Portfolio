"use client";
import Link from "next/link";
import { useState } from "react";
import { RiMenu4Fill } from "react-icons/ri";
import { RiCloseFill } from "react-icons/ri";
import DesktopNavbar from "../WebsiteComponents/Navbar Components/desktop_navbar";
import PhoneNavbar from "../WebsiteComponents/Navbar Components/phone_navbar";

export default function Navbar() {
    return (
        <>
            <DesktopNavbar />
            <PhoneNavbar />
        </>
    );
}
