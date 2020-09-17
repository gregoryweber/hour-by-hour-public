import React from "react";

import { fetchQuery } from "relay-runtime";
import graphql from "babel-plugin-relay/macro";
import environment from "../relayEnv";

import "./SignUp.css";
import { useState } from "react";

function Login(props) {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const handleQuery = () => {
        const query = graphql`
            query LoginQuery($email: String!, $password: String!) {
                login(email: $email, password: $password) {
                    user {
                        id
                        username
                        cards {
                            title
                            time
                            realTime
                            length
                            color
                        }
                    }
                    token
                    tokenExpiration
                }
            }
        `;

        const variables = {
            email: email,
            password: password,
        };

        fetchQuery(environment, query, variables).then((data) => {
            //console.log(data);
            //console.log("HERE IS TOKEN: " + data.login.token);
            localStorage.setItem("token", data.login.token);
            props.setData(data.login);
        });
    };

    return (
        <div className='signup-body'>
            <h2>Login</h2>
            <div className='auth-form'>
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
                    <button type='submit' onClick={handleQuery}>
                        Submit
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Login;
