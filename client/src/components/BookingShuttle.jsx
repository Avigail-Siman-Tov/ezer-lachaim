import "../styles/newVolunteer.css";
// import "../styles/bookingShuttle.css";
import Input from "../components/Input";
import Button from "../components/Button";
import Select from "../components/Select";
import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { firestore } from "../firebase";
import { collection, doc, setDoc } from "firebase/firestore";
import Navbar from "../components/Navbar";
import { FaHome } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// function BookingShuttle({ setShowSpinner }) {
function BookingShuttle() {
    const notify = () => toast.success("הזמנתך התקבלה במידה ויימצא מתנדב הוא יצור איתך קשר בהקדם ", { position: "top-center", autoClose: 5000, hideProgressBar: false, closeOnClick: true, pauseOnHover: true, draggable: true, progress: undefined, });
    const callsRef = collection(firestore, "calls");
    const [inputValue, setInputValue] = useState({ name: "", phone: "", city: "", address_source: "", address_destination: "", date: "", gender: "", number_of_passengers: "", carType: "" });
    const { name, phone, city, address_source, address_destination, date, gender, number_of_passengers, carType } = inputValue;
    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputValue((prev) => ({
            ...prev,
            [name]: value,
        }));
        console.log(inputValue);
    };
    function sendCall() {
        setDoc(doc(callsRef), inputValue, {
        })
            .then(res => console.log(res))
            .catch(err => console.log(err));
    }
    // const [inputError, setInputError] = useState({
    //     carTypeInput: false,
    //     seatsNumInput: false,
    //     startingPointInput: false,
    //     destinationAddressInput: false,
    //     dateInput: false,
    //     sexInput: false,
    // });
    // const userDetails = {
    //     carType: "",
    //     seatsNum: 0,
    //     startingPoint: "",
    //     destinationAddress: "",
    //     date: "",
    //     sex: "",
    // };

    return (
        <div>
            <div className="navbar">
                <a href="/"> <div className="btn_home"><FaHome className="spaceB" />Home </div></a>
                <img src="/logo_ezl.png" alt="Logo image" />
            </div>
            <Navbar />
            <div className="form-wrapper img-background">
                <div className="title1"> הזמנת נסיעה</div>
                <Input
                    type="text"
                    value={name}
                    name="name"
                    onChange={handleChange}
                    placeholder="שם פרטי ומשפחה"
                />
                <Input
                    type="text"
                    value={phone}
                    placeholder="טלפון/נייד"
                    name="phone"
                    onChange={handleChange}
                />
                <div className="label">איזה רכב תצטרכו להסעה?</div>
                {
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
                }
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
                        "ביתר עילית",
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
                    placeHolder="העיר בה אתה נמצא"
                    name="city"
                    onChange={handleChange}
                />
                <Input
                    type="text"
                    value={address_source}
                    placeholder="כתובת מקור"
                    name="address_source"
                    onChange={handleChange}
                // hasError={inputError.startingPointInput}
                // changeHandler={(startingPoint) => {
                //     userDetails.startingPoint = startingPoint;
                // }}
                />
                <Input
                    type="text"
                    value={address_destination}
                    name="address_destination"
                    onChange={handleChange}
                    placeholder="כתובת יעד"
                // hasError={inputError.destinationAddressInput}
                // changeHandler={(destinationAddress) => {
                //     userDetails.destinationAddress = destinationAddress;
                // }}
                />
                <Input
                    type="text"
                    value={number_of_passengers}
                    name="number_of_passengers"
                    onChange={handleChange}
                    placeholder=" מספר מקומות ישיבה להסעה"
                // hasError={inputError.seatsNumInput}
                // changeHandler={(seatsNum) => {
                //     userDetails.seatsNum = seatsNum;
                // }}
                />

                <div className="label">בחירת תאריך לנסיעה:</div>
                <Input
                    type="date"
                    value={date}
                    name="date"
                    onChange={handleChange}
                    placeholder=" מספר מקומות ישיבה להסעה"
                // hasError={inputError.dateInput}
                // changeHandler={(date) => {
                //     userDetails.date = date;
                // }}
                />
                <Select
                    options={["אשה", "גבר", "לא משנה לי"]}
                    placeHolder="האם ישנה העדפה למגדר המתנדב?"
                />

                <div className="btn-wrapper">
                    <Link to="/login">
                        <Button
                            text="שלח"
                            onClick={() => {
                                notify();
                                sendCall();
                            }}
                        // onClick={sendCall}
                        // clickHandler={() => {
                        //     Object.keys(inputError).forEach((key) => {
                        //         inputError[key] = userDetails[]
                        //     })
                        //     setInputError({
                        //         ...inputError,
                        //         carTypeInput: !userDetails.carType,
                        //         seatsNumInput: !userDetails.seatsNum,
                        //         startingPointInput: !userDetails.startingPoint,
                        //         destinationAddressInput:
                        //             !userDetails.destinationAddress,
                        //         dateInput: !userDetails.date,
                        //         sexInput: !userDetails.sex,
                        //     });
                        //     setShowSpinner(true);
                        //     setTimeout(setShowSpinner.bind("", false), 3000);
                        //     TODO - http- backend (userDetails)
                        // }}
                        /><ToastContainer />
                    </Link>
                </div>
            </div>
        </div>
    );
}
export default BookingShuttle;
