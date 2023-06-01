import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { productAPI } from '../API/productsAPI';

export function LoginAdmin() {
    // let [products, setProducts] = useState([]);
    // useEffect(() => {
    //     retrieveProduct();
    // }, []);

    // let retrieveProduct = async () => {
    //     try {
    //         let response = await productAPI.getAllProduct();
    //         setProducts(response.data);
    //     } catch (error) {
    //         console.log(error);
    //     }
    // };
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true);
    };

    
    return (
        <div className="text-center p-5">
            <Form noValidate validated={validated} onSubmit={handleSubmit} className="m-auto w-50 mt-5 text-start">
                <h1 className='my-5'>Login as Admin</h1>

                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button type="submit">Login</Button>
            </Form>
        </div>
    )
}
