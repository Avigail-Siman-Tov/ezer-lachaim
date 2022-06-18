import React, { useRef, useState } from "react"
import { Form, Card, Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link, useNavigate } from "react-router-dom"
import Navbar from "../../Navbar";
import "../../../styles/login.css"
import { FaHome } from "react-icons/fa"
import { Icon } from '@iconify/react';
import { firestore } from "../../../firebase";
import { doc, getDoc } from "firebase/firestore";


export default function Login() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const { login } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const [message, setMessage] = useState("")

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setMessage("")
      setError("")
      setLoading(true)
      const res = await login(emailRef.current.value, passwordRef.current.value)
      const volunteerRef = doc(firestore, "newVolunteer", res.user.uid);
      const docSnap = await getDoc(volunteerRef);
      navigate("/search")
    }
    catch (e) {
      setError("סיסמא לא חוקית או משתמש לא קיים במערכת")
    }
    setLoading(false)
  }

  return (
    <div>
      <div className="navbar">
        <a href="/"> <div className="btn_home"><FaHome className="spaceB" />Home </div></a>
        <img src="/logo_ezl.png" alt="Logo image" />
      </div>
      <Navbar />
      <div className="allLogin">
        <Icon className="profileImg" icon="healthicons:ui-user-profile" color="#6c6c6c" />
        <Card>
          <Card.Body>
            <h2 className="enter">שלום!</h2>
            <h4 className="enter1">נא להקיש כתובת מייל וסיסמא להתחברות</h4>
            <div className="error1">{error && <Alert variant="danger">{error}</Alert>}</div>
            <Form onSubmit={handleSubmit}>
              <Form.Group id="email">
                <br />
                <Icon icon="bi:person" color="#ea6b4c" />
                <input className="designInput" placeholder="Enter your email" type="email" ref={emailRef} required />
              </Form.Group>
              <Form.Group id="password">
                <Icon icon="bxs:lock" color="#ea6b4c" />

                <input className="designInput" placeholder="Enter your password" type="password" ref={passwordRef} required />
              </Form.Group>
              <div className="remmeber">
                <Link to="/forgot-password">?forget password</Link>
              </div>
              <button disabled={loading} className="submitBtn" type="submit" >
                Log In
              </button>
              <div className="loader"></div>
             
            </Form>

          </Card.Body>
        </Card>
      </div>
    </div>
  )
}