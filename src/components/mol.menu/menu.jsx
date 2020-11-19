import React from 'react'
import { MenuStyled, NavContainer, Overlay } from './menu.styled';
import {HeaderNav} from '../mol.header/header';

export const Menu = props => {
    return(
        <MenuStyled opened={props.opened}>
            <NavContainer>
                <HeaderNav children={'Pedro'}/> 
            </NavContainer>
            <Overlay onClick={props.teste}/>
        </MenuStyled>
    );
}