import { Phone, Instagram } from 'lucide-react';

const team = [
    {
        name: 'Om Garje',
        role: 'Director',
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop', // Placeholder
    },
    {
        name: 'Shri Dhurat',
        role: 'Director',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop', // Placeholder
    },
    {
        name: 'Rahul Patil',
        role: 'Sales Manager',
        image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&auto=format&fit=crop', // Placeholder
    },
    {
        name: 'Amit Dubal',
        role: '',
        image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=200&auto=format&fit=crop', // Placeholder
    },
];

export default function Team() {
    return (
        <section className="py-20 bg-gray-50/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Meet Our Team</h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {team.map((member, index) => (
                        <div key={index} className="bg-white rounded-2xl shadow-sm p-8 flex flex-col items-center text-center border border-gray-100 h-full">
                            <div className="w-32 h-32 rounded-full overflow-hidden mb-6 border-4 border-white shadow-md">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                            {member.role && <p className="text-gray-500 text-sm mb-4">{member.role}</p>}

                            <div className="flex gap-4 mt-auto pt-4">
                                <button className="bg-black/5 p-2 rounded-full text-gray-700 hover:bg-[#D4AF37] hover:text-white transition-all duration-300">
                                    <Phone size={18} />
                                </button>
                                <button className="bg-black/5 p-2 rounded-full text-gray-700 hover:bg-[#D4AF37] hover:text-white transition-all duration-300">
                                    <Instagram size={18} />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
