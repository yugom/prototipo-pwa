import React from 'react';
import { H1 } from '../components/atm.typography/typography.styled'
import { FieldButton } from '../components/mol.field-button/field-button';
import { SearchField } from '../components/mol.search-field/search-field';


export const Home = () => {
    return (
        <div>
            <SearchField />
            <H1>Home</H1>
            <FieldButton children={'Cadastrar'} placeholder={'Escreva aqui'} />
        </div>
    );
}