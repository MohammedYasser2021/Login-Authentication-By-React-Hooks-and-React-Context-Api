import React, { useContext } from 'react'
import { AuthContext } from '../AppContext'
export default function Header() {
  const authContext = useContext(AuthContext)
  const logout = () => {
    authContext.setAuth({})
    localStorage.removeItem('token')
    localStorage.removeItem('email')
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark mt-2 mb-4">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            React Hooks
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarScroll"
            aria-controls="navbarScroll"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarScroll">
            <div className="d-flex ms-auto text-white align-items-center">
              {authContext.auth.email ? (
                <>
                  <p className="p-2 m-0 bg-success rounded-2">
                    {authContext.auth.email}
                  </p>
                  <button className="btn btn-danger ms-2" onClick={logout}>
                    LogOut
                  </button>
                </>
              ) : (
                'You Have To Need To Login'
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
