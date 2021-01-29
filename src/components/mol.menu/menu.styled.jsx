import styled from 'styled-components'
import { HeaderHeight, Color, Spacing, ExternalGutter } from '../constants'

const menuContainerZIndex = '2';
const menuOverlayZIndex = '1';

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

export const NavListContainer = styled.div`
    margin: ${Spacing.Small} ${Spacing.Medium};
`
export const NavAccountLinks = styled.div`
    display: flex;
    justify-content: flex-start;
    margin: ${Spacing.Small} ${Spacing.Medium};
`

export const NavHeader = styled.div`
    position: relative;
    box-sizing: border-box;
    height: ${HeaderHeight.Large};
    padding: ${Spacing.Small} ${ExternalGutter};
    width: 100%;
    background-color: ${Color.Primary};
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

