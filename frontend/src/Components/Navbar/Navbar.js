import React from "react";
import { NavLink } from "react-router-dom";

import "./Navbar.css";

function Navbar(props) {
    return (
        <header className='main-header'>
            <div className='main-logo'>
                {!props.token && <NavLink to='/'>HourByHour</NavLink>}
                {props.token && <NavLink to='/main'>HourByHour</NavLink>}
            </div>
            <nav className='main-navbar'>
                <ul>
                    {!props.token && (
                        <li>
                            <NavLink to='/main'>Go To App</NavLink>
                        </li>
                    )}
                    {!props.token && (
                        <li>
                            <NavLink to='/login'>Login</NavLink>
                        </li>
                    )}
                    {!props.token && (
                        <li>
                            <NavLink to='/signup'>Signup</NavLink>
                        </li>
                    )}
                    {props.token && <li>{props.username}</li>}
                    {props.token && (
                        <NavLink to='/' onClick={props.signOut}>
                            Signout
                        </NavLink>
                    )}
                </ul>
            </nav>
        </header>
    );
}

export default Navbar;
