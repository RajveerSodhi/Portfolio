import Image from "next/image";

export default function FrontCard() {
    return (
        <div className="flex justify-center">
            <Image
                className="shadow-lg rounded-[2.8rem] aspect-square h-[300px] w-[300px] max-h-[300px] max-w-[300px] border-1 border-myblack"
                src="/myPhoto.png"
                width={300}
                height={300}
                alt="Rajveer Sodhi Logo"
            />
        </div>
    );
}
