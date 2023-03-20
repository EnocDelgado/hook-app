import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { MainApp } from '../../09-useContext/MainApp';


describe('Test on MainApp', () => {

    test('should display the HomePage', () => {

        // We use the MemoryRouter as BrowserProvider, since the Browser acts in the browser and Memory in testing.
        
        render(
            <MemoryRouter>
                <MainApp />
            </MemoryRouter>
        );

        expect( screen.getByText('HomePage') ).toBeTruthy();
    });

    test('should display the LoginPage', () => {

        // We use the MemoryRouter as BrowserProvider, since the Browser acts in the browser and Memory in testing.
        
        render(
            <MemoryRouter initialEntries={['/login']}>
                <MainApp />
            </MemoryRouter>
        );

        expect( screen.getByText('LoginPage') ).toBeTruthy();
    });

});