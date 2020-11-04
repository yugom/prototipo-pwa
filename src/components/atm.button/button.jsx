import React from 'react';
import {ButtonContent, ButtonStyled, SpinnerStyled} from './button.styled';
import {Spinner} from '../atm.spinner/spinner.styled';
import IconPath from '../../images/ic_loading.svg';

export const Button = (props) => {
    return(
        <ButtonStyled 
            buttonKind={props.kind}
            disabled={props.disabled}
            expanded={props.expanded}
            outline={props.outline}
        >
            <ButtonContent loading={props.loading}>
                {props.text}
            </ButtonContent>
            <SpinnerStyled loading={props.loading}>
                <Spinner img={IconPath}/>
            </SpinnerStyled>
        </ButtonStyled>
    );
}