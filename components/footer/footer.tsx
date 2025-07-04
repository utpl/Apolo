import React from 'react'
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin, Users, Shield, Zap, Info, Settings, MessageCircle } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-gray-900 to-gray-800 text-white overflow-hidden">
    {/* Animated background elements */}
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20">
      <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500 rounded-full blur-3xl animate-float1"></div>
      <div className="absolute top-40 right-20 w-40 h-40 bg-purple-500 rounded-full blur-3xl animate-float2"></div>
      <div className="absolute bottom-10 left-1/2 w-48 h-48 bg-cyan-500 rounded-full blur-3xl animate-float3"></div>
    </div>
  
    <div className="relative max-w-7xl mx-auto px-6 py-16 sm:py-20 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-12">
        <div className="group">
          <div className="flex items-center space-x-2 mb-6">
            <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center transform group-hover:rotate-12 transition duration-500">
              <span className="text-xl font-bold">AP</span>
            </div>
            <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
             Apolo
            </h2>
          </div>
          <p className="text-gray-300 mb-6">La plataforma sencilla y moderna para gestionar el personal de tu empresa de servicios.</p>
          <div className="flex space-x-4">
            <a href="#" className="group/social w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-all duration-300 hover:scale-110">
              <Facebook size={18} className="text-gray-300 group-hover/social:text-white transition-colors duration-300" />
            </a>
            <a href="#" className="group/social w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-cyan-500 transition-all duration-300 hover:scale-110">
              <Twitter size={18} className="text-gray-300 group-hover/social:text-white transition-colors duration-300" />
            </a>
            <a href="#" className="group/social w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-pink-500 transition-all duration-300 hover:scale-110">
              <Instagram size={18} className="text-gray-300 group-hover/social:text-white transition-colors duration-300" />
            </a>
          </div>
        </div>
  
        {/* Quick Links */}
        <div className="group">
          <h3 className="text-lg font-semibold mb-6 relative inline-block">
            <span className="relative z-10">Enlaces Rápidos</span>
            <span className="absolute bottom-0 left-0 w-full h-1 bg-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
          </h3>
          <ul className="space-y-4">
            <li className="flex items-center space-x-3 group/item">
              <div className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center group-hover/item:bg-blue-500/30 transition-colors duration-300">
                <Info size={16} className="text-blue-400" />
              </div>
              <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Nosotros</a>
            </li>
            <li className="flex items-center space-x-3 group/item">
              <div className="w-8 h-8 bg-purple-500/20 rounded-full flex items-center justify-center group-hover/item:bg-purple-500/30 transition-colors duration-300">
                <Settings size={16} className="text-purple-400" />
              </div>
              <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Servicios</a>
            </li>
            <li className="flex items-center space-x-3 group/item">
              <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center group-hover/item:bg-green-500/30 transition-colors duration-300">
                <MessageCircle size={16} className="text-green-400" />
              </div>
              <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Contacto</a>
            </li>
          </ul>
        </div>
  
        {/* Contact info */}
        <div className="group">
          <h3 className="text-lg font-semibold mb-6 relative inline-block">
            <span className="relative z-10">Contacto</span>
            <span className="absolute bottom-0 left-0 w-full h-1 bg-cyan-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
          </h3>
          <ul className="space-y-4">
            <li className="flex items-center space-x-3 group/contact">
              <div className="w-8 h-8 bg-cyan-500/20 rounded-full flex items-center justify-center group-hover/contact:bg-cyan-500/30 transition-colors duration-300">
                <Mail size={16} className="text-cyan-400" />
              </div>
              <div>
                <p className="text-gray-300 text-sm">Email</p>
                <a href="mailto:info@apolo.com" className="text-white hover:text-cyan-400 transition-colors duration-300">info@apolo.com</a>
              </div>
            </li>
            <li className="flex items-center space-x-3 group/contact">
              <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center group-hover/contact:bg-green-500/30 transition-colors duration-300">
                <Phone size={16} className="text-green-400" />
              </div>
              <div>
                <p className="text-gray-300 text-sm">Teléfono</p>
                <a href="tel:+593987654321" className="text-white hover:text-green-400 transition-colors duration-300">+593 98 765 4321</a>
              </div>
            </li>
            <li className="flex items-center space-x-3 group/contact">
              <div className="w-8 h-8 bg-purple-500/20 rounded-full flex items-center justify-center group-hover/contact:bg-purple-500/30 transition-colors duration-300">
                <MapPin size={16} className="text-purple-400" />
              </div>
              <div>
                <p className="text-gray-300 text-sm">Ubicación</p>
                <p className="text-white">Loja, Ecuador</p>
              </div>
            </li>
          </ul>
        </div>
  
        {/* Why Choose Us */}
        <div className="group">
          <h3 className="text-lg font-semibold mb-6 relative inline-block">
            <span className="relative z-10">¿Por qué Apolo?</span>
            <span className="absolute bottom-0 left-0 w-full h-1 bg-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
          </h3>
          <ul className="space-y-4">
            <li className="flex items-start space-x-3 group/feature">
              <div className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center mt-1 group-hover/feature:bg-blue-500/30 transition-colors duration-300">
                <Zap size={16} className="text-blue-400" />
              </div>
              <div>
                <p className="text-white font-medium">Rápido y Eficiente</p>
                <p className="text-gray-300 text-sm">Optimiza tu tiempo y recursos</p>
              </div>
            </li>
            <li className="flex items-start space-x-3 group/feature">
              <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center mt-1 group-hover/feature:bg-green-500/30 transition-colors duration-300">
                <Shield size={16} className="text-green-400" />
              </div>
              <div>
                <p className="text-white font-medium">Seguro y Confiable</p>
                <p className="text-gray-300 text-sm">Protección de datos garantizada</p>
              </div>
            </li>
            <li className="flex items-start space-x-3 group/feature">
              <div className="w-8 h-8 bg-orange-500/20 rounded-full flex items-center justify-center mt-1 group-hover/feature:bg-orange-500/30 transition-colors duration-300">
                <Users size={16} className="text-orange-400" />
              </div>
              <div>
                <p className="text-white font-medium">Fácil de Usar</p>
                <p className="text-gray-300 text-sm">Interfaz intuitiva para todos</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
  
      <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
        <p className="text-gray-400 text-sm mb-4 md:mb-0">
          &copy; <span>{new Date().getFullYear()}</span> Apolo - Gestión de Personal. Todos los derechos reservados.
        </p>
        <div className="flex space-x-6">
          <a href="#" className="text-gray-400 hover:text-white transition duration-300 hover:underline">Política de Privacidad</a>
          <a href="#" className="text-gray-400 hover:text-white transition duration-300 hover:underline">Términos de Servicio</a>
          <a href="#" className="text-gray-400 hover:text-white transition duration-300 hover:underline">Cookies</a>
        </div>
      </div>
    </div>
  
    {/* Orb animation */}
    <div className="orb pointer-events-none absolute w-64 h-64 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-3xl" style={{ transform: 'translate(-50%, -50%)', opacity: 0.3 }}></div>
  </footer>
  
  )
}