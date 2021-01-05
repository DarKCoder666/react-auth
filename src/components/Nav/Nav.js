import React from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'

export default function Nav() {
  return (
    <div>
      <Link className="nav-link" to="/">Home</Link>
      <Link className="nav-link" to="/signin">SignIn</Link>
      <Link className="nav-link" to="/signup">SignUp</Link>
    </div>
  )
}
