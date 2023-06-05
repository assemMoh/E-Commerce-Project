import React from 'react';
import { Card } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import '../css/CartProd.css'

export function CartProduct(props) {
    const { product } = props;

    return (
        <div className='col-sm-12 col-md-12 col-lg-10  mx-auto '>
            <Card className='border border-4 shadow-lg cartprodcard mt-4'>
                <Card.Body className='row'>

                    <div className='col-md-6 col-sm-3' >
                        <Card.Img className='img-card col-sm-12 col-md-12' variant="top" src={product.src} id='cart-img-card' />
                    </div>
                    <div className='col-md-4 col-sm-4'>
                        <Card.Title className='my-4'>{product.name}</Card.Title>
                        <Card.Text>
                            Price: {'$' + product.price}
                        </Card.Text>
                        <Card.Text className='text-dark'>
                            <p className={product.quantity === 1 ? "text-primary" : ""}>
                                {product.quantity === 1 ? 'Only One Item Left' : `Quantity available: ${product.quantity}`}
                            </p>
                        </Card.Text>
                        {product.quantity === 0 ? (
                            <i className="mx-5 fs-2 bi bi-eye-fill ms-1 disabled cardicon" />
                        ) : (
                            <NavLink to={`/products/${product.id}`}>
                                <i className="mx-5 fs-2 bi bi-eye-fill ms-1" />
                            </NavLink>
                        )}
                        <button className='cartcardbtn'>
                            Remove Item
                        </button>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
}
