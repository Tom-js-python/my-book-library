import Header from '../../components/header/header.component';
import Footer from '../../components/footer/footer.component';

import './add-book.styles.scss';

const AddBook = () => {
  return (
    <div className='main-page'>
      <Header />

      <main className='content'>
        <h1>Add Book</h1>
      </main>

      <Footer />
    </div>
  );
};

export default AddBook;
