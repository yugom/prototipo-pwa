import React, { useEffect, useState } from 'react'
import { NavContainer, NavListContainer, Overlay } from './menu.styled';
import { HeaderNav } from '../mol.header/header';
import { H3 } from '../atm.typography/typography.styled';
import { HBox } from '../mol.box/box.styled';
import { Link } from 'react-router-dom';

export const Menu = props => {
    const [menuItems, setMenuItems] = useState([]);
    useEffect(() => {
        setMenuItems([{
            key: 'home',
            path: '/',
            Title: 'Home'
        }, {
            key: 'about',
            path: '/about',
            Title: 'About'
        }])
    }, [])
    return (
        <>
            <NavContainer opened={props.opened}>
                <HeaderNav children={'Pedro'} handleCloseClick={props.handleClick} />
                <NavListContainer>
                    {menuItems.map(item => {
                        return (
                            <Link to={item.path} key={item.key}>
                                <HBox.Item hAlign={'flexStart'} onClick={props.handleClick}>
                                    <H3>{item.Title}</H3>
                                </HBox.Item>
                            </Link>
                        )
                    })}
                </NavListContainer>
            </NavContainer>
            <Overlay opened={props.opened} onClick={props.handleClick} />
        </>
    );
}