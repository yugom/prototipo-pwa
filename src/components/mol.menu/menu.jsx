import React from 'react'
import { NavContainer, Overlay } from './menu.styled';
import { HeaderNav } from '../mol.header/header';

export const Menu = props => {
    return (
        <>
            <NavContainer opened={props.opened}>
                <HeaderNav children={'Pedro'} handleCloseClick={props.handleClick} />
            </NavContainer>
            <Overlay opened={props.opened} onClick={props.handleClick} />
        </>
    );
}