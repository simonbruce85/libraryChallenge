import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import BookList from './components/BookList';
import CheckOut from './components/CheckOut';

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
    </Routes>
    </>
  );
}

export default App;
