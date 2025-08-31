import Link from "next/link";
import { type TaskModel } from "../models/TaskModel";
import H2 from "./mdx/H2";
import P from "./mdx/P";

function TaskCard({ taskInfo }: { taskInfo: TaskModel }) {
  return (
    <Link
      href={`tasks/${taskInfo.slug}`}
      className="transition-color mb-4 block h-fit max-w-3xl rounded-2xl bg-bgSecondary px-4 py-1 text-primary
      duration-300 hover:bg-bgTertiary hover:text-primary hover:no-underline"
    >
      <H2>{taskInfo.title}</H2>
      <P>{taskInfo.description}</P>
    </Link>
  );
}
export default TaskCard;
