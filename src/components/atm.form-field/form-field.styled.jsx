import styled from 'styled-components';
import { Border, Color, FieldHeight, FontSize, FontWeight, Spacing } from '../constants';

export const InputFieldStyled = styled.input`
    box-sizing: border-box;
    width: 100%;
    height: ${FieldHeight};
    border-radius: ${Border.Radius};
    border-style: ${Border.Type};
    border-right-style: ${props => props.flatBorder ? 'none' : Border.Type};
    border-width: ${Border.Thickness};
    border-color: ${Color.Gray};
    font-weight: ${FontWeight.Light};
    color: ${Color.Black};
    font-size: ${FontSize.Small};
    padding: 0 ${Spacing.Small};

    ::placeholder{
        font-weight: ${FontWeight.Light};
        color: ${Color.Gray};
        font-size: ${FontSize.Small}
    }
`
