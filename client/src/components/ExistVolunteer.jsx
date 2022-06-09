import "../styles/newVolunteer.css";
import Input from "../components/Input";
import Button from "../components/Button";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Select from "../components/Select";
import { FaHome } from "react-icons/fa"

function ExistVolunteer({setShowSpinner} ) {
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
    return (
        <div className="img-background">
            <div className="navbar">
                 <a href="/"> <div className="btn_home"><FaHome/> Home </div></a>
                 <img src="/logo_ezl.png" alt="Logo image" />
            </div>
            <Navbar/>
            <div className="form-wrapper">
                <div className="title">הפרטים שלי:</div>
                <Input
                    placeholder="שם פרטי ומשפחה"
                    hasError={inputError.nameInput}
                    changeHandler={(name) => {
                        userDetails.name = name;
                    }}
                />
                <Input
                    placeholder="טלפון/נייד"
                    hasError={inputError.phoneNumInput}
                    changeHandler={(phoneNum) => {
                        userDetails.phoneNum = phoneNum;
                    }}
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
                            "כפר יונה","כפר סבא",
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
                        placeHolder="בחירת עיר מגורים" 
                        // value={cityInput} onChange={(e) => setCityInput(e.target.value)}
                     
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
                    placeHolder="בחירת סוג רכב"
                />
                {/* <Input
                    placeholder="מספר רכב"
                    hasError={inputError.carNumInput}
                    changeHandler={(carNum) => {
                        userDetails.carNum = carNum;
                    }}
                /> */}
                <Input
                    placeholder="מספר מקומות ישיבה"
                    hasError={inputError.carNumInput}
                    changeHandler={(carNum) => {
                        userDetails.carNum = carNum;
                    }}
                />
                {/* <Input placeholder="הערות" /> */}
                <div className="btn-wrapper">
                    {/* <Link to="/exist-volunteer">
                        <Button text="הקודם" />
                    </Link> */}
                    <Link to="/exist-volunteer">
                        <Button
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
                        />
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
