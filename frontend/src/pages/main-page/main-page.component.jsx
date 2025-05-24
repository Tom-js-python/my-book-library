import Header from '../../components/header/header.component';
import SearchBar from '../../components/search-bar/search-bar.component';
import BookShelf from '../../components/book-shelf/book-shelf.component';
import ActionBar from '../../components/action-bar/action-bar.component';
import Footer from '../../components/footer/footer.component';

import './main-page.styles.scss';

const MainPage = ({ books }) => {
  return (
    <div className='main-page'>
      <Header />

      <main className='content'>
        <SearchBar />
        <BookShelf books={books} />
        <ActionBar />
      </main>

      <Footer />
    </div>
  );
};

export default MainPage;
