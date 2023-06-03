import React from 'react'
import { LoginRegisterNav } from '../components/LoginRegisterNav'
import { Login } from '../components/Login'
import { UserNav } from '../components/UserNav'

export function LoginPage() {
  return (
    <div>
        <LoginRegisterNav />
        <Login />
    </div>
  )
}
