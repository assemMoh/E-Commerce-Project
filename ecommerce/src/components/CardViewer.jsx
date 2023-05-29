import React from 'react'
import { MyCard } from './MyCard'

export function CardViewer() {
    let prododucts = [
        {
            id: 1,
            productName: "Sumsung",
            price: 100
        },
        {
            id: 2,
            productName: "Iphone",
            price:400
        },
        {
            id: 3,
            productName: "Book",
            price:10
        },
        {
            id: 4,
            productName: "Pen",
            price:9
        }
    ]
  return (
    <div>

        <div className='bg-secondary p-5 text-center text-ligh'>
            <h2 className='text-warning mb-4'>Our Products</h2>
            <div className="container">
                <div className="row">
                    {prododucts.map( ( product ) => {
                        return <MyCard key={product.id} product={product} />
                    } )}
                    
                </div>
            </div>
        </div>

    </div>
  )
}
