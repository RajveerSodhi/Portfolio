export default function OrderSuccess() {
    return (
        <div className="text-center text-xl z-40">
            <h2 className="mt-16 mb-8 text-[2rem] md:text-[2.75rem] z-40"> Thank You</h2>
            <p className="mb-16 z-40"> You can download your icons by clicking the button below.</p>
            <a
                download
                href="/icons.zip"
                className="px-16 py-3 z-40 no-underline rounded-full w-auto hover:scale-95 transition-transform card"
            >
                Dowload Icons
            </a>
        </div>
    );
}
