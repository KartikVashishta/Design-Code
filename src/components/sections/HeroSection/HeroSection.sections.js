import React from 'react';
import { MockupAnimation } from '../../animations/MockupAnimation';
import { WaveBackground } from '../../backgrounds/WaveBackground.components';
import { PurchaseButton } from '../../buttons/purchaseButton/buttons.components';

import {
  Wrapper,
  ContentWrapper,
  TextWrapper,
  Title,
  Description
} from './HeroSection.styles';

const HeroSection = () => {
  return (
    <Wrapper>
    <WaveBackground/>
      <ContentWrapper>
        <TextWrapper>
          <Title>
            Design<br /> and code <span>React</span> apps
          </Title>
          <Description>
            Don’t skip design. Learn design and code, by building real apps with
            React and Swift. Complete courses about the best tools.
          </Description>
          <PurchaseButton
            title='Start Learning'
            subtitle='120+ hours of video'
          />
        </TextWrapper>
        <MockupAnimation />
      </ContentWrapper>
    </Wrapper>
  );
};

export default HeroSection;
