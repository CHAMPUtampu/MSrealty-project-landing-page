export default function Location() {
    return (
        <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Our Location</h2>

                <div className="mb-8">
                    <h3 className="text-xl font-bold text-blue-500 mb-2">Address</h3>
                    <p className="text-gray-700">Apex Homes, Vadghar, Panvel, Navi Mumbai, Maharashtra 410206</p>
                    <p className="text-gray-700 font-medium mt-1">Contact:- +91 8828459419</p>
                </div>

                <div className="w-full h-[400px] bg-gray-200 rounded-lg overflow-hidden shadow-md relative">
                    {/* Placeholder for Map - Using an image or iframe if available. 
               Since I can't easily get the real map iframe without API key or precise URL, 
               I'll use a placeholder styled like a map or a generic iframe if possible.
               Using a generic Google Maps Embed API request (no key works for basic embeds sometimes or just link).
           */}
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.6694343350383!2d73.09159937510006!3d18.99042298219669!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c1c5c5c5c5c5%3A0x5c5c5c5c5c5c5c5c!2sPanvel!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="grayscale-[20%]"
                    ></iframe>
                </div>
            </div>
        </section>
    );
}
