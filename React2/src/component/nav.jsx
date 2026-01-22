import React, { useState } from 'react';

function Nav() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="bg-white shadow-md sticky top-0 z-50">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center h-16">

                    {/* Logo */}
                    <div className="flex items-center gap-3">
                        <div className="h-10 w-10 bg-blue-600 rounded-lg flex items-center justify-center">
                            <span className="text-white font-bold text-xl">B</span>
                        </div>
                        <span className="text-xl font-bold text-gray-800">Brand</span>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        <a href="/" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">
                            Home
                        </a>
                        <a href="/blog" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">
                            Blog
                        </a>
                        <a href="/about" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">
                            About
                        </a>
                        <a href="/card" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">
                            Card
                        </a>
                        <a href="/courses" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">
                            Courses
                        </a>
                        <a href="/contact" className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                            Contact
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <div className="space-y-1">
                            <span className={`block w-6 h-0.5 bg-gray-600 transition-transform ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
                            <span className={`block w-6 h-0.5 bg-gray-600 transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                            <span className={`block w-6 h-0.5 bg-gray-600 transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
                        </div>
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden py-4 border-t">
                        <div className="flex flex-col gap-3">
                            <a href="/" className="py-2 px-4 hover:bg-gray-100 rounded-lg transition-colors">
                                Home
                            </a>
                            <a href="/blog" className="py-2 px-4 hover:bg-gray-100 rounded-lg transition-colors">
                                Blog
                            </a>
                            <a href="/about" className="py-2 px-4 hover:bg-gray-100 rounded-lg transition-colors">
                                About
                            </a>
                            <a href="/card" className="py-2 px-4 hover:bg-gray-100 rounded-lg transition-colors">
                                Card
                            </a>
                            <a href="/contact" className="py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors mt-2">
                                Contact
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}

export default Nav;