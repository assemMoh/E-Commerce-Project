import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Image } from 'react-bootstrap';
import { NotFound } from './NotFound';
import axios from 'axios';
import '../css/ProductDetails.css';

export function ProductDetails() {

  let { id } = useParams();
  let navigate = useNavigate();
  let [product, setProduct] = useState({});

  let getProductData = async () => {
    let response = await axios.get(`http://localhost:3005/products/${id}`);
    setProduct(response.data);
  };

  useEffect(() => {
    getProductData();
  }, []);

  let backToProducts = () => {
    navigate(
      '/products'
    )
  }


  if (product == []) {
    navigate(
      '/products'
    )
    return <NotFound />
  }

  return (
    <div className=' p-5 text-center'>

      <div className='w-75 m-auto row position-relative bg-light rounded mt-5'>

        <div className='col-6 pe-4'>
          <div className='border-end border-4'>
            <Image className='img-details' alt={product.name} src={product.src} />

          </div>
        </div>

        <div className='col-6 '>
          <h1 className='my-4'> {product.name}</h1>

          <h4 className='my-4'>
            Price : {product.price}
          </h4>
          <div className='text-muted my-4'>
            <h5>Quantity available: {product.quantity}</h5>
          </div>
          <div className='position-absolute bottom-0 my-4'>
            <button onClick={backToProducts} className='btn btn-dark'>Back to Products</button>

          </div>
        </div>
      </div>
    </div>
  )
}
