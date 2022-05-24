import GenericForm from "../components/Generic-form";
import "./styles/newVolunteer.css";
import Input from "../components/Input";
import Button from "../components/Button";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NewVolunteerDetails from "./NewVolunteerDetails";
import { useState } from "react";

function NewVolunteer() {
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
        <div className="img-background">
            <div className="form-wrapper">
                <div className="title">טופס הצטרפות למתנדבים</div>
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
                <Input
                    placeholder="אימות סיסמא"
                    hasError={inputError.confirmPasswordInput}
                    changeHandler={(confirmPassword) => {
                        userDetails.confirmPassword = confirmPassword;
                    }}
                />
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
    );
}
export default NewVolunteer;
