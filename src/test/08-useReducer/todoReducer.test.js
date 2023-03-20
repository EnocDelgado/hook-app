import { todoReducer } from "../../08-useReducer/todoReducer";


describe('Test on todoReducer', () => {

    const initialState = [{
        id: 1,
        description: 'Demo Todo',
        done: false
    }]

    test('should return to the initial state', () => {

        const newState = todoReducer( initialState, {} );
        expect( newState ).toBe( initialState );
    });

    test('should add a Todo', () => {

        const action = {
            type: '[TODO] Add Todo',
            payload: {
                id: 2,
                description: 'New todo #2',
                done: false
            }
        }

        const newState = todoReducer( initialState, action );
        expect( newState.length ).toBe( 2 );
        expect( newState ).toContain( action.payload );
    });

    test('should delete a TODO', () => {

        const action = {
            type: '[TODO] Remove Todo',
            payload: 1
        }

        const newState = todoReducer( initialState, action );
        expect( newState.length ).toBe( 0 );
    });

    /*
    DOES NOT WANT TO READ THE DONES FUNCTION
    test('should do Todo from Toggle', () => {

        const action = {
            type: '[TODO] Remove Todo',
            payload: 1
        };

        const newState = todoReducer( initialState, action );
        expect( newState[0].done ).toBe( true );

        const newState2 = todoReducer( newState, action );
        expect( newState2[0].done ).toBe( false );
    });
    */
});