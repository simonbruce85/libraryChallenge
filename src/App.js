import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import BookList from './components/BookList';
import CheckOut from './components/CheckOut';
import CreateBook from './components/CreateBook';
import LentBooks from './components/LentBooks';

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
      path='/lentBooks'
      element={<LentBooks/>}
      >
      </Route>
    </Routes>
    </>
  );
}

export default App;
