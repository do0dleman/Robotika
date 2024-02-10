import matter from 'gray-matter';
import fs from 'fs';
import path from 'path';
import getConfig from 'next/config';
import { TaskModel } from '../../models/TaskModel';
import TaskCard from '../../_components/TaskCard';
import H1 from '../../_components/mdx/H1';
import { Locale } from 'i18n.config';
import { getDictionary } from 'dictionaries/dictionary';

export default async function TaskList({ params }: {
    params: { lang: Locale }
}) {
    const { publicRuntimeConfig } = getConfig()
    const TASK_DIR = publicRuntimeConfig.taskDir

    let taskNames = fs.readdirSync(path.join(process.cwd(), TASK_DIR))

    const getTaskLocale = (taskName: string) => taskName.slice(-6).slice(0, 2)
    taskNames = taskNames.filter(name => getTaskLocale(name) === params.lang)

    const tasksData = taskNames.map(name => {
        const fileData = matter(fs.readFileSync(path.join(process.cwd(), TASK_DIR, name), {
            encoding: 'utf-8'
        }))
        fileData.data.slug = name.slice(0, name.length - 7)

        return fileData.data
    }) as TaskModel[]

    tasksData.sort((a, b) => a.title.localeCompare(b.title))

    const { taskList } = await getDictionary(params.lang)

    return (
        <div>
            <span className='text-center'><H1>{taskList.title}</H1></span>
            <div className='[&>a]:mx-auto'>
                {tasksData.map(taskData => <TaskCard taskInfo={taskData} key={taskData.slug} />)}
            </div>
        </div>
    );

}