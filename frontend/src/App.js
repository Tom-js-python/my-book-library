import { Routes, Route } from 'react-router-dom';

import PublicLayout from './routes/public-layout/public-layout.component';
import Landing from './routes/landing/landing.component';
import Login from './routes/login/login.component';
import Signup from './routes/signup/signup.component';

import AppLayout from './routes/app-layout/app-layout.component';
import Dashboard from './routes/dashboard/dashboard.component';
import BookList from './routes/book-list/book-list.component';
import BookDetail from './routes/book-detail/book-detail.component';
import AddBook from './routes/add-book/add-book.component';
import Locations from './routes/locations/locations.component';
import Account from './routes/account/account.component';

const App = () => {
  return (
    <Routes>
      {/* Public routes */}
      <Route path='/' element={<PublicLayout />}>
        <Route index element={<Landing />} />
        <Route path='login' element={<Login />} />
        <Route path='signup' element={<Signup />} />
      </Route>
      {/* Protected-style routes (no auth for now) */}
      <Route path='/' element={<AppLayout />}>
        <Route path='dashboard' element={<Dashboard />} />
        <Route path='books' element={<BookList />} />
        <Route path='books/:id' element={<BookDetail />} />
        <Route path='add' element={<AddBook />} />
        <Route path='locations' element={<Locations />} />
        <Route path='account' element={<Account />} />
      </Route>
    </Routes>
  );
};

export default App;
