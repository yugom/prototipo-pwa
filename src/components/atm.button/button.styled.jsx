import styled from 'styled-components';
import { FontFamily, FontWeight, FontSize, Color, Border, Spacing, ButtonHeight } from '../constants'

const buttonColor = {
    primary: Color.Primary,
    secondary: Color.Secondary
}

export const ButtonStyled = styled.button`
    position: relative;
    width: ${props => props.expanded ? `100%` : `auto`};
    height: ${ButtonHeight.Medium};
    ${props => props.buttonKind === 'link' ? LinkSpecificStyle(props) : ButtonSpecificStyle(props)
    }
`;

const LinkSpecificStyle = (props) => `
    font-size: ${FontSize.XSmall};
    padding: 0;
    background-color: transparent;
    border-color: transparent;
    color: ${Color.Primary};
    font-family: ${FontFamily.Primary};
    font-size: ${FontSize.Small};
`

const ButtonSpecificStyle = (props) => `
    font-size: ${FontSize.Small};
    padding: 0 ${Spacing.Medium};
    background-color: ${props.outline ? 'transparent' : props.buttonKind ? buttonColor[props.buttonKind] : buttonColor.primary};
    border-radius: ${Border.Radius};
    border: ${Border.Thickness} ${Border.Type} ${props.outline ? buttonColor[props.buttonKind] : 'transparent'};
    color: ${props.outline ? buttonColor[props.buttonKind] : Color.White};
    opacity: ${props => props.disabled ? 0.5 : 1};
    display: flex;
    justify-content: center;
    align-items: center;
`



export const ButtonContent = styled.div`
    font-family: ${FontFamily.Primary};
    font-weight: ${FontWeight.Medium};
    opacity: ${props => props.loading ? 0 : 1};
`;

export const SpinnerStyled = styled.div`
    display: ${props => props.loading ? 'inline-block' : 'none'};
    position: absolute;
`