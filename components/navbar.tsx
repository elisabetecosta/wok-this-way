"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/mode-toggle";

import wokIcon from "@/public/wok.svg";


const links = [
    { name: "Buffets", href: "/buffets" },
    { name: "Add Buffet", href: "/new" },
];


const NavBar: React.FC = () => {

    const pathname = usePathname();

    return (

        <nav className="bg-white dark:bg-gray-900 sticky top-0 left-0 w-full border-b border-gray-200 dark:border-gray-600">

            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">

                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/">
                        <div className="flex mr-6 md:mr-16">
                            <Image
                                src={wokIcon}
                                alt="Wok This Way Logo"
                                height={36}
                                width={36}
                            />
                            <span className="ml-2 self-center text-2xl font-semibold whitespace-nowrap hidden sm:block dark:text-white">
                                Wok This Way
                            </span>
                        </div>
                    </Link>

                    {/* Navigation Links */}
                    <ul className="flex items-center gap-4 md:gap-6 text-base">
                        {links.map((link) => (
                            <li key={link.name}>
                                <Link href={link.href}>
                                    <div
                                        className={`text-md transition hover:cursor-pointer hover:text-purple-500/75 dark:hover:text-white/75  ${pathname === link.href
                                            ? "text-purple-700 hover:text-purple-800 font-semibold dark:text-white"
                                            : "text-gray-500 dark:text-gray-300"
                                            }`}
                                    >
                                        {link.name}
                                    </div>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Login Button & Theme Toggle */}
                <div className="flex">
                    <Button
                        type="button"
                        // onClick={}
                        className={`mr-4 text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800`}
                    >
                        Login
                    </Button>
                    <ModeToggle />
                </div>
            </div>
        </nav>
    );
};
export default NavBar;