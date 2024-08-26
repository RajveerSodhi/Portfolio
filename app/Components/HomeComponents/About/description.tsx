import Link from "next/link";

export default function Description() {
    return (
        <section className="text-center w-full md:w-[75%] lg:w-[60%] text-sm md:text-xl leading-loose mt-0">
            <p className="appear-animated mb-4">
                I am a final-year Computer Science Honours and Data Science Minor student at the{" "}
                <span className="highlight">University of British Columbia</span>. I am passionate
                about research in Computer Science and love being an active member of my community.
                I conducted research on innovative interaction techniques for AR/VR headesets,
                leveraging tools like C# and Unity. At UBC, I work as an SL Leader, Film Society
                President, and Content Creator for Parindey Dance Club.
            </p>

            <p className="appear-animated mb-4">
                Most recently, I worked as a{" "}
                <span className="highlight">Data Analyst Intern at Data POEM</span>, where I
                spearheaded the transition of their ETL suite to Singer. My experiences and roles
                have taught me a lot about user-centric design, teamwork and leadership, and agile
                programming practices.
            </p>

            <p className="appear-animated mb-4">
                I am always eager to{" "}
                <Link href="/#contact" className="underline">
                    connect
                </Link>{" "}
                with like-minded individuals, whether it&apos;s to discuss the latest smartphones,
                cinema, or potential collaborations. Feel free to reach out to me!
            </p>
        </section>
    );
}
