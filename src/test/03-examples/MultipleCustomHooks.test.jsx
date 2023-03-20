import { fireEvent, render, screen } from '@testing-library/react'
import { MultipleCustomHooks } from "../../3-examples";
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';

jest.mock('../../hooks/useFetch');
jest.mock('../../hooks/useCounter');


describe('Test on <MultipleCustomHooks />', () => {

    const mockIncrement = jest.fn();

    useCounter.mockReturnValue({
        counter: 1,
        increment: mockIncrement
    });

    beforeEach( () => {

        // Clear the mocks that have already been called up
        jest.clearAllMocks();
    })

    test('should display the default component', () => {

        useFetch.mockReturnValue({
            data: null,
            isLoading: true,
            hasError: null
        });

        render( <MultipleCustomHooks /> );

        expect( screen.getByText('Loading...') );
        expect( screen.getByText('BreakingBad Quotes') );

        const nextButton = screen.getByRole('button', { name: 'Next quote' });
        expect( nextButton.disabled ).toBeTruthy();
        
        // screen.debug();
    });

    test('should display a quote', () => {

        useFetch.mockReturnValue({
            data: [{ author: 'Enoc', quote: 'Hello World' }],
            isLoading: false,
            hasError: null
        });

        render( <MultipleCustomHooks /> );
        expect( screen.getByText('Hello World') ).toBeTruthy();
        expect( screen.getByText('Enoc') ).toBeTruthy();

        const nextButton = screen.getByRole('button', { name: 'Next quote' });
        expect( nextButton.disabled ).toBeFalsy();
    });

    test('should to call the function to increment', () => {

        useFetch.mockReturnValue({
            data: [{ author: 'Enoc', quote: 'Hello World' }],
            isLoading: false,
            hasError: null
        });

        render( <MultipleCustomHooks /> );
        const nextButton = screen.getByRole('button', { name: 'Next quote'});
        fireEvent.click( nextButton );

        expect( mockIncrement ).toHaveBeenCalled();
    });
});