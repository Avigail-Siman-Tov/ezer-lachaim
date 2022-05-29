import "../styles/search.css"
import { Icon } from '@iconify/react';
import { useEffect, useState } from "react";
import { collection, doc, getDocs, query, setDoc } from "firebase/firestore";
// import Card from "react-bootstrap/Card";
import { Button } from 'react-bootstrap';
import { Card } from "react-bootstrap"
import Navbar from "../components/Navbar";

import { firestore } from "../firebase";

export const Seeck = () => {
    const callsRef = collection(firestore, "calls");

    const [inputValue, setInputValue] = useState("");
    const [inputValue_destination, setInputValue_destination] = useState("");
    const [inputValue_date, setInputValue_date] = useState("");
    const [inputValue_gender, setInputValue_gender] = useState("");
    const [inputValue_number_of_passengers, setInputValue_number_of_passengers] = useState("");
    const [inputValue_cat_type, setInputValue_cat_type] = useState("");
   
        function sendCall() {
            setDoc(doc(callsRef), {
                source: inputValue,
                destination: inputValue_destination,
                date: inputValue_date,
                gender: inputValue_gender,
                number_of_passengers: inputValue_number_of_passengers,
                car_type: inputValue_cat_type
            })
                .then(res => console.log(res))
                .catch(err => console.log(err));
        }


    return (
        <div>
            <Navbar/>
            <div className="cards">
            <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
            <button onClick={sendCall}>send</button>
        </div>
        </div>
        
    );
}
