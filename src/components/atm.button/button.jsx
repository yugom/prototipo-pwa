import React from 'react';
import {ButtonStyled} from './button.styled';

export const Button = (props) => {
    return(
        <ButtonStyled buttonKind={props.kind}>{props.text}</ButtonStyled>
    );
}