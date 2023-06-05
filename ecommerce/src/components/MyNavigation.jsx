import React, { useEffect, useState } from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import '../css/MyNavigation.css'
import { CartItem } from './CartItem'
import { getCurrentUser } from '../API/productsAPI'

export function MyNavigation() {

  let [logged, setLogged] = useState(false)
  let [currentUser, setCurrentUser] = useState({})

  useEffect(() => {
    try{
      getCurrentUser().then((user) => {
        setLogged(true)
        setCurrentUser(user)
      }).catch(() => {
        setLogged(false)
      })
    }catch(e){
      
    }
  },[])

  return (

    <div className="navCont">
      <Navbar bg="danger" variant="dark" className='nav-section'>
        <Container className='w-25'>
          <NavLink className="nav-link" to='/home'>
            <h3 className='text-center text-light' style={{ width: '100%' }}>React-Store.com</h3>
          </NavLink>
        </Container>
        <Container className='p-2 justify-content-end col-7'>
          {/* <Navbar.Brand className=''>
            <NavLink className="nav-link" to="/home">Home</NavLink>
          </Navbar.Brand> */}
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
