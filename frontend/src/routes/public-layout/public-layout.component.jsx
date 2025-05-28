import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../../components/footer/footer.component';

import './public-layout.styles.scss';

const PublicLayout = () => {
  return (
    <Fragment>
      <Outlet />
      <Footer />
    </Fragment>
  );
};

export default PublicLayout;
