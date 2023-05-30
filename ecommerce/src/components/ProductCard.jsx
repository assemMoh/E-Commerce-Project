import React from 'react'
import { Card } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import './ProdCard.css'


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
          <Card.Text className='text-muted'>
            <p>Quantity available: {product.quantity}</p>
          </Card.Text>
          <NavLink to={`/products/${product.id}`}>
            <i className="mx-4 fs-2 text-success bi bi-eye-fill mt-5">
            </i>
          </NavLink>
          <button className='cardbtn btn-outline' >Buy Now</button>
        </Card.Body>
      </Card>
    </div>
  )
}
