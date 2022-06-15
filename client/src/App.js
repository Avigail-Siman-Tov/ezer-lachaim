import './App.css';
import { HomePage } from './components/HomePage';
import {  Route, Routes } from 'react-router-dom';
import { Search } from './components/Search';
import { useState } from "react";
import NewVolunteer from "./components/NewVolunteer";
import ExistVolunteer from "./components/ExistVolunteer";
import BookingShuttle from "./components/BookingShuttle";
import Spinner from "./components/Spinner";
import {Welcome} from './components/Welcome';
import { Container } from "react-bootstrap"
import { BrowserRouter as Router } from "react-router-dom"
import Dashboard from "./components/log_in/LoginComponent/Dashboard"
import Login from "./components/log_in/LoginComponent/Login"
import { AuthProvider } from './components/log_in/contexts/AuthContext';
import  Profil  from './components/Profil';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ForgotPassword from './components/log_in/LoginComponent/ForgotPassword';

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
                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route exact path="/welcome" element={<Welcome/>} />
                <Route exact path="/new-volunteer" element={<NewVolunteer />} />
                <Route exact path="/exist-volunteer" element={<ExistVolunteer />} />
                <Route exact path="/bookingShuttle" setShowSpinner={setShowSpinner} element={<BookingShuttle />} />
                <Route path="search" element={<Search />} />
                <Route exact path="/profil" element={<Profil />} />    
              </Routes>
            </AuthProvider>
          </Router>
        </div>
      </Container>

    </div>
  );
}

export default App;
