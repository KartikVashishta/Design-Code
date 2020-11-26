import { Link } from 'gatsby';
import React from 'react';
import {
  Wrapper,
  Title,
  Subtitle,
  IconWrapper,
  Icon,
  TextWrapper,
  Ring
} from './button.styles';

export const PurchaseButton = ({ title, subtitle }) => {
  return (
    <Link to='/page-2'>
      <Wrapper>
        <IconWrapper>
          <Icon src='/images/icons/credit.svg' className='icon' />
          <Ring src='/images/icons/icon-ring.svg'/>
        </IconWrapper>
        <TextWrapper>
          <Title>{title || 'Get Pro Access'}</Title>
          <Subtitle>{subtitle || '120+ hours of video'}</Subtitle>
        </TextWrapper>
      </Wrapper>
    </Link>
  );
};
