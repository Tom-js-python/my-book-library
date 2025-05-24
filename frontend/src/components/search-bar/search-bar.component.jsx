import './search-bar.styles.scss';

const SearchBar = () => {
  return (
    <div className='search-bar'>
      <input type='text' placeholder='Search books...' />
      <button>Search</button>
    </div>
  );
};

export default SearchBar;
