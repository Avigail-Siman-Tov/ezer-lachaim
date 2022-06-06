import GenericForm from "../components/Generic-form";
import "../styles/profil.css";
import Input from "../components/Input";
import Button from "../components/Button";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NewVolunteerDetails from "./NewVolunteerDetails";
import { useState } from "react";
import Navbar from "../components/Navbar";
import { collection, doc, getDocs, query, setDoc } from "firebase/firestore";
import { firestore } from "../firebase";
import Select from "../components/Select";
import { FaHome } from "react-icons/fa"

function Profil() {

    return (
        <div>
            <Navbar />
            <div>
                <div className="form-wrapper">
                    <div className="title">הפרופיל שלי:</div>
                    {/* <input type="text" value={nameInput} onChange={(e) => setNameInput(e.target.value)} /> */}
                    {/* <br></br> */}
                    <div >
                        <p className="detail">שם פרטי ומשפחה:</p>
                        <p className="detail" >טלפון/נייד:</p>
                        <p className="detail">אימייל:</p>
                        <p className="detail">סיסמא:</p>
                        <p className="detail">מספר רכב:</p>
                        <p className="detail">מספר מקומות ישיבה:</p>
                        <p className="detail"> מגדר:</p>
                    </div>
                    {/* <button onClick={sendNewVolunteer}>send</button> */}
                    <Link to="/exist-volunteer">
                        <button className="btn_edit">עריכה</button>
                   
                    </Link>


                </div>
            </div>
        </div>
    );
}

export default Profil;




