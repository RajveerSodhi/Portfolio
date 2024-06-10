import Image from "next/image";

export default function WorkImage(props: { img: string; company: string; tld: string }) {
    const { img, company, tld } = props;

    return (
        <div className="cursor-website bg-mywhite w-auto h-auto min-w-[5.4rem] min-h-[5.4rem] aspect-square p-1 rounded-full flex items-center justify-center shadow-md hover:shadow-lg hover:scale-105 transition-all transition-configuration">
            <a href={`https://www.${img}.${tld}/`} target="_blank" rel="noreferrer">
                <Image
                    src={`/images/work_photos/${img}.png`}
                    alt={company}
                    width={40}
                    height={40}
                    className="cursor-website min-h-[40px] min-w-[40px] object-cover"
                />
            </a>
        </div>
    );
}
