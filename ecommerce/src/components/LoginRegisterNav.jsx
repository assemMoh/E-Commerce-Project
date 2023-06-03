import React from 'react'
import { Navbar } from 'react-bootstrap'
import { Container } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { CartItem } from './CartItem'

export  function LoginRegisterNav() {
  return (
    <div className="">
      <Navbar className='nav-section text-center'>
        <NavLink to='/home'
        className='m-auto nav-link fs-3 text-light' style={{ width: '20%' }}>React-Store.com</NavLink>
      </Navbar>

    </div>
  )
}
