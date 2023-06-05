import React from 'react'
import { CartPageComponent } from '../components/CartPageComponent'
import { UserNav } from '../components/UserNav'

export default function CartPage() {
    return (
        <div>
            <UserNav />
            <CartPageComponent />
        </div>
    )
}
