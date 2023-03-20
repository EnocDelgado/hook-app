import { fireEvent, render, screen } from "@testing-library/react";
import { UserContext } from "../../09-useContext/context/UserContext";
import { LoginPage } from "../../09-useContext/LoginPage";


describe('Test on LoginPage', () => {

    test('should display component without user', () => {
    
        render(
            <UserContext.Provider value={{ user: null}}>
            <LoginPage />
            </UserContext.Provider>
        );

        const preTag = screen.getByLabelText('pre');
        expect( preTag.innerHTML ).toBe('null');

        // screen.debug()
    });

    test('should call to setUser when button is clicked', () => {
        
        const setUserMock = jest.fn();

        render(
            <UserContext.Provider value={{ user: null, setUser: setUserMock }}>
            <LoginPage />
            </UserContext.Provider>
        );

        const button = screen.getByRole('button');
        fireEvent.click( button );
        
        expect( setUserMock ).toHaveBeenCalledWith({"email": "emplaple@ala.com", "id": 123, "name": "Juan"});

    
    });

});