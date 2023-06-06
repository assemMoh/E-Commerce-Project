import React, { useEffect, useState } from 'react'
import { Container, Navbar, Spinner } from 'react-bootstrap'
import { NavLink, useNavigate } from 'react-router-dom'
import { CartItem } from './CartItem'
import { getCurrentAdmin, getCurrentUser, logoutUser } from '../API/productsAPI'

export function UserNav() {


    let nav = useNavigate()
    let [currentUser, setCurrentUser] = useState({})
    let [loggingOut, setLoggingOut] = useState(false)


    let logout = () => {
        setLoggingOut(true)
        setTimeout(() => {
            logoutUser(currentUser)
            setLoggingOut(false)
            nav('/home')
        }, 1000);
    }


    let checkUser = () => {
        try {
            getCurrentUser().then((user) => {
                setCurrentUser(user.data)
            }).catch((e) => { 
                // console.log(e)
                nav('/login') 
            })
        } catch (e) {
            // console.log(e)
        }
    }



    useEffect(() => {
        checkUser()
    }, [])


    return (
        <div className="navCont">
            <Navbar bg="danger" variant="dark" className='nav-section'>
                <NavLink to='/home'
                    className='m-auto nav-link fs-3 text-light' style={{ width: '20%' }}>React-Store.com
                </NavLink>
                <Container className='p-2 justify-content-end col-7'>
                    <Navbar.Brand className="">
                        <NavLink className="nav-link text-light" to='/products' >Products</NavLink>
                    </Navbar.Brand>
                    <Navbar.Brand className="">
                        <NavLink className="nav-link " to="/cart">
                            <CartItem></CartItem>
                        </NavLink>
                    </Navbar.Brand>
                    <Navbar.Brand className="">
                        <NavLink className="nav-link text-light" >{currentUser.username}</NavLink>
                    </Navbar.Brand>
                    <Navbar.Brand className=''>
                        <NavLink onClick={logout} className="nav-link text-danger" to="/products">Logout</NavLink>
                    </Navbar.Brand>
                    {
                    loggingOut && 
                    <div class="spinner-border text-light" role="status">
                        <span class="sr-only "></span>
                    </div>
                    }
                </Container>
            </Navbar>

        </div>
    )
}
