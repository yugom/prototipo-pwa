import styled from 'styled-components';
import {ButtonSpinnerIcon} from '../constants'

export const Spinner = styled.div`
    background-image: url(${props => props.img});
    height: ${ButtonSpinnerIcon};
    width: ${ButtonSpinnerIcon};
    animation: loading-icon-spin infinite 3s linear;

    @keyframes loading-icon-spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }
`;
