import React from 'react'
import { Card } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import '../css/ProdCard.css'


export function ProductCard(props) {
  let { product } = props
  return (

    <div className='col-sm-6 col-md-3 '>
      <Card className='border border-4 shadow-lg prodcard mt-4'>
        <Card.Body className='p-2 pb-4 '>
          <Card.Img className='img-card' variant="top" src={product.src} />

          <Card.Title className='my-3'>{product.name}</Card.Title>

          <Card.Text>
            Price : {product.price}
          </Card.Text>
          <Card.Text className='text-dark'>
            <p>
              {product.quantity === 1 ? 'Only One Item Left' : product.quantity === 0 ? 'Out Of Stock' : `Quantity available: ${product.quantity}`}
            </p>
          </Card.Text>
          <NavLink to={`/products/${product.id}`}>
            <i className="mx-5 fs-2 bi bi-eye-fill ms-1">
            </i>
          </NavLink>
          <button className='cardbtn btn-outline' disabled={product.quantity == 0}>
            {product.quantity == 0 ? 'Out Of Stock' : 'Add To Cart'}
          </button>

        </Card.Body>
      </Card>
    </div>
  )
}


