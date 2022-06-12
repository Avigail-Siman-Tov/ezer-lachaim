import "../styles/newVolunteer.css";
import Input from "../components/Input";
import Button from "../components/Button";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Select from "../components/Select";
import { FaHome } from "react-icons/fa"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAuth } from "./log_in/contexts/AuthContext"
// import * as firebase from "firebase/app"
import { firestore } from "../firebase";
import { collection, query, where, getDocs, doc } from "firebase/firestore";
import React, { useEffect } from "react"
import NewVolunteer from "./NewVolunteer";
// import "../styles/input2.css";
// import "../styles/select2.css";

 


function ExistVolunteer({ setShowSpinner }) {
    const existVolunteerRef = collection(firestore, "newVolunteer");
    const { currentUser, logout } = useAuth();
    const [name, setName] = useState("");
    const [existVolunteer, setExistVolunteer] = useState([]);

   
    async function getData() {
        // const dataArray = await getDocs(query(callsRef));
        console.log("ggggggggggggggg")       

        var q = query(existVolunteerRef, where('email', '==', currentUser.email));
        console.log("q issss"+q);
        const snapshot = await getDocs(q);
        console.log("snapshot issss"+snapshot);

        snapshot.forEach(doc => {
            setExistVolunteer(prev => [...prev, doc.data()])
        })
        console.log("existVolunteer issss"+existVolunteer[0]);

    }

    useEffect(() => {
        return () => getData();
    }, [])



    const notify = () => toast.success("!פרטיך עודכנו בהצלחה", {
        position: "top-center", autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
    const [inputError, setInputError] = useState({
        nameInput: false,
        phoneNumInput: false,
        emailInput: false,
        passwordInput: false,
        confirmPasswordInput: false,
        cityInput: false,
        carTypeInput: false,
        carNumInput: false,
        seatsNumInput: false,
        sexInput: false,
        notesInput: false,
    });
    const userDetails = {
        name: "",
        phoneNum: "",
        email: "",
        password: "",
        confirmPassword: "",
        city: "",
        carType: "",
        carNum: "",
        seatsNum: 1,
        sex: "",
        notes: "",
    };
    // console.log(existVolunteer.email)
    return (


        <div className="img-background">

            {/* <button title="Submit" onClick={() => changeDetails()} /> */}
            {/* <button title="Fetch data" onClick={() => fetchUserDetails()} /> */}

            <div className="navbar">
                <a href="/"> <div className="btn_home"><FaHome /> Home </div></a>
                <img src="/logo_ezl.png" alt="Logo image" />
            </div>
            <Navbar />
            <div className="form-wrapper">
                <div className="title">הפרטים שלי:</div>
                {/* { existVolunteer.map((object, index) => (
                 <div key={index}> */}
            {/* <input value={object.email} /> */}
                <Input
                    placeholder={doc.data().name}
                // placeholder={existVolunteer[0].name}
                // hasError={inputError.nameInput}
                // changeHandler={(name) => {
                //     userDetails.name = name;
                // hasError={inputError.nameInput}
                // changeHandler={(name) => {
                //     userDetails.name = name;
                // }}
                // }}
                />
                 <Input
                    placeholder={doc.data().email}
                                        // placeholder={existVolunteer[0].email}

                // hasError={inputError.nameInput}
                // changeHandler={(name) => {
                //     userDetails.name = name;
                // hasError={inputError.nameInput}
                // changeHandler={(name) => {
                //     userDetails.name = name;
                // }}
                // }}
                />
                        

                <Input 
                    placeholder={doc.data().phone}
                    // placeholder={existVolunteer[0].phone}

                // hasError={inputError.phoneNumInput}
                // changeHandler={(phoneNum) => {
                //     userDetails.phoneNum = phoneNum;
                // hasError={inputError.phoneNumInput}
                // changeHandler={(phoneNum) => {
                //     userDetails.phoneNum = phoneNum;
                // }}
                // }}
                />
                {/* <Input
                    placeholder="אימייל"
                    hasError={inputError.emailInput}
                    changeHandler={(email) => {
                        userDetails.email = email;
                    }}
                />
                <Input
                    placeholder="סיסמא"
                    hasError={inputError.passwordInput}
                    changeHandler={(password) => {
                        userDetails.password = password;
                    }}
                
                /> */}
                {/* <Input
                    placeholder="עיר מגורים" value={cityInput} onChange={(e) => setCityInput(e.target.value)}
                     hasError={inputError.cityInput}
                     changeHandler={(city) => {
                         userDetails.city = city;
                    }}
                /> */}
                <div className="label" ></div>
                <Select 
                    options={[

                        "אום אל פחם",
                        "אופקים",
                        "אור יהודה",
                        "אור עקיבא",
                        "אילת",
                        "אריאל",
                        "אשדוד",
                        "אשקלון",
                        "באקה אל-גרבייה",
                        "באר יעקב",
                        "באר שבע",
                        "ביתר עלית",
                        "בית שאן",
                        "בית שמש",
                        "בני ברק",
                        "בת ים",
                        "גבעת שמואל",
                        "גבעתיים",
                        "דימונה",
                        "הוד השרון",
                        "הרצליה",
                        "חדרה",
                        "חולון",
                        "חיפה",
                        "חריש",
                        "טבריה",
                        "טייבה",
                        "טירה",
                        "טירת הכרמל",
                        "טמרה",
                        "יבנה",
                        "יהוד מונסון",
                        "יקנעם",
                        "ירושלים",
                        "כפר יונה", "כפר סבא",
                        "כפר קאסם",
                        "כרמיאל",
                        "לוד",
                        "מגדל העמק",
                        "מודיעין מכבים רעות",
                        "מע'אר",
                        "מעלה אדומים",
                        "מעלות תרשיחא",
                        "נהריה",
                        "נוף הגליל",
                        "נס ציונה",
                        "נצרת",
                        "נשר",
                        "נתיבות",
                        "נתניה",
                        "סח'נין",
                        "עכו",
                        "עפולה",
                        "עראבה",
                        "ערד",
                        "פתח תקווה",
                        "צפת",
                        "קלנסווה",
                        "קריית אונו",
                        "קריית אתא",
                        "קריית ביאליק",
                        "קריית גת",
                        "קריית ים",
                        "קריית מוצקין",
                        "קריית מלאכי",
                        "קריית שמונה",
                        "ראש העין",
                        "ראשון לציון",
                        "רהט",
                        "רחובות",
                        "רמלה",
                        "רמת גן",
                        "רמת השרון",
                        "רעננה",
                        "שדרות",
                        "שפרעם",
                        "תל אביב יפו",


                    ]}
                    placeHolder={doc.data().city}
                                        // placeHolder={existVolunteer[0].city}

                // value={cityInput} onChange={(e) => setCityInput(e.target.value)}
                // type="text"
                // value={city}
                // name="city"
                // onChange={handleChange}   
                // hasError={inputError.cityInput}
                // changeHandler={(city) => {
                //     userDetails.city = city;
                // }}

                />


                <Select 
                    options={[
                        "רכב פרטי",
                        "רכב מסחרי",
                        "רכה נכה",
                        "משאית",
                        "דו גלגלי",
                        "אוטובוס",
                    ]}
                    placeHolder={doc.data().carType}
                                        // placeHolder={NewVolunteer[0].carType}

                />
                {/* <Input
                    placeholder="מספר רכב"
                    hasError={inputError.carNumInput}
                    changeHandler={(carNum) => {
                        userDetails.carNum = carNum;
                    }}
                /> */}
                <Input
                    placeholder={doc.data().number_of_seets}
                                        // placeholder={NewVolunteer[0].number_of_seets}

                // hasError={inputError.carNumInput}
                // changeHandler={(carNum) => {
                //     userDetails.carNum = carNum;
                // hasError={inputError.carNumInput}
                // changeHandler={(carNum) => {
                //     userDetails.carNum = carNum;
                // }}
                // }}
                />
                    {/* </div>
            ))}  */}
                {/* <Input placeholder="הערות" /> */}
                <div className="btn-wrapper">
                    {/* <Link to="/exist-volunteer">
                        <Button text="הקודם" />
                    </Link> */}
                    <Link to="/search">
                        <Button onClick={notify}
                            text="שמירה"
                            clickHandler={() => {
                                // Object.keys(inputError).forEach((key) => {
                                //     inputError[key] = userDetails[]
                                // })
                                setInputError({
                                    ...inputError,
                                    cityInput: !userDetails.city,
                                    carTypeInput: !userDetails.carType,
                                    carNumInput: !userDetails.carNumber,
                                    seatsNumInput: !userDetails.seatsNum,
                                    sexInput: !userDetails.sex,
                                });

                                setShowSpinner(true);
                                setTimeout(
                                    setShowSpinner.bind("", false),
                                    3000
                                );
                                //TODO - http- backend (userDetails)
                            }}
                        />   <ToastContainer />
                    </Link>
                </div>
                {/* <Link to="/exist-volunteer2">
                    <Button
                        text="הבא"
                        clickHandler={() => {
                            setInputError({
                                ...inputError,
                                nameInput: !userDetails.name,
                                phoneNumInput: !userDetails.phoneNum,
                                emailInput: !userDetails.email,
                                PasswordInput: !userDetails.password,
                                confirmPasswordInput:
                                    !userDetails.confirmPassword,
                            });
                        }}
                    />
                </Link> */}
                
            </div>
            
        </div>
    );
}
export default ExistVolunteer;
