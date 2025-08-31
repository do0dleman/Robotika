import { getDictionary } from "dictionaries/dictionary";
import { type Locale } from "i18n.config";
import Link from "next/link";
import { FaRobot, FaGithub } from "react-icons/fa";
import A from "./mdx/A";

export default async function Header({ params }: { params: { lang: Locale } }) {
  const { header } = await getDictionary(params.lang);
  return (
    <header className="absolute w-full bg-bgSecondary px-4 py-4 md:mb-16">
      <div className="container mx-auto flex items-center justify-between xl:max-w-6xl">
        <Link href={`/${params.lang}/tasks`} className="block">
          <h1 className="flex items-center gap-2 text-2xl text-h1 sm:text-3xl md:gap-4 md:text-4xl">
            <FaRobot />
            {header.title}
          </h1>
        </Link>
        <nav>
          <ul className="flex items-center gap-x-6 text-xl">
            <li>
              <A noIcon href={`/${params.lang}/tasks`}>
                {header.tasks}
              </A>
            </li>
            <li className="text-4xl">
              <Link
                className="text-primary opacity-75 transition-all 
                                duration-300 hover:text-primary hover:opacity-90
                                active:opacity-100"
                target="_blank"
                href="https://github.com/do0dleman/Robotika"
              >
                <FaGithub />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
