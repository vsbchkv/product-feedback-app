import React from 'react';
import { useAppDispatch, useAppSelector } from './app/hooks'; // FIXME: ?

import './App.postcss';

import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import { useEffect } from 'react';

export default function App() {

  const menuOpened = useAppSelector((state) => state.sidebar.opened); // FIXME: ?

  return (
    <div className="app">
      <Header />
      <Sidebar />
    </div>
  );
}
