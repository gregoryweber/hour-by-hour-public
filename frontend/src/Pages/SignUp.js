import React from "react";

import "./SignUp.css";
import { useState } from "react";

import environment from "../relayEnv";
import AddUserMutation from "../Mutations/AddUserMutation";

import { Redirect } from "react-router-dom";

function SignUp() {
    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const [haveSubmitted, setSubmit] = useState(false);

    const signUp = () => {
        AddUserMutation.commit(environment, username, email, password);
        setSubmit(true);
    };

    return (
        <div className='signup-body'>
            <h2>Sign Up</h2>
            <div className='auth-form'>
                <div className='form-control'>
                    <label htmlFor='username'>Username</label>
                    <input
                        type='text'
                        id='username'
                        onChange={(event) => {
                            setUsername(event.target.value);
                        }}
                    />
                </div>
                <div className='form-control'>
                    <label htmlFor='email'>Email</label>
                    <input
                        type='email'
                        id='email'
                        onChange={(event) => {
                            setEmail(event.target.value);
                        }}
                    />
                </div>
                <div className='form-control'>
                    <label htmlFor='password'>Password</label>
                    <input
                        type='password'
                        id='password'
                        onChange={(event) => {
                            setPassword(event.target.value);
                        }}
                    />
                </div>
                <div className='form-actions'>
                    <button type='submit' onClick={signUp}>
                        Submit
                    </button>
                    {haveSubmitted && <Redirect to='/login' />}
                </div>
            </div>
        </div>
    );
}

export default SignUp;
