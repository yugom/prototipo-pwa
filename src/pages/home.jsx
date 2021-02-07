import React, { useState, useEffect } from 'react';
import { H1 } from '../components/atm.typography/typography.styled'
import { FieldButton } from '../components/mol.field-button/field-button';
import { SearchField } from '../components/mol.search-field/search-field';
import { NavAccountLinks } from '../components/mol.menu/menu.styled';
import { Button } from '../components/atm.button/button';
import { HBox } from '../components/mol.box/box.styled';
import { Link } from 'react-router-dom';


export const Home = () => {
    const [input, setInput] = useState({});
    const [quickMenu, setQuickMenu] = useState([]);

    useEffect(() => {
        setQuickMenu([
            {
                key: 'assinatura',
                path: '/assinatura',
                title: 'Assinatura'
            },
            {
                key: 'amigo-cobasi',
                path: '/amigo-cobasi',
                title: 'Amigo Cobasi'
            },
            {
                key: 'cobasi-ja',
                path: '/cobasi-ja',
                title: 'Cobasi já'
            }
        ])
    }, [])

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(input)
    }

    const handleInputChange = (event) => {
        setInput(inputs => ({ ...inputs, [event.target.name]: event.target.value }));
    }

    const renderQuickMenu = (quickMenuItems) => {
        return quickMenuItems.map(item =>
            <>
                <Link to={item.path} key={item.key} style={{ textDecoration: 'none' }}>
                    <HBox.Item hAlign={'flexStart'} >
                        <Button kind={'link'}>
                            {item.title}
                        </Button>
                    </HBox.Item>
                </Link>
                <HBox.Separator />
            </>
        )
    }

    return (
        <div>
            <SearchField />
            <NavAccountLinks>
                <HBox>
                    {renderQuickMenu(quickMenu)}
                </HBox>
            </NavAccountLinks>
            <H1>Home</H1>
            <FieldButton name={'email-marketing'} children={'Cadastrar'} placeholder={'Escreva aqui'} kind={'secondary'} onSubmit={handleSubmit} onInputChange={handleInputChange} />
        </div>
    );
}