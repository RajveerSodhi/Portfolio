export default function FooterInfo() {
    return (
        <span className="flex flex-col xl:flex-row items-center text-center justify-center md:min-w-60">
            <span className="hover:text-zinc-300 transition-colors duration-300 ease-in-out py-1 xl:py-0">
                © 2024 All Rights Reserved
            </span>
            <span className="mx-2 hidden xl:inline-block w-[2px] h-[60%] bg-[#777777]"></span>
            <span className="hover:text-zinc-300 transition-colors duration-300 ease-in-out py-1 xl:py-0">
                Made with ❤️ by Rajveer Sodhi
            </span>
            <span className="mx-2 hidden xl:inline-block w-[2px] h-[60%] bg-[#777777]"></span>
            <span className="hover:text-zinc-300 transition-colors duration-300 ease-in-out py-1 xl:py-0">
                Last Updated: June 6, 2024
            </span>
        </span>
    );
}
