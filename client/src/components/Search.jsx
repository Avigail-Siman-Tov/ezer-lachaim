import "../styles/search.css"
import { Icon } from '@iconify/react';
import { useEffect, useState } from "react";
import { collection, doc, getDocs, query, setDoc } from "firebase/firestore";
// import Card from "react-bootstrap/Card";
import { Button } from 'react-bootstrap';
import { Card } from "react-bootstrap"

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
    // function openRightMenu() {
    //     document.getElementById("rightMenu").style.display = "block";
    // }

    // function closeRightMenu() {
    //     document.getElementById("rightMenu").style.display = "none";
    // }
    return (
        // <!-- סרגל עליון -->
        <div>
            <div className="navbar">
                {/* <div className="w3-sidebar" id="mySidebar">
                    <button className="w3-bar-item w3-button w3-hide-large"
                        onclick="w3_close()">Close &times;</button>
                    <a href="#" className="w3-bar-item w3-button">Link 1</a>
                    <a href="#" className="w3-bar-item w3-button">Link 2</a>
                    <a href="#" className="w3-bar-item w3-button">Link 3</a>
                </div> */}

                {/* <div className="w3-main">
                    <div className="w3-teal">
                        <button className="w3-button w3-teal w3-xlarge w3-right w3-hide-large" onclick="w3_open()">&#9776;</button>
                        <div className="w3-container">
                            <h2>My Page</h2>
                        </div>
                    </div>

                </div> */}
{/* 
                <div className="w3-sidebar w3-bar-block w3-card w3-animate-right" id="rightMenu">
                    <button onclick="closeRightMenu()" className="w3-bar-item w3-button w3-large">Close &times;</button>
                    <a href="#" className="w3-bar-item w3-button">Link 1</a>
                    <a href="#" className="w3-bar-item w3-button">Link 2</a>
                    <a href="#" className="w3-bar-item w3-button">Link 3</a>
                </div>

                <div className="w3-teal">
                    <button className="w3-button w3-teal w3-xlarge w3-right" onclick="openRightMenu()">&#9776;</button>

                </div> */}
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



            {callData.map((object, index) => (
                <div className="req" key={index}>
                    <div>{object.source + " "  +
                    object.destination+ " "+ object.date+" "+object.gender+" "+object. number_of_passengers+" "+object.car_type}</div>
                    <div>{object.date}</div>
                </div>
                // <>
                //     <Card styles={{ card: { backgroundColor: 'red' } }}>
                //         <Card.Body>
                //             <div key={index}>
                //                 <div>{object.source}</div>
                //             </div>
                //             <div>{object.source + " " + object.destination + " " + object.date + " " + object.gender + " " + object.number_of_passengers + " " + object.car_type}</div>
                //         </Card.Body>
                //     </Card>
                //     <div className="w-100 text-center mt-2">
                //         <Button>
                //             שליחה
                //         </Button>
                //     </div>
                // </>

                // <Card
                // bg={variant.toLowerCase()}
                // bg={object.toLowerCase()}
                // key={index}
                // text={object.toLowerCase() === 'light' ? 'dark' : 'white'}
                // style={{ width: '18rem' }}
                // className="mb-2"
                // >
                //     <Card.Header></Card.Header>
                //     <Card.Body>
                //         <Card.Title></Card.Title>
                //         <Card.Text>
                //             <div>{object.city + " " + object.date}</div>
                //         </Card.Text>
                //     </Card.Body>
                // </Card>
            ))}
        </div>
    );
}