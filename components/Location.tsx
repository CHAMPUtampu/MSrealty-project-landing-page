export default function Location() {
    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-8 tracking-tight">Our <span className="font-bold text-[#D4AF37]">Location</span></h2>

                <div className="mb-10 bg-white p-8 rounded-2xl shadow-sm inline-block max-w-2xl w-full border border-gray-100">
                    <h3 className="text-xl font-bold text-[#D4AF37] mb-2 uppercase tracking-wider">Site Address</h3>
                    <p className="text-gray-600 text-lg leading-relaxed">
                        Apex Homes, Vadghar, Panvel,<br />
                        Navi Mumbai, Maharashtra 410206
                    </p>
                    <div className="mt-4 pt-4 border-t border-gray-100">
                        <p className="text-gray-900 font-medium">
                            <span className="text-[#D4AF37] mr-2">Contact:</span>
                            +91 8828459419
                        </p>
                    </div>
                </div>

                <div className="w-full h-[450px] bg-gray-200 rounded-2xl overflow-hidden shadow-lg relative border-4 border-white">
                    <iframe
                        width="100%"
                        height="100%"
                        id="gmap_canvas"
                        src="https://maps.google.com/maps?q=Apex%20Homes%2C%20Vadghar%2C%20Panvel%2C%20Navi%20Mumbai&t=&z=15&ie=UTF8&iwloc=&output=embed"
                        frameBorder="0"
                        scrolling="no"
                        marginHeight={0}
                        marginWidth={0}
                        title="Apex Homes Location"
                        className="grayscale-[0%] hover:grayscale-0 transition-all duration-500"
                    ></iframe>
                </div>
            </div>
        </section>
    );
}
