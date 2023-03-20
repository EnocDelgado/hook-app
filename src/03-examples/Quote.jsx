import { useState } from "react";
import { useLayoutEffect,  useRef } from "react"

export const Quote = ({ author, quote }) => {

    const pRef =  useRef();
    const [ boxSize, setBoxSize] = useState({ width: 0, height: 0 });

    useLayoutEffect( () => { // to obtain the finalization of the box
        const { height, width } = pRef.current.getBoundingClientRect();
        setBoxSize({ height, width });

    }, [quote]);

    return (
        <>
            <blockquote 
                className="blockquote text-end"
                style={{ display: 'flex' }}    
            >
                <p ref={ pRef } className="mb-1">{ quote }</p>
                <footer className="blockquote-footer">{ author }</footer>
            </blockquote>

        </>
    )
}
