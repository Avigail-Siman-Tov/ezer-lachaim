import GenericForm from "../components/Generic-form";
import "../styles/newVolunteer.css";
import Input from "../components/Input";
import Button from "../components/Button";
import Select from "../components/Select";
import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { firestore } from "../firebase";
import { collection, doc, getDocs, query, setDoc } from "firebase/firestore";
import Navbar from "../components/Navbar";
import { FaHome } from "react-icons/fa"

function BookingShuttle({ setShowSpinner }) {
    // const callsRef = collection(firestore, "calls");
    // const [inputValue_city, setInputValue_city] = useState("");
    // const [inputValue_source, setInputValue_source] = useState("");
    // const [inputValue_destination, setInputValue_destination] = useState("");
    // const [inputValue_date, setInputValue_date] = useState("");
    // const [inputValue_gender, setInputValue_gender] = useState("");
    // const [inputValue_number_of_passengers, setInputValue_number_of_passengers] = useState("");
    // const [inputValue_car_type, setInputValue_car_type] = useState("");

    // function sendCall() {
    //     setDoc(doc(callsRef), {
    //         city: inputValue_city,
    //         source: inputValue_source,
    //         destination: inputValue_destination,
    //         date: inputValue_date,
    //         gender: inputValue_gender,
    //         number_of_passengers: inputValue_number_of_passengers,
    //         car_type: inputValue_car_type
    //     })
    //         .then(res => console.log(res))
    //         .catch(err => console.log(err));
    // }
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
        <div>
            <div className="navbar">
                 <a href="/"> <div className="btn_home"><FaHome/>Home </div></a>
                 <img src="/logo_ezl.png" alt="Logo image" />
            </div>
            <Navbar/>
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
        </div>
    );
}
export default BookingShuttle;
