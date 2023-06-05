import React, { useEffect, useState } from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { NavLink, useNavigate } from 'react-router-dom'
import { getCurrentAdmin, logoutAdmin } from '../API/productsAPI'

export function AdminNav() {


    let nav = useNavigate()
    let [currentAdmin, setCurrentAdmin] = useState({})
    let [loggingOut, setLoggingOut] = useState(false)

    let logout = () => {
        setLoggingOut(true)
        setTimeout(() => {
            logoutAdmin(currentAdmin)
            setLoggingOut(false)
            nav('/admin')
        }, 1000);
        
    }


    let checkAdmin = async () => {
        try{
           await getCurrentAdmin().then((admin) => {
            setCurrentAdmin(admin.data)
           }).catch(() => {
            nav('/admin')
        })
        }catch(e){
            console.log(e)
        }
    }

    useEffect(() => {
        checkAdmin()
    },[])


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
                        <NavLink  className="nav-link text-light" to="/products">{currentAdmin.email}</NavLink>
                    </Navbar.Brand>
                    <Navbar.Brand className=''>
                        <NavLink  className="nav-link text-danger" onClick={logout}>Logout</NavLink>
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
    
    </div>
  )
}
