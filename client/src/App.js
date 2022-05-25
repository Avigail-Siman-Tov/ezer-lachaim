import logo from './logo.svg';
import './App.css';
import { HomePage } from './components/HomePage';
import { Link } from "react-router-dom"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Search } from './components/Search';
// import { Login } from './components/Login';
import { useEffect, useState } from "react";
import NewVolunteer from "./components/NewVolunteer";
import NewVolunteerDetails from "./components/NewVolunteerDetails";
import Navbar from "./components/Navbar";
import ExistVolunteer from "./components/ExistVolunteer";
import ExistVolunteer2 from "./components/ExistVolunteer2";
import Patient from "./components/Patient";
import BookingShuttle from "./components/BookingShuttle";
import Spinner from "./components/Spinner";

// import Signup from "./components/log_in/LoginComponent/Signup"
// import { Container } from "react-bootstrap"
// import { AuthProvider } from "../components/log_in/contexts/AuthContext"
// import { BrowserRouter as Router } from "react-router-dom"
// import Dashboard from "./components/log_in/LoginComponent/Dashboard"
// import Login from "./components/log_in/LoginComponent/Login"
// import PrivateRoute from "./components/log_in/LoginComponent/PrivateRoute"
// import ForgotPassword from "./components/log_in/LoginComponent/ForgotPassword"
// import UpdateProfile from "./components/log_in/LoginComponent/UpdateProfile"


function App() {
  const [showSpinner, setShowSpinner] = useState(false);
  return (
    <div className="App">
      {/* <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh" }}
      >
        <div className="w-100" style={{ maxWidth: "400px" }}>
          <Router>
            <AuthProvider>
              <Routes>
                <PrivateRoute exact path="/" element={<Dashboard />} />
                <PrivateRoute path="/update-profile" element={<UpdateProfile />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
              </Routes>
            </AuthProvider>
          </Router>
        </div>
      </Container> */}
      {showSpinner ? <Spinner /> : undefined}
      <Navbar className="navbar" />
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/search" element={<Search />} />
          {/* <Route path="/signUp" element={<Signup />} /> */}

          {/* <Route path="/login" element={<Login />} /> */}
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
            element={<ExistVolunteer2 setShowSpinner={setShowSpinner} />}
          />
          <Route exact path="patient" element={<Patient />} />
          <Route exact path="bookingShuttle" setShowSpinner={setShowSpinner} element={<bookingShuttle />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
