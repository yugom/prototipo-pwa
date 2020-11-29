import React from 'react';
import { FieldButton } from '../mol.field-button/field-button';
import { SearchFieldStyled } from './search-field.styled';
import { Icon } from '../atm.icon/icon';
import { IconSize } from '../constants';

export const SearchField = () => {
    const searchIcon = <Icon.Search size={IconSize.Medium} />;
    return (
        <SearchFieldStyled>
            <FieldButton children={searchIcon} placeholder={'Escreva aqui'} />
        </SearchFieldStyled>
    );
}