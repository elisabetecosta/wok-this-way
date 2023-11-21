import { Github, Instagram, Linkedin } from "lucide-react";


const Footer: React.FC = () => {

    return (
        <footer className="bg-white transition dark:bg-gray-900">
            <div className="mx-auto max-w-screen-xl px-4 pb-8 sm:px-6 lg:px-8">
                <div className="flex justify-between border-t border-gray-100 pt-8 dark:border-gray-800">
                    <span className="text-sm text-gray-700 justify-center dark:text-gray-200">
                        © 2023 All rights reserved
                    </span>

                    <ul className="flex justify-center gap-4">

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
                </div>
            </div>
        </footer>
    );
};

export default Footer;