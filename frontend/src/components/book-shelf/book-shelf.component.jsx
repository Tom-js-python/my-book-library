import BookList from '../book-list/book-list.component';

import './book-shelf.styles.scss';

const BookShelf = ({ books }) => {
  return (
    <section className='bookshelf'>
      <div className='bookshelf__title'>Bookshelf</div>
      <BookList books={books} />
    </section>
  );
};

export default BookShelf;
