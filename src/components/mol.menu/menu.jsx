import React from 'react'
import { MenuStyled, NavContainer, Overlay } from './menu.styled';
import {HeaderNav} from '../mol.header/header';

export const Menu = props => {
    return(
        <MenuStyled>
            <NavContainer>
                <HeaderNav children={'Pedro'}>     
                </HeaderNav>
            </NavContainer>
            <Overlay>

            </Overlay>
        </MenuStyled>
    );
}