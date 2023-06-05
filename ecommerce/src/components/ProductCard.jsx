// import React from 'react'
// import { Card } from 'react-bootstrap'
// import { NavLink } from 'react-router-dom'
// import '../css/ProdCard.css'


// export function ProductCard(props) {
//   let { product } = props
//   return (

//     <div className='col-sm-12 col-md-6 col-lg-3 '>
//       <Card className='border border-4 shadow-lg prodcard mt-4'>
//         <Card.Body className='p-2 pb-4 '>
//           <Card.Img className='img-card' variant="top" src={product.src} />

//           <Card.Title className='my-3'>{product.name}</Card.Title>

//           <Card.Text>
//             Price : {'$' + product.price}
//           </Card.Text>
//           <Card.Text className='text-dark'>
//             <p className={product.quantity === 0 ? "text-danger" : product.quantity === 1 ? "text-primary" : ""} >
//               {product.quantity === 1 ? 'Only One Item Left' : product.quantity === 0 ? 'Out Of Stock' : `Quantity available: ${product.quantity}`}
//             </p>
//           </Card.Text>
//           {product.quantity === 0 ? (<i className="mx-5 fs-2 bi bi-eye-fill ms-1 disabled cardicon" />)
//             : (<NavLink to={`/products/${product.id}`}>
//               <i className="mx-5 fs-2 bi bi-eye-fill ms-1" />
//             </NavLink>
//             )}
//           <button className='cardbtn' disabled={product.quantity == 0}>
//             {product.quantity == 0 ? 'Out Of Stock' : 'Add To Cart'}
//           </button>
//         </Card.Body>
//       </Card>
//     </div>
//   )
// }


import React, { useState } from 'react'
import { Card } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import '../css/ProdCard.css'
import { getCurrentUser, addProductToCart } from '../API/productsAPI'
import { useEffect } from 'react'

export function ProductCard(props) {
  let { product } = props
  let [myuser, setMyUser] = useState({})

  let getUser = () => {
    try {
      getCurrentUser().then((user) => {
        console.log(user.data)
        // console.log(myuser)
      })
    }
    catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    try {
      // getUser()
    }
    catch (error) {
      console.log(error)
    }
  })


  ///
  let addToMyCart = (productId) => {
    try {
      console.log(myuser.username);
      console.log(productId);
      console.log(myuser.cart)
      // myuser['cart'].push(productId)
      // console.log(myuser['cart'])
      let newcart =  [...myuser.id, productId]
      console.log(newcart)

      myuser.cart = newcart;
      console.log(myuser.id);
      console.log(myuser.cart);

      //addProductToCart(myuser.id, myuser)

      // // myuser['cart'] = [...myuser['cart'], productId]
    }
    catch (error) {
      console.log(error)
    }
  };
  return (

    <div className='col-sm-12 col-md-6 col-lg-3 '>
      <Card className='border border-4 shadow-lg prodcard mt-4'>
        <Card.Body className='p-2 pb-4 '>
          <Card.Img className='img-card' variant="top" src={product.src} />
          <Card.Title className='my-3'>{product.name}</Card.Title>
          <Card.Text>
            Price : {'$' + product.price}
          </Card.Text>
          <Card.Text className='text-dark'>
            <p className={product.quantity === 0 ? "text-danger" : product.quantity === 1 ? "text-primary" : ""} >
              {product.quantity === 1 ? 'Only One Item Left' : product.quantity === 0 ? 'Out Of Stock' : `Quantity available: ${product.quantity}`}
            </p>
          </Card.Text>
          {product.quantity === 0 ? (<i className="mx-5 fs-2 bi bi-eye-fill ms-1 disabled cardicon" />)
            : (<NavLink to={`/products/${product.id}`}>
              <i className="mx-5 fs-2 bi bi-eye-fill ms-1" />
            </NavLink>
            )}
          <button onClick={() => addToMyCart(product.id)} className='cardbtn' disabled={product.quantity == 0}>
            {product.quantity == 0 ? 'Out Of Stock' : 'Add To Cart'}
          </button>
        </Card.Body>
      </Card>
    </div>
  )
}



