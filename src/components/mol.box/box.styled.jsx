import styled from 'styled-components';
import {Spacing} from '../constants'

const HAlign = {
    flexStart: 'flex-start',
    flexEnd: 'flex-end',
    center: 'center',
    spaceBetween: 'space-between',
    spaceAround: 'space-around',
    spaceEvenly: 'space-evenly'
}

const VAlign = {
    flexStart: 'flex-start',
    flexEnd: 'flex-end',
    center: 'center',
    spaceBetween: 'space-between',
    spaceAround: 'space-around',
    spaceEvenly: 'space-evenly'
}

export const HBox = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: ${props => props.halign ? HAlign[props.halign] : 'center'};
    align-items: ${props => props.valign ? VAlign[props.valign] : 'center'};
    height: 100%;
    width: ${props => props.grow ? '100%' : 'auto'};
`;

HBox.Item = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: ${props => props.halign ? HAlign[props.halign] : 'center'};
    flex: ${props => props.grow ? '1': '0'};
    height: 100%;
`

HBox.Separator = styled.div`
    width: ${Spacing.Medium};
`;