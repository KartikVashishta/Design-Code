import React from 'react';
import { tooltipData } from '../../data/menuData';
import { MenuButton } from '../buttons/menuButtons/MenuButtons.components';
import { Wrapper } from './MenuTooltip.styles';

export const MenuToolkit = ({isOpen}) => {

  return (
    <Wrapper isOpen={isOpen} >
      {tooltipData.map((item, id) => <MenuButton item={item} key={id} />)}
    </Wrapper>
  );
};
