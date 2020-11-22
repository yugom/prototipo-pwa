import React from 'react';
import { H1 } from '../components/atm.typography/typography.styled'

export const Login = (props) => {

    return (
        <div>
            <H1>Login</H1>
            <button onClick={props.handleClick}>Logar</button>
        </div>
    );
}