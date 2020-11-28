import React from 'react';
import { ButtonContent, ButtonStyled, SpinnerStyled } from './button.styled';
import { Spinner } from '../atm.spinner/spinner.styled';
import IconPath from '../../icons/ic_loading.svg';

export const Button = (props) => {
    return (
        <ButtonStyled
            buttonKind={props.kind}
            disabled={props.disabled}
            expanded={props.expanded}
            outline={props.outline}
            flatBorder={props.flatBorder}
        >
            <ButtonContent loading={props.loading}>
                {props.children}
            </ButtonContent>
            <SpinnerStyled loading={props.loading}>
                <Spinner img={IconPath} />
            </SpinnerStyled>
        </ButtonStyled>
    );
}