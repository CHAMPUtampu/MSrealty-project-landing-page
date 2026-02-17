export default function About() {
    return (
        <section id="about" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-2">About Us</h2>
                    <p className="text-gray-500 font-medium">Building dreams, one home at a time.</p>
                </div>

                <div className="flex flex-col md:flex-row items-center gap-12">
                    {/* Left Side - Logo Placeholder */}
                    <div className="w-full md:w-1/2 flex justify-center">
                        <div className="bg-white p-10 rounded-xl shadow-lg border border-gray-100 flex flex-col items-center">
                            <img src="/logo-new.png" alt="MS Realty" className="w-64 h-auto object-contain mb-4" />
                        </div>
                    </div>

                    {/* Right Side - Content */}
                    <div className="w-full md:w-1/2">
                        <h3 className="text-2xl font-bold text-[#D4AF37] mb-6 border-b-2 border-[#D4AF37] pb-2 inline-block">Who We Are</h3>

                        <ul className="space-y-4 text-gray-600">
                            <li className="flex items-start gap-3">
                                <span className="text-[#D4AF37] mt-1">•</span>
                                <span>Established in 02th Oct 2025, MS Properties is a private limited company aiming to provide affordable Housing to all.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-[#D4AF37] mt-1">•</span>
                                <span>MS Properties is a family of total 70+ Members attributing their excellence for its growth.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-[#D4AF37] mt-1">•</span>
                                <span>Together we create a platform for all the property seekers to complete their property needs.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-[#D4AF37] mt-1">•</span>
                                <span>Sold total of 350+ Flats till date since last 1.5 years with an average of 37 flats per month.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-[#D4AF37] mt-1">•</span>
                                <span>Selling projects from Kharghar to outskirts of Navi Mumbai (Taloja – Panvel).</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-[#D4AF37] mt-1">•</span>
                                <span>Currently we are offering total 03 township projects to our clients.</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
