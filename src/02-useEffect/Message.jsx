
import { useState } from 'react';
import { useEffect } from 'react'

export const Message = () => {

    const [ coords, setCoords ] = useState({ x: 0, Y: 0 });

    useEffect( () => {
        
        const onMouseMove = ({ x, y }) => {
            setCoords({ x, y });
            
        }

        window.addEventListener( 'mousemove', onMouseMove );

        return () => {
            window.removeEventListener( 'mousemove', onMouseMove );
        }
    }, []);

    return (
        <>
            <h3>User already doesn't exist</h3>
            { JSON.stringify( coords )}
        </>
    )
}
