import getConfig from "next/config";
import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";
import MDXRemoteWrapper from "~/app/_components/mdx/MDXRemoteWrapper";
import Link from "next/link";
import { type Locale } from "i18n.config";

async function Task({ params }: { params: { lang: Locale; slug: string } }) {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { publicRuntimeConfig } = getConfig();
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
  const TASK_DIR = publicRuntimeConfig.taskDir as string;

  let file;
  try {
    file = await fs.readFile(
      path.join(
        process.cwd(),
        TASK_DIR,
        params.slug + `-${params.lang}` + ".mdx",
      ),
      {
        encoding: "utf-8",
      },
    );
  } catch {}

  if (file === undefined) {
    return (
      <div className="flex h-screen flex-col items-center justify-center">
        <h1 className="mb-2 text-4xl">{`Error! Task "${params.slug}" not found.`}</h1>
        <Link className="underline" href="/">
          Go to the home page
        </Link>
      </div>
    );
  }

  const fileData = matter(file);

  return <MDXRemoteWrapper source={fileData.content} />;
}
export default Task;
