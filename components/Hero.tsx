import Image from 'next/image';

export default function Hero() {
    return (
        <section className="relative w-full h-[90vh] min-h-[700px] flex flex-col justify-start md:justify-center">
            {/* Background Image using Next.js Image for better quality */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/hero-bg-v3.png"
                    alt="Luxury High Rise Building"
                    fill
                    priority
                    quality={100}
                    className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/20 mix-blend-multiply"></div>
            </div>

            {/* Content Container */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-48 md:pt-0">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">

                    {/* Text Content */}
                    <div className="flex-1 text-center md:text-left text-white max-w-2xl">
                        <h1 className="text-4xl md:text-7xl font-light tracking-tight text-white mb-6 leading-tight">
                            Elevate Your <br />
                            <span className="font-bold text-[#D4AF37]">Lifestyle</span>
                        </h1>
                        <p className="text-base md:text-xl text-gray-300 font-light mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed">
                            Discover homes that perfectly blend luxury, comfort, and investment value. Your dream address awaits with MS Realty.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                            <button className="px-8 py-4 bg-[#D4AF37] hover:bg-[#b5952f] text-black font-semibold rounded-none transition-all duration-300 tracking-wide text-sm md:text-base">
                                EXPLORE PROJECTS
                            </button>
                            <button className="px-8 py-4 border border-white/30 hover:bg-white/10 text-white font-medium rounded-none backdrop-blur-sm transition-all duration-300 tracking-wide text-sm md:text-base">
                                CONTACT US
                            </button>
                        </div>
                    </div>

                    {/* Minimal Enquiry Form */}
                    <div className="w-full max-w-md bg-white/10 backdrop-blur-md border border-white/20 p-6 md:p-8 rounded-2xl shadow-2xl mt-8 md:mt-0">
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
