import styled from 'styled-components';


export const LeftSection = styled.div`
  width: 100%;
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    padding-left: 0;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 80%;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
  }
`;

export const SectionName = styled.h3`
  margin-top: 5rem;
  font-size: ${(props) => props.main ? '100px' : '160px'};
  background: rgb(182, 234, 218);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 10px;
  font-weight: 600;
  
  @media ${(props) => props.theme.breakpoints.md} {
    font-size: ${(props) => props.main ? '100px' : '90px'};
    font-weight: 400;
  }

`;

export const SectionSubHead = styled.h4`
  font-size: 24px;
  font-weight: 500;
`;