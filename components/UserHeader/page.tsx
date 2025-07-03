'use client'

import { useAuth } from '@/components/AuthContext/page'
import { signOut } from 'firebase/auth'
import { auth } from '@/firebase'

export default function UserHeader() {
  const { user } = useAuth()

  return (
    <div className="flex items-center space-x-4">
      <div className="flex-shrink-0">
        <div className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center">
          <span className="text-white text-sm font-medium">
            {user?.email?.charAt(0).toUpperCase()}
          </span>
        </div>
      </div>
      <div className="text-sm">
        <p className="text-gray-900 dark:text-white font-medium">
          {user?.email}
        </p>
      </div>
      <button
        onClick={() => signOut(auth)}
        className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
      >
        Cerrar Sesión
      </button>
    </div>
  )
}
