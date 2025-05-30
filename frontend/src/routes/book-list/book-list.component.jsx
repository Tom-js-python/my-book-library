import { Link } from 'react-router-dom';

import './book-list.styles.scss';

const books = [
  {
    id: 1,
    title: 'The Hobbit',
    author: 'J.R.R. Tolkien',
    format: 'Physical',
    status: 'Read',
    location: 'Living Room Shelf 3',
  },
  {
    id: 2,
    title: '1984',
    author: 'George Orwell',
    format: 'Kindle',
    status: 'Currently Reading',
    location: 'Kindle Library',
  },
  // ... more books
];

const BooksList = () => {
  return (
    <div className='books-page'>
      <div className='books-page__header'>
        <h1>My Library</h1>
        <Link to='/add' className='books-page__add-button'>
          ➕ Add Book
        </Link>
      </div>

      <div className='books-page__filters'>
        <input type='text' placeholder='Search by title or author...' />
        {/* Future: Add dropdowns for filters like format, status, location */}
      </div>

      <div className='books-page__list'>
        {books.map((book) => (
          <div className='book-card' key={book.id}>
            <div className='book-card__info'>
              <h2>{book.title}</h2>
              <p>
                <strong>Author:</strong> {book.author}
              </p>
              <p>
                <strong>Format:</strong>{' '}
                {book.format === 'Kindle' ? '📱 Kindle' : '📦 Physical'}
              </p>
              <p>
                <strong>Status:</strong> {book.status}
              </p>
              <p>
                <strong>Location:</strong> {book.location}
              </p>
            </div>
            <Link to={`/books/${book.id}`} className='book-card__view-btn'>
              View ➤
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BooksList;
