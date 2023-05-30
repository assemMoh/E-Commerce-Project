import React from 'react'
import { MyCarousel } from '../components/MyCarousel'
import { FeaturedProds } from '../components/FeaturedProds'


export function HomeBody() {
  return (
    <div>
      <MyCarousel />
      <FeaturedProds />
    </div>
  )
}
