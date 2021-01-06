import React from 'react'
import './Errors.css'

export default function Errors({ errors = [] }) {
  const errorsElements = errors.map((err, index) => (
    <li key={index}>{err}</li>
  ))
  return (
    <div className="errors">
      {errorsElements}
    </div>
  )
}
