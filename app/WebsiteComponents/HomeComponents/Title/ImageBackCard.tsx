import ReactCurvedText from "react-curved-text";
import Image from "next/image";

export default function BackCard() {
    return (
        <div className="flex justify-center shadow-lg rounded-[2.8rem] aspect-square h-[300px] w-[300px] max-h-[300px] max-w-[300px] border-1 border-zinc-800 bg-zinc-50 select-none">
            <Image
                className="absolute top-0 left-0 right-0 bottom-0 m-auto"
                src="/logo_dark.svg"
                width={80}
                height={80}
                alt="Rajveer Sodhi Dark Logo"
            />
            <ReactCurvedText
                text="SCROLL DOWN 👨‍💻 TO KNOW MORE 👨‍💻"
                width={300}
                height={300}
                cx={150}
                cy={150}
                rx={70}
                ry={70}
                reversed={true}
                textProps={{ style: { fontSize: "23" } }}
                tspanProps={{ dy: "-32" }}
                svgProps={{ className: "curved-text" }}
            />
        </div>
    );
}
