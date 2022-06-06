import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link, useNavigate } from "react-router-dom"
import Navbar from "../../Navbar";
import "../../../styles/login.css"
import Input from "../../../components/Input";
// import {Navbar} from "../components/Navbar";
// import styles from '../css/login.css'
import { IconName } from "react-icons/di";
import { FaHome } from "react-icons/fa";
import { Icon } from '@iconify/react';
// import { IoPerson } from 'react-icons/fa'
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
      await login(emailRef.current.value, passwordRef.current.value)
      navigate("/login/welcome2")
    }
    catch (e) {
      setError(e.message)
    }

    setLoading(false)
  }

  return (
    <div>
      <Navbar />
      {/* <div style={{ backgroundImage: "url(/image-background.jpg)", minHeight: '100%', margin: 0 }}> */}
      <div className="form-wrapper1"></div>
      {/* <Card>
        <Card.Body> */}
          <div className="picprofil">
            <img src="/profil.png" alt="profil" />
          </div>
          <h2 className="text-center">Log In</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          {/* <Form onSubmit={handleSubmit}>
              <Form.Group id="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" ref={emailRef} required />
              </Form.Group> */}
         <div className="inputLog">
          <Input 
 
            placeholder="Email:"  type="email" name="email"
          />
          {/* <Form.Group id="password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" ref={passwordRef} required />
              </Form.Group> */}
          <Input
            placeholder="Password:"  type="text"
          />
         </div>
         
          <button className="submitBtn" disabled={loading}>Log In</button>
          <div className="remember">
            <Link to="/forgot-password">שכחתי סיסמה</Link>
          </div>
          {/* <Button disabled={loading} className="w-100" type="submit">
            Log In
          </Button> */}
          {/* </Form> */}

        {/* </Card.Body>
      </Card> */}
      {/* <div className="signUp">
        אין לך חשבון? <Link to="/signup">Sign Up</Link>
      </div> */}
     
    </div>
    // </div>
  )
}