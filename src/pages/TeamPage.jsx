import { teamMembers } from '../data/teamMembers';

const TeamPage = () => {
    return (
        <div className="w-full bg-white">
            <div className="container mx-auto px-8 py-16 md:py-20">
                <div className="text-center mb-12 md:mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-[#252B42] mb-4">
                        Meet Our Team
                    </h1>
                    <p className="text-sm md:text-base text-[#737373] max-w-xl mx-auto">
                        Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {teamMembers.map((member) => (
                        <div key={member.id} className="flex flex-col items-center">
                            <div className="w-full aspect-square mb-4 overflow-hidden">
                                <img 
                                    src={member.image} 
                                    alt={member.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <h3 className="text-base font-bold text-[#252B42] mb-1">
                                {member.name}
                            </h3>
                            <p className="text-sm font-semibold text-[#737373]">
                                {member.role}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TeamPage;
