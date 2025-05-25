import Header from '../../components/header/header.component';
import SearchBar from '../../components/search-bar/search-bar.component';
import BookShelf from '../../components/book-shelf/book-shelf.component';
import ActionBar from '../../components/action-bar/action-bar.component';
import Footer from '../../components/footer/footer.component';

import './home.styles.scss';

const Home = () => {
  const books = [
    {
      id: 1,
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      rating: '⭐⭐⭐⭐',
    },
    { id: 2, title: '1984', author: 'George Orwell', rating: '⭐⭐⭐⭐⭐' },
    {
      id: 3,
      title: 'To Kill a Mockingbird',
      author: 'Harper Lee',
      rating: '⭐⭐⭐⭐',
    },
  ];

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

export default Home;
