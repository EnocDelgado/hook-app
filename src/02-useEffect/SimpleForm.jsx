
import { useEffect } from 'react';
import { useState } from 'react'
import { Message } from './Message';

export const SimpleForm = () => {

    const [ formState, setFormState ] =  useState({
        username: 'name',
        email: 'user@example.com'
    });

    const { username, email } = formState;

    const onInputChage = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [ name ]: value // This is the new value
        })
    }

    // When using the use effect you also have to tell it which dependency it will execute
    // It is recommended to make an effect for each item to be called up.
    useEffect( () => {
        // console.log('useEffect called');
    }, []); // It will start once

    useEffect( () => {
        // console.log('formState change!');
    }, [formState]); // Will start when name is changed

    useEffect( () => {
        // console.log('email change!');
    }, [email]); // Will start when email is changed


    return (
        <>
            <h1>Simple Form</h1>
            <hr />

            <input 
                type="text" 
                className="form-control"
                placeholder="Username"
                name="username"
                value={ username }
                onChange={ onInputChage }  
            />

            <input 
                type="email" 
                className="form-control mt-2"
                placeholder="email"
                name="email" 
                value={ email }
                onChange={ onInputChage }   
            />

            {
                ( username === 'strider2' ) && <Message />
            }
        </>
    )
}
