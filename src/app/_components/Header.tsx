import { getDictionary } from "dictionaries/dictionary";
import { Locale } from "i18n.config";
import Link from "next/link";
import { FaRobot, FaGithub } from "react-icons/fa";
import A from "./mdx/A";

export default async function Header({ params }: {
    params: { lang: Locale }
}) {

    const { header } = await getDictionary(params.lang)
    return (
        <header className="py-4 px-4 md:mb-16 bg-bgSecondary absolute w-full">
            <div className="container mx-auto xl:max-w-6xl flex justify-between items-center">
                <Link href={`/${params.lang}/tasks`} className="block">
                    <h1 className='text-2xl sm:text-3xl md:text-4xl text-h1 flex items-center gap-2 md:gap-4'><FaRobot />{header.title}</h1>
                </Link>
                <nav>
                    <ul className="flex gap-x-6 text-xl items-center">
                        <li><A noIcon href={`/${params.lang}/tasks`}>{header.tasks}</A></li>
                        <li className="text-4xl">
                            <Link
                                className="text-primary opacity-75 hover:text-primary 
                                hover:opacity-90 active:opacity-100 transition-all
                                duration-300"
                                target="_blank"
                                href="https://github.com/do0dleman/Robotika">
                                <FaGithub />
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );

}