import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link, useNavigate } from "react-router-dom"
import Navbar from "../../Navbar";
import "../../../styles/login.css"
import { FaHome } from "react-icons/fa"
import { Icon } from '@iconify/react';
import { firestore } from "../../../firebase";
import { collection, doc, getDocs, query, setDoc, getDoc } from "firebase/firestore";


export default function Login() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const { login } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const [message, setMessage] = useState("")

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setMessage("")
      setError("")
      setLoading(true)
      const res = await login(emailRef.current.value, passwordRef.current.value)
      console.log(res.user.uid)
      const volunteerRef = doc(firestore, "newVolunteer", res.user.uid);
      const docSnap = await getDoc(volunteerRef);
      navigate("/login/welcome2")
    }
    catch (e) {
      setError("סיסמא לא חוקית או משתמש לא קיים במערכת")
      //  setError(e.message)
    }

    setLoading(false)
  }

  return (
    <div>
      <div className="navbar">
        <a href="/"> <div className="btn_home"><FaHome />Home </div></a>
        <img src="/logo_ezl.png" alt="Logo image" />
      </div>
      <Navbar />
      <div className="allLogin">
        <Icon className="profileImg" icon="healthicons:ui-user-profile" color="#6c6c6c" />
              <Card>
          <Card.Body>
            <h2 className="enter">שלום!</h2>
            <h4 className="enter">נא להקיש כתובת מייל וסיסמא להתחברות</h4>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleSubmit}>
              <Form.Group id="email">
                {/* <Form.Label>Email</Form.Label> */}
                <br />
                {/* <br /> */}
                <Icon icon="bxs:lock" color="#6c6c6c" />
                <input className="designInput" placeholder="Enter your email" type="email" ref={emailRef} required />
              </Form.Group>
              <Form.Group id="password">
                {/* <Form.Label>Password</Form.Label> */}
                <Icon icon="bi:person" color="#6c6c6c" />
                <input className="designInput" placeholder="Enter your password" type="password"  ref={passwordRef} required />
              </Form.Group>
              <div className="remmeber">
                <Link to="/forgot-password">?forget password</Link>
              </div>
              <button disabled={loading} className="submitBtn" type="submit">
                Log In
              </button>
            </Form>

          </Card.Body>
        </Card>
        {/* <div className="w-100 text-center mt-2">
            Need an account? <Link to="/signup">Sign Up</Link>
          </div> */}
      </div>
    </div>
  )
}