import React, { useEffect, useState } from 'react'
import { ProductCard } from '../components/ProductCard'
import { productAPI } from '../API/productsAPI'


export function Products() {

    let [products, setProducts] = useState([]);
    useEffect(() => {
        retrieveProduct();
    }, []);

    let retrieveProduct = async () => {
        try {
            let response = await productAPI.getAllProduct();
            setProducts(response.data);
            console.log(products);
        } catch (error) {
            // console.log(error);
        }
    };


    return (
        <div className='p-5 text-center text-ligh mt-1'>
           <h2 className='text-dark fs-1 mb-2'>Choose From Our Selection</h2>
            <div className="container-fluid ">
                <div className="row w-100 mx-auto">
                    {products.map((product, index) => {
                        return index >= 4 && <ProductCard key={product.id} product={product}  className="border-5" />
                    })}
                </div>
            </div>
        </div>
    );
}
