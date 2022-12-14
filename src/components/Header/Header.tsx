import React from "react";

import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { toggleSidebar } from "../../features/sidebar/sidebar-slice";

import "./Header.postcss";
import { Button } from "../common/Button/Button";

export const Header = () => {
  const menuOpened = useAppSelector((state) => state.sidebar.opened);
  const dispatch = useAppDispatch();
  const openMenu = () => {
    dispatch(toggleSidebar());
  };

  return (
    <header className="header">
      <h1 className="title header__title">Frontend Mentor</h1>
      <p className="header__subtitle">Feedback Board</p>
      <Button
        styleVariant="burger"
        aria-haspopup="true"
        aria-expanded={menuOpened}
        aria-label={menuOpened ? "Close menu" : "Open menu"}
        onClick={openMenu}
      >
        <span className="header__menu-clickbox"></span>
      </Button>
    </header>
  );
};
