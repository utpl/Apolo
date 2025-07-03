'use client'

import React, { useState } from 'react'
import RegisterForm from '@/components/forms/register'

export default function RegisterPage() {
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
    repeatPassword: '',
    terms: false,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target

    setCredentials(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  return (
    <main className="p-8 bg-white dark:bg-gray-900">
      <RegisterForm credentials={credentials} handleChange={handleChange} />
    </main>
  )
}
