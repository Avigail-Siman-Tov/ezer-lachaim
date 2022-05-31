
import GenericForm from "../components/Generic-form";
import "../styles/newVolunteer.css";
import Input from "../components/Input";
import Button from "../components/Button";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NewVolunteerDetails from "./NewVolunteerDetails";
import { useState } from "react";
import Navbar from "../components/Navbar";
import { collection, doc, getDocs, query, setDoc } from "firebase/firestore";
import { firestore } from "../firebase";

function NewVolunteer() {
    const newVolunteerRef = collection(firestore, "newVolunteer");

    // const [newVolunteerData, setnewVolunteerData] = useState([]);
    const [nameInput, setNameInput] = useState("");
    const [phoneNumInput, setPhoneNumInput] = useState("");
    const [emailInput, setEmailInput] = useState("");
    const [passwordInput, setPasswordInput] = useState("");
    const [inputCityValue, setInputCityValue] = useState("");
    const [inputCarTypeValue, setInputCarTypeValue] = useState("");
    const [inputCarNumberValue, setInpuCarNumberValue] = useState("");
    const [inputNumberOfSeetsValue, setInputNumberOfSeetsValue] = useState("");
    const [inputGenderValue, setInputGenderValue] = useState("");


    function sendNewVolunteer() {
        setDoc(doc(newVolunteerRef), {
            name: nameInput,
            phone: phoneNumInput,
            email: emailInput,
            password: passwordInput,
            city: inputCityValue,
            car_type: inputCarTypeValue,
            car_number: inputCarNumberValue,
            number_of_seets: inputNumberOfSeetsValue,
            gender: inputGenderValue
        })
            .then(res => console.log(res))
            .catch(err => console.log(err));
    }

    const [inputError, setInputError] = useState({
        nameInput: false,
        phoneNumInput: false,
        emailInput: false,
        passwordInput: false,
        confirmPasswordInput: false,
    });

    const userDetails = {
        name: "",
        phoneNum: "",
        email: "",
        Password: "",
        confirmPassword: "",
    };
    return (
        <div>
            <Navbar />
            <div style={{ backgroundImage: "url(/image-background.jpg)", minHeight: '100%', margin: 0 }}>
                <div className="form-wrapper">
                    <div className="title">טופס הצטרפות למתנדבים</div>
                    <Input value={nameInput}
                        placeholder="שם פרטי ומשפחה"
                        hasError={inputError.nameInput}
                        changeHandler={(name) => {
                            userDetails.name = name;
                        }}
                        onChange={(e) => setNameInput(e.target.value)}
                    />
                    <Input value={phoneNumInput} 
                        placeholder="טלפון/נייד"
                        hasError={inputError.phoneNumInput}
                        changeHandler={(phoneNum) => {
                            userDetails.phoneNum = phoneNum;
                        }}
                        onChange={(e) => setPhoneNumInput(e.target.value)}
                    />
                    <Input value={emailInput} onChange={(e) => setEmailInput(e.target.value)}
                        placeholder="אימייל"
                        hasError={inputError.emailInput}
                        changeHandler={(email) => {
                            userDetails.email = email;
                        }}
                    />
                    <Input
                        placeholder="סיסמא" value={passwordInput} onChange={(e) => setPasswordInput(e.target.value)}
                        hasError={inputError.passwordInput}
                        changeHandler={(password) => {
                            userDetails.password = password;
                        }}
                    />
                    <Input 
                        placeholder="אימות סיסמא"
                        hasError={inputError.confirmPasswordInput}
                        changeHandler={(confirmPassword) => {
                            userDetails.confirmPassword = confirmPassword;
                        }}
                       
                    />
                     {/* <input type="text" value={nameInput} onChange={(e) => setNameInput(e.target.value)} /> */}
                    {/* <input type="text" value={phoneNumInput} onChange={(e) => setPhoneNumInput(e.target.value)} /> */}
                    {/* <input type="text" value={emailInput} onChange={(e) => setEmailInput(e.target.value)} /> */}
                    {/* <input type="text" value={passwordInput} onChange={(e) => setPasswordInput(e.target.value)} /> */}
                  
                    <Link to="/new-volunteer-details">
                        <Button 
                        text="הבא"
                            
                            clickHandler={() => {
                                setInputError({
                                    ...inputError,
                                    nameInput: !userDetails.name,
                                    phoneNumInput: !userDetails.phoneNum,
                                    emailInput: !userDetails.email,
                                    PasswordInput: !userDetails.Password,
                                    confirmPasswordInput:
                                        !userDetails.confirmPassword,
                                });

                            }} 
                            />
                    </Link>                  

                    {/* <link to="/NewVolunteerDetails" > */}
                </div>
            </div>
        </div>
    );
}
export default NewVolunteer;