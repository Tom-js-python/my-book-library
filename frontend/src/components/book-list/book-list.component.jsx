import BookCard from '../book-card/book-card.component';

import './book-list.styles.scss';

const BookList = ({ books }) => {
  return (
    <div className='book-list'>
      {books.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  );
};

export default BookList;
