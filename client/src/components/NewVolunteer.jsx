import GenericForm from "../components/Generic-form";
import "../styles/newVolunteer.css";
import Input from "../components/Input";
import Button from "../components/Button";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NewVolunteerDetails from "./NewVolunteerDetails";
import { useState } from "react";
import Navbar from "../components/Navbar";
import { collection, doc, getDocs, query, setDoc } from "firebase/firestore";
import { firestore } from "../firebase";
import Select from "../components/Select";
import { FaHome } from "react-icons/fa"

function NewVolunteer({ setShowSpinner }) {
    const newVolunteerRef = collection(firestore, "newVolunteer");
    const [callData, setCallData] = useState([]);
     const [newVolunteerData, setnewVolunteerData] = useState([]);
    const [nameInput, setNameInput] = useState("");
    const [phoneNumInput, setPhoneNumInput] = useState("");
    const [emailInput, setEmailInput] = useState("");
    const [passwordInput, setPasswordInput] = useState("");
    const [cityInput, setCityInput] = useState("");
    const [carTypeInput, setCarTypeInput] = useState("");
    const [carNumInput, setCarNumInput] = useState("");
    const [seatsNumInput, setSeatsNumInput] = useState("");
    const [genderInput, setGenderInput] = useState("");


    function sendNewVolunteer() {
        setDoc(doc(newVolunteerRef), {
            name: nameInput,
            phone: phoneNumInput,
            email: emailInput,
            password: passwordInput,
            city: cityInput,
            car_type: carTypeInput,
            car_number: carNumInput,
            number_of_seets: seatsNumInput,
            gender: genderInput
        })
            .then(res => console.log(res))
            .catch(err => console.log(err));
    }
    
    // const [inputError, setInputError] = useState({
    //     nameInput: false,
    //     phoneNumInput: false,
    //     emailInput: false,
    //     passwordInput: false,
    //     confirmPasswordInput: false,
    //     cityInput: false,
    //     carTypeInput: false,
    //     carNumInput: false,
    //     seatsNumInput: false,
    //     genderInput: false,
    //     notesInput: false,
    // });

    // const userDetails = {
    //     name: "",
    //     phoneNum: "",
    //     email: "",
    //     Password: "",
    //     confirmPassword: "",
    //     city: "",
    //     carType: "",
    //     carNum: "",
    //     seatsNum: 0,
    //     sex: "",
    //     notes: "",
    // };
    return (
        <div>
            <Navbar/>
            <div>
                <div className="form-wrapper">
                    <div className="title">טופס הצטרפות למתנדבים</div>
                    <input type="text" value={nameInput} onChange={(e) => setNameInput(e.target.value)} />
                    <Input type="text" value={nameInput}

                        placeholder="שם פרטי ומשפחה"
                        // hasError={inputError.nameInput}
                        // changeHandler={(name) => {
                        //     userDetails.name = name;
                        // }}
                        onChange={(e) => setNameInput(e.target.value)}
                    />
                    <Input type="text" value={phoneNumInput} onChange={(e) => setPhoneNumInput(e.target.value)}
                        placeholder="טלפון/נייד"
                        // hasError={inputError.phoneNumInput}
                        // changeHandler={(phoneNum) => {
                        //     userDetails.phoneNum = phoneNum;
                        // }}
                        // onChange={(e) => setPhoneNumInput(e.target.value)}
                    />
                    <Input value={emailInput} onChange={(e) => setEmailInput(e.target.value)}
                        placeholder="אימייל"
                        // hasError={inputError.emailInput}
                        // changeHandler={(email) => {
                        //     userDetails.email = email;
                        // }}
                    />
                    <Input
                        placeholder="סיסמא" value={passwordInput} onChange={(e) => setPasswordInput(e.target.value)}
                        // hasError={inputError.passwordInput}
                        // changeHandler={(password) => {
                        //     userDetails.password = password;
                        // }}
                    />
                    <Input
                        placeholder="אימות סיסמא"
                        // hasError={inputError.confirmPasswordInput}
                        // changeHandler={(confirmPassword) => {
                        //     userDetails.confirmPassword = confirmPassword;
                        // }}
                    />
                  {/* <Input
                    placeholder="עיר מגורים" value={cityInput} onChange={(e) => setCityInput(e.target.value)}
                     hasError={inputError.cityInput}
                     changeHandler={(city) => {
                         userDetails.city = city;
                    }}
                /> */}
                <div className="label" >עיר מגורים</div>
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
                        "באר שבע",
                            "בית שאן",
                            "בית שמש",
                            "בת ים",
                            "גבעת שמואל",
                            "גבעתיים",
                            "דימונה",
                            "הוד השרון",
                            "הרצליה",
                            "חדרה",
                            "חולון",
                            "חיפה",
                            "טבריה",
                            "טייבה",
                            "טירה",
                            "טירת הכרמל",
                            "טמרה",
                            "יבנה",
                            "יהוד מונסון",
                            "יקנעם",
                            "ירושלים",
                            "כפר יונה","כפר סבא",
                            "כפר קאסם",
                           "כרמיאל",
                           "לוד",
                           "מגדל העמק",
                           "מודיעין מכבים רעות",
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
                        placeHolder="בחירת עיר מגורים" value={cityInput} onChange={(e) => setCityInput(e.target.value)}
                     
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
                
                        placeHolder="בחירת סוג רכב" value={carTypeInput} onChange={(e) => setCarTypeInput(e.target.value)}
                        // hasError={inputError.carTypeInput}
                        // changeHandler={(carType) => {
                        //     userDetails.carType = carType;
                        // }}
                    />
                    <Input 
                    value={carNumInput} onChange={(e) => setCarNumInput(e.target.value)}
                        placeholder="מספר רכב"
                        // hasError={inputError.carNumInput}
                        // changeHandler={(carNum) => {
                        //     userDetails.carNum = carNum;
                        // }}
                    />
                    <Input value={seatsNumInput} onChange={(e) => setSeatsNumInput(e.target.value)}
                        placeholder="מספר מקומות ישיבה"
                        // hasError={inputError.carNumInput}
                        // changeHandler={(carNum) => {
                        //     userDetails.carNum = carNum;
                        // }}
                    />
                    <Select options={["אשה", "גבר"]} placeHolder="מגדר" />
                    <Input placeholder="הערות" value={genderInput} onChange={(e) => setGenderInput(e.target.value)} />
                    <button onClick={sendNewVolunteer}>send</button>
                    <div className="btn-wrapper">
                        {/* <Link to="/new-volunteer">
                                <Button text="הקודם" />
                            </Link> */}
                        {/* <Link to="/new-volunteer-details"> */}
                        {/* <Button */}
                        <div>
                       

                            {/* <Link to="/">שלח</Link> */}
                            {/* // clickHandler={() => {
                            //     setInputError({
                            //         ...inputError,
                            //         cityInput: !userDetails.city,
                            //         carTypeInput: !userDetails.carType,
                            //         carNumInput: !userDetails.carNumber,
                            //         seatsNumInput: !userDetails.seatsNum,
                            //         genderInput: !userDetails.sex,
                            //     });
                            //     setShowSpinner(true);
                            //     setTimeout(setShowSpinner.bind("", false), 3000);
                            // }} */}
                        </div>
                         {/* /> */}
                        {/* <input type="text" value={nameInput} onChange={(e) => setNameInput(e.target.value)} /> */}
                        {/* <input type="text" value={phoneNumInput} onChange={(e) => setPhoneNumInput(e.target.value)} /> */}
                        {/* <input type="text" value={emailInput} onChange={(e) => setEmailInput(e.target.value)} /> */}
                        {/* <input type="text" value={passwordInput} onChange={(e) => setPasswordInput(e.target.value)} /> */}

                        {/* // <Link to="/new-volunteer-details">
                    //     <Button 
                    //     text="הבא" */}

                        {/* //         clickHandler={() => { */}
                        {/* //             setInputError({
                    //                 ...inputError,
                    //                 nameInput: !userDetails.name,
                    //                 phoneNumInput: !userDetails.phoneNum,
                    //                 emailInput: !userDetails.email,
                    //                 PasswordInput: !userDetails.Password,
                    //                 confirmPasswordInput:
                    //                     !userDetails.confirmPassword,
                    //             });

                            // }} 
                            // />
                    // </Link>                  

                    // <link to="/NewVolunteerDetails" > */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NewVolunteer;







// import GenericForm from "../components/Generic-form";
// import "../styles/newVolunteer.css";
// import Input from "../components/Input";
// import Button from "../components/Button";
// import React from "react";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import NewVolunteerDetails from "./NewVolunteerDetails";
// import { useState } from "react";
// import Navbar from "../components/Navbar";
// import { collection, doc, getDocs, query, setDoc } from "firebase/firestore";
// import { firestore } from "../firebase";
// import Select from "../components/Select";


// function NewVolunteer() {
//     const newVolunteerRef = collection(firestore, "newVolunteer");
//     const [newVolunteerData, setnewVolunteerData] = useState([]);
//     const [nameInput, setNameInput] = useState("");
//     const [phoneNumInput, setPhoneNumInput] = useState("");
//     const [emailInput, setEmailInput] = useState("");
//     const [passwordInput, setPasswordInput] = useState("");
//     const [inputCityValue, setInputCityValue] = useState("");
//     const [inputCarTypeValue, setInputCarTypeValue] = useState("");
//     const [inputCarNumberValue, setInpuCarNumberValue] = useState("");
//     const [inputNumberOfSeetsValue, setInputNumberOfSeetsValue] = useState("");
//     const [inputGenderValue, setInputGenderValue] = useState("");   

//     function sendNewVolunteer () {
//         setDoc(doc(newVolunteerRef), {
//             name: nameInput,
//             phone: phoneNumInput,
//             email: emailInput,
//             password: passwordInput,
//             city: inputCityValue,
//             car_type: inputCarTypeValue,
//             car_number: inputCarNumberValue,
//             number_of_seets: inputNumberOfSeetsValue,
//             gender: inputGenderValue
//         });
//     }
 
//     const [inputError, setInputError] = useState({
//         nameInput: false,
//         phoneNumInput: false,
//         emailInput: false,
//         passwordInput: false,
//         confirmPasswordInput: false,
//     });
//     const userDetails = {
//         name: "",
//         phoneNum: "",
//         email: "",
//         Password: "",
//         confirmPassword: "",
//     };
//     return (
//         <div className="img-background">
//             <div className="form-wrapper">
//                 <div className="title">טופס הצטרפות למתנדבים</div>
//                 <input type="text" value={nameInput} onChange={(e) => setNameInput(e.target.value)} />
//                 <button onClick={sendNewVolunteer}>send</button>


//                 <Input
//                     placeholder="שם פרטי ומשפחה"
//                     hasError={inputError.nameInput}
//                     changeHandler={(name) => {
//                         userDetails.name = name;
//                     }}
//                 />
//                 <Input
//                     placeholder="טלפון/נייד"
//                     hasError={inputError.phoneNumInput}
//                     changeHandler={(phoneNum) => {
//                         userDetails.phoneNum = phoneNum;
//                     }}
//                 />
//                 <Input
//                     placeholder="אימייל"
//                     hasError={inputError.emailInput}
//                     changeHandler={(email) => {
//                         userDetails.email = email;
//                     }}
//                 />
//                 <Input
//                     placeholder="סיסמא"
//                     hasError={inputError.passwordInput}
//                     changeHandler={(password) => {
//                         userDetails.password = password;
//                     }}
//                 />
//                 <Input
//                     placeholder="אימות סיסמא"
//                     hasError={inputError.confirmPasswordInput}
//                     changeHandler={(confirmPassword) => {
//                         userDetails.confirmPassword = confirmPassword;
//                     }}
//                 />
//                 <Link to="/new-volunteer-details">
//                     <Button
//                         text="הבא"
//                         clickHandler={() => {
//                             setInputError({
//                                 ...inputError,
//                                 nameInput: !userDetails.name,
//                                 phoneNumInput: !userDetails.phoneNum,
//                                 emailInput: !userDetails.email,
//                                 PasswordInput: !userDetails.Password,
//                                 confirmPasswordInput:
//                                     !userDetails.confirmPassword,
//                             });
                            
//                         }}
//                     />
//                 </Link>

//                 {/* <link to="/NewVolunteerDetails" > */}
//             </div>
//         </div>
//     );
// }
// export default NewVolunteer;






// import GenericForm from "../components/Generic-form";
// import "../styles/newVolunteer.css";
// import Input from "../components/Input";
// import Button from "../components/Button";
// import React from "react";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import NewVolunteerDetails from "./NewVolunteerDetails";
// import { useState } from "react";
// import Navbar from "../components/Navbar";
// import { collection, doc, getDocs, query, setDoc } from "firebase/firestore";
// import { firestore } from "../firebase";

// function NewVolunteer() {
//     const newVolunteerRef = collection(firestore, "newVolunteer");

//     const [nameInput, setNameInput] = useState("");
//     const [phoneNumInput, setPhoneNumInput] = useState("");
//     const [emailInput, setEmailInput] = useState("");
//     const [passwordInput, setPasswordInput] = useState("");
//     const [inputCityValue, setInputCityValue] = useState("");
//     const [inputCarTypeValue, setInputCarTypeValue] = useState("");
//     const [inputCarNumberValue, setInpuCarNumberValue] = useState("");
//     const [inputNumberOfSeetsValue, setInputNumberOfSeetsValue] = useState("");
//     const [inputGenderValue, setInputGenderValue] = useState("");


//     function sendNewVolunteer() {
//         setDoc(doc(newVolunteerRef), {
//             name: nameInput,
//             phone: phoneNumInput,
//             email: emailInput,
//             password: passwordInput,
//             city: inputCityValue,
//             car_type: inputCarTypeValue,
//             car_number: inputCarNumberValue,
//             number_of_seets: inputNumberOfSeetsValue,
//             gender: inputGenderValue
//         })
//             .then(res => console.log(res))
//             .catch(err => console.log(err));
//     }

//     const [inputError, setInputError] = useState({
//         nameInput: false,
//         phoneNumInput: false,
//         emailInput: false,
//         passwordInput: false,
//         confirmPasswordInput: false,
//     });

//     const userDetails = {
//         name: "",
//         phoneNum: "",
//         email: "",
//         Password: "",
//         confirmPassword: "",
//     };
//     return (
//         <div>
//             <Navbar />
//             <div style={{ backgroundImage: "url(/image-background.jpg)", minHeight: '100%', margin: 0 }}>
//                 <div className="form-wrapper">
//                     <div className="title">טופס הצטרפות למתנדבים</div>
//                     <Input value={nameInput}
//                         placeholder="שם פרטי ומשפחה"
//                         hasError={inputError.nameInput}
//                         changeHandler={(name) => {
//                             userDetails.name = name;
//                         }}
//                         onChange={(e) => setNameInput(e.target.value)}
//                     />
//                     <Input value={phoneNumInput} 
//                         placeholder="טלפון/נייד"
//                         hasError={inputError.phoneNumInput}
//                         changeHandler={(phoneNum) => {
//                             userDetails.phoneNum = phoneNum;
//                         }}
//                         onChange={(e) => setPhoneNumInput(e.target.value)}
//                     />
//                     <Input value={emailInput} onChange={(e) => setEmailInput(e.target.value)}
//                         placeholder="אימייל"
//                         hasError={inputError.emailInput}
//                         changeHandler={(email) => {
//                             userDetails.email = email;
//                         }}
//                     />
//                     <Input
//                         placeholder="סיסמא" value={passwordInput} onChange={(e) => setPasswordInput(e.target.value)}
//                         hasError={inputError.passwordInput}
//                         changeHandler={(password) => {
//                             userDetails.password = password;
//                         }}
//                     />
//                     <Input 
//                         placeholder="אימות סיסמא"
//                         hasError={inputError.confirmPasswordInput}
//                         changeHandler={(confirmPassword) => {
//                             userDetails.confirmPassword = confirmPassword;
//                         }}
                       
//                     />
                  
//                     <Link to="/new-volunteer-details">
//                         <Button 
//                         text="הבא"
                            
//                             clickHandler={() => {
//                                 setInputError({
//                                     ...inputError,
//                                     nameInput: !userDetails.name,
//                                     phoneNumInput: !userDetails.phoneNum,
//                                     emailInput: !userDetails.email,
//                                     PasswordInput: !userDetails.Password,
//                                     confirmPasswordInput:
//                                         !userDetails.confirmPassword,
//                                 });

//                             }} 
//                             />
//                     </Link>                  
//                 </div>
//             </div>
//         </div>
//     );
// }
// export default NewVolunteer;