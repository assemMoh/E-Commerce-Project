import React from 'react'
import { MyNavigation } from '../components/MyNavigation'
import { MyCarousel } from '../components/MyCarousel'
import { CardViewer } from '../components/CardViewer'

export function HomeBody() {
  return (
    <div>
        <MyCarousel />
        <CardViewer />
    </div>
  )
}
