import React from 'react';
import { Icon } from '../components/atm.icon/icon';
import { H1 } from '../components/atm.typography/typography.styled'
import { IconSize } from '../components/constants';
import { FieldButton } from '../components/mol.field-button/field-button';


export const Home = () => {
    const searchIcon = <Icon.Search size={IconSize.Medium} />;
    return (
        <div>
            <H1>Home</H1>
            <FieldButton children={searchIcon} placeholder={'Escreva aqui'} />
        </div>
    );
}