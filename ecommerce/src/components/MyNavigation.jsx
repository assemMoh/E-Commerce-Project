import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import '../css/MyNavigation.css'

export function MyNavigation() {
  return (
    <div className="navCont">
      <Navbar bg="danger" variant="dark" className='nav-section'>
        <h4 className='text-center text-light' style={{ width: '20%' }}>React-Store.com</h4>
        <Container className='p-2 justify-content-end col-7'  >
          <Navbar.Brand className=''>
            <NavLink className="nav-link" to="/home">Home</NavLink>
          </Navbar.Brand>
          <Navbar.Brand className=''>
            <NavLink className="nav-link " to="/products">Products</NavLink>
          </Navbar.Brand>
          <Navbar.Brand className=''>
            <NavLink className="nav-link" to="/about">About Us</NavLink>
          </Navbar.Brand>
          <Navbar.Brand className="">
            <NavLink className="nav-link " to="/login">Login</NavLink>
          </Navbar.Brand>
        </Container>
      </Navbar>

    </div>
  )
}
