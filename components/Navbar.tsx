'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-2 border-gray-100' : 'bg-black/20 backdrop-blur-sm border-white/10 py-5'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center transition-all duration-300">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center gap-2 overflow-hidden h-14 md:h-20">
                        <img
                            src="/logo-new.png"
                            alt="MS Realty"
                            className="h-20 md:h-28 w-auto object-contain object-top transition-all duration-300 drop-shadow-md"
                        />
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex items-center space-x-8">
                        <Link href="/" className={`${scrolled ? 'text-gray-900' : 'text-white'} hover:text-[#D4AF37] font-medium transition-colors tracking-wide text-sm uppercase`}>
                            Home
                        </Link>
                        <Link href="#about" className={`${scrolled ? 'text-gray-900' : 'text-white'} hover:text-[#D4AF37] font-medium transition-colors tracking-wide text-sm uppercase`}>
                            About
                        </Link>
                        {/* Projects link removed as per request for cleaner look */}
                        <Link href="#contact" className={`${scrolled ? 'text-gray-900' : 'text-white'} hover:text-[#D4AF37] font-medium transition-colors tracking-wide text-sm uppercase`}>
                            Contact
                        </Link>
                        <button className="bg-[#D4AF37] hover:bg-[#b5952f] text-black px-6 py-3 rounded-full font-bold text-xs transition-all transform hover:scale-105 shadow-lg mx-4 tracking-widest uppercase">
                            BOOK A SITE VISIT
                        </button>
                    </div>

                    {/* Mobile menu button */}
                    <div className="lg:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className={`${scrolled ? 'text-gray-900' : 'text-white'} hover:text-[#D4AF37] focus:outline-none`}
                        >
                            <span className="sr-only">Open main menu</span>
                            {isOpen ? <X size={32} /> : <Menu size={32} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="lg:hidden bg-white shadow-xl absolute w-full top-full left-0 border-t border-gray-100">
                    <div className="px-4 pt-4 pb-6 space-y-2 flex flex-col items-center">
                        <Link
                            href="/"
                            onClick={() => setIsOpen(false)}
                            className="block px-3 py-2 text-gray-900 hover:text-[#D4AF37] font-medium text-lg"
                        >
                            Home
                        </Link>
                        <Link
                            href="#about"
                            onClick={() => setIsOpen(false)}
                            className="block px-3 py-2 text-gray-900 hover:text-[#D4AF37] font-medium text-lg"
                        >
                            About
                        </Link>
                        <Link
                            href="#contact"
                            onClick={() => setIsOpen(false)}
                            className="block px-3 py-2 text-gray-900 hover:text-[#D4AF37] font-medium text-lg"
                        >
                            Contact
                        </Link>
                        <button className="mt-4 w-full max-w-xs bg-[#D4AF37] hover:bg-[#b5952f] text-black px-6 py-3 rounded-full font-bold shadow-md">
                            BOOK A SITE VISIT
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
}
