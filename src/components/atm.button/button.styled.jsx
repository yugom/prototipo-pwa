import styled from 'styled-components';
import {FontFamily, FontWeight, Color, Border} from '../constants'

const buttonColor = {
    primary: Color.Primary,
    secondary: Color.Secondary
}

export const ButtonStyled = styled.button`
    width: 250px;
    height: 48px;
    border-radius: ${Border.Radius};
    border: none;
    color: #fff;
    background-color: ${props => props.buttonKind ? buttonColor[props.buttonKind] : buttonColor.primary};
    font-family: ${FontFamily.Primary};
    font-size: 16px;
    font-weight: ${FontWeight.Bold};
`;
