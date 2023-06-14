import React, { Suspense } from 'react';
import Headder from '../Pages/Headder';
import { Outlet } from 'react-router-dom';
const Layout = () => {
  return (
    <>
      <Headder />
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Layout;
