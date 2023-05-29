import React from 'react'
import { Button, Card } from 'react-bootstrap'


export function MyCard(props) {
  let { product } = props
  return (
    
    <div className='col-sm-6 col-md-4'>
        <Card>
            <Card.Body>
                <Card.Text className='card-txt'>
                {product.productName}
                </Card.Text>
                <Card.Text>
                  Price: {product.price}
                </Card.Text>
                <Button className='btn btn-dark'>Discover Car</Button>
            </Card.Body>
        </Card>
    </div>
  )
}
