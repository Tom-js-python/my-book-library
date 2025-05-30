import { Link } from 'react-router-dom';

import './dashboard.styles.scss';

const Dashboard = () => {
  return (
    <div className='dashboard'>
      {/* Divider bar under navbar */}
      <div className='dashboard__divider' />

      <div className='dashboard__container'>
        <h1 className='dashboard__title'>Welcome to My Book Library</h1>
        <p className='dashboard__intro'>
          Track, organize, and explore your personal library.
        </p>

        <div className='dashboard__stats-grid'>
          <div className='dashboard__card'>
            <h2>Total Books</h2>
            <p>📚 124</p>
          </div>
          <div className='dashboard__card'>
            <h2>Currently Reading</h2>
            <p>📖 3</p>
          </div>
          <div className='dashboard__card'>
            <h2>Kindle Books</h2>
            <p>📱 42</p>
          </div>
          <div className='dashboard__card'>
            <h2>Physical Books</h2>
            <p>📦 82</p>
          </div>
        </div>

        <div className='dashboard__charts'>
          <div className='dashboard__chart-placeholder'>
            📊 Pie Chart: Categories
          </div>
          <div className='dashboard__chart-placeholder'>
            📈 Bar Chart: Reading Status
          </div>
        </div>

        <div className='dashboard__buttons'>
          <Link to='/books' className='dashboard__btn'>
            📚 View All Books
          </Link>
          <Link to='/add' className='dashboard__btn'>
            ➕ Add Book
          </Link>
          <Link to='/locations' className='dashboard__btn'>
            📍 Manage Locations
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
