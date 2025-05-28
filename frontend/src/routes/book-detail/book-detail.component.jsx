import Header from '../../components/header/header.component';
import Footer from '../../components/footer/footer.component';

import './book-detail.styles.scss';

const BookDetail = () => {
  return (
    <div className='main-page'>
      <Header />

      <main className='content'>
        <h1>Book Details</h1>
      </main>

      <Footer />
    </div>
  );
};

export default BookDetail;
