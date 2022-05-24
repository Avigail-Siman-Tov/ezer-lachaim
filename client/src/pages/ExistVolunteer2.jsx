import GenericForm from "../components/Generic-form";
import "./styles/newVolunteer.css";
import Select from "../components/Select";
import Input from "../components/Input";
import Button from "../components/Button";
import ExistVolunteer from "./ExistVolunteer";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useState } from "react";

function ExistVolunteer2({ setShowSpinner }) {
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
        seatsNum: 1,
        sex: "",
        notes: "",
    };
    return (
        <div className="img-background">
            <div className="form-wrapper">
                <Input
                    placeholder="עיר מגורים"
                    hasError={inputError.cityInput}
                    changeHandler={(city) => {
                        userDetails.city = city;
                    }}
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
                <Input placeholder="הערות" />
                <div className="btn-wrapper">
                    <Link to="/exist-volunteer">
                        <Button text="הקודם" />
                    </Link>
                    <Link to="/exist-volunteer2">
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
            </div>
        </div>
    );
}
export default ExistVolunteer2;
