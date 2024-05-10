import Link from "next/link";

export default function DownloadButton() {
    return (
        <Link download href="./icons.zip" className="icons-button">Dowload Now</Link>
    );
}