import "../styles/newVolunteer.css";
import Input from "../components/Input";
import Button from "../components/Button";
import React from "react";
import { useState } from "react";
import { useAuth } from "./log_in/contexts/AuthContext";
import Navbar from "../components/Navbar";
import { collection, doc, setDoc } from "firebase/firestore";
import { firestore } from "../firebase";
import Select from "../components/Select";
import { FaHome } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

function NewVolunteer() {
    const notify = (msg) =>
        toast.success(msg, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
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
    const { signup } = useAuth();
    const newVolunteerRef = collection(firestore, "newVolunteer");
    const [inputValue, setInputValue] = useState({
        name: "",
        phone: "",
        email: "",
        password: "",
        confirmPassword: "",
        city: "",
        carType: "",
        number_of_seets: "",
        gender: "",
    });
    const {
        name,
        phone,
        email,
        password,
        city,
        carType,
        number_of_seets,
        gender,
    } = inputValue;
    const [passwordError, setPasswordError] = useState("");
    const [loading, setLoading] = useState(false);
    const [inputError, setInputError] = useState({
        name: false,
        phone: false,
        email: false,
        password: false,
        confirmPassword: false,
        city: false,
        carType: false,
        number_of_seets: false,
        gender: false,
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputValue((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    async function handleSubmit(e) {
        e.preventDefault();
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
        if (
            inputValue.password !== inputValue.confirmPassword ||
            inputValue.password.length < 6
        ) {
            setPasswordError(
                inputValue.password !== inputValue.confirmPassword
                    ? "סיסמא לא תואמת"
                    : "סיסמא צריכה להכיל לפחות 6 תווים"
            );
            setInputError((prev) => ({
                ...prev,
                password: true,
                confirmPassword: true,
            }));
            isMissingRequiredFields = true;
        } else if (inputValue.password === inputValue.confirmPassword) {
            setPasswordError("");
            setInputError((prev) => ({
                ...prev,
                password: !inputValue.password,
                confirmPassword: !inputValue.confirmPassword,
            }));
        }

        if (isMissingRequiredFields) {
            notify_error("יש למלא את כל השדות הנדרשים")
            return;
        }

        try {
            setPasswordError("");
            setLoading(true);

            await sendNewVolunteer();
            notify("!פרטיך נשמרו בהצלחה! מודים על הצטרפותך ");
            navigate("/login");
        } catch (err) {
            console.log(err);
            setPasswordError("failed to create an account");
        }
        setLoading(false);
    }

    async function sendNewVolunteer() {
        try {
            const res = await signup(inputValue.email, inputValue.password);
            console.log("res", res);
            const inputValueCopy = { ...inputValue };
            delete inputValueCopy.confirmPassword;
            await setDoc(
                doc(firestore, "newVolunteer", res.user.uid),
                inputValueCopy
            );
        } catch (err) {
            console.log(err);
        }
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
            <div>
                <div className="form-wrapper">
                    <div className="title1">טופס הצטרפות למתנדבים</div>
                    <Input
                        type="text"
                        value={name}
                        placeholder="שם פרטי ומשפחה"
                        name="name"
                        onChange={handleChange}
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
                    <Input
                        type="text"
                        value={email}
                        placeholder="אימייל"
                        name="email"
                        onChange={handleChange}
                        hasError={inputError.email}
                    />

                    <Input
                        type="password"
                        value={password}
                        placeholder="סיסמא"
                        name="password"
                        onChange={handleChange}
                        hasError={inputError.password}
                    />
                    <Input
                        type="password"
                        placeholder="אימות סיסמא"
                        name="confirmPassword"
                        onChange={handleChange}
                        hasError={inputError.confirmPassword}
                    />
                    <div className="error-msg">{passwordError}</div>
                    <div className="label">עיר מגורים</div>
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
                        placeHolder="בחירת עיר מגורים"
                        name="city"
                        onChange={handleChange}
                        hasError={inputError.city}
                    />
                    <div className="label">איזה רכב יש ברשותך?</div>
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

                    <Input
                        type="text"
                        value={number_of_seets}
                        placeholder="מספר מקומות ישיבה"
                        name="number_of_seets"
                        onChange={handleChange}
                        hasError={inputError.number_of_seets}
                    />
                    <Select
                        options={["אישה", "גבר"]}
                        placeHolder="מגדר"
                        type="text"
                        value={gender}
                        name="gender"
                        onChange={handleChange}
                        hasError={inputError.gender}
                    />

                    <Button text="שלח" onClick={handleSubmit} />
                    <ToastContainer />
                </div>
            </div>
        </div>
    );
}

export default NewVolunteer;
