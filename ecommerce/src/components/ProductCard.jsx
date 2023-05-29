import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'


export function ProductCard(props) {
  let { product } = props
  return (

    <div className='col-sm-6 col-md-3 '>
      <Card className='border border-4 shadow-lg'>
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
            <i className="mx-4 fs-2 text-warning bi bi-eye-fill"            >
            </i></NavLink>
          <Button variant="success">Buy Now</Button>
        </Card.Body>
      </Card>
    </div>
  )
}
