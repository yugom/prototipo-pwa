import React from 'react';
import {ButtonStyled} from './button.styled';

export const Button = (props) => {
    return(
        <ButtonStyled 
            buttonKind={props.kind}
            disabled={props.disabled}
            expansible={props.expansible}
            outline={props.outline}
        >
            {props.text}
        </ButtonStyled>
    );
}