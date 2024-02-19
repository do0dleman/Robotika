export default function P({ children }: { children?: React.ReactNode }) {
    return <p className="mdx-p mb-4 [&>img]:mx-auto">{children}</p>
}