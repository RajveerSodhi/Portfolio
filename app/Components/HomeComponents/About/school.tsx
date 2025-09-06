import Image from "next/image";
import Tilt from "react-parallax-tilt";

export default function School(props: {
    name: string;
    tag: string;
    year: string;
    degree: string;
    location: string;
}) {
    const { name, tag, year, degree, location } = props;

    return (
        <Tilt
            tiltReverse={false}
            tiltMaxAngleX={3}
            tiltMaxAngleY={2}
            gyroscope={true}
            className={`appear-animated cursor-school flex flex-row gap-4 justify-center items-center`}
        >
            <Image
                src={`/images/education_photos/${tag}.webp`}
                alt={`University Emblem - ${name}`}
                width={100}
                height={100}
                className="mb-4 select-none shadow-md hover:shadow-xl rounded-full object-cover object-center hover:scale-[1.01] transition-configuration transition-all"
            />
            <div className="flex items-center justify-start flex-col">
                <h4>{name}</h4>
                <p>
                    {degree} {year}
                </p>
                <p>{location}</p>
            </div>
        </Tilt>
    );
}
