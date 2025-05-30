import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './add-book.styles.scss';

const AddBook = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: '',
    author: '',
    format: 'Physical',
    location: '',
    status: 'To Read',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In future: Send form data to backend/database
    console.log('Form submitted:', form);
    navigate('/books'); // redirect to book list
  };

  return (
    <div className='add-book-page'>
      <h1>Add a New Book</h1>
      <form onSubmit={handleSubmit} className='add-book-form'>
        <label>
          Title
          <input
            type='text'
            name='title'
            value={form.title}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Author
          <input
            type='text'
            name='author'
            value={form.author}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Format
          <select name='format' value={form.format} onChange={handleChange}>
            <option value='Physical'>Physical</option>
            <option value='Kindle'>Kindle</option>
            <option value='Other'>Other</option>
          </select>
        </label>

        <label>
          Location
          <input
            type='text'
            name='location'
            value={form.location}
            onChange={handleChange}
            placeholder='e.g., Living Room, Shelf 3'
          />
        </label>

        <label>
          Reading Status
          <select name='status' value={form.status} onChange={handleChange}>
            <option value='To Read'>To Read</option>
            <option value='Currently Reading'>Currently Reading</option>
            <option value='Read'>Read</option>
          </select>
        </label>

        <button type='submit' className='submit-button'>
          ➕ Add Book
        </button>
      </form>
    </div>
  );
};

export default AddBook;
