import { useState } from 'react';

import './locations.styles.scss';

const Location = () => {
  const [locations, setLocations] = useState([
    'Living Room - Shelf 1',
    'Dining Room - Bookcase 2',
  ]);

  const [newLocation, setNewLocation] = useState('');

  const handleAddLocation = (e) => {
    e.preventDefault();
    if (newLocation.trim() !== '' && !locations.includes(newLocation.trim())) {
      setLocations([...locations, newLocation.trim()]);
      setNewLocation('');
    }
  };

  const handleDelete = (locationToDelete) => {
    setLocations(locations.filter((loc) => loc !== locationToDelete));
  };

  return (
    <div className='locations-page'>
      <h1>Manage Locations</h1>

      <form onSubmit={handleAddLocation} className='location-form'>
        <input
          type='text'
          placeholder='e.g., Bedroom - Shelf 2'
          value={newLocation}
          onChange={(e) => setNewLocation(e.target.value)}
        />
        <button type='submit'>Add Location</button>
      </form>

      <ul className='location-list'>
        {locations.map((location, index) => (
          <li key={index} className='location-item'>
            {location}
            <button onClick={() => handleDelete(location)}>🗑️</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Location;
