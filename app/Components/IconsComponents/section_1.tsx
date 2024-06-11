import IPhone from "./iPhone";

export default function Section1() {
    return (
        <section className="flex flex-col md:flex-row justify-evenly appear-animated">
            <IPhone />
            <div className="flex flex-col items-center justify-center md:w-[50%] text-center">
                <h2 className="mb-4 text-[3rem] z-40">
                    For Lovers of <strong>Monochrome Minimalism</strong>
                </h2>
                <p className="mb-8 text-xl z-40">
                    Simple, clean and modern icon pack for your iOS and iPadOS devices. Icons are
                    designed to be simple and elegant, with a focus on clarity and consistency.
                </p>
                <p className="mb-0 text-xl text-zinc-700 dark:text-zinc-300 hover:text-myblack dark:hover:text-mywhite transition-colors transition-configuration z-40">
                    Try playing with the switches below the iPhone!
                </p>
            </div>
        </section>
    );
}
