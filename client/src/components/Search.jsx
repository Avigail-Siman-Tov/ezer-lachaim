import "../styles/search.css"
import { Icon } from '@iconify/react';
import { useEffect, useState } from "react";
import { collection, doc, getDocs, query, setDoc } from "firebase/firestore";
// import Card from "react-bootstrap/Card";
import { Button } from 'react-bootstrap';
import { Card } from "react-bootstrap";
import { React } from "react";
import Box_search from "../components/Box_search";
import ReportWebVitals from './ReportWebVitals';
import "../styles/box_search.css"
import { firestore } from "../firebase";
import Navbar from "./Navbar";
import Bull from "./Bull";
import Hamburger from "./Hamburger";
// import Bull from "./Bull";

export const Search = () => {

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
        // console.log('mounted', callData)
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
            <Navbar />

            <form
            // onSubmit={(e)=>(SearchBlog(e))}
            >
                <input type="text" value={filter} onChange={searchText.bind(this)} />
                {/* <input onChange={(e)=>{setSearch(e.target.value)}}/>
                <button type="submit">Search</button> */}

                {/* <input list="places" type="text" id="city" name="city" required autoComplete="off" pattern="Amsterdam|Berlin|Dublin|London|Paris" />
                <datalist id="places">
                    <option>Amsterdam</option>
                    <option>Berlin</option>
                    <option>Dublin</option>
                    <option>London</option>
                    <option>Paris</option>
                </datalist>
                <button className="btn_submit">Submit</button> */}
            </form>
            {/* <Bull/> */}
            {dataSearch.map((object, index) => (
                <div className="req" key={index}>
                    <div>
                        {object.city + " " + object.source + " " + object.destination + " " + object.date + " " + object.gender + " " + object.number_of_passengers + " " + object.car_type}
                    </div>
                    {/* <div>{object.date}</div> */}
                </div>
            ))}
        </div>
    );
}