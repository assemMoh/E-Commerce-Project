import React, { useState, useEffect } from 'react'
import { getCurrentUser } from '../API/productsAPI'
import '../css/Cart.css';

export function CartItem() {
    let [cartCount, setCartCount] = useState(0);
    let myuser;

    let getUser = () => {
        try {
          getCurrentUser().then((user) => {
            myuser = user.data;
        setCartCount(myuser['cart'].length)

          })
        }
        catch (error) {
          console.log(error)
        }
      }
      useEffect(() => {
        try {
          getUser()
        }
        catch (error) {
          console.log(error)
        }
      }, [])
    
      let updateCount = ()=>{
        getUser();
      }

    return (
        <div className='cart'>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-cart2" viewBox="0 0 16 16">
                <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
            </svg>
            < div className='counter-holder'>
                {cartCount !== 0 && (<p className='counter'>{cartCount}</p>)}
            </div>
        </div>
    )
}
