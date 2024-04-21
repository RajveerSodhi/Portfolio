import Link from 'next/link';
const pages = ["Home", "SL", "Icons", "Contact"];

export default function Header() {
    return (
        <div className="h-20 bg-black flex flex-row justify-between items-center">
            <a href="/">
                <img src="/portfolio_logo.svg" alt="logo" className="h-14 ml-8" />
            </a>

            <ul className="absolute right-8 flex flex-row space-x-6">
                {pages.map((page, index) => (
                    <li key={index} className="text-xl text-white hover:text-slate-300 font-semibold">
                        <Link href={`/${page}`}>
                            {page}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}