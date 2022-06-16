import "../styles/box_search.css"
import { firestore } from "../firebase";
import Navbar from "./Navbar";
import Hamburger from "./Hamburger";
import "../styles/search.css"
import { useEffect, useState } from "react";
import { collection, doc, getDocs, query, setDoc, deleteDoc } from "firebase/firestore";
import { React } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, Navigate } from "react-router-dom"
import { useNavigate } from "react-router-dom";
import emailjs from '@emailjs/browser';
import NewVolunteer from "./NewVolunteer";
import { useAuth } from "./log_in/contexts/AuthContext"
import { where } from "firebase/firestore";


export const Search = () => {

    const notify = async (id) => {
        var i, found;
        for (i = 0; i < callData.length; i++) {
            if (callData[i].id == id) {
                found = i;
                emailjs.send('service_z788roe', 'template_a2saktz', { user_email: currentUser.email, name: callData[found].name, phone: callData[found].phone, address_source: callData[found].address_source, address_destination: callData[found].address_destination, city: callData[found].city, gender: callData[found].gender, number_of_passengers: callData[found].number_of_passengers, carType: callData[found].carType, date: callData[found].date, hour: callData[found].hour }, 'acdyoJK5z31WA9GiR')
                    .then((result) => {
                        alert("ההודעה נשלחה בהצלחה", result.text);
                    }, (error) => {
                        console.log(error.text);
                        alert("ארעה שגיאה נסה שנית", error.text);

                    });
                const res = await deleteDoc(doc(firestore, "calls", id));
                setCallData(prev => {
                    const index = prev.findIndex(item => item.id === id);
                    prev.splice(index, 1);
                    return [...prev];
                })

                toast.success("תודה שלקחת את הנסיעה! פרטי החולה נשלחו אליך במייל ", { position: "top-center", autoClose: 5000, hideProgressBar: false, closeOnClick: true, pauseOnHover: true, draggable: true, progress: undefined, });
                return;
            }
        }

    }

    const navigate = useNavigate();

    const [callData, setCallData] = useState([]);
    const [emailVol, setEmailVol] = useState("");
    const [inputValue, setInputValue] = useState("");
    const [blogs, Setblogs] = useState("");
    const [search, setSearch] = useState("");
    const [filter, setFilter] = useState('');
    const { currentUser } = useAuth();
    const newVolunteerRef = collection(firestore, "newVolunteer");
    const callsRef = collection(firestore, "calls");

    async function getData() {

        //Avigail
        // const today = new Date();
        // const dateA = today.getFullYear()+ "-" + parseInt(today.getMonth() + 1) + "-" + today.getDate();
        // console.log(dateA);
        // const dataArray = await getDocs(query(callsRef, where("date", "==", dateA)));

        //Yara
        // const d = new Date();
        // const mm = d.getMonth() + 1;
        // const dd = d.getDate();
        // const yy = d.getFullYear();
        // const formatted = `${dd}-${mm}-${yy}`;
        // const formatted = `${yy}-${mm}-${dd}`;
        // console.log("format is:" + formatted);
        // console.log("date is"+dataSearch.data);
        
        // const dataArray = await getDocs(query(callsRef, where("date", "==", formatted)));

        const dataArray = await getDocs(query(callsRef));
        dataArray.forEach(doc => {
            setCallData(prev => [...prev, { ...doc.data(), id: doc.id }])
        })
    }

    useEffect(() => {
        getData();
    }, [])

    const searchText = (event) => {
        setFilter(event.target.value);
    }

    let dataSearch = callData.filter(item => {
        return Object.keys(item).some(key =>
            item[key].toString().toLowerCase().includes(filter.toString().toLowerCase())
        )
    })
    
    return (
        <div>
            <div className="screen">
                <Hamburger />
                <div className="navbar">
                    <img src="/logo_ezl.png" alt="Logo image" />
                </div>
                <Navbar />
                <form
                >
                    <img className="image_travel" src="i8.jpg" />
                    <input className="box-search " placeholder="הזן עיר לחיפוש" list="places" type="text" id="city" name="search" value={filter} onChange={searchText.bind(this)} required autoComplete="off" pattern="בני ברק|באר יעקב|קריית ים|באקה אל-גרבייה|ביתר עילית|מע'אר|חריש|פתח תקווה|צפת|קנסווה|קריית ביאליק|קריית אונו|קריית מוצקין|קריית אתא|קריית גת|קריית ים| קריית שמונה|קריית מלאכי|ראש העין|ראשון לציון|רהט|רחובות|רמלה|רמת גן|רמת השרון|רעננה|שדרות|תל אביב |שפרעם| עראבה|ערד|עפולה|כפר יונה|כפר סבא|כפר קאסם|כרמיאל|לוד|מגדל העמק|מודיעין מכבים רעות|אום אל פחם|אופקים|אור יהודה|אור עקיבא|אילת|אריאל|אשדוד|אשקלון|באר שבע|בית שאן|בית שמש|בת ים|גבעת שמואל|גבעתיים|דימונה|הרצליה|הוד השרון|חדרה |חולון|חיפה |טבריה|טייבה|טירה |טירת הכרמל|טמרה|יבנה|יהוד מונסון|יקנעם|ירושלים|מעלה אדומים|מעלות תרשיחא|נהריה|נתניה|נס ציונה|נוף הגליל|נצרת|נשר|נתיבות|סח'נין|עכו" />
                    <datalist id="places">
                        <option>אום אל פחם</option>
                        <option>אופקים</option>
                        <option>אור יהודה</option>
                        <option>אור עקיבא</option>
                        <option>אילת</option>
                        <option>אריאל</option>
                        <option>אשדוד</option>
                        <option>אשקלון</option>
                        <option>באקה אל-גרבייה</option>
                        <option>באר יעקב</option>
                        <option>באר שבע</option>
                        <option>ביתר עילית</option>
                        <option>בית שאן</option>
                        <option>בית שמש</option>
                        <option>בני ברק</option>
                        <option>בת ים</option>
                        <option>גבעת שמואל</option>
                        <option>גבעתיים</option>
                        <option>דימונה</option>
                        <option>הוד השרון</option>
                        <option>הרצליה</option>
                        <option>חדרה </option>
                        <option>חולון</option>
                        <option>חיפה</option>
                        <option>חריש</option>
                        <option>טבריה</option>
                        <option>טייבה</option>
                        <option>טירה</option>
                        <option>טירת הכרמל</option>
                        <option>טמרה</option>
                        <option>יבנה</option>
                        <option>יהוד מונסון</option>
                        <option>יקנעם</option>
                        <option>ירושלים</option>
                        <option>כפר יונה</option>
                        <option>כפר סבא</option>
                        <option>כפר קאסם</option>
                        <option>כרמיאל</option>
                        <option>לוד</option>
                        <option>מגדל העמק</option>
                        <option>מודיעין מכבים רעות</option>
                        <option>מע'אר</option>
                        <option>מעלה אדומים</option>
                        <option>מעלות תרשיחא</option>
                        <option>נהריה</option>
                        <option>נוף הגליל</option>
                        <option>נס ציונה</option>
                        <option>נצרת</option>
                        <option>נשר</option>
                        <option>נתיבות</option>
                        <option>נתניה</option>
                        <option>סח'נין</option>
                        <option>עכו</option>
                        <option>עפולה</option>
                        <option>עראבה</option>
                        <option>ערד</option>
                        <option>פתח תקווה</option>
                        <option>צפת</option>
                        <option>קלנסווה</option>
                        <option>קריית אונו</option>
                        <option>קריית אתא</option>
                        <option>קריית ביאליק</option>
                        <option>קריית גת</option>
                        <option>קריית ים</option>
                        <option>קריית מוצקין</option>
                        <option>קריית מלאכי</option>
                        <option>קריית שמונה</option>
                        <option>ראש העין</option>
                        <option>ראשון לציון</option>
                        <option>רהט</option>
                        <option>רחובות</option>
                        <option>רמלה</option>
                        <option>רמת גן </option>
                        <option>רמת השרון</option>
                        <option>רעננה</option>
                        <option>שדרות</option>
                        <option>שפרעם</option>
                        <option>תל אביב</option>

                    </datalist>
                </form>
                {dataSearch.map((object, index) => (
                    <div className="req" key={index}>
                        <div>
                            <div className="flex-container">
                                <div className="right">
                                    <div className="flex">
                                        <div className="det">{"שם מלא:"}</div><span className="tab"></span>{object.name}
                                    </div>
                                    <div className="flex">
                                        <div className="det">{"טלפון:"}</div><span className="tab"></span>{object.phone}
                                    </div>
                                    <div className="flex">
                                        <div className="det">{"מקור:"}</div><span className="tab"></span>{object.address_source}
                                    </div>
                                    <div className="flex">
                                        <div className="det">{"יעד:"}</div><span className="tab"></span>{object.address_destination}
                                    </div>
                                    <div className="flex">
                                        <div className="det">{" עיר:"}</div><span className="tab"></span>{object.city}
                                    </div>
                                </div>
                                <div className="left">
                                    <div className="flex">
                                        <div className="det">{" מגדר:"}</div><span className="tab"></span>{object.gender}
                                    </div>
                                    <div className="flex">
                                        <div className="det">{" מספר נוסעים:"}</div><span className="tab"></span>{object.number_of_passengers}
                                    </div>
                                    <div className="flex">
                                        <div className="det">{" סוג רכב:"}</div><span className="tab"></span>{object.carType}
                                    </div>
                                    <div className="flex">
                                        <div className="det">{" תאריך:"}</div><span className="tab"></span>{object.date}
                                    </div>
                                    <div className="flex">
                                        <div className="det">{"שעה:"}</div><span className="tab"></span>{object.hour}
                                    </div>
                                </div>
                            </div>
                            <div className='container'>
                                <button className="btn_take" onClick={() => notify(object.id)}>לקחתי </button>
                            </div>

                        </div>
                    </div>
                ))
                }
            </div>
        </div >
    );
}