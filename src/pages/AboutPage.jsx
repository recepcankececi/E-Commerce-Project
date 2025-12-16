import { Facebook, Instagram, Twitter } from 'lucide-react';
import { teamMembers } from '../data/teamMembers';

const AboutPage = () => {
    const stats = [
        { value: '15K', label: 'Happy Customers' },
        { value: '150K', label: 'Monthly Visitors' },
        { value: '15', label: 'Countries Worldwide' },
        { value: '100+', label: 'Top Partners' }
    ];

    const companies = [
        { name: 'Hooli', logo: '/images/companies/hooli.png' },
        { name: 'Lyft', logo: '/images/companies/lyft.png' },
        { name: 'Stripe', logo: '/images/companies/stripe.png' },
        { name: 'AWS', logo: '/images/companies/aws.png' },
        { name: 'Reddit', logo: '/images/companies/reddit.png' }
    ];

    return (
        <div className="w-full bg-white">
            {/* Hero Section */}
            <section className="container mx-auto px-12 py-12 md:py-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div className="order-1 lg:order-1 text-center lg:text-left">
                        <p className="hidden lg:block text-sm font-bold text-[#252B42] mb-4">ABOUT COMPANY</p>
                        <h1 className="text-4xl md:text-6xl font-bold text-[#252B42] mb-6">
                            ABOUT US
                        </h1>
                        <p className="text-lg text-[#737373] mb-6">
                            We know how large objects will act, but things on a small scale
                        </p>
                        <button className="bg-[#23A6F0] hover:bg-[#1a8cd1] text-white font-bold py-3 px-8 rounded transition-colors">
                            Get Quote Now
                        </button>
                    </div>
                    <div className="order-2 lg:order-2">
                        <div className="relative">
                            <img 
                                src="/images/about/shopping-woman.png" 
                                alt="Shopping woman"
                                className="w-full h-auto rounded-lg"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Problems Section */}
            <section className="container mx-auto px-12 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center text-center lg:text-left">
                    <div>
                        <p className="text-sm font-normal text-[#E74040] mb-4">Problems trying</p>
                        <h2 className="text-2xl font-bold text-[#252B42]">
                            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
                        </h2>
                    </div>
                    <div>
                        <p className="text-sm text-[#737373]">
                            Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
                        </p>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="container mx-auto px-12 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 text-center">
                    {stats.map((stat, index) => (
                        <div key={index}>
                            <h3 className="text-4xl md:text-6xl font-bold text-[#252B42] mb-2">
                                {stat.value}
                            </h3>
                            <p className="text-sm font-bold text-[#737373]">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Video Section */}
            <section className="container mx-auto px-16 py-12">
                <div className="relative rounded-2xl overflow-hidden">
                    <img 
                        src="/images/about/video-thumbnail.jpg" 
                        alt="Video thumbnail"
                        className="w-full h-auto"
                    />
                </div>
            </section>

            {/* Team Section */}
            <section className="container mx-auto px-8 py-16 md:py-20">
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-[#252B42] mb-4">
                        Meet Our Team
                    </h2>
                    <p className="text-sm md:text-base text-[#737373] max-w-xl mx-auto">
                        Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {teamMembers.slice(0, 3).map((member) => (
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
                            <p className="text-sm font-semibold text-[#737373] mb-3">
                                {member.role}
                            </p>
                            <div className="flex gap-4 text-[#23A6F0]">
                                <a href="#" className="hover:opacity-80 transition-opacity">
                                    <Facebook size={20} />
                                </a>
                                <a href="#" className="hover:opacity-80 transition-opacity">
                                    <Instagram size={20} />
                                </a>
                                <a href="#" className="hover:opacity-80 transition-opacity">
                                    <Twitter size={20} />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Companies Section */}
            <section className="bg-[#FAFAFA] py-16">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#252B42] mb-4">
                            Big Companies Are Here
                        </h2>
                        <p className="text-sm text-[#737373] max-w-xl mx-auto">
                            Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
                        {companies.map((company, index) => (
                            <div key={index} className="grayscale hover:grayscale-0 transition-all">
                                <img 
                                    src={company.logo} 
                                    alt={company.name}
                                    className="h-12 w-auto object-contain"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Work With Us Section */}
            <section className="bg-[#2A7CC7] overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className="flex items-center justify-center lg:justify-start px-16 lg:px-24 py-16 lg:py-24">
                        <div className="max-w-md text-center lg:text-left">
                            <p className="text-sm font-bold text-white mb-4">WORK WITH US</p>
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                                Now Let's grow Yours
                            </h2>
                            <p className="text-sm text-white mb-6">
                                The gradual accumulation of information about atomic and small-scale behavior during the first quarter of the 20th
                            </p>
                            <button className="border-2 border-white text-white font-bold py-3 px-8 rounded hover:bg-white hover:text-[#2A7CC7] transition-colors">
                                Button
                            </button>
                        </div>
                    </div>
                    <div className="hidden lg:block relative lg:h-auto lg:ml-auto">
                        <img 
                            src="/images/about/work-with-us.jpg" 
                            alt="Work with us"
                            className="w-full h-full object-cover object-right"
                        />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutPage;
