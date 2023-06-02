import React, { useState } from 'react'
import { Nav, NavLink, Tab, Tabs } from 'react-bootstrap'
import { Login } from './Login'
import { Register } from './Register'

export function EntryPoint() {

  let [display, setDisplay] = useState("Login")

  return (
    <div className='container text-center bg-light w-75'>
        {/* <Nav className='d-flex justify-content-center'>
          <h4 className='text-primary'
          onClick={setDisplay("Login")}>
          Login
          </h4>
          <h4 className='text-dark'
          onClick={setDisplay("Register")}>
          Register
          </h4>
        </Nav>
        {display == "Login" ? <Login /> : <Register />} */}
        
    </div>
  )
}
