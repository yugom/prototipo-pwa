import React from 'react'
import { NavContainer, NavListContainer, Overlay } from './menu.styled';
import { HeaderNav } from '../mol.header/header';
import { H3 } from '../atm.typography/typography.styled';
import { HBox } from '../mol.box/box.styled';
import { Link } from 'react-router-dom';

export const Menu = props => {
    return (
        <>
            <NavContainer opened={props.opened}>
                <HeaderNav children={'Pedro'} handleCloseClick={props.handleClick} />
                <NavListContainer>
                    <Link to={'/'}>
                        <HBox.Item hAlign={'flexStart'} onClick={props.handleClick}>
                            <H3>Home</H3>
                        </HBox.Item>
                    </Link>
                    <Link to={'/about'}>
                        <HBox.Item hAlign={'flexStart'} onClick={props.handleClick}>
                            <H3>About</H3>
                        </HBox.Item>
                    </Link>
                </NavListContainer>
            </NavContainer>
            <Overlay opened={props.opened} onClick={props.handleClick} />
        </>
    );
}