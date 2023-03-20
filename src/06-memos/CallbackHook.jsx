import { useEffect } from "react";
import { useState, useCallback } from "react"
import { ShowIncrement } from "./ShowIncrement";


export const CallbackHook = () => {

    const [ counter, setCounter ] = useState( 10 );

    const incrementFather = useCallback(
        (value) => {
            setCounter( (c) => c + value ); // c = counter
        },
        [],
    );

    // oyher that not be increment
    useEffect( () => {
    //     incrementFather();
    }, [incrementFather])

    // It is the same as the code above but does not call the component more than once. 
    // const incrementFather = () => {
    //     setCounter( counter + 1 );
    // }

    return (
        <>
            <h1>useCallback hook: { counter } </h1>
            <hr />


            <ShowIncrement increment={ incrementFather } />
        </>
    )
}
