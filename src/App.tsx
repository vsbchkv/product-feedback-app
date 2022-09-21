import React from 'react';
import './App.postcss';

import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import { useGetDataListQuery, useGetCurrentUserQuery } from './features/data-api/data-api-slice';


export default function App() {
  const { data, isLoading } = useGetDataListQuery('productRequests');
  const { data: currentUser = {name: ''} } = useGetCurrentUserQuery('currentUser');

  return (
    <div className="app">
      <Header />
      <Sidebar />
      {
        isLoading && <div className='onload'>....LOAD</div>}
      {data &&
        <>
          <div className='num'>{data.length}</div>
          <div className=''>{currentUser.name}</div>
        </>
      }

    </div>
  );
}
