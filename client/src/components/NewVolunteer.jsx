
import "../styles/newVolunteer.css";
import Input from "../components/Input";
import Button from "../components/Button";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link, Navigate } from "react-router-dom";
import NewVolunteerDetails from "./NewVolunteerDetails";
import { useState } from "react";
import { useAuth } from "./log_in/contexts/AuthContext"
import Navbar from "../components/Navbar";
import { collection, doc, setDoc } from "firebase/firestore";
import { firestore } from "../firebase";
import Select from "../components/Select";
import { FaHome } from "react-icons/fa"
import { useRef } from "react"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Example } from "./Example";
import { useNavigate } from "react-router-dom"




// import { useNavigate } from "react-router-dom"


function NewVolunteer({ setShowSpinner }) {
    const notify = () => toast.success("!פרטיך נשמרו בהצלחה! מודים על הצטרפותך ", { position: "top-center", autoClose: 5000, hideProgressBar: false, closeOnClick: true, pauseOnHover: true, draggable: true, progress: undefined, });
    const { signup } = useAuth();
    const newVolunteerRef = collection(firestore, "newVolunteer");
    const [inputValue, setInputValue] = useState({ name: "", phone: "", email: "", password: "", confirm_password: "", city: "", carType: "", carNumber: "", number_of_seets: "", gender: "", remarks: "" });
    const { name, phone, email, password, confirm_password, city, carType, carNumber, number_of_seets, gender, remarks } = inputValue;
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(name, value)
        setInputValue((prev) => ({
            ...prev,
            [name]: value,
        }));
        console.log("bbbbbbbbbbb"+inputValue);
    };

    async function handleSubmit(e) {
        e.preventDefault()
        console.log(inputValue)

        if (inputValue.password !== inputValue.confirm_password) {
            setError('סיסמא לא תואמת')
            return
        }

        // 6 תווים

        try {
            setError("")
            setLoading(true)
            // await signup(emailRef.current.value, passwordRef.current.value)
            await sendNewVolunteer();
            notify();
            navigate("/login")
        }
        catch (err) {
            console.log(err)
            setError('failed to create an account')
        }
        setLoading(false)
    }

    async function sendNewVolunteer() {
        try {
            const res = await signup(inputValue.email, inputValue.password);
            console.log("res", res);
            await setDoc(doc(firestore, "newVolunteer", res.user.uid), inputValue,
            )
        } catch (err) {
            console.log(err)
        }
    }



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
        genderInput: false,
        notesInput: false,
    });

    const userDetails = {
        name: "",
        phoneNum: "",
        email: "",
        Password: "",
        confirmPassword: "",
        city: "",
        carType: "",
        carNum: "",
        seatsNum: 0,
        sex: "",
        notes: "",
    };
    return (
        <div >
            {/* <div>{error}</div> */}
            <div className="navbar">
                <a href="/"> <div className="btn_home"><FaHome className="spaceB" />Home </div></a>
                <img src="/logo_ezl.png" alt="Logo image" />
            </div>
            <Navbar />
            <div>
                <div className="form-wrapper">
                    <div className="title1">טופס הצטרפות למתנדבים</div>
                    {/* <Example/> */}
                    <Input
                        type="text"
                        value={name}
                        placeholder="שם פרטי ומשפחה"
                        name="name"
                        onChange={handleChange}
                    // hasError={inputError.nameInput}
                    // changeHandler={(name) => {
                    //     userDetails.name = name;
                    // }}
                    />
                    <Input
                        type="text"
                        value={phone}
                        placeholder="טלפון/נייד"
                        name="phone"
                        onChange={handleChange}
                    // hasError={inputError.phoneNumInput}
                    // changeHandler={(phoneNum) => {
                    //     userDetails.phoneNum = phoneNum;
                    // }}
                    />
                    <Input
                        type="text"
                        value={email}
                        placeholder="אימייל"
                        name="email"
                        onChange={handleChange}
                    // hasError={inputError.emailInput}
                    // changeHandler={(email) => {
                    //     userDetails.email = email;
                    // }}
                    />
                    <Input
                        type="password"
                        value={password}
                        placeholder="סיסמא"
                        name="password"
                        onChange={handleChange}
                    // hasError={inputError.passwordInput}
                    // changeHandler={(password) => {
                    //     userDetails.password = password;
                    // }}
                    />
                    <div className="error">
                        <Input
                            type="password"
                            // value={confirm_password}
                            placeholder="אימות סיסמא"
                            name="confirm_password"
                            onChange={handleChange}
                        // onChange={handleSubmit} 
                        // hasError={inputError.confirmPasswordInput}
                        // changeHandler={(confirmPassword) => {
                        //     userDetails.confirmPassword = confirmPassword;
                        // }}
                        />
                        {error}</div>
                    {/* <Input
                    placeholder="עיר מגורים" value={cityInput} onChange={(e) => setCityInput(e.target.value)}
                     hasError={inputError.cityInput}
                     changeHandler={(city) => {
                         userDetails.city = city;
                    }}
                /> */}
                        <div className="label" >עיר מגורים</div>
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
                            type="text"
                            value={city}
                            placeHolder="בחירת עיר מגורים"
                            name="city"
                            onChange={handleChange}
                        />
                        <div className="label">איזה רכב יש ברשותך?</div>
                        <Select
                            options={[
                                "רכב פרטי",
                                "רכב מסחרי",
                                "רכה נכה",
                                "משאית",
                                "דו גלגלי",
                                "אוטובוס",
                            ]}
                            type="text"
                            value={carType}
                            placeHolder="בחירת סוג רכב"
                            name="carType"
                            onChange={handleChange}
                        // hasError={inputError.carTypeInput}
                        // changeHandler={(carType) => {
                        //     userDetails.carType = carType;
                        // }}
                        />
                        {/* <Input
                            type="text"
                            value={carNumber}
                            placeholder="מספר רכב"
                            name="carNumber"
                            onChange={handleChange}
                        // hasError={inputError.carNumInput}
                        // changeHandler={(carNum) => {
                        //     userDetails.carNum = carNum;
                        // }}
                        /> */}
                        <Input
                            type="text"
                            value={number_of_seets}
                            placeholder="מספר מקומות ישיבה"
                            name="number_of_seets"
                            onChange={handleChange}
                        // hasError={inputError.carNumInput}
                        // changeHandler={(carNum) => {
                        //     userDetails.carNum = carNum;
                        // }}
                        />
                        <Select options={["אשה", "גבר"]}
                            placeHolder="מגדר"
                            type="text"
                            value={gender}
                            name="gender"
                            onChange={handleChange}
                        />

                        {/* <Input
                            type="text"
                            value={remarks}
                            placeholder="הערות"
                            name="remarks"
                            onChange={handleChange}
                        /> */}
                        {/* <Link to="/login"> */}
                        <Button
                            text="שלח"
                            onClick={handleSubmit}
                        // {/* // clickHandler={() => {
                        // //     setInputError({
                        // //         ...inputError,
                        // //         cityInput: !userDetails.city,
                        // //         carTypeInput: !userDetails.carType,
                        // //         carNumInput: !userDetails.carNumber,
                        // //         seatsNumInput: !userDetails.seatsNum,
                        // //         sexInput: !userDetails.sex,
                        // //     });
                        // //     setShowSpinner(true);
                        // //     setTimeout(setShowSpinner.bind("", false), 3000);
                        // // }} */}
                        /><ToastContainer />
                        {/* </Link> */}
                        {/* /> */}


                    {/* // <Link to="/new-volunteer-details">
                    //     <Button 
                    //     text="הבא" */}

                    {/* //         clickHandler={() => { */}
                    {/* //             setInputError({
                    //                 ...inputError,
                    //                 nameInput: !userDetails.name,
                    //                 phoneNumInput: !userDetails.phoneNum,
                    //                 emailInput: !userDetails.email,
                    //                 PasswordInput: !userDetails.Password,
                    //                 confirmPasswordInput:
                    //                     !userDetails.confirmPassword,
                    //             });

                            // }} 
                            // />
                    // </Link>                  

                    // <link to="/NewVolunteerDetails" > */}
                </div>
            </div>
            {/* </div> */}
        </div>
    );
}

export default NewVolunteer;
