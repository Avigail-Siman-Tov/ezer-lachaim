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
      setError(e.message)
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
            {error && <Alert variant="danger">{error}</Alert>}
            {message && <Alert variant="success">{message}</Alert>}
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
            <div className="w-100 text-center mt-3">
              <div>להתחברות מחדש לחץ</div>
              <Link to="/login">כאן</Link>
            </div>
          </Card.Body>
        </Card>
        <div className="w-100 text-center mt-2">
          {/* Need an account? <Link to="/signup">Sign Up</Link> */}
        </div>
      </div>
    </>
  )
}