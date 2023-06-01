import React from 'react'
import { Card } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import '../css/ProdCard.css'


export function ProductCardAdmin(props) {
  let { product, deleteProd } = props

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


          <Card.Body className='my-2 row justify-content-center'>
             <NavLink className='col-3' to={`/products/${product.id}`}>
              <i className="mx-5 fs-2 bi bi-eye-fill ms-1">
              </i>
            </NavLink>
            <NavLink className='col-3' to={`/products/${product.id}/edit`}>
              <button className='btn btn-warning'>
                Edit
              </button>
            </NavLink>

            <button className='btn btn-danger col-3' onClick={() => deleteProd(product.id)}>
              Delete
            </button>
          </Card.Body>


        </Card.Body>
      </Card>
    </div>
  )
}


