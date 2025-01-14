import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <>
            <header className="w-full">
                <nav className="bg-gray-800 text-yellow-400 fixed top-0 z-50 w-full">
                    <div className="container mx-auto px-4">
                        <div className="flex items-center justify-between h-16">
                            {/* Logo */}
                            <div className="text-yellow-400 text-2xl font-bold flex-shrink-0">
                                <Link to="#">Banana Chips</Link>
                            </div>

                            {/* Desktop Menu */}
                            <div className="hidden md:flex space-x-6 flex-1 justify-center">
                                <Link to="/home"
                                    className="text-yellow-400 hover:text-yellow-500 px-3 py-2 text-sm font-medium relative group">
                                    Home
                                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-500 group-hover:w-full"></span>
                                </Link>

                                <Link to="/about"
                                    className="text-yellow-400 hover:text-yellow-500 px-3 py-2 text-sm font-medium relative group">
                                    About
                                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-500 group-hover:w-full"></span>
                                </Link>

                                <Link to="/contact"
                                    className="text-yellow-400 hover:text-yellow-500 px-3 py-2 text-sm font-medium relative group">
                                    Contact
                                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-500 group-hover:w-full"></span>
                                </Link>

                                <Link to="/service"
                                    className="text-yellow-400 hover:text-yellow-500 px-3 py-2 text-sm font-medium relative group">
                                    Services
                                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-500 group-hover:w-full"></span>
                                </Link>

                                <Link to="/faq"
                                    className="text-yellow-400 hover:text-yellow-500 px-3 py-2 text-sm font-medium relative group">
                                    FAQ
                                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-500 group-hover:w-full"></span>
                                </Link>
                            </div>

                            {/* Login and Sign-Up Buttons */}
                            <div className="hidden md:flex space-x-4">
                                <Link to="/login" className="items-center border-0 py-2 px-5 text-yellow-400 hover:text-gray-800 hover:bg-yellow-400 rounded-md text-base transition duration-300 ease-in-out">Login</Link>
                                <Link to="/register" className="items-center border-0 py-2 px-5 text-yellow-400 hover:text-gray-800 hover:bg-yellow-400 rounded-md text-base transition duration-300 ease-in-out">Sign-up</Link>
                            </div>

                            {/* Mobile Menu Button (Hamburger) */}
                            <div className="md:hidden flex items-center">
                                <button onClick={toggleMenu} className="text-yellow-400 hover:text-white focus:outline-none">
                                    {isMenuOpen ? (
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    ) : (
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                        </svg>
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Mobile Menu */}
                    <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden bg-gray-800`}>
                        <div className="flex flex-col space-y-4 px-4 py-2">
                            <Link to="/home" className="text-yellow-400 hover:text-yellow-500 px-3 py-2 text-lg font-medium">Home</Link>
                            <Link to="/about" className="text-yellow-400 hover:text-yellow-500 px-3 py-2 text-lg font-medium">About</Link>
                            <Link to="/contact" className="text-yellow-400 hover:text-yellow-500 px-3 py-2 text-lg font-medium">Contact</Link>
                            <Link to="/service" className="text-yellow-400 hover:text-yellow-500 px-3 py-2 text-lg font-medium">Services</Link>
                            <Link to="/faq" className="text-yellow-400 hover:text-yellow-500 px-3 py-2 text-lg font-medium">FAQ</Link>
                            <Link to="/login" className="text-yellow-400 hover:text-yellow-500 px-3 py-2 text-lg font-medium">Login</Link>
                            <Link to="/register" className="text-yellow-400 hover:text-yellow-500 px-3 py-2 text-lg font-medium">Sign-up</Link>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}
