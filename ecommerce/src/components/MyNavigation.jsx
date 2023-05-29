import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

export function MyNavigation() {
  return (
    <div className=''>
      <Navbar bg="dark" variant="dark" >
        <Container className='p-2' >
          <Navbar.Brand className='mx-5'>
          <NavLink className="nav-link" to="/home">Home</NavLink>
          </Navbar.Brand>
          <Navbar.Brand className='mx-5'>
          <NavLink className="nav-link" to="/about">About Us</NavLink>
          </Navbar.Brand>
          <Navbar.Brand className='mx-5'>
            <NavLink className="nav-link " to="/about">Product</NavLink>
          </Navbar.Brand>
          <Navbar.Brand className="ms-auto mx-3">
            <NavLink className="nav-link " to="about">Login</NavLink>
          </Navbar.Brand>
        </Container>
      </Navbar>
     
    </div>
  )
}
