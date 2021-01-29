import React, { useState } from 'react'
import { AppIcon } from '../atm.app-icon/app-icon'
import { Icon } from '../atm.icon/icon'
import { HBox } from '../mol.box/box.styled'
import { IconSize } from '../constants'
import { HeaderStyled } from './header.styled'
import { H1 } from '../atm.typography/typography.styled'
import { Menu } from '../mol.menu/menu'

export const Header = (props) => {
    const [toggleMenu, setToggleMenu] = useState(false);
    const openMenu = () => {
        setToggleMenu(!toggleMenu)
    }
    return (
        <>
            <HeaderStyled height={'medium'}>
                <HBox grow={true}>
                    <HBox.Item grow={true} onClick={openMenu} hAlign={'flexStart'}>
                        <Icon.Menu size={IconSize.Large} />
                    </HBox.Item>
                    <HBox.Item>
                        <AppIcon.Logo />
                    </HBox.Item>
                    <HBox.Item grow={true} hAlign={'flexEnd'}>
                        <Icon.Cart size={IconSize.Large} />
                        <HBox.Separator />
                        <Icon.Cart size={IconSize.Large} />
                    </HBox.Item>
                </HBox>
            </HeaderStyled>
            <Menu opened={toggleMenu} handleClick={openMenu} />
        </>
    );
}

export const HeaderNav = props => {
    return (
        <HeaderStyled height={'large'}>
            <HBox grow={true}>
                <HBox.Item>
                    <Icon.Profile size={IconSize.XLarge} />
                </HBox.Item>
                <HBox.Separator />
                <HBox.Item grow={true} hAlign={'flexStart'}>
                    <H1 light={true}>Olá, {props.children}</H1>
                </HBox.Item>
                <HBox.Item onClick={props.handleCloseClick}>
                    <Icon.Close size={IconSize.Large} />
                </HBox.Item>
            </HBox>
        </HeaderStyled>
    );
}