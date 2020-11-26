import styled from 'styled-components'
import { Color } from '../constants'

const menuContainerZIndex = '1';
const menuOverlayZIndex = '0';

export const NavContainer = styled.div`
    width: 80%;
    position: fixed;
    top: 0;
    bottom: 0;
    z-index: ${menuContainerZIndex};
    background-color: ${Color.White};
    transform: ${props => props.opened ? 'translateX(0)' : 'translateX(-100%)'};
    transition: all .4s ease-in-out;
`

export const Overlay = styled.div`
    width: 100%;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    z-index: ${menuOverlayZIndex};
    transform: ${props => props.opened ? 'translateX(0)' : 'translateX(-100%)'};
    transition: all .4s ease-in-out;
    background-color: ${Color.Black};
    opacity: 50%;
`

