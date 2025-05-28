import Header from '../../components/header/header.component';
import Footer from '../../components/footer/footer.component';

import './book-list.styles.scss';

const BookList = () => {
  return (
    <div className='main-page'>
      <Header />

      <main className='content'>
        <h1>Books</h1>
      </main>

      <Footer />
    </div>
  );
};

export default BookList;
