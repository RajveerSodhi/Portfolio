import Image from "next/image";

export default function LogoButton() {
    return (
        <Image
            className="inline-block mx-4 my-1 hover:scale-90 transition-transform duration-300 ease-in-out"
            src="/logo.svg"
            width={24}
            height={24}
            alt="Rajveer Sodhi Logo"
        />
    );
}
