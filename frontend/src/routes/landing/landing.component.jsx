import { Link } from 'react-router-dom';

import './landing.styles.scss';

const Landing = () => {
  return (
    <div className='landing'>
      <header className='landing-header'>
        <div className='logo'>📚 MyBookLibrary</div>
        <div className='auth-buttons'>
          <Link to='/login' className='btn login'>
            Log In
          </Link>
          <Link to='/signup' className='btn signup'>
            Sign Up
          </Link>
        </div>
      </header>

      <main className='landing-main'>
        <h1 className='title'>Welcome to MyBookLibrary</h1>
        <p className='subtitle'>
          Organize your personal and digital bookshelves, track your reading,
          and explore your collection.
        </p>
        <Link to='/signup' className='btn get-started'>
          Get Started
        </Link>
      </main>
    </div>
  );
};

export default Landing;
