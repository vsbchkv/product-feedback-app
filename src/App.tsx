import React from "react";
import "./App.postcss";

import { useAppSelector } from "./app/hooks";
import classNames from "classnames";

import { Header } from "./components/Header/Header";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { Suggestions } from "./components/Suggestions/Suggestions";

export default function App() {
  const menuOpened = useAppSelector((state) => state.sidebar.opened);

  const appContentClasses = classNames("app__content", {
    "app__content--noscroll": menuOpened,
  });

  return (
    <div className="app">
      <Header />
      <Sidebar />
      <div className={appContentClasses}>
        <Suggestions />
      </div>
    </div>
  );
}
