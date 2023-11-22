import { Github, Instagram, Linkedin } from "lucide-react";


const Footer: React.FC = () => {

    return (
        <footer className="bg-white transition dark:bg-gray-900">
            <div className="mx-auto max-w-screen-xl px-4 pb-6 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center justify-center border-t border-gray-100 pt-8 dark:border-gray-800">

                    <ul className="flex gap-4">

                        <li>
                            <a
                                href="https://www.instagram.com/elica1994/"
                                rel="noreferrer"
                                target="_blank"
                                className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                            >
                                <span className="sr-only">Instagram</span>

                                <Instagram />
                            </a>
                        </li>

                        <li>
                            <a
                                href="https://github.com/elisabetecosta"
                                rel="noreferrer"
                                target="_blank"
                                className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                            >
                                <span className="sr-only">GitHub</span>

                                <Github />
                            </a>
                        </li>

                        <li>
                            <a
                                href="https://www.linkedin.com/in/elisabetecosta94/"
                                rel="noreferrer"
                                target="_blank"
                                className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                            >
                                <span className="sr-only">Linkedin</span>
                                <Linkedin />
                            </a>
                        </li>
                    </ul>

                    <span className="text-sm text-gray-700 mt-4 dark:text-gray-200">
                        © 2023 All rights reserved
                    </span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;