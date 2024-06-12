export default function FooterInfo() {
    return (
        <span className="flex flex-col xl:flex-row items-center text-center justify-center md:min-w-60">
            <span className="md:hover:text-zinc-700 md:dark:hover:text-zinc-300 py-1 xl:py-0 transition-colors transition-configuration">
                © 2024 All Rights Reserved
            </span>
            <span className="mx-2 hidden xl:inline-block w-[2px] h-[60%] bg-[#777777]"></span>
            <span className="md:hover:text-zinc-700 md:dark:hover:text-zinc-300 py-1 xl:py-0 transition-colors transition-configuration">
                Made by Rajveer Sodhi
            </span>
            <span className="mx-2 hidden xl:inline-block w-[2px] h-[60%] bg-[#777777]"></span>
            <span className="md:hover:text-zinc-700 md:dark:hover:text-zinc-300 py-1 xl:py-0 transition-colors transition-configuration">
                Last Updated: June 11, 2024
            </span>
        </span>
    );
}
