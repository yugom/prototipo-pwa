import React, { useState } from 'react';
import { FieldButton } from '../mol.field-button/field-button';
import { SearchFieldStyled } from './search-field.styled';
import { Icon } from '../atm.icon/icon';
import { IconSize } from '../constants';

export const SearchField = () => {
    const [searchValue, setSearchValue] = useState({});
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(searchValue)
    }
    const handleInputChange = (event) => {
        setSearchValue(inputs => ({ ...inputs, [event.target.name]: event.target.value }));
    }
    const searchIcon = <Icon.Search size={IconSize.Medium} />;
    return (
        <SearchFieldStyled>
            <FieldButton name={'search'} children={searchIcon} placeholder={'Escreva aqui'} kind={'secondary'} onSubmit={handleSubmit} onInputChange={handleInputChange} />
        </SearchFieldStyled>
    );
}