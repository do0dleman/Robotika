import CopyButton from "../CopyButton";

type PreProps = {
    children?: React.ReactNode,
    raw?: string,
    lang?: string,
}

export default function Pre({ children, raw, lang }: PreProps) {
    return (
        <div className="mb-8 pb-4 bg-bgSecondary rounded-2xl">
            {raw ? <div className="pt-2 px-4 pb-2 text-2xl border-primary bg-bgTertiary 
            flex justify-between items-center rounded-t-2xl">
                <h3 className="text-h3 font-bold">{lang}</h3>
                <CopyButton copyText={raw} completeText="Copied" />
            </div> : <></>}
            <div className="px-4 pt-4">
                <pre className="mdx-pre overflow-y-auto max-h-[50vh] block [&>code]:bg-bgSecondary">
                    {children}
                </pre>
            </div>
        </div>
    )
}