export default function Ul({ children }: { children?: React.ReactNode }) {
    return <ul className="mdx-ul list-inside list-disc space-y-1 mb-4 [&>li]:marker:text-active">
        {children}
    </ul>
}