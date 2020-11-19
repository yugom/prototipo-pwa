import styled from 'styled-components'

export const MenuStyled = styled.div`
    height: 100vh;
    display: flex;
    transform: ${props => props.opened ? 'translateX(0)' : 'translateX(-100%)'};
    transition: all .4s ease-in-out;
`

export const NavContainer = styled.div`
    height: 100%;
    background-color: #fff;
    width: 80%;
`

export const Overlay = styled.div`
    height: 100%;
    background-color: black;
    opacity: 50%;
    width: 20%;
`

