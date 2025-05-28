import Header from '../../components/header/header.component';
import Footer from '../../components/footer/footer.component';

import './account.styles.scss';

const Account = () => {
  return (
    <div className='main-page'>
      <Header />

      <main className='content'>
        <h1>Account</h1>
      </main>

      <Footer />
    </div>
  );
};

export default Account;
