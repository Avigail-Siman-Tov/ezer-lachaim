import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link } from "react-router-dom"
import Navbar from "../../Navbar";
import { FaHome } from "react-icons/fa"
import "../../../styles/login.css"

export default function ForgotPassword() {
  const emailRef = useRef()
  const { resetPassword } = useAuth()
  const [error, setError] = useState("")
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setMessage("")
      setError("")
      setLoading(true)
      await resetPassword(emailRef.current.value)
      setMessage("בדוק את תיבת הדואר הנכנס שלך להנחיות נוספות")
    } catch (e) {
      setError("משתמש לא קיים במערכת")
    }

    setLoading(false)
  }

  return (
    <>
      <div className="navbar">
        <a href="/"> <div className="btn_home"><FaHome />דף הבית </div></a>
        <img src="/logo_ezl.png" alt="Logo image" />
      </div>
      <Navbar />
      <div className="allLogin">
        <Card>
          <Card.Body>
            <h2 className="enter">עדכון סיסמא</h2>
            <div className="error1">{error && <Alert variant="danger">{error}</Alert>}</div>
            <div className="error1">{message && <Alert variant="success">{message}</Alert>}</div>
            <Form onSubmit={handleSubmit}>
              <Form.Group id="email">
                {/* <Form.Label>Email</Form.Label> */}
                <input className="designInput" placeholder="Enter your email" type="email" ref={emailRef} required />
                {/* <Form.Control type="email" ref={emailRef} required /> */}
              </Form.Group>
              <Button disabled={loading} className="submitBtn" type="submit">
                Reset Password
              </Button>
            </Form>
            <div className="login_again">
              <div>להתחברות מחדש לחץ<Link to="/login"><b>   כאן</b></Link></div>
            </div>
          </Card.Body>
        </Card>
      </div>
    </>
  )
}