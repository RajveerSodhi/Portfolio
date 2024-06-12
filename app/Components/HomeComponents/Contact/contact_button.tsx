"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export default function ContactButton(props: { href: string; text: string }) {
    const { href, text } = props;
    const theme = useTheme();

    const [contactButtonTheme, setContactButtonTheme] = useState("light");

    useEffect(() => {
        if (theme.resolvedTheme === "dark") {
            setContactButtonTheme("dark");
        } else {
            setContactButtonTheme("light");
        }
    }, [theme.resolvedTheme]);

    return (
        <a
            href={href}
            rel="noopener noreferrer"
            target="_blank"
            className="md:scale-100 scale-90 relative no-underline text-2xl text-center items-center hover:scale-90 transition-transform transition-configuration text-myblack dark:text-mywhite"
        >
            <Image
                src={`/images/contact_buttons/${text}_${contactButtonTheme}.png`}
                width={170}
                height={70}
                priority={true}
                alt={`${text} Link`}
                className="rounded-full shadow-md"
            ></Image>
            <span className="flex justify-center items-center absolute top-0 bottom-0 left-0 right-0">
                {text}
            </span>
        </a>
    );
}
