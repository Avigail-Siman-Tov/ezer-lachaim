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
import { firestore } from "../firebase";
import Navbar from "./Navbar";

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
            <Navbar />
            <div className="container">
                <form>
                    <input list="places" type="text" id="city" name="city" required autoComplete="off" pattern="Amsterdam|Berlin|Dublin|London|Paris" />
                    <datalist id="places">
                        <option>Amsterdam</option>
                        <option>Berlin</option>
                        <option>Dublin</option>
                        <option>London</option>
                        <option>Paris</option>
                    </datalist>
                </form>
                <button className="btn_submit"><Icon icon="akar-icons:search" /></button>
            </div>
            {/* <Box_search /> */}



            {callData.map((object, index) => (
                <div className="req" key={index}>
                    <div>{object.source + " " +
                        object.destination + " " + object.date + " " + object.gender + " " + object.number_of_passengers + " " + object.car_type}</div>
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