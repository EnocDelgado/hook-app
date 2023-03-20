
import { useEffect } from 'react';
import { useState } from 'react'
import { useForm } from '../hooks/useForm';
import { Message } from './Message';

export const FormWithCustomHooks = () => {

    const { formState, onInputChage, onResetForm, username, email, password } = useForm({
        username: '',
        email: '',
        password: '',
    });

    // const { username, email, password } = formState;
    

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
            <h1>CustomHook Form</h1>
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

            <input 
                type="password" 
                className="form-control mt-2"
                placeholder="password"
                name="password" 
                value={ password }
                onChange={ onInputChage }   
            />

            <button onClick={ onResetForm } className="btn btn-primary mt-2">Delete</button>
        </>
    )
}
