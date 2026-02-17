import { MapPin, Mail, Phone, Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-black text-white pt-20 pb-10 border-t border-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
                    {/* About Us */}
                    <div>
                        <h3 className="text-[#D4AF37] text-2xl font-light tracking-wider mb-8 uppercase">MS Realty</h3>
                        <p className="text-gray-400 text-sm leading-8 font-light">
                            MS Realty helps you find your dream home with trusted listings, expert advice, and transparent deals across India.
                            Elevating the standard of living with every project.
                        </p>
                        <div className="flex gap-4 mt-6">
                            {/* Social Placeholders */}
                            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#D4AF37] hover:text-black transition-all cursor-pointer">
                                <Facebook size={16} />
                            </div>
                            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#D4AF37] hover:text-black transition-all cursor-pointer">
                                <Instagram size={16} />
                            </div>
                            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#D4AF37] hover:text-black transition-all cursor-pointer">
                                <Twitter size={16} />
                            </div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-[#D4AF37] text-lg font-bold mb-8 uppercase tracking-widest">Quick Links</h3>
                        <ul className="space-y-4">
                            <li><a href="/" className="text-gray-400 hover:text-[#D4AF37] transition-colors text-sm tracking-wide">Home</a></li>
                            <li><a href="#about" className="text-gray-400 hover:text-[#D4AF37] transition-colors text-sm tracking-wide">About Us</a></li>
                            <li><a href="#projects" className="text-gray-400 hover:text-[#D4AF37] transition-colors text-sm tracking-wide">Projects</a></li>
                            <li><a href="#contact" className="text-gray-400 hover:text-[#D4AF37] transition-colors text-sm tracking-wide">Contact</a></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div id="contact">
                        <h3 className="text-[#D4AF37] text-lg font-bold mb-8 uppercase tracking-widest">Contact Us</h3>
                        <ul className="space-y-6">
                            <li className="flex items-start gap-4 group">
                                <MapPin className="text-[#D4AF37] mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" size={20} />
                                <span className="text-gray-400 text-sm leading-relaxed group-hover:text-white transition-colors">
                                    Apex Homes, Vadghar, Panvel,<br />
                                    Navi Mumbai, Maharashtra 410206
                                </span>
                            </li>
                            <li className="flex items-center gap-4 group">
                                <Mail className="text-[#D4AF37] flex-shrink-0 group-hover:scale-110 transition-transform" size={20} />
                                <span className="text-gray-400 text-sm group-hover:text-white transition-colors">info@msrealty.com</span>
                            </li>
                            <li className="flex items-center gap-4 group">
                                <Phone className="text-[#D4AF37] flex-shrink-0 group-hover:scale-110 transition-transform" size={20} />
                                <span className="text-gray-400 text-sm group-hover:text-white transition-colors">+91 8828459419</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-600 text-xs">
                        © 2025 MS Realty. All Rights Reserved.
                    </p>
                    <p className="text-gray-600 text-xs flex gap-6">
                        <a href="#" className="hover:text-[#D4AF37] transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-[#D4AF37] transition-colors">Terms of Service</a>
                    </p>
                </div>
            </div>
        </footer>
    );
}
