import {render, screen} from '@testing-library/react';
import { UserContext } from '../../09-useContext/context/UserContext';
import { HomePage } from '../../09-useContext/HomePage';



describe('Test on HomePage', () => {

    const user = {
        id: 1,
        name: 'Enoc'
    };

    test('should display component without user', () => {

        render(
            <UserContext.Provider value={{ user: null }}>
                <HomePage />
            </UserContext.Provider>
        );

        const preTag = screen.getByLabelText('pre');
        expect( preTag.innerHTML ).toBe( 'null' );
        // screen.debug()
    });

    test('should display component with the user', () => {

        render(
            <UserContext.Provider value={{ user: user }}>
                <HomePage />
            </UserContext.Provider>
        );

        const preTag = screen.getByLabelText('pre');
        expect( preTag.innerHTML ).toContain( user.name );
        expect( preTag.innerHTML ).toContain( user.id.toString() );
        // expect( preTag.innerHTML ).toContain( `${user.id}` ); Can be in other ways
        // screen.debug()
    });

});