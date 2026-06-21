import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, Moon, Sun } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isDark, setIsDark] = useState(false)

  const toggleTheme = () => {
    setIsDark(!isDark)
    document.documentElement.classList.toggle('dark')
  }

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50 border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-2xl font-bold text-indigo-600">
            SaaS<span className="text-purple-600">Pro</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="hover:text-indigo-600 transition">Home</Link>
            <Link to="/onboarding" className="hover:text-indigo-600 transition">Get Started</Link>
            <Link to="/dashboard" className="hover:text-indigo-600 transition">Dashboard</Link>
            <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800">
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <Link to="/onboarding" className="btn-primary text-sm">Start Free Trial</Link>
          </div>

          <div className="md:hidden flex items-center gap-4">
            <button onClick={toggleTheme} className="p-2">
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4 space-y-3">
            <Link to="/" className="block hover:text-indigo-600" onClick={() => setIsOpen(false)}>Home</Link>
            <Link to="/onboarding" className="block hover:text-indigo-600" onClick={() => setIsOpen(false)}>Get Started</Link>
            <Link to="/dashboard" className="block hover:text-indigo-600" onClick={() => setIsOpen(false)}>Dashboard</Link>
            <Link to="/onboarding" className="block btn-primary text-center" onClick={() => setIsOpen(false)}>Start Free Trial</Link>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar;