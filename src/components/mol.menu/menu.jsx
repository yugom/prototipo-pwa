import React, { useEffect, useState } from 'react'
import { NavHeader, NavContainer, NavListContainer, NavAccountLinks, Overlay } from './menu.styled';
import { Button } from '../atm.button/button';
import { H2, H3 } from '../atm.typography/typography.styled';
import { HBox } from '../mol.box/box.styled';
import { Link } from 'react-router-dom';
import { Icon } from '../atm.icon/icon';
import { IconSize } from '../constants';
import { H1 } from '../atm.typography/typography.styled';
import { Avatar } from '../atm.avatar/avatar';

export const Menu = props => {
    const [menuItems, setMenuItems] = useState([]);
    const [user, setUser] = useState({
        name: 'Entrar',
        image: '/avatar-placeholder.jpeg',
    });

    useEffect(() => {
        setMenuItems([
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
            }])
    }, []);

    useEffect(() => {
        if (props.auth) {
            setUser({
                name: 'Olá, Douglas',
                email: 'pedro@cobasi.com.br',
                image: 'https://avatars.githubusercontent.com/u/5383178?s=60&v=4'
            })
        }

    }, [props.auth]);



    const renderMenu = (menuLinks) => {
        return menuLinks.map(item =>
            <Link to={item.path} key={item.key} style={{ textDecoration: 'none' }}>
                <HBox.Item hAlign={'flexStart'} >
                    <H3>{item.title}</H3>
                </HBox.Item>
            </Link>
        )
    }

    const handleCloseClick = (e) => {
        e.stopPropagation();
        props.onClose?.();
    }

    const handleHeaderClick = () => {
        props.funcToLogin?.();
        props.onClose?.();
    }

    return (
        <>
            <NavContainer opened={props.opened}>
                <NavHeader>
                    <HBox grow={true} onClick={handleHeaderClick}>
                        <HBox.Item>
                            <Avatar image={user.image} alt={user.name} />
                        </HBox.Item>
                        <HBox.Separator />
                        <HBox.Item grow={true} hAlign={'flexStart'}>
                            <H1 light={true}>{user.name}</H1>
                        </HBox.Item>
                        <HBox.Item onClick={handleCloseClick}>
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
                    <Link to={'/'} key={'home'} style={{ textDecoration: 'none' }}>
                        <HBox.Item hAlign={'flexStart'} >
                            <H3>Home</H3>
                        </HBox.Item>
                    </Link>
                    <Link to={'/about'} key={'about'} style={{ textDecoration: 'none' }}>
                        <HBox.Item hAlign={'flexStart'} >
                            <H3>About</H3>
                        </HBox.Item>
                    </Link>
                    {renderMenu(menuItems)}
                    <H2>Outros serviços</H2>
                    <Link to={'/atendimento-cobasi'} key={'atendimentoCobasi'} style={{ textDecoration: 'none' }}>
                        <HBox.Item hAlign={'flexStart'} >
                            <H3>Atendimento Cobasi</H3>
                        </HBox.Item>
                    </Link>
                    <Link to={'/retirar-em-loja'} key={'retirarEmLoja'} style={{ textDecoration: 'none' }}>
                        <HBox.Item hAlign={'flexStart'} >
                            <H3>Retirar em loja</H3>
                        </HBox.Item>
                    </Link>
                </NavListContainer>
            </NavContainer>
            <Overlay opened={props.opened} onClick={props.handleClick} />
        </>
    );
}