import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

export function MyCarousel() {
  return (
    <div>
            <Carousel >
                <Carousel.Item>
                    <img
                        className="d-block carousel-img"
                        src="https://images.pexels.com/photos/163031/table-wood-record-notebook-163031.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="Note Book"
                    />
                    <Carousel.Caption>
                        <h3>Note Book</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block carousel-img"
                        src="https://images.pexels.com/photos/12865963/pexels-photo-12865963.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="Office"
                    />
                    <Carousel.Caption>
                        <h3>Office</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block carousel-img"
                        src="https://images.pexels.com/photos/3178938/pexels-photo-3178938.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="Stationary"
                    />
                    <Carousel.Caption>
                        <h3>Stationary</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
  )
}
