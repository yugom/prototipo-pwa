import styled from 'styled-components'
import {Color} from '../constants'

export const MenuStyled = styled.div`
`

export const NavContainer = styled.div`
    height: 100vh;
    width: 80%;
    position: fixed;
    top: 0;
    z-index: 10;
    background-color: ${Color.White};
    transform: ${props => props.opened ? 'translateX(0)' : 'translateX(-100%)'};
    transition: all .4s ease-in-out;
`

export const Overlay = styled.div`
    height: 100%;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    display: ${props => props.opened ? 'block' : 'none'};
    background-color: ${Color.Black};
    opacity: 50%;
`

