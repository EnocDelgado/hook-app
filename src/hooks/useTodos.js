import React, { useEffect, useReducer } from 'react'
import { todoReducer } from "../08-useReducer/todoReducer"

const init = () => {
    // Return all saved objects on the local storage, if doen't exist create a new one empty array.
    return JSON.parse(localStorage.getItem('todos') ) || [];
}

export const useTodos = ( initialState = [] ) => {

    const [todos, dispatch] = useReducer( todoReducer, initialState, init );

    useEffect( () => {
        localStorage.setItem('todos', JSON.stringify( todos ) ); // Stringify allow to storage  the notes like an array
    }, [todos])

    const handleNewTodo = ( todo ) => {
        
        const action = {
            type: '[TODO] Add Todo',
            payload: todo,
        }

        dispatch( action );
    }

    const handelDeleteTodo = ( id ) => {
        dispatch({
            type: '[TODO] Remove Todo',
            payload: id,
        });
    }

    const handelToggleTodo = ( id ) => {
        dispatch({
            type: '[TODO] Toggle Todo',
            payload: id,
        });
    }

    return {
        todos,
        todosCount: todos.length, 
        pendingTodosCount: todos.filter( todo => !todo.done ).length,
        handleNewTodo,
        handelDeleteTodo,
        handelToggleTodo,
    }
}
