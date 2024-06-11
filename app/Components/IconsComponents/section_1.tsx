import IPhone from "./iPhone";

export default function Section1() {
    return (
        <section className="flex flex-col md:flex-row justify-center">
            <IPhone />
            <div className="flex flex-col items-center justify-center w-50 text-center">
                <h2 className="mb-4 text-[3rem]">
                    For Lovers of <strong>Monochrome Minimalism</strong>
                </h2>
                <p className="mb-8 text-xl">
                    Simple, clean and modern icon pack for your iOS and iPadOS devices. Icons are
                    designed to be simple and elegant, with a focus on clarity and consistency.
                </p>
                <p className="mb-0 text-xl text-zinc-600 dark:text-zinc-400">
                    Try playing with the switches below the iPhone!
                </p>
            </div>
        </section>
    );
}
