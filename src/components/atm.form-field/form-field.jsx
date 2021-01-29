import React from 'react';
import { InputLabel } from '../atm.typography/typography.styled';
import { InputFieldStyled } from './form-field.styled';

export const FormField = (props) => {
    const handleInputChange = (event) => {
        props.handleInputChange(event)
    }
    return (
        <>
            {
                props.label &&
                <InputLabel>{props.label}</InputLabel>
            }
            <InputFieldStyled placeholder={props.placeholder} flatBorder={props.flatBorder} onChange={handleInputChange} name={props.name} />
        </>

    );
}