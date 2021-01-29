import styled from 'styled-components'
import { FontSize, Color, FontFamily, FontWeight, Spacing } from '../constants'

const FontColor = {
    black: Color.Black,
    white: Color.White

}

export const H1 = styled.h1`
    font-size: ${FontSize.Large};
    color: ${props => props.light ? Color.White : Color.Black};
    font-family: ${FontFamily.Primary};
    font-weight: ${FontWeight.Bold};
`

export const H3 = styled.h3`
    font-size: ${FontSize.Small};
    color: ${props => FontColor[props.color] ?? Color.Black};
    font-family: ${FontFamily.Primary};
    font-weight: ${FontWeight.Medium};
    margin-top: ${Spacing.Small};
    margin-bottom: ${Spacing.Small};
`

export const InputLabel = styled.label`
    display: block;
    font-size: ${FontSize.XSmall};
    font-weight: ${FontWeight.Light};
    color: ${Color.Black};
`
