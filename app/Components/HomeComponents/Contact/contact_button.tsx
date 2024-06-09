export default function ContactButton(props: { href: string; text: string }) {
    const { href, text } = props;
    return (
        <a
            href={href}
            className="appear-animated no-underline text-xl py-4 px-12 text-center items-center rounded-full shadow-md hover:scale-90 transition-transform duration-500 ease-in-out bg-[#fefefe] dark:bg-[#252525] border-1 border-solid border-[#e7e7e7] dark:border-[#454545] text-myblack dark:text-mywhite"
        >
            {text}
        </a>
    );
}
