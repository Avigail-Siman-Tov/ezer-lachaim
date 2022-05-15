import logo from './logo.svg';
import './App.css';
import { HomePage } from './components/HomePage';
import { Link } from "react-router-dom"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Search } from './components/Search';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/search" element={<Search />} />


          {/* <Route path="search" element={<Search />} />
        <Route path="login" element={<Login />} />
        <Route path="filter" element={<Filter />} />
        <Route path="add-contact" element={<Add_contact />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
