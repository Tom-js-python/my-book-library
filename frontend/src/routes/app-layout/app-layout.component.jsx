import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';

import Navbar from '../navbar/navbar.component';
import Footer from '../../components/footer/footer.component';

import './app-layout.styles.scss';

const AppLayout = () => {
  return (
    <Fragment>
      <Navbar />
      <Outlet />
      <Footer />
    </Fragment>
  );
};

export default AppLayout;
