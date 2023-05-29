import React, { useEffect, useState } from 'react'
import { ProductCard } from './ProductCard'
import { NavLink, Table } from 'react-bootstrap';
import { productAPI } from '../API/productsAPI'
import { HomeProductCard } from './HomeProductCard';
export function Products() {
    // let products = [
    //     {
    //         id: 1,
    //         productName: "Sumsung",
    //         price: 100
    //     },
    //     {
    //         id: 2,
    //         productName: "Iphone",
    //         price: 400
    //     },
    //     {
    //         id: 3,
    //         productName: "Book",
    //         price: 10
    //     },
    //     {
    //         id: 4,
    //         productName: "Pen",
    //         price: 9
    //     },
    //     {
    //     id: 5,
    //     productName: "Note",
    //     price: 90
    //     }
    // ]



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
            <h2 className='text-dark fs-1 mb-4'>View Our Products</h2>
            <div className="container-fluid text-center">
                <div className="row w-75 m-auto">
                    {products.map((product, index) => {
                         return index <4  && <ProductCard key={product.id} product={product} show={view} className="border-5" />
                    })}

                </div>
            </div>
        </div>
    );
}
