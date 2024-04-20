import Link from 'next/link';
const pages = ["Home", "SL", "Icon Pack", "Contact"];

export default function Header() {
    return (
        <div className="h-16 bg-black flex flex-row justify-between items-center">
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