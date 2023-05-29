import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'


export function HomeProductCard(props) {
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
         
        </Card.Body>
      </Card>
    </div>
  )
}
