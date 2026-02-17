const milestones = [
    { number: '10+', label: 'Projects' },
    { number: '200+', label: 'Homes Delivered' },
    { number: '1000+', label: 'Satisfied Customers' },
    { number: '30+', label: 'Experience Staff' },
];

export default function Milestones() {
    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Milestones</h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {milestones.map((item, index) => (
                        <div key={index} className="bg-gray-100 rounded-lg p-10 flex flex-col items-center justify-center text-center hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-[#D4AF37]/20">
                            <span className="text-4xl md:text-5xl font-black text-[#D4AF37] mb-2">{item.number}</span>
                            <span className="text-gray-700 font-medium">{item.label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
