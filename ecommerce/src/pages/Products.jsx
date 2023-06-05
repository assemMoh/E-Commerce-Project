import React, { useEffect, useState } from 'react'
import { ProductCard } from '../components/ProductCard'
import { productAPI } from '../API/productsAPI'
import { useNavigate } from 'react-router-dom';


export function Products() {

    let [products, setProducts] = useState([]);
    let [test, setTest] = useState(1);
    useEffect(() => {
        retrieveProduct();
    }, []);

    let changeTest = () => {
        
    }

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
            {}<h2 className='text-dark fs-1 mb-5'>Choose From Our Selection</h2>
            <div className="container-fluid ">
                <div className="row mx-auto">
                    {products.map((product, index) => {
                        return index >= 4 && <ProductCard key={product.id} product={product} show={view} className="border-5" />
                    })}
                </div>
            </div>
        </div>
    );
}
