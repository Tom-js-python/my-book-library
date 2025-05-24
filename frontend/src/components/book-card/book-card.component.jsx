import './book-card.styles.scss';

const BookCard = ({ book }) => {
  const { title, author, rating } = book;
  return (
    <div className='book-card'>
      <div className='title'>{title}</div>
      <div className='author'>by {author}</div>
      <div className='rating'>{rating}</div>
    </div>
  );
};

export default BookCard;
