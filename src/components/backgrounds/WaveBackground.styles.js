import styled from 'styled-components';

export const Wrapper = styled.div`position: relative;`;
export const Wave = styled.img`
  position: absolute;
  z-index: -1;

  @media (min-width: 1440px) {
    width: 100%;
  }
`;

export const BottomWave = styled(Wave)`
 @media (prefers-color-scheme: dark){
   content: url('/images/waves/hero-wave3-dark.svg')
 }
`

export const Background = styled.div`
  background: linear-gradient(180deg, #4316db 0%, #9076e7 100%);
  position: absolute;
  width: 100%;
  height: 800px;
  z-index: -1;
`;
