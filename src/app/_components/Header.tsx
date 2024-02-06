import { getDictionary } from "dictionaries/dictionary";
import { Locale } from "i18n.config";
import Link from "next/link";
import { FaRobot } from "react-icons/fa";

export default async function Header({ params }: {
    params: { lang: Locale }
}) {

    const { header } = await getDictionary(params.lang)
    return (
        <header className="py-4 px-4 border-b border-primary mb-12 md:mb-16">
            <div className="container mx-auto xl:max-w-6xl flex justify-between items-center">
                <Link href={`/${params.lang}/tasks`} className="block">
                    <h1 className='text-3xl md:text-4xl text-h1 flex gap-4'><FaRobot />{header.title}</h1>
                </Link>
                <nav>
                    <ul className="flex gap-x-6 text-xl">
                        <li><Link href={`/${params.lang}/tasks`}>{header.tasks}</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );

}