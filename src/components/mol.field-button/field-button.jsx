import React from 'react';
import { Button } from '../atm.button/button';
import { FormField } from '../atm.form-field/form-field';
import { ButtonFieldStyled } from './field-button.styled';

export const FieldButton = (props) => {
    return (
        <form onSubmit={props.onSubmit}>
            <ButtonFieldStyled>
                <FormField name={props.name} placeholder={props.placeholder} flatBorder={true} onInputChange={props.onInputChange} />
                <Button children={props.children} kind={props.kind} expanded={false} flatBorder={true} submit={true} />
            </ButtonFieldStyled>
        </form>

    );
}