"use client";
import { MdOutlineDarkMode, MdOutlineWbSunny } from "react-icons/md";
import { CgDarkMode } from "react-icons/cg";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

export default function ThemeSwitch() {
    const [mounted, setMounted] = useState(false);
    const { setTheme, resolvedTheme } = useTheme();

    useEffect(() => setMounted(true), []);

    if (!mounted) return <CgDarkMode />;

    if (resolvedTheme === "dark") {
        return <MdOutlineWbSunny onClick={() => setTheme("light")} />;
    }

    if (resolvedTheme === "light") {
        return <MdOutlineDarkMode onClick={() => setTheme("dark")} />;
    }
}
