import './App.css';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import BookList from './components/BookList';
import CheckOut from './components/CheckOut';
import CreateBook from './components/CreateBook';
import BorrowedBooks from './components/BorrowedBooks';

function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route
      path='/'
      element={<BookList />}
      >
      </Route>
      <Route
      path='/checkout'
      element={<CheckOut/>}
      >
      </Route>
      <Route
      path='/createBook'
      element={<CreateBook/>}
      >
      </Route>
      <Route
      path='/borrowedBooks'
      element={<BorrowedBooks/>}
      >
      </Route>
    </Routes>
    </>
  );
}

export default App;
