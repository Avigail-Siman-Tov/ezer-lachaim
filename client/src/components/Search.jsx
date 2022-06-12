import "../styles/box_search.css"
import { firestore } from "../firebase";
import Navbar from "./Navbar";
import Hamburger from "./Hamburger";
import "../styles/search.css"
import { useEffect, useState } from "react";
import { collection, doc, getDocs, query, setDoc } from "firebase/firestore";
import { React } from "react";
import { Button } from "bootstrap";
import { Icon } from '@iconify/react';
import { Form } from "react-bootstrap"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Search = () => {
    const notify = () => toast.success("תודה שלקחת את הנסיעה! פרטי החולה נשלחו אליך במייל ", { position: "top-center", autoClose: 5000, hideProgressBar: false, closeOnClick: true, pauseOnHover: true, draggable: true, progress: undefined, });

    const [callData, setCallData] = useState([]);
    const [inputValue, setInputValue] = useState("");
    const [blogs, Setblogs] = useState("");
    const [search, setSearch] = useState("");
    const [filter, setFilter] = useState('');

    const callsRef = collection(firestore, "calls");
    // const queryRef = citiesRef.where('state', '==', ''); 

    //     const querySnapshot = await db.collectionGroup('landmarks').where('type', '==', 'museum').get(); 
    // querySnapshot.forEach((doc) => { 
    //   console.log(doc.id, ' => ', doc.data()); 
    // });index.js 

    async function getData() {
        const dataArray = await getDocs(query(callsRef));
        dataArray.forEach(doc => {
            setCallData(prev => [...prev, doc.data()])
        })
    }

    useEffect(() => {
        return () => getData();  
    }, [])

    // function myFunction() { 
    //     var x = document.getElementById("myLinks"); 
    //     if (x.style.display === "block") { 
    //         x.style.display = "none"; 
    //     } else { 
    //         x.style.display = "block"; 
    //     } 
    // } 

    // function openRightMenu() { 
    //     document.getElementById("rightMenu").style.display = "block"; 
    // } 

    // function closeRightMenu() { 
    //     document.getElementById("rightMenu").style.display = "none"; 
    // } 
    // const [inputText, setInputText] = useState(""); 
    // let inputHandler = (e) => { 
    //     //convert input text to lower case 
    //     var lowerCase = e.target.value.toLowerCase(); 
    //     setInputText(lowerCase); 
    // }; 

    const searchText = (event) => {
        setFilter(event.target.value);
    }

    let dataSearch = callData.filter(item => {
        return Object.keys(item).some(key =>
            item[key].toString().toLowerCase().includes(filter.toString().toLowerCase())
        )
    })
    // const SearchBlog=(e)=>{ 
    //     e.preventDefault(); 
    //     Setblogs(blogs.filter((blog)=> 
    //         blogs.Title.toLowerCase().includes(search.toLocaleLowerCase) || blogs.Body.toLowerCase().includes(search.toLocaleLowerCase) 
    //         )); 
    // }; 

    return (
        <div>
            <Hamburger />
            <div className="navbar">
                <img src="/logo_ezl.png" alt="Logo image" />
            </div>
            <Navbar />
            <div className="allPage">
                <form
                // onSubmit={(e)=>(SearchBlog(e))} 
                >
                    <img className="image_travel" src="i7.jpg" />
                    {/* <Form.Group id="search_input">
                        <Icon icon="fluent:search-square-24-filled"  color="#ea6b4c" width="100" height="100" /> */}
                    <input className="box-search " placeholder="הזן עיר לחיפוש" list="places" type="text" id="city" name="search" value={filter} onChange={searchText.bind(this)} required autoComplete="off" pattern="בני ברק|באר יעקב|קריית ים|באקה אל-גרבייה|ביתר עילית|מע'אר|חריש|פתח תקווה|צפת|קנסווה|קריית ביאליק|קריית אונו|קריית מוצקין|קריית אתא|קריית גת|קריית ים| קריית שמונה|קריית מלאכי|ראש העין|ראשון לציון|רהט|רחובות|רמלה|רמת גן|רמת השרון|רעננה|שדרות|תל אביב |שפרעם| עראבה|ערד|עפולה|כפר יונה|כפר סבא|כפר קאסם|כרמיאל|לוד|מגדל העמק|מודיעין מכבים רעות|אום אל פחם|אופקים|אור יהודה|אור עקיבא|אילת|אריאל|אשדוד|אשקלון|באר שבע|בית שאן|בית שמש|בת ים|גבעת שמואל|גבעתיים|דימונה|הרצליה|הוד השרון|חדרה |חולון|חיפה |טבריה|טייבה|טירה |טירת הכרמל|טמרה|יבנה|יהוד מונסון|יקנעם|ירושלים|מעלה אדומים|מעלות תרשיחא|נהריה|נתניה|נס ציונה|נוף הגליל|נצרת|נשר|נתיבות|סח'נין|עכו" />
                    {/* </Form.Group> */}

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
                    {/* <button className="btn_submit">Submit</button> */}
                    {/* <input type="text" name="search" placeholder="Search.."/> */}


                </form>
                {dataSearch.map((object, index) => (
                 <div className="req" key={index}>
                   
                        <div>
                            {"  מקור:   " + object.address_source + " יעד:  " + object.address_destination + " עיר:  " + object.city + " תאריך:  " + object.date + " מגדר:  " + object.gender + " מספר נוסעים:  " + object.number_of_passengers + " סוג רכב:  " + object.car_type}
                            <br />
                            <button className="btn"   onClick={notify}>לקחתי </button>
                        </div>
                       
                    </div>
                ))} 

            </div>
        </div>
    );
}