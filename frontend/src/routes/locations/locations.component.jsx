import Header from '../../components/header/header.component';
import Footer from '../../components/footer/footer.component';

import './locations.styles.scss';

const Location = () => {
  return (
    <div className='main-page'>
      <Header />

      <main className='content'>
        <h1>Locations</h1>
      </main>

      <Footer />
    </div>
  );
};

export default Location;
