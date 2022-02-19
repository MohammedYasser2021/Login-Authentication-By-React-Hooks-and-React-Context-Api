import React, { createContext, useState, useEffect } from 'react'

export const AuthContext = createContext()
export function ContextProvider(props) {
  const [auth, setAuth] = useState({})
  useEffect(() => {
    const email = localStorage.getItem('email')
    const token = localStorage.getItem('token')
    if (email) {
      setAuth({ email, token })
    }
  }, [])
  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {props.children}
    </AuthContext.Provider>
  )
}
