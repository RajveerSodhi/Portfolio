"use client";
import Tilt from "react-parallax-tilt";

export default function ResearchComponent(props: { title: string; status: string; link: string }) {
    const { title, status, link } = props;
    const hasLink = link !== "";
    const Wrapper = hasLink ? "a" : "div";

    return (
        <Tilt
            tiltReverse={false}
            tiltMaxAngleX={3}
            tiltMaxAngleY={2}
            gyroscope={true}
            className={`appear-animated ${hasLink ? "cursor-website" : "cursor-research"}`}
        >
            <Wrapper
                {...(hasLink && {
                    href: link,
                    target: "_blank",
                    rel: "noopener noreferrer",
                })}
                className={`${
                    hasLink ? "cursor-website" : "cursor-research"
                } py-6 px-4 h-full flex flex-col rounded-3xl max-w-[28rem] w-auto hover:scale-[1.01] transition-transform card`}
            >
                <h3
                    className={`${
                        hasLink ? "cursor-website" : "cursor-research"
                    } mb-4 text-lg md:text-2xl grow`}
                >
                    {title}
                </h3>
                <h5
                    className={`${
                        hasLink ? "cursor-website" : "cursor-research"
                    } text-base md:text-lg text-zinc-500 dark:text-zinc-400 hover:text-myblack dark:hover:text-mywhite transition-color transition-configuration`}
                >
                    {status}
                </h5>
            </Wrapper>
        </Tilt>
    );
}
