import "../styles/search.css"
import { Icon } from '@iconify/react';
import { useEffect, useState } from "react";
import { collection, doc, getDocs, query, setDoc } from "firebase/firestore";
// import Card from "react-bootstrap/Card";
import { Button } from 'react-bootstrap';
import { Card } from "react-bootstrap"
import { React } from "react";
import Box_search from "../components/Box_search";
import ReportWebVitals from './ReportWebVitals';
import "../styles/box_search.css"
// import CCard from '@coreui/react/src/components/card/CCard'
import { CCard } from '@coreui/react';
import { CCardBody } from '@coreui/react';
import { CCardText } from '@coreui/react';
import { CCardTitle } from '@coreui/react';
import { CButton } from '@coreui/react';

import { firestore } from "../firebase";

export const Search = () => {

    const [callData, setCallData] = useState([]);
    const [inputValue, setInputValue] = useState("");

    const callsRef = collection(firestore, "calls");

    useEffect(() => {
        console.log('mounted', callData)
        getData();
    }, [])


    async function getData() {
        const dataArray = await getDocs(query(callsRef));
        dataArray.forEach(doc => {
            setCallData(prev => [...prev, doc.data()])
        })
    }

    function myFunction() {
        var x = document.getElementById("myLinks");
        if (x.style.display === "block") {
            x.style.display = "none";
        } else {
            x.style.display = "block";
        }
    }
    // function openRightMenu() {
    //     document.getElementById("rightMenu").style.display = "block";
    // }

    // function closeRightMenu() {
    //     document.getElementById("rightMenu").style.display = "none";
    // }
    const [inputText, setInputText] = useState("");
    let inputHandler = (e) => {
        //convert input text to lower case
        var lowerCase = e.target.value.toLowerCase();
        setInputText(lowerCase);
    };
    return (
        // <!-- סרגל עליון -->
        <div>
            <div className="navbar">
                <img src="/logo_ezl.png" alt="Logo image" />
            </div>
            <form>
                <input list="places" type="text" id="city" name="city" required autoComplete="off" pattern="Amsterdam|Berlin|Dublin|London|Paris" />
                <datalist id="places">
                    <option>Amsterdam</option>
                    <option>Berlin</option>
                    <option>Dublin</option>
                    <option>London</option>
                    <option>Paris</option>
                </datalist>
                <button className="btn_submit">Submit</button>
            </form>
            {/* <Box_search /> */}

            {/* <!-- סרגל תחתון --> */}
            <div className="navbar2">
                <div className="flex-container">
                    <div>
                        <a href="mailto: info@ezla.org.il"><Icon icon="ci:mail-open" color="white" /></a>
                    </div>
                    <div>
                        <a href="tel:03-3-730-440"><Icon icon="bxs:phone" color="white" /></a>
                    </div>
                    <div>
                        <a href=""><Icon icon="akar-icons:whatsapp-fill" color="white" /></a>
                    </div>
                </div>
            </div>



            {callData.map((object, index) => (
                <div className="req" key={index}>
                    <div>{object.source + " " +
                        object.destination + " " + object.date + " " + object.gender + " " + object.number_of_passengers + " " + object.car_type}</div>
                    <div>{object.date}</div>
                </div>

            ))}

            <CCard style={{ width: '18rem' }}>
                <CCardBody>
                    <CCardTitle>Special title treatment</CCardTitle>
                    <CCardText>With supporting text below as a natural lead-in to additional content.</CCardText>
                    <CButton href="#">Go somewhere</CButton>
                </CCardBody>
            </CCard>
        </div>
    );
}