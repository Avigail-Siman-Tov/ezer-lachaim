import GenericForm from "../components/Generic-form";
import "./styles/newVolunteerDetails.css";
import Input from "../components/Input";
import Button from "../components/Button";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Select from "../components/Select";
import { useState } from "react";

function NewVolunteerDetails({ setShowSpinner }) {
    const [inputError, setInputError] = useState({
        cityInput: false,
        carTypeInput: false,
        carNumInput: false,
        seatsNumInput: false,
        sexInput: false,
        notesInput: false,
    });
    const userDetails = {
        city: "",
        carType: "",
        carNum: "",
        seatsNum: 0,
        sex: "",
        notes: "",
    };
    return (
        <div className="form-wrapper img-background">
            <div className="title">טופס הצטרפות למתנדבים</div>
            <Input
                placeholder="עיר מגורים"
                hasError={inputError.cityInput}
                changeHandler={(city) => {
                    userDetails.city = city;
                }}
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
                placeHolder="בחירת סוג רכב"
                hasError={inputError.carTypeInput}
                changeHandler={(carType) => {
                    userDetails.carType = carType;
                }}
            />
            <Input
                placeholder="מספר רכב"
                hasError={inputError.carNumInput}
                changeHandler={(carNum) => {
                    userDetails.carNum = carNum;
                }}
            />
            <Input
                placeholder="מספר מקומות ישיבה"
                hasError={inputError.carNumInput}
                changeHandler={(carNum) => {
                    userDetails.carNum = carNum;
                }}
            />
            <Select options={["אשה", "גבר"]} placeHolder="מגדר" />
            <Input placeholder="הערות" />
            <div className="btn-wrapper">
                <Link to="new-volunteer">
                    <Button text="הקודם" />
                </Link>
                <Link to="/new-volunteer-details">
                    <Button
                        text="שלח"
                        clickHandler={() => {
                            setInputError({
                                ...inputError,
                                cityInput: !userDetails.city,
                                carTypeInput: !userDetails.carType,
                                carNumInput: !userDetails.carNumber,
                                seatsNumInput: !userDetails.seatsNum,
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
    );
}
export default NewVolunteerDetails;
