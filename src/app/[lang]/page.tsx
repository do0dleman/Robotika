import { redirect } from 'next/navigation'

function Home() {
    redirect('/tasks')
    return (
        <div>Redirecting...</div>
    )
}
export default Home