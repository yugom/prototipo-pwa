import React, { useEffect, useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import { AppIcon } from '../atm.app-icon/app-icon'
import { Icon } from '../atm.icon/icon'
import { HBox } from '../mol.box/box.styled'
import { IconSize } from '../constants'
import { HeaderStyled } from './header.styled'
import { Menu } from '../mol.menu/menu'

export const Header = (props) => {
    const history = useHistory();
    const location = useLocation();
    const [toggleMenu, setToggleMenu] = useState(false);
    const openMenu = () => {
        setToggleMenu(!toggleMenu)
    }

    const goToLogin = () => {
        history.replace('/login')
    }

    useEffect(() => {
        setToggleMenu(false);
    }, [location]);

    return (
        <>
            <HeaderStyled height={'medium'}>
                <HBox grow={true}>
                    <HBox.Item grow={true} hAlign={'flexStart'} onClick={openMenu} >
                        <Icon.Menu size={IconSize.Large} />
                    </HBox.Item>
                    <HBox.Item onClick={() => history.push('/')} >
                        <AppIcon.Logo />
                    </HBox.Item>
                    <HBox.Item grow={true} hAlign={'flexEnd'}>
                        <Icon.Account size={IconSize.Large} />
                        <HBox.Separator />
                        <Icon.Cart size={IconSize.Large} />
                    </HBox.Item>
                </HBox>
            </HeaderStyled>
            <Menu auth={props.auth} opened={toggleMenu} onClose={openMenu} funcToLogin={goToLogin} />
        </>
    );
}