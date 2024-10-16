import React from 'react'
import AuthCard from '../AuthCard'

const LoginForm = () => {
  return (
    <AuthCard
    cardTitle='Welcome back! Login'
    backButtonHref='/auth/register'
    backButtonLabel='Create a new account'
    showSocials
    >
      Henlo
    </AuthCard>
  )
}

export default LoginForm