import React from 'react';

import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { toggleSidebar } from '../../features/sidebar-slice';


import classNames from 'classnames';
import './Header.postcss';
import Button from '../common/Button/Button';

const Header = () => {

  const menuOpened = useAppSelector((state) => state.sidebar.opened);
  const dispatch = useAppDispatch();
  const toggleMenu = () => {
    dispatch(toggleSidebar());
  };

  const menuBtnClasses = classNames('header__button', {
    'header__button--active': menuOpened,
  });

  return (
    <header className='header'>
      <h1 className='title header__title'>Frontend Mentor</h1>
      <p className='header__subtitle'>Feedback Board</p>
      <Button
        className={menuBtnClasses}
        aria-haspopup='true'
        aria-expanded={menuOpened}
        aria-label={menuOpened ? 'Close menu' : 'Open menu'}
        onClick={toggleMenu}
      >
        <div></div>
      </Button>
    </header>
  );
};

export default Header;


