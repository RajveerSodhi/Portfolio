import Link from "next/link";

export default function Description() {
    return (
        <section className="text-center w-full md:w-[75%] lg:w-[60%] text-sm md:text-xl leading-loose mt-0">
            <p className="appear-animated mb-4">
                I am currently pursuing <em>ScM CS</em> at Brown with a focus on AI/ML. Previously,
                I completed a <em>BSc CS Honours</em> degree at UBC. I am deeply passionate about
                research in HCI, with one publication and 2 in progress. I also love being an active
                member of my community through my{" "}
                <a
                    href="https://www.instagram.com/suo.filmsociety/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    film society
                </a>{" "}
                , teaching, and volunteering.
            </p>

            <p className="appear-animated mb-4">
                As a SWDev, I&apos;m a big believer that attention-to-detail is the key to creating
                an impactful frontend experience — those who overlook it may not realize why the
                experience feels <em>intuitive</em>, and those who notice it will recognize the{" "}
                <em>care behind it</em>. Both are a win in my book. I create programs with a
                human-first mindset, strive to overdeliver, and thrive in agile environments.
            </p>

            <p className="appear-animated mb-4">
                I am always eager to{" "}
                <Link href="/#contact" className="underline">
                    connect
                </Link>{" "}
                with like-minded individuals, whether it&apos;s to discuss the latest smartphones,
                movies, Indian mythology, or potential collaborations. Just don&apos;t get me
                started on how RRR is considered cinema&apos;s second coming.
            </p>
        </section>
    );
}
