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
import { FaHome } from "react-icons/fa"

function BookingShuttle({ setShowSpinner }) {
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
<<<<<<< Updated upstream
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
=======
    // function ani(){
    //     document.getElementById('plane').className ='animation';
    // }
    // function anitwo(){
    //     document.getElementById('bg').className ='animation2';
    // }
>>>>>>> Stashed changes

    return (
        
        <div>
            <div className="navbar">
                <a href="/"> <div className="btn_home"><FaHome />Home </div></a>
                <img src="/logo_ezl.png" alt="Logo image" />
            </div>
            <Navbar />
            <div className="form-wrapper img-background">
                <div className="title"> הזמנת נסיעה</div>
<<<<<<< Updated upstream
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
=======
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
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
                        "באר שבע",
                        "בית שאן",
                        "בית שמש",
                        "בת ים",
                        "גבעת שמואל",
                        "גבעתיים",
                        "דימונה",
                        "הוד השרון",
                        "הרצליה",
                        "חדרה",
                        "חולון",
                        "חיפה",
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
                    placeHolder="?האם ישנה העדפה למגדר המתנדב"
                />

                <div className="btn-wrapper">
                    <Link to="/BookingShuttle">
                        <Button
                            text="שלח"
                            onClick={sendCall}
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
                        />
                    </Link>
                </div>
            </div>
        </div>
    );
=======
                            "לא משנה לי",
                        ]}
                        placeHolder="בחירת סוג רכב"
                    />
                }
                <Input
                    placeholder=" מספר מקומות ישיבה להסעה"
                    hasError={inputError.seatsNumInput}
                    changeHandler={(seatsNum) => {
                        userDetails.seatsNum = seatsNum;
                    }}
                />
                <Input
                    placeholder="מיקומך הנוכחי"
                    hasError={inputError.startingPointInput}
                    changeHandler={(startingPoint) => {
                        userDetails.startingPoint = startingPoint;
                    }}
                />
                <Input
                    placeholder="כתובת יעד"
                    hasError={inputError.destinationAddressInput}
                    changeHandler={(destinationAddress) => {
                        userDetails.destinationAddress = destinationAddress;
                    }}
                />
                <div className="label">בחירת תאריך לנסיעה:</div>
                <Input
                    type="date"
                    hasError={inputError.dateInput}
                    changeHandler={(date) => {
                        userDetails.date = date;
                    }}
                />
                <Select
                    options={["אשה", "גבר", "לא משנה לי"]}
                    placeHolder="?האם ישנה העדפה למגדר המתנדב"
                />

                {/* <button class="btn btn-inside btn-boarder"><img src="https://i.cloudup.com/gBzAn-oW_S-2000x2000.png" width="64px" height="64px" id="plane"/></button>
                <div class="bg"><img src="https://i.cloudup.com/2ZAX3hVsBE-3000x3000.png" id="bg" width="32px" height="32px" style="opacity:0;"/></div></div>
                <div class="around around-boarder" onclick="ani(); anitwo();"> */}
                    <div className="btn-wrapper">
                        <Link to="/BookingShuttle">
                            <Button
                                text="שלח"

                                clickHandler={() => {
                                    // Object.keys(inputError).forEach((key) => {
                                    //     inputError[key] = userDetails[]
                                    // })
                                    setInputError({
                                        ...inputError,
                                        carTypeInput: !userDetails.carType,
                                        seatsNumInput: !userDetails.seatsNum,
                                        startingPointInput: !userDetails.startingPoint,
                                        destinationAddressInput:
                                            !userDetails.destinationAddress,
                                        dateInput: !userDetails.date,
                                        sexInput: !userDetails.sex,
                                    });
                                    setShowSpinner(true);
                                    setTimeout(setShowSpinner.bind("", false), 3000);
                                    //TODO - http- backend (userDetails)
                                }}
                            />
                        </Link>
                    </div>
                </div>
            </div>
            );
>>>>>>> Stashed changes
}
export default BookingShuttle;
