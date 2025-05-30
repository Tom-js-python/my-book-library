import { useParams, useNavigate } from 'react-router-dom';

import './book-detail.styles.scss';

// Dummy book data (replace with real data fetching later)
const sampleBook = {
  id: '1',
  title: 'The Fellowship of the Ring',
  author: 'J.R.R. Tolkien',
  publicationYear: '1954',
  format: 'Physical',
  location: 'Living Room – Shelf 2',
  status: 'Read',
  genre: 'Fantasy',
  isbn: '9780261103573',
  deweyDecimal: '823.912',
  notes: 'First book of the Lord of the Rings trilogy.',
};

const BookDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Later: fetch the book by ID
  const book = sampleBook; // This will be dynamic

  return (
    <div className='book-detail-page'>
      <button className='back-button' onClick={() => navigate(-1)}>
        &larr; Back to List
      </button>

      <div className='book-detail-card'>
        <h1>{book.title}</h1>
        <h2>by {book.author}</h2>

        <div className='book-meta'>
          <p>
            <strong>Publication Year:</strong> {book.publicationYear}
          </p>
          <p>
            <strong>Format:</strong> {book.format}
          </p>
          <p>
            <strong>Location:</strong> {book.location}
          </p>
          <p>
            <strong>Status:</strong> {book.status}
          </p>
          <p>
            <strong>Genre:</strong> {book.genre}
          </p>
          <p>
            <strong>ISBN:</strong> {book.isbn}
          </p>
          <p>
            <strong>Dewey Decimal:</strong> {book.deweyDecimal}
          </p>
          {book.notes && (
            <p>
              <strong>Notes:</strong> {book.notes}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookDetail;
