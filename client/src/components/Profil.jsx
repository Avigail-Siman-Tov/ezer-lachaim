import "../styles/profil.css";
// import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { collection, doc, getDocs, query, setDoc, getDoc } from "firebase/firestore";
import { firestore } from "../firebase";
import Select from "../components/Select";
import { FaHome } from "react-icons/fa"
import { Icon } from '@iconify/react';
import React, { useRef, useState } from "react"
import { useAuth } from "../contexts/AuthContext"
import { useNavigate } from "react-router-dom"



function Profil() {
    // const emailRef = useRef()
    // const passwordRef = useRef()
    // const { login } = useAuth()
    // const [error, setError] = useState("")
    // const [loading, setLoading] = useState(false)
    // const [message, setMessage] = useState("")
    // const navigate = useNavigate()
    // async function handleSubmit(e) {
    //     e.preventDefault()

    //     try {
    //         setMessage("")
    //         setError("")
    //         setLoading(true)
    //         const res = await login(emailRef.current.value, passwordRef.current.value)
    //         console.log(res.user.uid)
    //         const volunteerRef = doc(firestore, "newVolunteer", res.user.uid);
    //         const docSnap = await getDoc(volunteerRef);
    //         navigate("/login/welcome2")
    //     }
    //     catch (e) {
    //         setError("סיסמא לא חוקית או משתמש לא קיים במערכת")
    //         //  setError(e.message)
    //     }
    //     setLoading(false)
    // }
    return (
        <div>
            <div className="navbar">
                <a href="/"> <div className="btn_home"><FaHome />Home </div></a>
                <img src="/logo_ezl.png" alt="Logo image" />
            </div>
            <Navbar />
            <div>
                <div className="form-wrapper">
                    <div className="title">הפרופיל שלי:</div>
                    <div >
                        <p className="detail">שם פרטי ומשפחה:</p>
                        <p className="detail" >טלפון/נייד:</p>
                        <p className="detail">אימייל:</p>
                        <p className="detail">סיסמא:</p>
                        <p className="detail">מספר רכב:</p>
                        <p className="detail">מספר מקומות ישיבה:</p>
                        <p className="detail"> מגדר:</p>
                    </div>
                    <Link to="/exist-volunteer">
                        <button className="btn_edit"><Icon icon="fa6-solid:pen" color="white" />עריכה</button>

                    </Link>


                </div>
            </div>
        </div>
    );
}

export default Profil;




