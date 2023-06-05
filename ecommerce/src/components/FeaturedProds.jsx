import React, { useEffect, useState } from 'react'
import { ProductCard } from './ProductCard'
import { productAPI } from '../API/productsAPI'


export function FeaturedProds() {
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
            <h2 className='text-dark fs-1 mb-5'>Featured Products</h2>
            <div className="container-fluid text-center">
                <div className="row w-100 m-auto">
                    {products.map((product, index) => {
                        return index < 4 && <ProductCard key={product.id} product={product} show={view} className="border-5" />
                    })}
                </div>
            </div>
        </div>
    );
}
