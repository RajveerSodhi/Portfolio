import Link from "next/link";

export default function Description() {
    return (
        <section className="text-center w-full md:w-[75%] lg:w-[60%] text-sm md:text-xl leading-loose mt-0">
            <p className="appear-animated mb-4">
                I am pursuing a <em>CS Honours</em> at UBC. I am passionate about research in HCI
                and love being an active member of my community. My SWDev experiences have taught me
                a lot about user-centric design, teamwork, and agile practices.
            </p>

            <p className="appear-animated mb-4">
                I am always eager to{" "}
                <Link href="/#contact" className="underline">
                    connect
                </Link>{" "}
                with like-minded individuals, whether it&apos;s to discuss the latest smartphones,
                movies, or potential collaborations.
            </p>
        </section>
    );
}
