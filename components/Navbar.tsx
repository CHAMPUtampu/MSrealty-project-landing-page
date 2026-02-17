'use client';
import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-transparent absolute top-[40px] left-0 w-full z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center gap-2">
                        <img src="/logo.png" alt="MS Realty" className="h-16 md:h-20 w-auto object-contain" />
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex items-center space-x-8">
                        <Link href="/" className="text-gray-900 hover:text-[#D4AF37] font-medium transition-colors">
                            Home
                        </Link>
                        <Link href="#about" className="text-gray-900 hover:text-[#D4AF37] font-medium transition-colors">
                            About
                        </Link>
                        <Link href="#projects" className="text-gray-900 hover:text-[#D4AF37] font-medium transition-colors">
                            Projects
                        </Link>
                        <Link href="#contact" className="text-gray-900 hover:text-[#D4AF37] font-medium transition-colors">
                            Get in contact
                        </Link>
                        <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-md font-semibold transition-transform transform hover:scale-105">
                            BOOK A FREE SITE VISIT
                        </button>
                    </div>

                    {/* Mobile menu button */}
                    <div className="lg:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-800 hover:text-gray-600 focus:outline-none"
                        >
                            <span className="sr-only">Open main menu</span>
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="lg:hidden bg-white shadow-lg absolute w-full top-20 left-0">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col items-center">
                        <Link href="/" className="block px-3 py-2 text-gray-900 hover:text-[#D4AF37] font-medium">Home</Link>
                        <Link href="#about" className="block px-3 py-2 text-gray-900 hover:text-[#D4AF37] font-medium">About</Link>
                        <Link href="#projects" className="block px-3 py-2 text-gray-900 hover:text-[#D4AF37] font-medium">Projects</Link>
                        <Link href="#contact" className="block px-3 py-2 text-gray-900 hover:text-[#D4AF37] font-medium">Get in contact</Link>
                        <button className="mt-2 w-full bg-orange-500 text-white px-6 py-2 rounded-md font-semibold">
                            BOOK A FREE SITE VISIT
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
}
