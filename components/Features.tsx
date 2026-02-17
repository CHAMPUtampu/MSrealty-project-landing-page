import { Handshake, Tag, Settings, Home } from 'lucide-react';

const features = [
    {
        icon: Handshake,
        title: 'Trusted Service',
        description: 'We are committed to delivering reliable and transparent real estate solutions.',
    },
    {
        icon: Tag,
        title: 'Best Price Deals',
        description: 'Offering competitive prices to ensure you get maximum value for your investment.',
    },
    {
        icon: Settings,
        title: 'Expert Team',
        description: 'Our team of professionals guides you every step of the way.',
    },
    {
        icon: Home,
        title: 'Wide Range of Properties',
        description: 'Choose from villas, apartments, and plots tailored to your needs.',
    },
];

export default function Features() {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300 border border-gray-100 group">
                            <div className="bg-[#D4AF37]/10 rounded-full p-4 mb-6 group-hover:bg-[#D4AF37] transition-colors duration-300">
                                <feature.icon className="w-8 h-8 text-[#D4AF37] group-hover:text-white transition-colors duration-300" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
