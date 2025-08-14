import { useState } from 'react'
import atLogo from '../assets/at.png'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-[#4F46E5] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16 lg:h-18">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src={atLogo} 
              alt="AT Digital Logo" 
              className="h-6 sm:h-8 lg:h-10 w-auto object-contain"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-4 lg:space-x-8">
            <a href="#services" className="text-xs sm:text-sm lg:text-base font-medium hover:text-gray-200 transition-colors px-2 py-1">SERVICES</a>
            <a href="#about" className="text-xs sm:text-sm lg:text-base font-medium hover:text-gray-200 transition-colors px-2 py-1">ABOUT US</a>
            <a href="#contact" className="text-xs sm:text-sm lg:text-base font-medium hover:text-gray-200 transition-colors px-2 py-1">CONTACT US</a>
            <a href="#careers" className="text-xs sm:text-sm lg:text-base font-medium hover:text-gray-200 transition-colors px-2 py-1">CAREERS</a>
          </nav>

          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2 hover:bg-indigo-600 rounded-md transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <svg 
              className="w-5 h-5 sm:w-6 sm:h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-indigo-400">
              <a 
                href="#services" 
                className="block px-3 py-2 text-sm font-medium hover:bg-indigo-600 rounded transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                SERVICES
              </a>
              <a 
                href="#about" 
                className="block px-3 py-2 text-sm font-medium hover:bg-indigo-600 rounded transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                ABOUT US
              </a>
              <a 
                href="#contact" 
                className="block px-3 py-2 text-sm font-medium hover:bg-indigo-600 rounded transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                CONTACT US
              </a>
              <a 
                href="#careers" 
                className="block px-3 py-2 text-sm font-medium hover:bg-indigo-600 rounded transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                CAREERS
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header