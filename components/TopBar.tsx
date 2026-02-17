import { Phone, Mail } from 'lucide-react';

export default function TopBar() {
    return (
        <div className="bg-[#4461F2] text-white py-2 px-4 text-xs md:text-sm">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                        <Phone size={14} />
                        <span>+91 8828459419</span>
                    </div>
                    {/* <div className="flex items-center gap-1">
            <Mail size={14} />
            <span>info@msrealty.com</span>
          </div> */}
                </div>
                <div className="hidden md:block font-medium tracking-wide">
                    Dream Discover Dwell
                </div>
            </div>
        </div>
    );
}
