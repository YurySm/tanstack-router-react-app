import {createFileRoute} from '@tanstack/react-router';

type PageParams = {
    page: number
}

async function getToDo(id: string): Promise<{title: string}>{
    const data = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
    return data.json()
}
export const Route = createFileRoute('/todo/$todoid')({
    component: ToDoItem,
    loader: ({params}) => getToDo(params.todoid),
    validateSearch: (search: Record<string, unknown>): PageParams => {
        return {
            page: Number(search?.page ?? 1)
        }
    },
    errorComponent: () => <div>404</div>
})

function ToDoItem() {
    const {todoid} = Route.useParams()
    const {page} = Route.useSearch()
    const data = Route.useLoaderData()
    return (
        <div>
            <h1>ToDoItem {todoid}</h1>
            <h3>Page {page}</h3>
            <p>{data.title}</p>
        </div>
    )
}