import styled from 'styled-components';
import {FontFamily, FontWeight, FontSize, Color, Border, Padding, ButtonHeight} from '../constants'

const buttonColor = {
    primary: Color.Primary,
    secondary: Color.Secondary
}

export const ButtonStyled = styled.button`
    width: ${props => props.expansible ? `100%` : `auto` };
    padding: 0 ${Padding.Medium};
    line-height: calc(${ButtonHeight});
    height: ${ButtonHeight};
    border-radius: ${Border.Radius};
    border: ${Border.Thickness} ${Border.Type} ${props => props.outline ? buttonColor[props.buttonKind] : `none`};
    color: ${props => props.outline ? buttonColor[props.buttonKind] : '#fff'};
    background-color: ${props => props.outline ? 'transparent' : props.buttonKind ? buttonColor[props.buttonKind] : buttonColor.primary};
    opacity: ${props => props.disabled ? 0.5 : 1};
    font-family: ${FontFamily.Primary};
    font-size: ${FontSize.Small};
    font-weight: ${FontWeight.Bold};
`;

export const ButtonContent = styled.div`
    opacity: ${props => props.loading ? 0 : 1};
`;

export const SpinnerStyled = styled.div`
    display: ${props => props.loading ? 'inline-block' : 'none'};
    position: absolute;
    right: calc(50% - 7px);
    top: calc(calc(${ButtonHeight} - 32px)/2);
`