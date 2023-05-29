import React from 'react'
import { MyNavigation } from '../components/MyNavigation'
import { MyCarousel } from '../components/MyCarousel'
import { Products } from '../components/Products'

export function HomeBody() {
  return (
    <div>
        <MyCarousel />
        <Products />
    </div>
  )
}
