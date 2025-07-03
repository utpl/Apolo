// app/(dashboard)/users/page.tsx
'use client'

import { useAuth } from '@/components/AuthContext/page'

export default function UsersPage() {
  const { user } = useAuth()

  return (
    <div className="space-y-6">
      {/* Título de la página */}
      <div className="bg-white dark:bg-gray-800 shadow rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Gestión de Usuarios
          </h1>
          <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
            Administra los usuarios de tu aplicación
          </p>
        </div>
      </div>

      {/* Información del usuario actual */}
      <div className="bg-white dark:bg-gray-800 shadow rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
            Usuario Actual
          </h2>
          
          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
            <div className="flex items-center space-x-3">
              <div className="flex-shrink-0">
                <div className="h-10 w-10 rounded-full bg-blue-500 flex items-center justify-center">
                  <span className="text-white font-medium">
                    {user?.email?.charAt(0).toUpperCase()}
                  </span>
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-blue-900 dark:text-blue-100">
                  Email del usuario autenticado:
                </p>
                <p className="text-lg font-semibold text-blue-700 dark:text-blue-300">
                  {user?.email}
                </p>
                <p className="text-xs text-blue-600 dark:text-blue-400">
                  UID: {user?.uid}
                </p>
                <p className="text-xs text-blue-600 dark:text-blue-400">
                  Verificado: {user?.emailVerified ? 'Sí' : 'No'}
                </p>
                <p className="text-xs text-blue-600 dark:text-blue-400">
                  Creado: {user?.metadata.creationTime ? new Date(user.metadata.creationTime).toLocaleDateString() : 'N/A'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lista de usuarios (placeholder para futuras funcionalidades) */}
      <div className="bg-white dark:bg-gray-800 shadow rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
            Lista de Usuarios
          </h2>
          
          <div className="text-center py-8">
            <div className="mx-auto h-12 w-12 text-gray-400">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-2V9.75a.75.75 0 00-1.5 0v2.25H21v.75z" />
              </svg>
            </div>
            <h3 className="mt-2 text-sm font-medium text-gray-900 dark:text-white">
              Gestión de usuarios
            </h3>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
              Aquí podrás ver y administrar todos los usuarios de tu aplicación.
            </p>
            <div className="mt-6">
              <button
                type="button"
                className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                <svg className="-ml-1 mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                Agregar Usuario
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}