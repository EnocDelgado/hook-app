import { TodoItem } from "./TodoItem"


export const TodoList = ({ todos = [], onDeleteTodo, onToggleTodo }) => {

    return (
        <ul className="list-group">
            {
                todos.map( todo => (
                    // You have to create an TodoItem, which are the descriptions themselves.
                    <TodoItem 
                        key={ todo.id } 
                        todo={ todo } 
                        onDeleteTodo={ onDeleteTodo } 
                        onToggleTodo={ onToggleTodo }
                    />
                ))
            }
        </ul>
    )
}
