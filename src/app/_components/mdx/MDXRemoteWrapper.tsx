import { MDXRemote } from 'next-mdx-remote/rsc'
import Blockquote from '~/app/_components/mdx/Blockquote'
import H1 from '~/app/_components/mdx/H1'
import H2 from '~/app/_components/mdx/H2'
import H3 from '~/app/_components/mdx/H3'
import P from '~/app/_components/mdx/P'
import Strong from '~/app/_components/mdx/Strong'
import Ul from '~/app/_components/mdx/Ul'
import rehypeHighlight from 'rehype-highlight';
import Image from "next/image"
import remarkMdxImages from 'remark-mdx-images'
import Pre from "~/app/_components/mdx/Pre"
import Code from "~/app/_components/mdx/Code"

function MDXRemoteWrapper({ source }: { source: string }) {
    return (
        <MDXRemote source={source}
            options={{
                mdxOptions: {
                    // @ts-expect-error: Something wrong with type definitions
                    rehypePlugins: [rehypeHighlight],
                    // @ts-expect-error: Something wrong with type definitions
                    remarkPlugins: [remarkMdxImages],
                    format: 'mdx',
                }
            }}
            components={({
                h1: H1,
                h2: H2,
                h3: H3,
                p: P,
                strong: Strong,
                blockquote: Blockquote,
                pre: Pre,
                ul: Ul,
                Image: Image,
                code: Code,
            })} />
    )
}
export default MDXRemoteWrapper