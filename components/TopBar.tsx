import { Phone, Mail } from 'lucide-react';

export default function TopBar() {
    return (
        <div className="bg-black text-white py-2 px-4 text-xs tracking-widest border-b border-gray-900">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <div className="flex items-center gap-6">
                    <a href="tel:+918828459419" className="flex items-center gap-2 hover:text-[#D4AF37] transition-colors">
                        <Phone size={12} className="text-[#D4AF37]" />
                        <span className="font-medium">+91 8828459419</span>
                    </a>
                    <a href="mailto:info@msrealty.com" className="flex items-center gap-2 hover:text-[#D4AF37] transition-colors hidden sm:flex">
                        <Mail size={12} className="text-[#D4AF37]" />
                        <span className="font-medium">info@msrealty.com</span>
                    </a>
                </div>
                <div className="hidden md:block text-gray-400 text-[10px] uppercase">
                    Premium Real Estate Solutions
                </div>
            </div>
        </div>
    );
}
