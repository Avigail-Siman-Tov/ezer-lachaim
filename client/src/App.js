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
// import ExistVolunteer2 from "./components/ExistVolunteer2";
import Patient from "./components/Patient";
import BookingShuttle from "./components/BookingShuttle";
import Spinner from "./components/Spinner";
import {Welcome} from './components/Welcome';
import {Welcome2} from './components/Welcome2';
// import Cards from './components/Cards';
import { Example } from './components/Example';

import Signup from "./components/log_in/LoginComponent/Signup"
import { Container } from "react-bootstrap"
import { BrowserRouter as Router } from "react-router-dom"
import Dashboard from "./components/log_in/LoginComponent/Dashboard"
import Login from "./components/log_in/LoginComponent/Login"
import PrivateRoute from "./components/log_in/LoginComponent/PrivateRoute"
import ForgotPassword from "./components/log_in/LoginComponent/ForgotPassword"
import UpdateProfile from "./components/log_in/LoginComponent/UpdateProfile"
import { AuthProvider } from './components/log_in/contexts/AuthContext';
import  Profil  from './components/Profil';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [showSpinner, setShowSpinner] = useState(false);
  return (
    <div className="App">
      
      <ToastContainer/> 
      {showSpinner ? <Spinner /> : undefined}
      <Container className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh", alignContent: 'center' }}>
        <div className="w-100">
          <Router>
            <AuthProvider>
              <Routes>
                <Route exact path="/" element={<HomePage />} />
                <Route exact path="/login" element={<Login />} />
                {/* <Route path="/signup" element={<Signup />} /> */}
              
                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route exact path="/welcome" element={<Welcome/>} />
                <Route exact path="/login/welcome2" element={<Welcome2/>} />
                {/* <Route exact path="/accept" element={<Accept />} /> */}
                <Route exact path="/new-volunteer" element={<NewVolunteer />} />
                <Route exact path="/new-volunteer-details" element={<NewVolunteerDetails setShowSpinner={setShowSpinner} />} />
                <Route exact path="/exist-volunteer" element={<ExistVolunteer />} />
                {/* <Route exact path="/exist-volunteer2" element={<ExistVolunteer2 setShowSpinner={setShowSpinner} />} /> */}
                <Route exact path="/patient" element={<Patient />} />
                <Route exact path="/bookingShuttle" setShowSpinner={setShowSpinner} element={<BookingShuttle />} />
                <Route path="search" element={<Search />} />
                <Route exact path="/profil" element={<Profil />} />    
                <Route exact path="/example" element={<Example />} />        
              </Routes>
            </AuthProvider>
          </Router>
        </div>
      </Container>

    </div>
  );
}

export default App;
