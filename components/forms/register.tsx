'use client'

import React, { useState, useEffect } from 'react'
import { auth } from '@/firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { FirebaseError } from 'firebase/app'


type RegisterFormProps = {
  credentials: {
    email: string
    password: string
    repeatPassword: string
    terms: boolean
  }
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export default function RegisterForm({ credentials, handleChange }: RegisterFormProps) {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)


  // Efecto para redirigir después del éxito
  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => {
        // Usar window.location para forzar navegación
        window.location.href = '/users'
      }, 2000) // Redirige después de 2 segundos

      return () => clearTimeout(timer)
    }
  }, [success])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError(null)
    setLoading(true)

    // Validaciones
    if (credentials.password !== credentials.repeatPassword) {
      setError('Las contraseñas no coinciden')
      setLoading(false)
      return
    }

    if (!credentials.terms) {
      setError('Debes aceptar los términos y condiciones')
      setLoading(false)
      return
    }

    if (credentials.password.length < 6) {
      setError('La contraseña debe tener al menos 6 caracteres')
      setLoading(false)
      return
    }

    try {
      // Crear usuario en Firebase Auth
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        credentials.email,
        credentials.password
      )
      
      console.log('Usuario creado exitosamente:', userCredential.user.uid)
      setSuccess(true)
      
      // Opcional: redirigir o limpiar el formulario
      // router.push('/dashboard') // si usas next/navigation
      
    } catch (error) {
      console.error('Error al crear usuario:', error)
      
      if (error instanceof FirebaseError) {
        switch (error.code) {
          case 'auth/email-already-in-use':
            setError('Este email ya está registrado')
            break
          case 'auth/invalid-email':
            setError('Email inválido')
            break
          case 'auth/weak-password':
            setError('La contraseña es muy débil')
            break
          case 'auth/operation-not-allowed':
            setError('Registro no permitido. Contacta al administrador')
            break
          default:
            setError('Error al crear la cuenta. Intenta nuevamente')
        }
      } else {
        setError('Error inesperado. Intenta nuevamente')
      }
    } finally {
      setLoading(false)
    }
  }

  if (success) {
    return (
      <div className="max-w-sm mx-auto text-center">
        <div className="p-6 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400 border border-green-200 dark:border-green-800">
          <div className="flex items-center justify-center mb-3">
            <svg className="w-8 h-8 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="font-semibold mb-2">¡Cuenta creada exitosamente!</h3>
          <p className="text-sm opacity-80">Redirigiendo al dashboard...</p>
          
          {/* Botón manual por si falla la redirección */}
          <button 
            onClick={() => window.location.href = '/users'}
            className="mt-4 text-white bg-green-600 hover:bg-green-700 font-medium rounded-lg text-sm px-4 py-2"
          >
            Ir al Dashboard
          </button>
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
      {error && (
        <div className="mb-4 p-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400">
          {error}
        </div>
      )}

      <div className="mb-5">
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Tu email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={credentials.email}
          onChange={handleChange}
          className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light"
          placeholder="nombre@ejemplo.com"
          required
          disabled={loading}
        />
      </div>

      <div className="mb-5">
        <label
          htmlFor="password"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Tu contraseña
        </label>
        <input
          type="password"
          id="password"
          name="password"
          value={credentials.password}
          onChange={handleChange}
          className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light"
          required
          disabled={loading}
          minLength={6}
        />
      </div>

      <div className="mb-5">
        <label
          htmlFor="repeat-password"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Repetir contraseña
        </label>
        <input
          type="password"
          id="repeat-password"
          name="repeatPassword"
          value={credentials.repeatPassword}
          onChange={handleChange}
          className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light"
          required
          disabled={loading}
          minLength={6}
        />
      </div>

      <div className="flex items-start mb-5">
        <div className="flex items-center h-5">
          <input
            id="terms"
            name="terms"
            type="checkbox"
            checked={credentials.terms}
            onChange={handleChange}
            className="w-4 h-4 border border-gray-300 rounded-sm bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
            required
            disabled={loading}
          />
        </div>
        <label
          htmlFor="terms"
          className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          Acepto los{' '}
          <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">
            términos y condiciones
          </a>
        </label>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? 'Creando cuenta...' : 'Registrar nueva cuenta'}
      </button>
    </form>
  )
}