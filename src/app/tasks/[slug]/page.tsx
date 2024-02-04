import getConfig from "next/config"
import fs from "fs/promises"
import path from "path"
import matter from "gray-matter"
import MDXRemoteWrapper from "~/app/_components/mdx/MDXRemoteWrapper"
import Link from "next/link"

async function Task({ params }: { params: { slug: string } }) {
    const { publicRuntimeConfig } = getConfig()
    const TASK_DIR = publicRuntimeConfig.taskDir

    let file
    try {
        file = await fs.readFile(path.join(process.cwd(), TASK_DIR, params.slug + '.mdx'), {
            encoding: "utf-8"
        })
    } catch { }

    if (file === undefined) {
        return (
            <div className="h-screen flex flex-col items-center justify-center">
                <h1 className="text-4xl mb-2">{`Error! Task "${params.slug}" not found.`}</h1>
                <Link className="underline" href='/'>Go to the home page</Link>
            </div>
        )
    }

    const fileData = matter(file)


    return (
        <MDXRemoteWrapper source={fileData.content} />
    )
}
export default Task