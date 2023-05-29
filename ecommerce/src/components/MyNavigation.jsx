import React from 'react'
import { Container, Nav, NavLink, Navbar } from 'react-bootstrap'

export function MyNavigation() {
  return (
    <div>
    <Navbar bg="dark" variant="dark">
        <Container>
          <NavLink className='nav-link text-light' href="#home">Navbar</NavLink>
          <Nav className="ms-auto mx-3">
            <NavLink href="nav-link me-auto ">About</NavLink>
            <NavLink href="nav-link me-auto ">Product</NavLink>
            <NavLink href="nav-link ">Login</NavLink>
 
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}
