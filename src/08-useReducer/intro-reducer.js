
// 1. Create our starting point
const initialState = [{
    id: 1,
    todo: 'Collecting the Soul Stone',
    done: false,
}];

// 2. A reducer is a pure function that returns a state and the action is how it will change the state.
const todoReducer = ( state = initialState, action = {} ) => {

    // 7. return the new state
    if ( action.type == '[TODO] add todo' ){
        return [ ...state, action.payload ] // always do it this way so as not to mutate state
    }

    return state;
}

// 3. Add to reducer a new variable
let todos = todoReducer();

// 4. We create a new todo to be added to the initialState
const newTodo = {
    id: 2,
    todo: 'Collecting the Power Stone',
    done: false,
}

// 5. Create the action
const addTodoAction = {
    type: '[TODO] add todo', // Type is a string containing the action to be performed within the action.
    payload: newTodo, // The payload contains the new payload
}

// 6. Here we are adding the new status
todos = todoReducer( todos, addTodoAction );

console.log({ state: todos });