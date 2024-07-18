import React from 'react'
import { HeaderMain } from "../header/headerMain.jsx";
import BannerHome from '../pages/home/components/Banner.jsx';
import { Outlet } from 'react-router-dom';
import FooterSection from '../footer/FooterSection.jsx';

export const Layout = () => {
  

  return (
    <div className="layout-body">
      <HeaderMain />
      <Outlet />
      <FooterSection />
    </div>
  );
}

export default Layout