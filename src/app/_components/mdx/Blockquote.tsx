import { CgInfo } from "react-icons/cg";

export default function Blockquote({ children }: { children?: React.ReactNode }) {
    return <blockquote className=" relative mdx-blockquote rounded-2xl italic pl-6 pb-6 py-4 pr-4 
    [&>p]:mb-0 mb-4 overflow-hidden before:absolute before:h-full 
    before:w-[.3em] before:bg-info before:top-0 before:left-0
    after:absolute after:w-full after:h-full after:bg-info 
    after:top-0 after:left-0 after:-z-10 after:opacity-10">
        <h4 className="flex gap-1 not-italic items-center text-2xl mb-2 text-info"><CgInfo />Note</h4>
        {children}
    </blockquote>
}