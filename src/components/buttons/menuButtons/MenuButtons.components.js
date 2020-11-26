import React from 'react';
import { Link } from 'gatsby';

import { MenuItem } from './Menubuttons.styles';

export const MenuButton = (props) => {
    const { item } = props;
  return (
    <Link to={item.link} onClick = {props.onClick}>
      <MenuItem title={item.title}>
        <img src={item.icon} alt={item.title} />
        {item.title}
      </MenuItem>
    </Link>
  );
};
