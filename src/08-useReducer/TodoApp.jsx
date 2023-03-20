import { TodoAdd } from "./TodoAdd";
import { TodoList } from "./TodoList";
import { useTodos } from "../hooks/useTodos";

const initialState = []


export const TodoApp = () => {

    // Create a useTodo that will contain all TodoApp functions.
    const { todos, todosCount, pendingTodosCount, handelDeleteTodo, handelToggleTodo, handleNewTodo  } = useTodos( initialState );


    return (
        <>
            <h1>TodoApp: { todosCount }, <small>Pending: { pendingTodosCount  }</small> </h1>
            <hr />

            <div className="row">
                <div className="col-7">
                    {/* Create a component named TodoList */}
                    <TodoList 
                        todos={ todos } 
                        onDeleteTodo={ handelDeleteTodo }
                        onToggleTodo={ handelToggleTodo } 
                    />
                </div>

                <div className="col-5">
                    <h4>Aadd TODO</h4>
                    <hr />
                    {/* Create a new TODO, do the submit and draw on the screen called onNewTodo */}
                    {/* This must have { id: newDate()..., description: '', done: true}, in case we call handleNewTodo */}
                    <TodoAdd onNewTodo={ handleNewTodo } />
                </div>
            </div>
        </>
    )
}
