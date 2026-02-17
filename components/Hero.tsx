'use client';

export default function Hero() {
    return (
        <div className="relative w-full h-screen min-h-[700px] flex flex-col">
            {/* Background Image */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center"
                style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=2144&auto=format&fit=crop')", // Cityscape placeholder
                }}
            >
                <div className="absolute inset-0 bg-gradient-to-b from-blue-200/20 to-black/40"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 flex-grow flex flex-col items-center justify-center text-center px-4 pt-20">
                <h1 className="text-5xl md:text-7xl font-bold text-white drop-shadow-lg mb-4">
                    MS Realty
                </h1>
                <p className="text-xl md:text-2xl text-white font-light tracking-wider drop-shadow-md mb-8">
                    Where comfort meets investment
                </p>
            </div>

            {/* Enquiry Form Bar */}
            <div className="relative z-20 w-fit md:w-full max-w-5xl mx-auto mb-10 md:mb-20 px-4">
                <div className="bg-white rounded-lg shadow-2xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 md:gap-8 justify-between">
                    <div className="flex flex-col text-left">
                        <span className="text-orange-500 font-semibold text-sm uppercase tracking-wide">Quick Response For Property Info</span>
                        <h3 className="text-2xl font-bold text-gray-900">Send Enquiry Request</h3>
                    </div>

                    <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto flex-1 justify-end">
                        <input
                            type="text"
                            placeholder="Enter your full name"
                            className="border border-blue-200 rounded-md px-4 py-3 min-w-[200px] focus:outline-none focus:ring-2 focus:ring-orange-400"
                        />
                        <input
                            type="tel"
                            placeholder="Phone number"
                            className="border border-blue-200 rounded-md px-4 py-3 min-w-[200px] focus:outline-none focus:ring-2 focus:ring-orange-400"
                        />
                        <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-3 rounded-md transition-colors">
                            Send
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
