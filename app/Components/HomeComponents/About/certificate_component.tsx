"use client";
import Tilt from "react-parallax-tilt";

export default function Certificate(props: {
    name: string;
    issuer: string;
    date: string;
    credentialID: string;
    link: string;
}) {
    const { name, issuer, date, credentialID, link } = props;

    const formattedDate = (datestamp: string) => {
        const dateArray = datestamp.split("-");
        const monthsDict: { [key: string]: string } = {
            "01": "Jan",
            "02": "Feb",
            "03": "Mar",
            "04": "Apr",
            "05": "May",
            "06": "Jun",
            "07": "Jul",
            "08": "Aug",
            "09": "Sep",
            "10": "Oct",
            "11": "Nov",
            "12": "Dec",
        };

        const year = dateArray[0].substring(2, 4);
        const month = monthsDict[dateArray[1]];

        return month + " '" + year;
    };

    return (
        <Tilt
            tiltReverse={false}
            tiltMaxAngleX={3}
            tiltMaxAngleY={2}
            gyroscope={true}
            className={`appear-animated cursor-certificate`}
        >
            <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-certificate py-6 px-4 h-full flex flex-col rounded-3xl max-w-[28rem] w-auto hover:scale-[1.01] transition-transform card"
            >
                <h3 className={`cursor-certificate mb-4 text-lg md:text-2xl grow`}>{name}</h3>

                <h5 className="cursor-certificate text-base md:text-lg text-zinc-500 dark:text-zinc-400 hover:text-myblack dark:hover:text-mywhite transition-color transition-configuration">
                    {issuer} • {formattedDate(date)}
                </h5>
            </a>
        </Tilt>
    );
}
