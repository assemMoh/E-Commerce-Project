import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

export function MyCarousel() {
  return (
    <div>
        <Carousel className='p-5 h-25 w-75'>
      
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/37539/colored-pencils-colour-pencils-mirroring-color-37539.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/37539/colored-pencils-colour-pencils-mirroring-color-37539.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/37539/colored-pencils-colour-pencils-mirroring-color-37539.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Second slide"
        />
      </Carousel.Item>
      
    </Carousel>
    </div>
  )
}
