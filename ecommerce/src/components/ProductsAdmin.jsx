import React, { useEffect, useState } from 'react'
import { ProductCardAdmin } from './ProductCardAdmin'
import { productAPI } from '../API/productsAPI'


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
    let view = false;
    let deleteProduct = async (productId) => {
        try {
            console.log(productId);
            await productAPI.deleteProduct(productId);
            retrieveProduct();
        } catch (error) {
            console.log(error);
        }
      }
    return (
        <div className='p-5 text-center text-ligh mt-5'>
            <h2 className='text-dark fs-1 mb-5'>Choose From Our Selection</h2>
            <div className="container-fluid ">
                <div className="row mx-auto">
                    {products.map((product) => {
                        return <ProductCardAdmin key={product.id} product={product} show={view} deleteProd={deleteProduct} className="border-5" />
                    })}
                </div>
            </div>
        </div>
    );
}
