import { createFileRoute, Link } from '@tanstack/react-router';

export const Route = createFileRoute('/todo/')({
    component: ToDoIndex,
})

function ToDoIndex() {
    return (
        <div>
            <h3>ToDoIndex</h3>
            {/*<Link to={'/todo/1'}>ToDo 1</Link> */}
            <Link to={'/todo/$todoid'} params={{ todoid: "1" }} search={{ page: 1 }}>ToDo 1</Link>
        </div>
    )
}