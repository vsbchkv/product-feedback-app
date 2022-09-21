import React, { useEffect, useRef } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import classNames from 'classnames';
import { closeSidebar } from '../../features/sidebar/sidebar-slice';
import Card from '../common/Card/Card';

import './Sidebar.postcss';

const Sidebar = () => {
  const menuOpened = useAppSelector((state) => state.sidebar.opened);
  const sidebarRef = useRef<null | HTMLBaseElement>(null);

  const dispatch = useAppDispatch();

  useEffect(() => {
    const onClickOutside = (e: Event): void => {
      const clickedElement: any = e.target; // TODO: type
      const clickOutside = !sidebarRef.current?.contains(clickedElement as Node)
        && !clickedElement?.parentElement.classList.contains('button--burger');
      clickOutside && dispatch(closeSidebar());
    };

    window.addEventListener('mousedown', onClickOutside);
    return () => window.removeEventListener('mousedown', onClickOutside);
  }, [menuOpened]);

  const sidebarClasses = classNames('sidebar', {
    'sidebar--active': menuOpened,
  });

  return (
    <aside
      className={sidebarClasses}
      ref={sidebarRef}
    >
      aside
      <Card>Card</Card>
    </aside>
  );
};

export default Sidebar;


