import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useFormik } from 'formik'
import { registerSchema } from '../schemas/registerSchema'
import { registerUser } from '../API/productsAPI'
import { Button, Modal, Spinner } from 'react-bootstrap'

export function Register() {
    

    let [show, setShow] = useState(false)

    let onSubmit = async (values, actions) => {
        // console.log(actions)
        try {
            let {confpassword, ...userInfo} = values
            await registerUser(userInfo)
            setShow(true)
            setTimeout(() => {
                setShow(false)
                actions.resetForm()
            }, 1000);
        }catch(e){
            console.log('Error occured during registration. Try again later')
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
        },
        validationSchema: registerSchema,
        onSubmit
    })  
    


  return (
    <div className='my-5 p-5 w-75 m-auto bg-light'>
        <form onSubmit={handleSubmit} autoComplete='off' >
            <div class="mb-3 w-25">
                <label for="username" >Username</label>
                <input type="username" id="username"
                value={values.username}
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.username && touched.username ? "form-control border-danger" : "form-control"}
                />
                {errors.username && touched.username && <label className='text-danger'>{errors.username}</label>}
            </div>

            <div class="mb-3 w-50">
                <label for="email" >Email</label>
                <input type="email" id="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.email && touched.email ? "form-control border-danger" : "form-control"}
                />
                {errors.email && touched.email && <label className='text-danger'>{errors.email}</label>}
            </div>
            
            <div class="mb-3 w-25">
                <label for="password" >Password</label>
                <input type="password" id="password"
                
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.password && touched.password ? "form-control border-danger" : "form-control"}
                />
                {errors.password && touched.password && <label className='text-danger'>{errors.password}</label>}
            </div>

            <div class="mb-3 w-25">
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
                <button disabled={isSubmitting} type="submit" class="btn btn-success w-25 text-center">Register</button>
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


        {/* <Modal.Dialog>
            <Modal.Header closeButton>
            <Modal.Title>Modal title</Modal.Title>
            </Modal.Header>

            <Modal.Body>
            <p>Modal body text goes here.</p>
            </Modal.Body>

            <Modal.Footer>
            <Button variant="secondary">Close</Button>
            <Button variant="primary">Save changes</Button>
            </Modal.Footer>
        </Modal.Dialog> */}
        

    </div>
  )
}
