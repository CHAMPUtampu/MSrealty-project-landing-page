'use client';

'use client';

export default function Hero() {
    return (
        <section className="relative w-full h-[90vh] min-h-[700px] flex flex-col justify-center">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-no-repeat transition-transform duration-1000"
                    style={{
                        backgroundImage: "url('/hero-bg-final.png')", // High quality generated image
                        backgroundPosition: "center center",
                    }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/20"></div>

            </div>

            {/* Content Container */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-[-80px]">
                <div className="flex flex-col md:flex-row items-center justify-between gap-12">

                    {/* Text Content */}
                    <div className="flex-1 text-center md:text-left text-white max-w-2xl">
                        <h1 className="text-5xl md:text-7xl font-light tracking-tight text-white mb-6 leading-tight">
                            Elevate Your <br />
                            <span className="font-bold text-[#D4AF37]">Lifestyle</span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-300 font-light mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed">
                            Discover homes that perfectly blend luxury, comfort, and investment value. Your dream address awaits with MS Realty.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                            <button className="px-8 py-4 bg-[#D4AF37] hover:bg-[#b5952f] text-black font-semibold rounded-none transition-all duration-300 tracking-wide">
                                EXPLORE PROJECTS
                            </button>
                            <button className="px-8 py-4 border border-white/30 hover:bg-white/10 text-white font-medium rounded-none backdrop-blur-sm transition-all duration-300 tracking-wide">
                                CONTACT US
                            </button>
                        </div>
                    </div>

                    {/* Minimal Enquiry Form */}
                    <div className="w-full max-w-md bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-2xl shadow-2xl">
                        <h3 className="text-2xl font-light text-white mb-2">Interested?</h3>
                        <p className="text-gray-300 text-sm mb-6">Get a callback from our expert</p>

                        <div className="space-y-4">
                            <div>
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    className="w-full bg-white/90 border-0 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-[#D4AF37] focus:outline-none transition-shadow"
                                />
                            </div>
                            <div>
                                <input
                                    type="tel"
                                    placeholder="Phone Number"
                                    className="w-full bg-white/90 border-0 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-[#D4AF37] focus:outline-none transition-shadow"
                                />
                            </div>
                            <button className="w-full bg-[#D4AF37] hover:bg-[#b5952f] text-black font-bold py-3 rounded-lg transition-colors mt-2">
                                REQUEST CALL BACK
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
                <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
                    <div className="w-1 h-2 bg-white/50 rounded-full mt-2"></div>
                </div>
            </div>
        </section>
    );
}
