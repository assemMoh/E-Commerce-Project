import React, { useEffect, useState } from 'react'
import { productAPI } from '../API/productsAPI'
import { CartProduct } from './CartProduct';


export function CartPageComponent() {

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
    let view = false;


    return (
        <div className='p-5 text-center text-ligh mt-5'>
            <h1 className='text-center "border-bottom"'>Your Cart Items</h1>
            <div className="container-fluid ">
                <div className="row mx-auto">
                    {products.map((product, index) => {
                        return <CartProduct key={product.id} product={product} show={view} className="border-5" />
                    })}
                </div>
            </div>
        </div>
    );
}
