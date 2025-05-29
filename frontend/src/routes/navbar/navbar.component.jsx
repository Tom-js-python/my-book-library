import { Link } from 'react-router-dom';

import { ReactComponent as BookLogo } from '../../assets/BookLogo.svg';

import './navbar.styles.scss';

const Navbar = () => {
  return (
    <div className='nav-bar'>
      <Link className='logo-container' to='/dashboard'>
        <BookLogo className='logo' />
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
