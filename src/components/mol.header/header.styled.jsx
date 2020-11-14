import styled from 'styled-components'
import {HeaderHeight, Color, Spacing} from '../constants'

const HeaderSize = {
    large: HeaderHeight.Large,
    medium: HeaderHeight.Medium,
    small: HeaderHeight.Small
}

export const HeaderStyled = styled.div`
    position: relative;
    box-sizing: border-box;
    height: ${props => props.height ? HeaderSize[props.height] : HeaderHeight.Medium};
    padding: ${Spacing.Small} ${Spacing.Medium};
    width: 100%;
    background-color: ${Color.Primary};
`;