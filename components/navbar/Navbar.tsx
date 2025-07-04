'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-30 mx-auto w-full max-w-screen-md border border-gray-200/20 bg-white/10 dark:bg-gray-800/30 backdrop-blur-xl py-3 shadow-lg shadow-black/5 md:top-6 md:rounded-3xl lg:max-w-screen-lg">
      <div className="px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex shrink-0">
            <Link href="/" className="flex items-center group">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="w-7 h-7 text-blue-600 dark:text-white fill-current group-hover:text-blue-500 transition-colors duration-200"
              >
                <g>
                  <polygon points="231.266,471.531 220.953,512 293.141,512 282.828,471.531" />
                  <polygon points="91.016,471.531 80.703,512 133.156,512 122.844,471.531" />
                  <polygon points="389.156,471.531 378.844,512 431.297,512 420.984,471.531" />
                  <path d="M405.078,106.438c-13.156,0-31.75,22.156-31.75,37.281v188.766c-9.25-6.859-18.438-14.266-26.547-22.922V114.734C346.781,68.188,294.203,0,257.047,0c-37.172,0-89.75,68.188-89.75,114.734v194.828c-8.719,9.313-18.688,17.172-28.625,24.469V143.719c0-15.125-18.609-37.281-31.734-37.281c-13.156,0-31.75,22.156-31.75,37.281v311.984h63.484v-22.344h28.625v29.531h179.484v-29.531h26.547v22.344h63.484V143.719C436.813,128.594,418.203,106.438,405.078,106.438z M387.344,414.188H126.75c-13.125,0-14.328-37.75,13.984-58.031c33.391-23.891,73.375-53.484,73.375-117.203c0-29.594,0-44.391,0-71.703c0-22.625,19.219-55.75,42.938-55.75c23.703,0,42.922,33.125,42.922,55.75c0,27.313,0,42.109,0,71.703c0,63.719,39.984,93.313,73.375,117.203C401.656,376.438,400.453,414.188,387.344,414.188z" />
                  <path d="M282.078,203.719c0,8.703-50.078,8.703-50.078,0c0-8.688,11.219-15.719,25.047-15.719S282.078,195.031,282.078,203.719z" />
                  <path d="M209.906,374.25c0,10.594-8.578,19.156-19.172,19.156c-10.578,0-19.156-8.563-19.156-19.156s8.578-19.156,19.156-19.156C201.328,355.094,209.906,363.656,209.906,374.25z" />
                </g>
              </svg>
              <span className="ml-2 font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                Apolo
              </span>
            </Link>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex md:items-center md:justify-center md:gap-1 relative">
            <div className="flex items-center gap-1 bg-gray-100/50 dark:bg-gray-700/30 rounded-full p-1">
              <Link
                href="#"
                className="relative px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 rounded-full transition-all duration-300 hover:text-white hover:bg-blue-600 hover:shadow-md"
              >
                Nosotros
              </Link>
              <Link
                href="#"
                className="relative px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 rounded-full transition-all duration-300 hover:text-white hover:bg-blue-600 hover:shadow-md"
              >
                Servicios
              </Link>
            </div>
          </div>

          {/* Auth Buttons - Desktop */}
          <div className="hidden sm:flex items-center justify-end gap-2">
            <Link
              href="/register"
              className="relative px-4 py-2 text-sm font-semibold text-gray-700 dark:text-gray-300 rounded-full transition-all duration-300 hover:text-white hover:bg-gray-600 hover:shadow-md"
            >
              Sign in
            </Link>
            <Link
              href="/login"
              className="relative px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-full transition-all duration-300 hover:shadow-lg hover:scale-105 animate-pulse hover:animate-none"
            >
              Login
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 dark:text-white focus:outline-none p-2 rounded-full hover:bg-gray-100/50 dark:hover:bg-gray-700/30 transition-colors duration-200"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-3 px-4 pb-4 space-y-2 bg-white/20 dark:bg-gray-800/40 backdrop-blur-md rounded-b-2xl border-t border-gray-200/20">
          <Link
            href="#"
            className="block text-sm font-medium text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 py-2 px-3 rounded-lg hover:bg-gray-100/50 dark:hover:bg-gray-700/30 transition-all duration-200"
          >
            Nosotros
          </Link>
          <Link
            href="#"
            className="block text-sm font-medium text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 py-2 px-3 rounded-lg hover:bg-gray-100/50 dark:hover:bg-gray-700/30 transition-all duration-200"
          >
            Servicios
          </Link>
          <Link
            href="/register"
            className="block text-sm font-medium text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 py-2 px-3 rounded-lg hover:bg-gray-100/50 dark:hover:bg-gray-700/30 transition-all duration-200"
          >
            Sign in
          </Link>
          <Link
            href="/login"
            className="block bg-blue-600 text-white text-sm font-semibold px-4 py-2 rounded-lg text-center hover:bg-blue-700 transition-all duration-200 hover:shadow-lg"
          >
            Login
          </Link>
        </div>
      )}
    </header>
  )
}