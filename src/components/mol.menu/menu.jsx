import React from 'react'
import { MenuStyled, NavContainer, Overlay } from './menu.styled';
import {HeaderNav} from '../mol.header/header';

export const Menu = props => {
    return(
        <MenuStyled>
            <NavContainer opened={props.opened}>
                <HeaderNav children={'Pedro'}/> 
            </NavContainer>
            <Overlay opened={props.opened} onClick={props.handleClick}/>
        </MenuStyled>
    );
}