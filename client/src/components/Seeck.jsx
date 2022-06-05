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
    const [inputValue_city, setInputValue_city] = useState("");
    const [inputValue_source, setInputValue_source] = useState("");
    const [inputValue_destination, setInputValue_destination] = useState("");
    const [inputValue_date, setInputValue_date] = useState("");
    const [inputValue_gender, setInputValue_gender] = useState("");
    const [inputValue_number_of_passengers, setInputValue_number_of_passengers] = useState("");
    const [inputValue_car_type, setInputValue_car_type] = useState("");
   
        function sendCall() {
            setDoc(doc(callsRef), {
                city: inputValue_city,
                source: inputValue_source,
                destination: inputValue_destination,
                date: inputValue_date,
                gender: inputValue_gender,
                number_of_passengers: inputValue_number_of_passengers,
                car_type: inputValue_car_type
            })
                .then(res => console.log(res))
                .catch(err => console.log(err));
        }

    return (
        <div>
            <Navbar/>
            <div className="cards">
            <input type="text" value={inputValue_city} onChange={(e) => setInputValue_city(e.target.value)} />
            <input type="text" value={inputValue_source} onChange={(e) => setInputValue_source(e.target.value)} />
            <input type="text" value={inputValue_destination} onChange={(e) => setInputValue_destination(e.target.value)} />
            <input type="text" value={inputValue_date} onChange={(e) => setInputValue_date(e.target.value)} />
            <input type="text" value={inputValue_gender} onChange={(e) => setInputValue_gender(e.target.value)} />
            <input type="text" value={inputValue_number_of_passengers} onChange={(e) => setInputValue_number_of_passengers(e.target.value)} />
            <input type="text" value={inputValue_car_type} onChange={(e) => setInputValue_car_type(e.target.value)} />
            <button onClick={sendCall}>send</button>
            {/* console.log */}
        </div>
        </div>
        
    );
}
