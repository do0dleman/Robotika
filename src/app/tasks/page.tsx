import matter from 'gray-matter';
import fs from 'fs';
import path from 'path';
import getConfig from 'next/config';
import { TaskModel } from '../models/TaskModel';
import TaskCard from '../_components/TaskCard';
import H1 from '../_components/mdx/H1';

export default async function TaskList() {
    const { publicRuntimeConfig } = getConfig()
    const TASK_DIR = publicRuntimeConfig.taskDir

    const taskNames = fs.readdirSync(path.join(process.cwd(), TASK_DIR))

    const tasksData = taskNames.map(name => {
        const fileData = matter(fs.readFileSync(path.join(process.cwd(), TASK_DIR, name), {
            encoding: 'utf-8'
        }))
        fileData.data.slug = name.slice(0, name.length - 4)

        return fileData.data
    }) as TaskModel[]

    return (
        <div>
            <span className='text-center'><H1>Task List</H1></span>
            <div className='[&>a]:mx-auto'>
                {tasksData.map(taskData => <TaskCard taskInfo={taskData} key={taskData.slug} />)}
            </div>
        </div>
    );

}