import React, { useEffect, useState } from 'react'
import { useNavigate, NavLink } from 'react-router-dom'
import { getUsers } from '../API/productsAPI'
import { useFormik } from 'formik'

export function Login() {
    
    let [usersInfo, setUsersInfo] = useState([])
    let [registeredUser, setRegisteredUser] = useState(false)
    let [loginTrial, setLoginTrial] = useState(false)
    let {values, handleChange} = useFormik({
        initialValues: {
            username: "",
            password: "",
        },
    })
    
    
    let searchUser = (user) => {
        if (values.username == user.username && values.password == user.password) 
            setRegisteredUser(true)
    }
    
    let checkIfFound = (e) => {
        e.preventDefault()
        usersInfo.map(searchUser)
        if (!registeredUser)
            setLoginTrial(true)
        else
            setLoginTrial(false)
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
        retreiveUsers()
    },[])

  return (
    <div className=' my-5 p-5 w-25 m-auto bg-light'>
        <form autoComplete='off'>
            <div class="mb-3">
                <label for="username" >Username</label>
                <input type="username" id="username"
                value={values.username}
                onChange={handleChange}
                className="form-control"
                />
            </div>


            <div class="mb-3">
                <label for="password" class="form-label">Password</label>
                <input type="password" class="form-control" id="password"
                value={values.password}
                onChange={handleChange}

                />
            </div>
            
            
            
            <div className='container text-center'>
                {loginTrial && (<label className='text-danger my-3'>Invalid username or password</label>)}
                <button onClick={checkIfFound} class="btn btn-primary w-50 text-center">Login</button>
            </div>
            </form>
            <hr/>
            <div className='container text-center'>
                    <label>
                        Don't have an account? <NavLink className='nav-link text-primary d-inline' to='/register'> Register </NavLink>
                    </label>
            </div>
    </div>
  )
}
