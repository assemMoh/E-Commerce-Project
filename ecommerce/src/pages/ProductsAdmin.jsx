import React, { useEffect, useState } from 'react'
import { productAPI } from '../API/productsAPI'
import { Table } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import '../css/ProductsAdmin.css';

function myFunction() {
    if (window.confirm("Press a button!") == true) {
      return "You pressed OK!";
    } else {
        return "You canceled!";
    }
}

export function ProductsAdmin() {
    let [products, setProducts] = useState([]);
    useEffect(() => {
        retrieveProduct();
    }, []);

    let retrieveProduct = async () => {
        try {
            let response = await productAPI.getAllProduct();
            setProducts(response.data);
        } catch (error) {
            console.log(error);
        }
    };
    let deleteProduct = async (productId) => {
        
        try {
            console.log( myFunction())
            // await productAPI.deleteProduct(productId);
            retrieveProduct();
        } catch (error) {
            console.log(error);
        }
    }


    return (

        <div className='bg-dark p-5 text-center'>
            <div className='container'>
                <h2 className='text-light mb-5'>Our Products</h2>
                <div className="text-start">
                    <NavLink to='/admin/panel/0/edit' className='text-start btn btn-warning mb-5'>
                        Add New Product
                    </NavLink>
                </div>

                <Table className='text-light' bordered>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Quanitity</th>
                            <th>Image</th>
                            <th>Actions</th>

                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product) => {
                            return (
                                <tr key={product.id}>
                                    <td>{product.id}</td>
                                    <td>{product.name}</td>
                                    <td>{product.price}</td>
                                    <td>{product.quantity}</td>
                                    <td><img className="img-card" src={product.src}></img>
                                    </td>
                                    <td >
                                        <div className='row justify-content-evenly pt-5'>
                                            <span className='col-3'>
                                                <NavLink className='' to={`/admin/panel/${product.id}`}>
                                                    <i className='fs-2 text-warning mx-1 bi bi-eye-fill'></i>
                                                </NavLink>
                                            </span>
                                            <span className='col-3'>
                                                <NavLink className='' to={`/admin/panel/${product.id}/edit`}>
                                                    <i className='fs-2 text-warning bi bi-pencil-square'></i>
                                                </NavLink>
                                            </span>
                                            <span className='col-3'>
                                                <NavLink className='' onClick={() => deleteProduct(product.id)}>
                                                    <i className='fs-2 text-danger bi bi-trash3-fill'></i>
                                                </NavLink>
                                            </span>
                                        </div>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </Table>
            </div>
        </div >
        // <div className='p-5 text-center text-ligh mt-5'>
        //     <h2 className='text-dark fs-1 mb-5'>Choose From Our Selection</h2>
        //     <div className="container-fluid ">
        //         <div className="row mx-auto">
        //             {products.map((product) => {
        //                 return <ProductCardAdmin key={product.id} product={product} show={view} deleteProd={deleteProduct} className="border-5" />
        //             })}
        //         </div>
        //     </div>
        // </div>
    );
}
