import styled from 'styled-components';

export const ButtonFieldStyled = styled.div`
    display: flex;

    & > input {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
    }

    & > button {
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;       
    }
`
