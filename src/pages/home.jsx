import React, { useState } from 'react';
import { H1 } from '../components/atm.typography/typography.styled'
import { FieldButton } from '../components/mol.field-button/field-button';
import { SearchField } from '../components/mol.search-field/search-field';


export const Home = () => {
    const [input, setInput] = useState({});
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(input)
    }
    const handleInputChange = (event) => {
        setInput(inputs => ({ ...inputs, [event.target.name]: event.target.value }));
    }
    return (
        <div>
            <SearchField />
            <H1>Home</H1>
            <FieldButton name={'email-marketing'} children={'Cadastrar'} placeholder={'Escreva aqui'} kind={'secondary'} onSubmit={handleSubmit} onInputChange={handleInputChange} />
        </div>
    );
}