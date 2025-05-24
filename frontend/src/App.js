import MainPage from './pages/main-page/main-page.component';

const App = () => {
  // Dummy book data
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

  return <MainPage books={books} />;
};

export default App;
