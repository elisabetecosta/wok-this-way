"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
    { name: "Buffets", href: "/buffets" },
    { name: "Add Buffet", href: "/new" },
];


const NavBar: React.FC = () => {

    const pathname = usePathname();

    return (

        <nav className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 border-b sm:px-6 lg:px-8">

            <div className="flex items-center gap-4">
                <Link href="/">
                    {/* LOGO */}
                    <p className="text-heading3-bold text-light-1 max-xs:hidden">Wok This Way</p>
                </Link>
            </div>

            <ul className="flex items-center gap-6 text-sm">

                {links.map((link) => (
                    <li key={link.name}>
                        <Link href={link.href}>
                            <div
                                className={`text-md transition hover:cursor-pointer hover:text-gray-500/75 dark:hover:text-white/75  ${pathname === link.href
                                    ? "text-gray-800 hover:text-gray-800 dark:text-white"
                                    : "text-gray-500 dark:text-gray-300"
                                    }`}
                            >
                                {link.name}
                            </div>
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};
export default NavBar;