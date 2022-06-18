import "../styles/newVolunteer.css";
import "../styles/bookingShuttle.css";
import Input from "../components/Input";
import Button from "../components/Button";
import Select from "../components/Select";
import React from "react";
import { useState } from "react";
import { firestore } from "../firebase";
import { collection, doc, setDoc } from "firebase/firestore";
import Navbar from "../components/Navbar";
import { FaHome } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

function BookingShuttle() {
    const notify = (msg) =>
        toast.success(
            msg,
            {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            }
        );
    const notify_error = (msg) =>
        toast.error(msg, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    const callsRef = collection(firestore, "calls");
    const [inputValue, setInputValue] = useState({
        name: "",
        phone: "",
        city: "",
        address_source: "",
        address_destination: "",
        date: "",
        hour: "",
        gender: "",
        number_of_passengers: "",
        carType: "",
    });
    const {
        name,
        phone,
        city,
        address_source,
        address_destination,
        date,
        hour,
        gender,
        number_of_passengers,
        carType,
    } = inputValue;
    const [inputError, setInputError] = useState({
        name: false,
        phone: false,
        city: false,
        address_source: false,
        address_destination: false,
        date: false,
        hour: false,
        gender: false,
        number_of_passengers: false,
        carType: false,
    });
    const navigate = useNavigate();
    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputValue((prev) => ({
            ...prev,
            [name]: value,
        }));
    };
    function sendCall() {
        setDoc(doc(callsRef), inputValue, {})
            .then((res) => {
                navigate("/");
                console.log(res);
            })
            .catch((err) => console.log(err));
    }
    async function handleSubmit(e) {
        let isMissingRequiredFields = false;
        Object.keys(inputError).forEach((key) => {
            setInputError((prev) => ({
                ...prev,
                [key]: !inputValue[key],
            }));
            if (!inputValue[key]) {
                isMissingRequiredFields = true;
            }
        });
        console.log(inputError);
        if (isMissingRequiredFields) {
            notify_error("יש למלא את כל השדות הנדרשים")
            return;
        }
        notify("הזמנתך התקבלה במידה ויימצא מתנדב הוא יצור איתך קשר בהקדם ");
        sendCall();
    }

    return (
        <div>
            <div className="navbar">
                <a href="/">
                    {" "}
                    <div className="btn_home">
                        <FaHome className="spaceB" />
                        Home{" "}
                    </div>
                </a>
                <img src="/logo_ezl.png" alt="Logo image" />
            </div>
            <Navbar />
            <div className="form-wrapper img-background">
                <div className="title1"> הזמנת נסיעה</div>
                <Input
                    type="text"
                    value={name}
                    name="name"
                    onChange={handleChange}
                    placeholder="שם פרטי ומשפחה"
                    hasError={inputError.name}
                />
                <Input
                    type="text"
                    value={phone}
                    placeholder="טלפון/נייד"
                    name="phone"
                    onChange={handleChange}
                    hasError={inputError.phone}

                />
                <div className="label">איזה רכב תצטרכו להסעה?</div>
                {
                    <Select
                        options={[
                            "רכב פרטי",
                            "רכב מסחרי",
                            "רכב נכה",
                            "משאית",
                            "דו גלגלי",
                            "אוטובוס",
                        ]}
                        type="text"
                        value={carType}
                        placeHolder="בחירת סוג רכב"
                        name="carType"
                        onChange={handleChange}
                        hasError={inputError.carType}
                    />
                }
                <div className="label"></div>
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
                        "ביתר עילית",
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
                        "כפר יונה",
                        "כפר סבא",
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
                    type="text"
                    value={city}
                    placeHolder="העיר בה אתה נמצא"
                    name="city"
                    onChange={handleChange}
                    hasError={inputError.city}

                />
                <Input
                    type="text"
                    value={address_source}
                    placeholder="כתובת מקור"
                    name="address_source"
                    onChange={handleChange}
                    hasError={inputError.address_source}
                />
                <Input
                    type="text"
                    value={address_destination}
                    name="address_destination"
                    onChange={handleChange}
                    placeholder="כתובת יעד"
                    hasError={inputError.address_destination}
                />
                <Input
                    type="text"
                    value={number_of_passengers}
                    name="number_of_passengers"
                    onChange={handleChange}
                    placeholder=" מספר מקומות ישיבה להסעה"
                    hasError={inputError.number_of_passengers}
                />

                <div className="label">בחירת תאריך לנסיעה:</div>
                <Input
                    type="date"
                    value={date}
                    name="date"
                    onChange={handleChange}
                    placeholder="תאריך"
                    hasError={inputError.date}
                />
                <div className="label">בחירת שעה לנסיעה:</div>
                <Input
                    type="time"
                    min="09:00"
                    max="18:00"
                    required
                    value={hour}
                    name="hour"
                    onChange={handleChange}
                    placeholder="שעה"
                    hasError={inputError.hour}

                />
                <Select
                    options={["אישה", "גבר"]}
                    type="text"
                    value={gender}
                    name="gender"
                    onChange={handleChange}
                    placeHolder="מגדר"
                    hasError={inputError.gender}

                />

                <div className="btn-wrapper">
                    <Button
                        text="שלח"
                        onClick={() => {
                            handleSubmit();
                        }}
                    />
                    <ToastContainer />
                </div>
            </div>
        </div>
    );
}
export default BookingShuttle;
