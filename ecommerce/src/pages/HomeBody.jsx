import React from 'react'
import { MyCarousel } from '../components/MyCarousel'
import { FeaturedProds } from '../components/FeaturedProds'
import { MyNavigation } from '../components/MyNavigation'


export function HomeBody() {
  return (
    <div>
      <MyNavigation />
      <MyCarousel />
      <FeaturedProds />
    </div>
  )
}
