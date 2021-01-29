import React from 'react';
import { useHistory } from 'react-router-dom';
import { H1 } from '../components/atm.typography/typography.styled'

export const Login = (props) => {
    const history = useHistory();

    const handleClick = () => {
        localStorage.setItem('token', 'logado')
        return history.replace('/')
    }

    return (
        <div>
            <H1>Login</H1>
            <button onClick={(handleClick)}>Logar</button>
        </div>
    );
}