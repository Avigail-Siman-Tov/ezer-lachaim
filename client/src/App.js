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
import {Welcome} from './components/Welcome';
import {Welcome2} from './components/Welcome2';
import {Choose} from './components/Choose';
// import { Navbar } from "./components/navbar";


import Signup from "./components/log_in/LoginComponent/Signup"
import { Container } from "react-bootstrap"
import { BrowserRouter as Router } from "react-router-dom"
import Dashboard from "./components/log_in/LoginComponent/Dashboard"
import Login from "./components/log_in/LoginComponent/Login"
import PrivateRoute from "./components/log_in/LoginComponent/PrivateRoute"
import ForgotPassword from "./components/log_in/LoginComponent/ForgotPassword"
import UpdateProfile from "./components/log_in/LoginComponent/UpdateProfile"
import { AuthProvider } from './components/log_in/contexts/AuthContext';
import { Seeck } from './components/Seeck';
import All_Hambuger from './components/All_Hambuger';


//for ambuger
// const AppContainer = styled.div`
//   width: 100%;
//   height: 100%;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   background-color: rgba(15, 15, 15, 1);
//   color: #fff;
// `;

// const InnerContainer = styled.div`
//   width: 100%;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   padding: 2em;
// `;

// const SomeContent = styled.h2`
//   color: #fff;
// `;

function App() {
  const [showSpinner, setShowSpinner] = useState(false);
  return (
    <div className="App">

      {showSpinner ? <Spinner /> : undefined}
      <Container className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh", alignContent: 'center' }}>
        <div className="w-100">
          <Router>
            <AuthProvider>
              <Routes>
                <Route exact path="/" element={<HomePage />} />
                <Route exact path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route exact path="/welcome" element={<Welcome/>} />
                <Route exact path="/login/welcome2" element={<Welcome2/>} />

                <Route exact path="/new-volunteer" element={<NewVolunteer />} />
                <Route exact path="/new-volunteer-details" element={<NewVolunteerDetails setShowSpinner={setShowSpinner} />} />
                <Route exact path="/exist-volunteer" element={<ExistVolunteer />} />
                <Route exact path="/exist-volunteer2" element={<ExistVolunteer2 setShowSpinner={setShowSpinner} />} />
                <Route exact path="/patient" element={<Patient />} />
                <Route exact path="/bookingShuttle" setShowSpinner={setShowSpinner} element={<BookingShuttle />} />
                <Route exact path="/choose" element={<Choose />} />
                <Route path="search" element={<Search />} />
                <Route exact path="/seeck" element={<Seeck />} />
                <Route exact path="/all_Hambuger" element={<All_Hambuger />} />
              </Routes>
            </AuthProvider>
          </Router>
        </div>
      </Container>

      {/* <Router>
            <AuthProvider>
              <Routes> */}
      {/* <PrivateRoute exact path="/dashboard" element={<Dashboard />} />
                <PrivateRoute path="/update-profile" element={<UpdateProfile />} /> */}
      {/* <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
              </Routes>
            </AuthProvider>
          </Router> */}

          {/* for ambuger
          {/* <AppContainer>
            <Navbar />
            <InnerContainer>
              <SomeContent>Some Content!</SomeContent>
            </InnerContainer>
          </AppContainer> */}

          {/* <Route path="/signUp" element={<Signup />} /> */}

          {/* <Route path="/login" element={<Login />} /> */}
          {/* <Route path="" element={<search />} /> */}
          {/* <Route path="search" element={<Search />} />
        <Route path="login" element={<Login />} />
        <Route path="filter" element={<Filter />} />
        <Route path="add-contact" element={<Add_contact />} /> */}

    </div>
  );
}

export default App;
