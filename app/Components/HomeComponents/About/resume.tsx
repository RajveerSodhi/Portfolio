"use client";
import Tilt from "react-parallax-tilt";

export default function Resume() {
    return (
        <section className="flex flex-col items-center justify-center appear-animated w-full">
            <h2 className="title">Resume</h2>
            <iframe
                className="shadow hidden md:block rounded-3xl w-50 h-[85vh]"
                title="Resume"
                src="/resume.pdf"
            ></iframe>
            <Tilt tiltReverse={false} tiltMaxAngleX={4} tiltMaxAngleY={4} gyroscope={true}>
                <a
                    className="no-underline text-lg py-4 px-12 text-center items-center rounded-full shadow-md hover:scale-105 hover:shadow-lg transition-shadow transition-transform duration-500 ease-in-out bg-[#fefefe] dark:bg-[#252525] border-1 border-solid border-[#e7e7e7] dark:border-[#454545] text-myblack dark:text-mywhite md:hidden"
                    download
                    href="/resume.pdf"
                >
                    Download Resume
                </a>
            </Tilt>
        </section>
    );
}
