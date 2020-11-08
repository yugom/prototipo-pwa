import styled from 'styled-components';
import {FontFamily, FontWeight, FontSize, Color, Border, Padding, ButtonHeight} from '../constants'

const buttonColor = {
    primary: Color.Primary,
    secondary: Color.Secondary
}

export const ButtonStyled = styled.button`
    position: relative;
    width: ${props => props.expanded ? `100%` : `auto` };
    padding: 0 ${Padding.Medium};
    height: ${ButtonHeight};
    border-radius: ${Border.Radius};
    border: ${Border.Thickness} ${Border.Type} ${props => props.outline ? buttonColor[props.buttonKind] : 'transparent'};
    color: ${props => props.outline ? buttonColor[props.buttonKind] : Color.White};
    background-color: ${props => props.outline ? 'transparent' : props.buttonKind ? buttonColor[props.buttonKind] : buttonColor.primary};
    opacity: ${props => props.disabled ? 0.5 : 1};
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ButtonContent = styled.div`
    font-family: ${FontFamily.Primary};
    font-size: ${FontSize.Small};
    font-weight: ${FontWeight.Bold};
    opacity: ${props => props.loading ? 0 : 1};
`;

export const SpinnerStyled = styled.div`
    display: ${props => props.loading ? 'inline-block' : 'none'};
    position: absolute;
`