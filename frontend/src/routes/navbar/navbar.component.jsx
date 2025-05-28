import { Link } from 'react-router-dom';

import { ReactComponent as CrownLogo } from '../../assets/crown.svg';

import './navbar.styles.scss';

const Navbar = () => {
  return (
    <div className='nav-bar'>
      <Link className='logo-container' to='/dashboard'>
        <CrownLogo className='logo' />
      </Link>
      <div className='nav-links-container'>
        <Link className='nav-link' to='/dashboard'>
          DASHBOARD
        </Link>
        <Link className='nav-link' to='/books'>
          BOOK LIST
        </Link>
        <Link className='nav-link' to='/add'>
          ADD BOOK
        </Link>
        <Link className='nav-link' to='/locations'>
          LOCATIONS
        </Link>
        <Link className='nav-link' to='/account'>
          ACCOUNT
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
