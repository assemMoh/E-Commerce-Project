import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

export function MyCarousel() {
    return (
        <div>
            <Carousel >
                <Carousel.Item>
                    <img
                        className="d-block carousel-img"
                        src="https://images.pexels.com/photos/1082528/pexels-photo-1082528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block carousel-img"
                        src="https://images.pexels.com/photos/325876/pexels-photo-325876.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"

                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block carousel-img"
                        src="https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"

                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block carousel-img"
                        src="https://images.pexels.com/photos/267320/pexels-photo-267320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block carousel-img"
                        src="https://images.pexels.com/photos/3892369/pexels-photo-3892369.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=11"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    )
}
