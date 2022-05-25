import GenericForm from "../components/Generic-form";
import "../styles/newVolunteer.css";
import Input from "../components/Input";
import Button from "../components/Button";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useState } from "react";

function Patient({ setShowSpinner }) {
    const [inputError, setInputError] = useState({
        nameInput: false,
        phoneNumInput: false,
        emailInput: false,
        passwordInput: false,
        confirmPasswordInput: false,
        notesInput: false,
    });
    const userDetails = {
        name: "",
        phoneNum: "",
        email: "",
        password: "",
        confirmPassword: "",
        notes: "",
    };
    return (
        <div className="img-background">
            <div className="form-wrapper">
                <div className="title">טופס הצטרפות</div>
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
                <Input placeholder="הערות" />
                <Link to="/patient">
                    <Button
                        text="שלח"
                        clickHandler={() => {
                            // Object.keys(inputError).forEach((key) => {
                            //     inputError[key] = userDetails[]
                            // })
                            setInputError({
                                ...inputError,
                                nameInput: !userDetails.name,
                                phoneNumInput: !userDetails.phoneNum,
                                emailInput: !userDetails.email,
                                PasswordInput: !userDetails.password,
                                confirmPasswordInput:
                                    !userDetails.confirmPassword,
                            });
                            setShowSpinner(true);
                            setTimeout(setShowSpinner.bind("", false), 3000);
                            //TODO - http- backend (userDetails)
                        }}
                    />
                </Link>
            </div>
        </div>
    );
}
export default Patient;
