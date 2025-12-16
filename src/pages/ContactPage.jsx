import { Twitter, Facebook, Instagram, Linkedin } from 'lucide-react';

const ContactPage = () => {
    return (
        <div className="w-full bg-white min-h-[80vh] flex items-center">
            <div className="container mx-auto px-4 py-4 md:py-4">
                <div className="flex flex-col items-center justify-center text-center max-w-2xl mx-auto">
                    <h1 className="text-3xl md:text-5xl font-bold text-[#252B42] mb-6 leading-tight">
                        Get answers to all your questions.
                    </h1>
                    
                    <p className="text-base md:text-xl text-[#737373] mb-8 leading-relaxed">
                        Problems trying to resolve the conflict between the two major realms of Classical physics:
                    </p>
                    
                    <button className="bg-[#23A6F0] hover:bg-[#1a8cd1] text-white font-bold py-4 px-10 rounded transition-colors mb-8">
                        CONTACT OUR COMPANY
                    </button>
                    
                    <div className="flex gap-8 text-[#B8B8B8]">
                        <a href="#" className="hover:text-[#23A6F0] transition-colors">
                            <Twitter size={30} />
                        </a>
                        <a href="#" className="hover:text-[#23A6F0] transition-colors">
                            <Facebook size={30} />
                        </a>
                        <a href="#" className="hover:text-[#23A6F0] transition-colors">
                            <Instagram size={30} />
                        </a>
                        <a href="#" className="hover:text-[#23A6F0] transition-colors">
                            <Linkedin size={30} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
