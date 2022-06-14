import "../styles/profil.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { FaHome } from "react-icons/fa"
import { Icon } from '@iconify/react';
import React, { useEffect, useRef, useState } from "react"
import { collection, query, where, getDocs } from "firebase/firestore";
import { useAuth } from "./log_in/contexts/AuthContext"
import NewVolunteer from "./NewVolunteer";
import { firestore } from "../firebase";

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
    const newVolunteerRef = collection(firestore, "newVolunteer");
    const { currentUser, logout } = useAuth();
    console.log("ffffffffffffffffffff")
    const [volunteerDetails, setvolunteerDetails] = useState([]);

    // console.log(currentUser.email);
    //  const result = useState(); 

    // const getData = async () => {
    //     var q = query(newVolunteerRef, where('email', '==', currentUser.email));
    //     const snapshot = await getDocs(q);
    //     const result = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    //     console.log(result[0]);
    //     console.log("kkkkkkkkkkkkkkkkkk")
    // }
    // useEffect(() => { getData() });

    async function getData() {
        // const dataArray = await getDocs(query(callsRef));
        var q = query(newVolunteerRef, where('email', '==', currentUser.email));
        const snapshot = await getDocs(q);
        snapshot.forEach(doc => {
            setvolunteerDetails(prev => [...prev, doc.data()])
        })
    }


    useEffect(() => {
        getData();
    }, [])

    //  result.forEach(doc =>
    //     {
    //       //console.log(doc.data())  
    //       setvolunteerDetails(prev => [...prev, doc.data()])
    //      }
    //  )

    return (

        <div>
            <div className="navbar">
                <a href="/search"> <div className="btn_home"><FaHome className="spaceB"/>Back </div></a>
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
                                {"סוג רכב:  " + object.carType}
                                <br />
                                {"מספר מקומות ישיבה:  " + object.number_of_seets}
                                <br />
                                {"מגדר:  " + object.gender}

                            </div>
                        ))}
                    </div>

                    {/* const q = query(collection(db, "cities"), where("capital", "==", true));

        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
   doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data())}; */}


                    {/* <div >
                        <p className="detail">שם פרטי ומשפחה:  </p>
                        <p className="detail" >טלפון/נייד:</p>
                        <p className="detail">אימייל:</p>
                        <p className="detail">מספר רכב:</p>
                        <p className="detail">מספר מקומות ישיבה:</p>
                        <p className="detail"> מגדר:</p>
                    </div> */}
                    <Link to="/exist-volunteer">
                        <button className="btn_edit"><Icon icon="fa6-solid:pen" color="white" /> עריכה </button>

                    </Link>


                </div>
            </div>
        </div>
    );
}

export default Profil;




