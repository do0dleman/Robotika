export default function Blockquote({ children }: { children?: React.ReactNode }) {
    return <blockquote className="mdx-blockquote rounded-2xl italic pl-8 py-4 pr-4 [&>p]:mb-0 mb-4 bg-bgSecondary">
        {children}
    </blockquote>
}