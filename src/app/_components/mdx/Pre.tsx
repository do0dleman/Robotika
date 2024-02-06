export default function Pre({ children }: { children?: React.ReactNode }) {
    return <div className="mb-8 p-4 bg-bgSecondary rounded-2xl">
        <pre className="mdx-pre max-h-[50vh] block overflow-y-auto [&>code]:bg-bgSecondary">
            {children}
        </pre>
    </div>
}