import React, { useEffect, useState } from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { NavLink, useNavigate } from 'react-router-dom'
import { CartItem } from './CartItem'
import { getCurrentUser, logoutUser } from '../API/productsAPI'

export function UserNav() {

    
    let nav = useNavigate()
    let [currentUser, setCurrentUser] = useState({})


    let logout = () => {

        setTimeout(() => {
            logoutUser(currentUser)
            nav('/home')
        }, 500);
        
    }


    let checkUser = async () => {
        try{
           await getCurrentUser().then((user) => {
            setCurrentUser(user.data)
           }).catch(() => {nav('/login')})
        }catch(e){
            console.log(e)
        }
    }

    useEffect(() => {
        checkUser()
    },[])


  return (
        <div className="navCont">
            <Navbar bg="danger" variant="dark" className='nav-section'>
                <NavLink to='/home'
                    className='m-auto nav-link fs-3 text-light' style={{ width: '20%' }}>React-Store.com
                </NavLink>
                <Container className='p-2 justify-content-end col-7'>
                    <Navbar.Brand className="">
                        <NavLink className="nav-link " to="/login">
                        <CartItem></CartItem>
                        </NavLink>
                    </Navbar.Brand>
                    <Navbar.Brand className="">
                        <NavLink className="nav-link text-warning" >{currentUser.username}</NavLink>
                    </Navbar.Brand>
                    <Navbar.Brand className=''>
                        <NavLink onClick={logout} className="nav-link text-danger" to="/products">Logout</NavLink>
                    </Navbar.Brand>
                </Container>
            </Navbar>

    </div>
  )
}
