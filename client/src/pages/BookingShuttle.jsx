import GenericForm from "../components/Generic-form";
import "./styles/newVolunteer.css";
import Input from "../components/Input";
import Button from "../components/Button";
import Select from "../components/Select";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useState } from "react";

function BookingShuttle({ setShowSpinner }) {
    const [inputError, setInputError] = useState({
        carTypeInput: false,
        seatsNumInput: false,
        startingPointInput: false,
        destinationAddressInput: false,
        dateInput: false,
        sexInput: false,
    });
    const userDetails = {
        carType: "",
        seatsNum: 0,
        startingPoint: "",
        destinationAddress: "",
        date: "",
        sex: "",
    };

    return (
        <div className="form-wrapper img-background">
            <div className="title"> הזמנת נסיעה</div>
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
    );
}
export default BookingShuttle;
