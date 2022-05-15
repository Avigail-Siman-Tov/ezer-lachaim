import "../styles/search.css"
import { Icon } from '@iconify/react';
import { useEffect, useState } from "react";
import { collection, doc, getDocs, query, setDoc } from "firebase/firestore";
import { firestore } from "../firebase";

export const Search = () => {

    const [callData, setCallData] = useState([]);
    const [inputValue, setInputValue] = useState("");

    const callsRef = collection(firestore, "calls");

    useEffect(() => {
        console.log('mounted', callData)
        // setDoc(doc(callsRef), {
        //     date: '15-5-22',
        //     city: 'tel-aviv'
        // });
        getData();
    }, [])

    function sendCall () {
        setDoc(doc(callsRef), {
            date: '15-5-22',
            city: inputValue
        });
    }

    async function getData() {
        console.log('function is happening')
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
    return (
        // <!-- סרגל עליון -->
        <div>
            <div className="navbar">
                <div className="dropdown">
                    {/* <div className="topnav">
                        <div id="myLinks">
                            <a href="#news">News</a>
                            <a href="#contact">Contact</a>
                            <a href="#about">About</a>
                        </div>
                        <a href="javascript:void(0);" className="icon" onClick="myFunction()">
                            <Icon icon="fa6-solid:bars" color="#356D9C" />
                        </a>
                    </div> */}
                    {/* <button className="dropbtn">כניסה
                        <Icon icon="ic:baseline-arrowName-drop-down" />
                    </button>
                    <div className="dropdown-content">
                        <a href="#1">מתנדב חדשName</a>
                        <a href="#2">מתנדב קיים</a>
                        <a href="#3">חולה</a>
                        <a href="#4">מנהל</a>
                    </div> */}
                </div>
                <img src="/logo_ezl.png" alt="Logo image" />
            </div>



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
            <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
            <button onClick={sendCall}>send</button>

            {callData.map((object, index) => (
                <div key={index}>
                    <div>{object.city + " " + object.date}</div>
                    {/* <div>{object.date}</div> */}
                </div>
            ))}
        </div>
    );
}