import styled from 'styled-components';

const SpinnerIconSize = '32px';

export const Spinner = styled.div`
    background-image: url(${props => props.img});
    height: ${SpinnerIconSize};
    width: ${SpinnerIconSize};
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
