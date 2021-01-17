import React, { useEffect, useState } from 'react'
import { NavHeader, NavContainer, NavListContainer, NavAccountLinks, Overlay } from './menu.styled';
import { Button } from '../atm.button/button';
import { H2, H3 } from '../atm.typography/typography.styled';
import { HBox } from '../mol.box/box.styled';
import { Link } from 'react-router-dom';
import { Icon } from '../atm.icon/icon';
import { IconSize } from '../constants';
import { H1 } from '../atm.typography/typography.styled';

export const Menu = props => {
    const [menuItems, setMenuItems] = useState([]);
    useEffect(() => {
        setMenuItems([
            {
                section: '',
                items: [
                    {
                        key: 'home',
                        path: '/',
                        title: 'Home'
                    },
                    {
                        key: 'about',
                        path: '/about',
                        title: 'About'
                    },
                    {
                        key: 'cachorros',
                        path: '/cachorros',
                        title: 'Cachorros'
                    },
                    {
                        key: 'gatos',
                        path: '/gatos',
                        title: 'Gatos'
                    },
                    {
                        key: 'outros-pets',
                        path: '/outros-pets',
                        title: 'Outros Pets'
                    },
                    {
                        key: 'casa-jardim',
                        path: '/casa-jardim',
                        title: 'Casa e Jardim'
                    }]
            },
            {
                section: 'Outros serviços',
                items: [
                    {
                        key: 'atendimentoCobasi',
                        path: '/atendimento-cobasi',
                        title: 'Atendimento Cobasi'
                    }, {
                        key: 'retirarLoja',
                        path: '/retirar-em-loja',
                        title: 'Retirar em Loja'
                    }]
            }
        ])
    }, [])

    const renderMenu = (menuLinks) => {
        return menuLinks.map(item =>
            <>
                {
                    item.section !== '' &&
                    <H2>
                        {item.section}
                    </H2>
                }
                <>
                    {/* {console.log(item.items.map(menu => menu.title))} */}
                    {item.items.map(menuLinkItem =>
                        <Link to={menuLinkItem.path} key={menuLinkItem.key} style={{ textDecoration: 'none' }}>
                            <HBox.Item hAlign={'flexStart'} >
                                <H3>{menuLinkItem.title}</H3>
                            </HBox.Item>
                        </Link>
                    )}
                </>
            </>
        )
    }

    return (
        <>
            <NavContainer opened={props.opened}>
                <NavHeader>
                    <HBox grow={true}>
                        <HBox.Item>
                            <Icon.Profile size={IconSize.XLarge} />
                        </HBox.Item>
                        <HBox.Separator />
                        <HBox.Item grow={true} hAlign={'flexStart'}>
                            <H1 light={true}>Olá, Pedro</H1>
                        </HBox.Item>
                        <HBox.Item onClick={props.handleClick}>
                            <Icon.Close size={IconSize.Large} />
                        </HBox.Item>
                    </HBox>
                </NavHeader>
                <NavAccountLinks>
                    <HBox>
                        <HBox.Item>
                            <Button kind={'link'}>
                                Conta
                            </Button>
                        </HBox.Item>
                        <HBox.Separator />
                        <HBox.Item>
                            <Button kind={'link'}>
                                Pedidos
                            </Button>
                        </HBox.Item>
                        <HBox.Separator />
                        <HBox.Item>
                            <Button kind={'link'}>
                                Assinatura
                            </Button>
                        </HBox.Item>
                    </HBox>
                </NavAccountLinks>
                <NavListContainer>
                    {renderMenu(menuItems)}
                </NavListContainer>
            </NavContainer>
            <Overlay opened={props.opened} onClick={props.handleClick} />
        </>
    );
}