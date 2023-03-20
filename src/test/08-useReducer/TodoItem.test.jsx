import { fireEvent, render, screen } from '@testing-library/react';
import { TodoItem } from '../../08-useReducer/TodoItem';

describe('Pruebas en el TodoItem', () => {

    const todo = {
        id: 1,
        description: 'Soul Stone',
        done: false
    }

    const onDeleteTodoMock = jest.fn();
    const onToggleTodoMock = jest.fn();

    beforeEach( () => jest.clearAllMocks() );

    test('should display the Pending Todo to Complete', () => {

        render( <TodoItem 
            todo={ todo } 
            onDeleteTodo={ onDeleteTodoMock } 
            onToggleTodo={ onToggleTodoMock }  
            /> );

        const liElement = screen.getByRole('listitem');
        expect( liElement.className ).toBe('list-group-item d-flex justify-content-between');

        const spanElement = screen.getByLabelText('span');
        expect( spanElement.className ).toContain('align-self-center');
        expect( spanElement.className ).not.toContain('text-decoration-line-through');

        // screen.debug()
    });

    test('should display Completed Todo', () => {

        todo.done = true;

        render( <TodoItem 
            todo={ todo } 
            onDeleteTodo={ onDeleteTodoMock } 
            onToggleTodo={ onToggleTodoMock }  
            /> );

        const spanElement = screen.getByLabelText('span');
        expect( spanElement.className ).toContain('text-decoration-line-through');

    });

    test('span should call to ToggleTodo when clicked', () => {

        render( <TodoItem 
            todo={ todo } 
            onDeleteTodo={ onDeleteTodoMock } 
            onToggleTodo={ onToggleTodoMock }  
            /> );

        const spanElement = screen.getByLabelText('span');
        fireEvent.click( spanElement );

        expect( onToggleTodoMock ).toHaveBeenCalledWith( todo.id );
    });

    test('button should call to deleteTodo', () => {

        render( <TodoItem 
            todo={ todo } 
            onDeleteTodo={ onDeleteTodoMock } 
            onToggleTodo={ onToggleTodoMock }  
            /> );

        const deleteButton = screen.getByLabelText('span-delete');
        fireEvent.click( deleteButton );

        expect( onDeleteTodoMock ).toHaveBeenCalledWith( todo.id );
    });



});