import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

export function AdminNav() {
  return (
    <div>
        <div className='bg-dark'>
            <Navbar bg="">
                <NavLink to='/admin'
                    className='m-auto nav-link fs-3 text-light' style={{ width: '20%' }}>Admin Panel
                </NavLink>
                <Container className='p-2 justify-content-end col-7'>
                    <Navbar.Brand className="">
                        <NavLink className="nav-link text-warning" ></NavLink>
                    </Navbar.Brand>
                    <Navbar.Brand className=''>
                        <NavLink  className="nav-link text-danger" to="/products">Logout</NavLink>
                    </Navbar.Brand>
                </Container>
            </Navbar>
        </div>
    
    </div>
  )
}
