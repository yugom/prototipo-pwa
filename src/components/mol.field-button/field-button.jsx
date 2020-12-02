import React from 'react';
import { Button } from '../atm.button/button';
import { FormField } from '../atm.form-field/form-field';
import { ButtonFieldStyled } from './field-button.styled';

export const FieldButton = (props) => {
    const handleSubmit = (event) => {
        props.handleSubmit(event);
    }
    const handleInputChange = (event) => {
        props.handleInputChange(event);
    }
    return (
        <form onSubmit={handleSubmit}>
            <ButtonFieldStyled>
                <FormField name={props.name} placeholder={props.placeholder} flatBorder={true} handleInputChange={handleInputChange} />
                <Button children={props.children} kind={props.kind} expanded={false} flatBorder={true} submit={true} />
            </ButtonFieldStyled>
        </form>

    );
}