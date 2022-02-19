import React, { useState, useContext } from 'react'
import { AuthContext } from '../AppContext'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const authContext = useContext(AuthContext)

  const handleEmail = (e) => {
    setEmail(e.target.value)
  }

  const handlePassword = (e) => {
    setPassword(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if (password === '123') {
      const token = 'abc'
      localStorage.setItem('token', token)
      localStorage.setItem('email', email)
      localStorage.setItem('password', password)
      authContext.setAuth({ email })
    } else {
      alert('Wrong Details')
    }
  }
  return (
    <form className="m-auto text-center" onSubmit={handleSubmit}>
      <h2 className="mb-3">Login Form</h2>
      <input
        type="email"
        name="email"
        placeholder="Type Your Email"
        className="form-control d-block m-auto w-50"
        onChange={handleEmail}
        value={email}
      />
      <input
        type="password"
        name="password"
        placeholder="Type Your Password"
        className="form-control my-3 d-block m-auto w-50"
        onChange={handlePassword}
        value={password}
      />

      <button
        type="submit"
        className="text-capitalize btn btn-primary d-block w-25 m-auto"
      >
        login
      </button>
    </form>
  )
}
