import React from 'react';
import { Button } from '../atm.button/button';
import { FormField } from '../atm.form-field/form-field';
import { ButtonFieldStyled } from './field-button.styled';

export const FieldButton = (props) => {
    return (
        <ButtonFieldStyled>
            <FormField placeholder={props.placeholder} flatBorder={true} />
            <Button children={props.children} kind={'secondary'} expanded={false} flatBorder={true} />
        </ButtonFieldStyled>
    );
}