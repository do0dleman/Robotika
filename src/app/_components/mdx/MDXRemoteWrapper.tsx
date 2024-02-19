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
import remarkGfm from 'remark-gfm'
import Pre from "~/app/_components/mdx/Pre"
import Code from "~/app/_components/mdx/Code"
import { visit } from 'unist-util-visit'
import A from './A'

function MDXRemoteWrapper({ source }: { source: string }) {
    return (
        <MDXRemote source={source}
            options={{
                mdxOptions: {
                    rehypePlugins: [
                        addRawCode,
                        // @ts-expect-error: Something wrong with type definitions    
                        rehypeHighlight,
                        addRawToPre
                    ],
                    // @ts-expect-error: Something wrong with type definitions
                    remarkPlugins: [remarkMdxImages, remarkGfm],
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
                a: A,
            })} />
    )
}
export default MDXRemoteWrapper

const addRawCode = () => (tree: any) => {
    visit(tree, (node) => {
        if (node?.type === "element" && node?.tagName === "pre") {
            const [codeEl] = node.children;

            if (codeEl.tagName !== "code") return;
            node.raw = codeEl.children?.[0]!.value;
            node.lang = ((codeEl.properties?.className?.[0]) as string).split('-')[1]
        }
    })
}

const addRawToPre = () => (tree: any) => {
    visit(tree, (node) => {
        if (node?.type === "element" && node?.tagName === "pre") {
            node.properties.raw = node.raw;
            node.properties.lang = node.lang;
        }
    })
}