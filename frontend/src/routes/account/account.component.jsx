import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './account.styles.scss';

const Account = () => {
  const navigate = useNavigate();
  const [defaultFormat, setDefaultFormat] = useState('physical');
  const [defaultSort, setDefaultSort] = useState('title');

  const handleLogout = () => {
    // In a real app, you’d also clear user state or tokens
    navigate('/');
  };

  return (
    <div className='account-page'>
      <h1>Account Settings</h1>

      <div className='account-section'>
        <h2>User Info</h2>
        <p>
          <strong>Username:</strong> johndoe
        </p>
        <p>
          <strong>Email:</strong> johndoe@example.com
        </p>
      </div>

      <div className='account-section'>
        <h2>Preferences</h2>

        <label>
          Default Book Format:
          <select
            value={defaultFormat}
            onChange={(e) => setDefaultFormat(e.target.value)}
          >
            <option value='physical'>Physical</option>
            <option value='kindle'>Kindle</option>
          </select>
        </label>

        <label>
          Default Sort Method:
          <select
            value={defaultSort}
            onChange={(e) => setDefaultSort(e.target.value)}
          >
            <option value='title'>Title</option>
            <option value='author'>Author</option>
            <option value='status'>Reading Status</option>
          </select>
        </label>
      </div>

      <div className='account-actions'>
        <button onClick={handleLogout} className='logout-button'>
          Log Out
        </button>
      </div>
    </div>
  );
};

export default Account;
