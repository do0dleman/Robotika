import Link from "next/link"
import { TaskModel } from "../models/TaskModel"
import H2 from "./mdx/H2"
import P from "./mdx/P"

function TaskCard({ taskInfo }: { taskInfo: TaskModel }) {
    return (
        <Link href={`tasks/${taskInfo.slug}`} className="border border-primary px-4 rounded-2xl mb-4 max-w-3xl block
        text-primary hover:text-primary hover:no-underline hover:-translate-y-1.5 transition-transform duration-300">
            <H2>{taskInfo.title}</H2>
            <P>{taskInfo.description}</P>
        </Link>
    )
}
export default TaskCard