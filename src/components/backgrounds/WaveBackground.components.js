import React from 'react';

import { Wrapper, Wave, Background, BottomWave} from './WaveBackground.styles';

export const WaveBackground = () => {
  return (
    <Wrapper>
      <Background />
      <Wave src='/images/waves/hero-wave1.svg' style={{ top: '100px', filter:"blur(60px)" }} />
      <Wave src='/images/waves/hero-wave2.svg' style={{ top: '350px' }} />
      <BottomWave src='/images/waves/hero-wave3.svg' style={{ top: '550px' }} />
    </Wrapper>
  );
};
