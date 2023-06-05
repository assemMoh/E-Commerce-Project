import React, { useEffect, useState } from 'react'
import { useNavigate, NavLink } from 'react-router-dom'
import { getCurrentUser, getUsers, loginUser } from '../API/productsAPI'
import { useFormik } from 'formik'

export function Login() {
    let nav = useNavigate()
    let [usersInfo, setUsersInfo] = useState([])
    let [logged, setLogged] = useState(false)
    let [loginTrial, setLoginTrial] = useState(false)
    let {values, handleChange} = useFormik({
        initialValues: {
            username: "",
            password: "",
        },
    })
    
    
    let searchUser = async (user) => {
        // console.log(user)
        if (values.username == user.username && values.password == user.password) 
            {
                setTimeout(() => {
                    try{
                        let {username, password, email, cart} = user
                        let userData = {username, password, email, cart}
                        loginUser(userData)
                        nav('/products')
                    }catch(e){
                        console.log(e)
                    }
                }, 400);
            }
        }
        
    let checkIfFound = (e) => {
        setLoginTrial(false)
        e.preventDefault()
        usersInfo.map(searchUser)
        setTimeout(() => {
            setLoginTrial(true)
        }, 500);

    }
    
    
    let retreiveUsers = async () => {
        try{
            let allUsers = await getUsers()
            setUsersInfo(allUsers.data)
        }catch(err){
            console.log("error occured during fetching")
        }
    }
    useEffect(() => {
        try{
            getCurrentUser().then((user) =>{
                console.log("already logged in")
                setLogged(true)
            }).catch((err) => {
                //retreiveUsers()
            })
        }catch(e){
            console.log("error occured during fetching")
        }
        // retreiveUsers()
    },[])

  return (
    <div className='container'>
        <div className='row'>
            <div className='my-5 p-5 col-lg-4 col-md-4 col-8 m-auto bg-light'>
                <form autoComplete='off'>
                    <div className="mb-3">
                        <label htmlFor="username" >Username</label>
                        <input type="username" id="username"
                        value={values.username}
                        onChange={handleChange}
                        className="form-control"
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="password" class="form-label">Password</label>
                        <input type="password" class="form-control" id="password"
                        value={values.password}
                        onChange={handleChange}

                        />
                    </div>
                    
                    
                    <div className='container text-center'>
                        {loginTrial && (<label className='text-danger my-3'>Invalid username or password</label>)}
                        {logged && <p>Already Logged in</p>}
                        <button onClick={checkIfFound}
                        disabled={logged}
                        className="btn btn-primary w-50 text-center">
                            Login
                        </button>
                    </div>
                    </form>
                    <hr/>
                    <div className='container text-center'>
                            <label>
                                Don't have an account? <NavLink className='nav-link text-primary d-inline' to='/register'> Register </NavLink>
                            </label>
                    </div>
            </div>
        </div>

    </div>
  )
}
