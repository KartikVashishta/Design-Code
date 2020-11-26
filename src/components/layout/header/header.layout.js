import React, { useState, useEffect, useRef } from 'react';
import { menuData } from '../../../data/menuData';
import { Wrapper, MenuWrapper, HamburgerWrapper } from './header.styles';
import { MenuButton } from '../../buttons/menuButtons/MenuButtons.components';
import { Link } from 'gatsby';
import { MenuToolkit } from '../../tooltips/MenuTooltip.components';

const Header = () => {
  const [ isOpen, setisOpen ] = useState(false);
  const ref = useRef();
  const tooltipRef = useRef();

  const handleClick = event => {
    setisOpen(!isOpen);
    event.preventDefault();
    console.log(event);
  };

  const handClickOutside = event => {
    if (
      ref.current &&
      !ref.current.contains(event.target) &&
      !tooltipRef.current.contains(event.target)
    ) {
      setisOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handClickOutside);
    return () => {
      document.removeEventListener('mousedown', handClickOutside);
    };
  }, []);

  return (
    <Wrapper>
      <Link to='/'>
        <img src='/images/logos/logo.svg' alt='logo' />
      </Link>
      <MenuWrapper count={menuData.length} ref={ref}>
        {menuData.map(
          (item, id) =>
            item.link === '/account' ? (
              <MenuButton item={item} key={id} onClick={e => handleClick(e)} />
            ) : (
              <MenuButton item={item} key={id} />
            )
        )}
        <HamburgerWrapper>
          <MenuButton
            item={{ title: '', icon: '/images/icons/hamburger.svg', link: '/' }}
            onClick={e => handleClick(e)}
          />
        </HamburgerWrapper>
      </MenuWrapper>
      <div ref={tooltipRef}>
        <MenuToolkit isOpen={isOpen} />
      </div>
    </Wrapper>
  );
};

export default Header;
