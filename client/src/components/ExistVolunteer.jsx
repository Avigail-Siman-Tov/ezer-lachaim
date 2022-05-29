import GenericForm from "../components/Generic-form";
import "../styles/newVolunteer.css";
import Input from "../components/Input";
import Button from "../components/Button";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useState } from "react";
import Navbar from "../components/Navbar";

function ExistVolunteer() {
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
        password: "",
        confirmPassword: "",
    };
    return (
        <div className="img-background">
            <Navbar/>
            <div className="form-wrapper">
                <div className="title">הפרופיל שלי:</div>
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
                <Input
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
                />
                <Link to="/exist-volunteer2">
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
                </Link>
            </div>
        </div>
    );
}
export default ExistVolunteer;
