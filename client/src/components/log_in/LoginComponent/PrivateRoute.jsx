import React from "react"
import { Navigate } from "react-router-dom"
import { useAuth } from "../contexts/AuthContext"

export default function PrivateRoute({ component: Component, ...rest }) {
  return (
    function PrivateRoute({ children }) {
      const auth = useAuth();
      return auth ? children : <Navigate to="/login" />;
    }
  )
}