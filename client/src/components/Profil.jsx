import "../styles/profil.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { FaHome } from "react-icons/fa"
import { Icon } from '@iconify/react';
import React, { useEffect, useRef, useState } from "react"
import { collection, query, where, getDocs } from "firebase/firestore";
import { useAuth } from "./log_in/contexts/AuthContext"
import { firestore } from "../firebase";

function Profil() {
    const newVolunteerRef = collection(firestore, "newVolunteer");
    const { currentUser, logout } = useAuth();
    const [volunteerDetails, setvolunteerDetails] = useState([]);

    async function getData() {
        var q = query(newVolunteerRef, where('email', '==', currentUser.email));
        const snapshot = await getDocs(q);
        snapshot.forEach(doc => {
            setvolunteerDetails(prev => [...prev, doc.data()])
        })
    }

    useEffect(() => {
        getData();
    }, [])

    return (

        <div>
            <div className="navbar">
                <a href="/search"> <div className="btn_home" > <Icon className="spaceC" icon="eva:arrow-back-outline" rotate={2} />Back </div></a>
                <img src="/logo_ezl.png" alt="Logo image" />
            </div>
            <Navbar />

            <div>
                <div className="form-wrapper">
                <Icon className="profileImg" icon="healthicons:ui-user-profile" color="#6c6c6c" />

                    <div className="title">הפרופיל שלי</div>
                    <div className="detailsProfile">
                        {volunteerDetails.map((object, index) => (
                            <div key={index}>
                                {"שם פרטי:  " + object.name}
                                <br />
                                {"טלפון/נייד:  " + object.phone}
                                <br />
                                {"אימייל:  " + object.email}
                                <br />
                                {"עיר:  " + object.city}
                                <br />
                                {"סוג רכב:  " + object.carType}
                                <br />
                                {"מספר מקומות ישיבה:  " + object.number_of_seets}
                                <br />
                                {"מגדר:  " + object.gender}

                            </div>
                        ))}
                    </div>
                    <Link to="/exist-volunteer">
                        <button className="btn_edit"><Icon icon="fa6-solid:pen" color="white" /> עריכה </button>

                    </Link>


                </div>
            </div>
        </div>
    );
}

export default Profil;




