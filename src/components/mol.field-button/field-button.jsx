import React, { useState } from 'react';
import { Button } from '../atm.button/button';
import { FormField } from '../atm.form-field/form-field';
import { ButtonFieldStyled } from './field-button.styled';

export const FieldButton = (props) => {
    const [input, setInput] = useState({});
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(input)
    }
    const handleInputChange = (event) => {
        setInput(inputs => ({ ...inputs, [event.target.name]: event.target.value }));
    }
    return (
        <form onSubmit={handleSubmit}>
            <ButtonFieldStyled>
                <FormField name={props.name} placeholder={props.placeholder} flatBorder={true} handleInputChange={handleInputChange} />
                <Button children={props.children} kind={'secondary'} expanded={false} flatBorder={true} submit={true} />
            </ButtonFieldStyled>
        </form>

    );
}