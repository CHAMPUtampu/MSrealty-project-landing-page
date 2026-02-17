import { MapPin, Mail, Phone } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-[#1a1a1a] text-white pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {/* About Us */}
                    <div>
                        <h3 className="text-orange-500 text-xl font-bold mb-6">About Us</h3>
                        <p className="text-gray-300 text-sm leading-relaxed">
                            MS Realty helps you find your dream home with trusted listings, expert advice, and transparent deals across India.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-orange-500 text-xl font-bold mb-6">Quick Links</h3>
                        <ul className="space-y-3">
                            <li><a href="/" className="text-gray-300 hover:text-white transition-colors">Home</a></li>
                            <li><a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a></li>
                            <li><a href="#projects" className="text-gray-300 hover:text-white transition-colors">Projects</a></li>
                            <li><a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div id="contact">
                        <h3 className="text-orange-500 text-xl font-bold mb-6">Contact</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <MapPin className="text-red-500 mt-1 flex-shrink-0" size={18} />
                                <span className="text-gray-300 text-sm">Karnjade, Panvel, Maharashtra, India</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="text-blue-400 flex-shrink-0" size={18} />
                                <span className="text-gray-300 text-sm">info@msrealty.com</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="text-green-500 flex-shrink-0" size={18} />
                                <span className="text-gray-300 text-sm">+91 8828459419</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-12 pt-8 text-center">
                    <p className="text-gray-500 text-sm">
                        © 2025 MS Realty. All Rights Reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
