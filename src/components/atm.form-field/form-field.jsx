import React from 'react';
import { InputLabel } from '../atm.typography/typography.styled';
import { InputFieldStyled } from './form-field.styled';

export const FormField = (props) => {
    return (
        <>
            {
                props.label &&
                <InputLabel>{props.label}</InputLabel>
            }
            <InputFieldStyled placeholder={props.placeholder} onChange={props.onInputChange} name={props.name} />
        </>

    );
}