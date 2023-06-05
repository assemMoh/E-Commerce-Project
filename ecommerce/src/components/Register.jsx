import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useFormik } from 'formik'
import { registerSchema } from '../schemas/registerSchema'
import { getCurrentUser, getUsers, registerUser } from '../API/productsAPI'
import { Button, Modal, Spinner } from 'react-bootstrap'

export function Register() {
    

    let [show, setShow] = useState(false)
    let [registered, setRegistered]= useState(false)
    let [logged, setLogged] = useState(false)
    let [usernames, setUsernames] = useState([])
    let [takenUsername, setTakenUsername] = useState(false)


    let onSubmit = async (values, actions) => {
        if (!takenUsername)
        {
            try {
                let {confpassword, ...userInfo} = values
                await registerUser(userInfo)
                setShow(true)
                setTimeout(() => {
                    setShow(false)
                    setRegistered(true)
                    actions.resetForm()
                }, 1000);
            }catch(e){
                console.log('Error occured during registration. Try again later')
            }
        }
    }

    let {
        values,
        handleChange,
        handleBlur,
        handleSubmit,
        errors,
        touched,
        isSubmitting,
    } = useFormik({
        initialValues: {
            username: "",
            email: "",
            password: "",
            confpassword: "",
            cart: []
        },
        validationSchema: registerSchema,
        onSubmit
    })  


    let checkUsername = (e) => {
        // console.log(e.target.value)
        if (usernames.includes(e.target.value)) {
            console.log("username taken")
            setTakenUsername(true)
        }
        else setTakenUsername(false)
    }

    
    let getNames = (user) => {
        return user.username        
    }

    let getAllNames = (users) => {
        let allName = users.map(getNames)
        setUsernames(allName)
    }

    let retreiveUsers = async () => {
        try{
            let allUsers = await getUsers()
            getAllNames(allUsers.data)
        }catch(err){
            console.log("error occured during fetching")
        }
    }


    useEffect(() => {
        try{
            getCurrentUser().then((user) =>{
                console.log("already logged in")
                setLogged(true)
            }).catch((err) => {retreiveUsers()})
        }catch(e){
            console.log("error occured during fetching")
        }
    },[])


  return (
    <div className='container'>
        <div className='row'>    
            <div className='my-5 p-5 col-lg-10 col-md-10 col-12 m-auto bg-light'>
                <form onSubmit={handleSubmit} autoComplete='off' >
                    <div className="mb-3 w-25">
                        <label for="username" >Username</label>
                        <input type="username" id="username"
                        value={values.username}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        onInput={checkUsername}
                        className={errors.username && touched.username ? "form-control border-danger" : "form-control"}
                        />
                        {takenUsername && <p className='text-danger'>this username is taken</p>}
                        {errors.username && touched.username && <label className='text-danger'>{errors.username}</label>}
                    </div>

                    <div className="mb-3 w-50">
                        <label for="email" >Email</label>
                        <input type="email" id="email"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={errors.email && touched.email ? "form-control border-danger" : "form-control"}
                        />
                        {errors.email && touched.email && <label className='text-danger'>{errors.email}</label>}
                    </div>
                    
                    <div className="mb-3 w-25">
                        <label for="password" >Password</label>
                        <input type="password" id="password"
                        
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={errors.password && touched.password ? "form-control border-danger" : "form-control"}
                        />
                        {errors.password && touched.password && <label className='text-danger'>{errors.password}</label>}
                    </div>

                    <div className="mb-3 w-25">
                        <label for="confpassword" >Confirm Password</label>
                        <input type="password" id="confpassword"
                        
                        value={values.confpassword}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={errors.confpassword && touched.confpassword ? "form-control border-danger" : "form-control"}
                        />
                        {errors.confpassword && touched.confpassword && <label className='text-danger'>{errors.confpassword}</label>}
                    </div>

                    <div >
                        {
                            registered && <p className='text-success'>Registrated successfully! You can login now</p>
                        }
                        {logged && <p className='text-warning'>Can't register while logged in</p>}
                        <button disabled={isSubmitting || logged} type="submit" className="btn btn-success w-25 text-center">Register</button>
                        {show &&  (<Spinner className='mx-3 ' animation="border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </Spinner>)}
                    </div>
                </form>

                    

                <hr/>
                <div className='container text-center'>
                        <label>
                            Already has an account? <NavLink className='nav-link text-primary d-inline' to='/Login'> Login </NavLink>
                        </label>
                </div>
            </div>
        </div>
    </div>
  )
}
