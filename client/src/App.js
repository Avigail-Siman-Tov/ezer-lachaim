import logo from './logo.svg';
import './App.css';
import { HomePage } from './components/HomePage';
import { Link } from "react-router-dom"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Search } from './components/Search';
import { Login } from './components/Login';
import Signup from './components/Signup';
import { useEffect, useState } from "react";
import NewVolunteer from "./pages/NewVolunteer";
import NewVolunteerDetails from "./pages/NewVolunteerDetails";
import Navbar from "./components/Navbar";
import ExistVolunteer from "./pages/ExistVolunteer";
import ExistVolunteer2 from "./pages/ExistVolunteer2";
import Patient from "./pages/Patient";
import BookingShuttle from "./pages/BookingShuttle";
import Spinner from "./components/Spinner";


function App() {
  const [showSpinner, setShowSpinner] = useState(false);
  return (
    <div className="App">
  {showSpinner ? <Spinner/> : undefined}
            <Navbar className="navbar" />
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/search" element={<Search />} />
          {/* <Route path="/signUp" element={<Signup />} /> */}

          <Route path="/login" element={<Login />} />
          {/* <Route path="" element={<search />} /> */}
          {/* <Route path="search" element={<Search />} />
        <Route path="login" element={<Login />} />
        <Route path="filter" element={<Filter />} />
        <Route path="add-contact" element={<Add_contact />} /> */}
         <Route exact path="new-volunteer" element={<NewVolunteer />} />
                    <Route
                        exact
                        path="new-volunteer-details"
                        element={<NewVolunteerDetails setShowSpinner={setShowSpinner} />}
                    />
                    <Route
                        exact
                        path="exist-volunteer"
                        element={<ExistVolunteer />}
                    />
                    <Route
                        exact
                        path="exist-volunteer2"
                        element={<ExistVolunteer2 setShowSpinner={setShowSpinner}/>}
                    />
                    <Route exact path="patient" element={<Patient />} />
                    <Route exact path="bookingShuttle" setShowSpinner={setShowSpinner} element={<bookingShuttle />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
