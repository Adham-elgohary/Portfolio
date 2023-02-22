import styled from 'styled-components';

export const Container = styled.div`
max-width: 1800px;
margin-left: 70px;
margin-right: 70px;
scroll-behavior: smooth;
    @media ${props => props.theme.breakpoints.xl}{
        margin-left: 90px;
    }
    @media ${props => props.theme.breakpoints.sm}{
        margin-left:10px;
        margin-right:-17px;
    }
`;