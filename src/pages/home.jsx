import React from 'react';
import { H1 } from '../components/atm.typography/typography.styled'
import { FieldButton } from '../components/mol.field-button/field-button';


export const Home = () => {
    return (
        <div>
            <H1>Home</H1>
            <FieldButton children={'Cadastrar'} placeholder={'Escreva aqui'} />
        </div>
    );
}