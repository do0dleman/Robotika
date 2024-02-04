import Link from "next/link";
import { FaRobot } from "react-icons/fa";

export default async function Header() {
    return (
        <header className="py-4 px-4 border-b border-primary mb-16">
            <div className="container mx-auto xl:max-w-6xl flex justify-between items-center">
                <Link href='/' className="block">
                    <h1 className='text-3xl md:text-4xl text-h1 flex gap-4'><FaRobot /> Robotics </h1>
                </Link>
                <nav>
                    <ul className="flex gap-x-6 text-xl">
                        <li><Link className="text-link" href='/'>Home</Link></li>
                        <li><Link href='/tasks'>Tasks</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );

}