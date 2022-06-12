import React from 'react';
import { Link, Navigate } from "react-router-dom"
import { useNavigate } from "react-router-dom";


import emailjs from '@emailjs/browser';

export const SendMail = (props) => {

    const navigate = useNavigate();


    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_z788roe', 'template_a2saktz', e.target, 'yFg-PVFetaA058RjuYdDL')
            .then((result) => {
                console.log(result.text);
                alert("ההודעה נשלחה בהצלחה", result.text);
                navigate("/home-page");
            }, (error) => {
                console.log(error.text);
                alert("ארעה שגיאה נסה שנית", error.text);

            });
            e.target.reset()
    };

    return (
        
            <div className='container'>
                <form onSubmit={sendEmail}>
                 
                    <label>שם:</label>
                    <textarea name="user_email" />
                    <label>טלפון:</label>
                    <textarea name="phone" />
                    <label>עיר מוצא :</label>
                    <textarea name="city" />
                    <label>כתובת מקור :</label>
                    <textarea name="sourceAddress" />
                    <label>כתובת יעד :</label>
                    <textarea name="destinationAddress" />
                    <label> תאריך</label>
                    <textarea name="date" />
                    <label> שעה</label>
                    <textarea name="hour" />
                    <input type="submit" value="שלח" id="btn_send" />

                </form>

            </div>


    );
};
