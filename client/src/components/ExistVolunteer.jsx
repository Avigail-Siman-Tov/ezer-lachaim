import "../styles/newVolunteer.css";
import Input from "../components/Input";
import Button from "../components/Button";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Select from "../components/Select";
import { FaHome } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAuth } from "./log_in/contexts/AuthContext";
import { firestore } from "../firebase";
import {
    collection,
    query,
    where,
    getDocs,
    doc,
    setDoc,
} from "firebase/firestore";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function ExistVolunteer() {
    const existVolunteerRef = collection(firestore, "newVolunteer");
    const { currentUser } = useAuth();
    const [existVolunteer, setExistVolunteer] = useState({ name: "", phone: "", city: "", carType: "", number_of_seets: "" });
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
    const navigate = useNavigate();
    const [inputError, setInputError] = useState({
        name: false,
        phone: false,
        city: false,
        carType: false,
        number_of_seets: false,
    });

    const getData = async () => {
        var q = query(
            existVolunteerRef,
            where("email", "==", currentUser.email)
        );
        const snapshot = await getDocs(q);
        snapshot.forEach((doc) => {
            setExistVolunteer({ ...doc.data(), id: doc.id });
        });
    };

    useEffect(() => {
        getData();
    }, []);

    const handleClick = async () => {
        try {
            await setDoc(
                doc(firestore, "newVolunteer", existVolunteer.id),
                existVolunteer
            );
            notify("!פרטיך עודכנו בהצלחה");
            navigate("/search");
        } catch (err) {
            console.log(err);
        }
    };
    async function handleSubmit(e) {
        e.preventDefault();
        let isMissingRequiredFields = false;
        Object.keys(inputError).forEach((key) => {
            setInputError((prev) => ({
                ...prev,
                [key]: !existVolunteer[key],
            }));
            if (!existVolunteer[key]) {
                isMissingRequiredFields = true;
            }
        });

        if (isMissingRequiredFields) {
            notify_error("יש למלא את כל השדות הנדרשים");
            return;
        }
        handleClick();
    }

    return (
        <div>
            <div className="navbar">
                <a href="/">
                    {" "}
                    <div className="btn_home">
                        <FaHome className="spaceB" /> Home{" "}
                    </div>
                </a>
                <img src="/logo_ezl.png" alt="Logo image" />
            </div>
            <Navbar />
            <div className="form-wrapper">
                <div className="title">הפרטים שלי</div>
                <Input
                    value={existVolunteer.name}
                    onChange={(e) =>
                        setExistVolunteer((prev) => {
                            prev.name = e.target.value;
                            return { ...prev };
                        })
                    }
                    hasError={inputError.name}
                />

                <Input
                    value={existVolunteer.phone}
                    onChange={(e) =>
                        setExistVolunteer((prev) => {
                            prev.phone = e.target.value;
                            return { ...prev };
                        })
                    }
                    hasError={inputError.phone}
                />
                <div className="label"></div>
                <Select
                    options={[
                        "אום אל פחם",
                        "אופקים",
                        "אור יהודה",
                        "אור עקיבא",
                        "אילת",
                        "אלעד",
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
                        "חצור הגלילית",
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
                        "מודיעין עילית",
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
                        "קרית ספר",
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
                    value={existVolunteer.city}
                    onChange={(e) =>
                        setExistVolunteer((prev) => {
                            prev.city = e.target.value;
                            return { ...prev };
                        })
                    }
                    hasError={inputError.city}
                />

                <Select
                    options={[
                        "רכב פרטי",
                        "רכב מסחרי",
                        "רכב נכה",
                        "משאית",
                        "דו גלגלי",
                        "אוטובוס",
                    ]}
                    value={existVolunteer.carType}
                    onChange={(e) =>
                        setExistVolunteer((prev) => {
                            prev.carType = e.target.value;
                            return { ...prev };
                        })
                    }
                    hasError={inputError.carType}
                />
                <Input
                    value={existVolunteer.number_of_seets}
                    onChange={(e) =>
                        setExistVolunteer((prev) => {
                            prev.number_of_seets = e.target.value;
                            return { ...prev };
                        })
                    }
                    hasError={inputError.number_of_seets}
                />
                <div className="btn-wrapper">
                    <Button onClick={handleSubmit} text="שמירה" />
                    <ToastContainer />
                </div>
            </div>
        </div>
    );
}
export default ExistVolunteer;
