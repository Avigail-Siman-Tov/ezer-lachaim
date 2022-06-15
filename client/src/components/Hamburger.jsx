import React, { useState, useEffect, useRef } from "react";
import styled, { createGlobalStyle } from "styled-components";
import "../styles/hamburger.css";
import { collection, query, where, getDocs } from "firebase/firestore";
import { useAuth } from "./log_in/contexts/AuthContext"
import { auth, firestore } from "../firebase";
import { getAuth, signOut } from "firebase/auth";
import "./log_in/contexts/AuthContext.jsx";
// import { logout } from "./log_in/contexts/AuthContext"
import { useNavigate } from "react-router-dom"


// import ImgUpload from "../components";
import { Icon } from '@iconify/react';
function Hamburger() {
  const profileDetailsRef = collection(firestore, "newVolunteer");
  const { currentUser, logout } = useAuth();
  const [profileDetails, setProfileDetails] = useState([]);
  const auth = getAuth();
  const navigate = useNavigate()

  async function handleLogout(index) {
    if (index === 1) {
      return
    }
    try {
      await logout()
      navigate("/login")
    }
    catch (err) {
      // setError("Failed to log out: "+ err)
      console.log(err)
    }
  }


  async function getData() {
    // const dataArray = await getDocs(query(callsRef));

    var q = query(profileDetailsRef, where('email', '==', currentUser.email));
    const snapshot = await getDocs(q);

    snapshot.forEach(doc => {
      setProfileDetails(prev => [...prev, doc.data()])
    })

  }

  useEffect(() => {
    getData();
  }, [])

  const [openDrawer, toggleDrawer] = useState(false);
  const drawerRef = useRef(null);


  useEffect(() => {
    /* Close the drawer when the user clicks outside of it */
    const closeDrawer = event => {
      if (drawerRef.current && drawerRef.current.contains(event.target)) {
        return;
      }
      toggleDrawer(false);
    };

    document.addEventListener("mousedown", closeDrawer);
    return () => document.removeEventListener("mousedown", closeDrawer);
  }, []);
  const auth2 = getAuth();

  // signOut(auth2).then(() => {
  //   console.log("aaaaaa")
  //   // Sign-out successful.
  // }).catch((error) => {
  //   // An error happened.
  // });


  return (


    <Styles.Wrapper>
      <CSSReset />
      <Navbar.Wrapper>
        <HamburgerButton.Wrapper onClick={() => toggleDrawer(true)}>
          <HamburgerButton.Lines />
        </HamburgerButton.Wrapper>
        {/* <Navbar.Item> <div className="has">  */}
        <Navbar.Items ref={drawerRef} openDrawer={openDrawer}>
          <Navbar.Item> <div className="img_hamburger1">

            <Navbar.Item> <div className="img_hamburgerup"><Icon icon="healthicons:ui-user-profile" color="#ebe9eb" width="80" height="80" /> </div></Navbar.Item>
            {profileDetails.map((object, index) => (
              <div key={index}>
                <Navbar.Item><a > <div className="home_hamburgerup" >  {object.name}</div></a></Navbar.Item>
                <Navbar.Item><a > <div className="home_hamburgerup" >  {object.email} </div></a></Navbar.Item>
                <Navbar.Item> <div className="line"></div></Navbar.Item>

              </div>
            ))}

          </div></Navbar.Item>

          <Navbar.Item><a href="profil" onClick={() => handleLogout(1)}> <div className="home_hamburger" ><Icon icon="et:profile-male" className="space" color="#356d9c" /> לאזור האישי </div></a></Navbar.Item>
          <Navbar.Item><a href="/" onClick={() => handleLogout(0)} > <div className="home_hamburger1" ><Icon icon="uit:signout" className="space" color="#356d9c" rotate={2} inline={true} /> התנתקות </div></a></Navbar.Item>

        </Navbar.Items>


      </Navbar.Wrapper>
    </Styles.Wrapper>

  );
}

const Styles = {
  Wrapper: styled.main`
    display: flex;
  `
};

const Navbar = {
  Wrapper: styled.nav`
    flex: 1;
    align-self: flex-start;
    padding: 2rem 3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  



    // background-color: white;

    // 40em == 640px
    @media only screen and (max-width: 40em) {
      position: fixed;
      width: 100%;
      
      top: 0;
    }
  `,
  // Logo: styled.h1`
  //   border: 1px solid gray;
  //   padding: 0.5rem 1rem;
  // `,
  Items: styled.ul`
    display: flex;
   
    flex-direction: column;
  
    @media only screen and (max-width: 40em) {
      position: fixed;
      right: 0;
      top: 0;
      height: 100%;
      witgh: 95%;
      flex-direction: column;
  
      background-color: #ebe9eb;
      // padding: 10rem 2rem;
      

      transition: 0.2s ease-out;

      transform: ${({ openDrawer }) =>
      openDrawer ? `translateX(0)` : `translateX(100%)`};
    }
  `,
  Item: styled.li`
  list-style: none;
    padding: 0 1rem;
    
    
    cursor: pointer;
    @media only screen and (max-width: 40em) {
      padding: 1rem 0;

    }
  `
};

const HamburgerButton = {
  Wrapper: styled.button`
    height: 3rem;
    width: 3rem;
    position: relative;
    font-size: 12px;
    color:#356d9c;
    display: none;

    @media only screen and (max-width: 40em) {
      display: block;
    }

    /* Remove default button styles */
    border: none;
    background: transparent;
    outline: none;

    cursor: pointer;

    &:after {
      content: "";
      display: block;
      position: absolute;
      height: 150%;
      width: 150%;
      top: -25%;
      left: -25%;
    }
  `,
  Lines: styled.div`
    top: 50%;
    margin-top: -0.125em;

    &,
    &:after,
    &:before {
      /* Create lines */
      height: 2px;
      pointer-events: none;
      display: block;
      content: "";
      width: 100%;
      background-color: black;
      position: absolute;
    }

    &:after {
      /* Move bottom line below center line */
      top: -0.8rem;
      
    }

    &:before {
      /* Move top line on top of center line */
      top: 0.8rem;
    }
  `
};

const CSSReset = createGlobalStyle`
  *,
  *::before, 
  *::after {
    margin: 0; 
    padding: 0;
    box-sizing: inherit;
  }

  html {
    font-size: 62.5%; /*1rem = 10px*/
    box-sizing: border-box;      
  }  

  body {
    font-size: 1.4rem;
    font-family: sans-serif;
  }
`;

export default Hamburger;