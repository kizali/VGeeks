
import { useState } from "react"
import React from "react"
export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header  className="bg-gradient-to-r from-blue-900 to-blue-600 fixed w-full shadow-lg px-2 py-2 flex items-center z-10">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <i className="fas fa-passport text-3xl text-blue-600 mr-3"></i>
          <h1 className="text-2xl font-bold text-gray-800">
            Visa<span className="text-blue-600">Geeks</span>
          </h1>
        </div>

        {/* Navigation Desktop */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            <li>
              <a href="#" className="text-white font-medium hover:text-black transition-colors">
                Home
              </a>
            </li>
            <li>
              <a href="#visa-form" className="text-white hovwhiteblue-600 hover:text-black transition-colors">
                Demande Visa
              </a>
            </li>
            <li>
              <a href="#about" className="text-white hovwhiteblue-600 hover:text-black transition-colors">
                About Us
              </a>
            </li>
            <li>
              <a href="#contact" className="text-white hovwhiteblue-600 hover:text-black transition-colors">
                Contact
              </a>
            </li>
          </ul>
        </nav>

        {/* Bouton Menu Mobile */}
        <button
          className="md:hidden text-gray-600 hover:text-gray-800 transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <i className="fas fa-times text-2xl"></i> : <i className="fas fa-bars text-2xl"></i>}
        </button>

        {/* Menu Mobile */}
        {isMenuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-white shadow-lg md:hidden z-50">
            <ul className="flex flex-col space-y-4 p-4">
              <li>
                <a
                  href="#"
                  className="text-blue-600 font-medium hover:text-blue-700 transition-colors block py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#visa-form"
                  className="text-gray-600 hover:text-blue-600 transition-colors block py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Demande Visa
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-gray-600 hover:text-blue-600 transition-colors block py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-600 hover:text-blue-600 transition-colors block py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-600 hover:text-blue-600 transition-colors block py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  )
}
