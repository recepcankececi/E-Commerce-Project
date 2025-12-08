import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-white">
            {/* Top Section - Logo & Social - Mobile Only */}
            <div className="border-b border-gray-200 lg:hidden">
                <div className="container mx-auto px-8 py-8">
                    <div className="flex flex-col items-start gap-6">
                        {/* Logo */}
                        <h3 className="text-2xl font-bold text-[#252B42]">
                            Bandage
                        </h3>

                        {/* Social Media */}
                        <div className="flex items-center gap-5">
                            <a href="#" className="text-[#23A6F0] hover:opacity-80 transition-opacity">
                                <Facebook size={24} />
                            </a>
                            <a href="#" className="text-[#23A6F0] hover:opacity-80 transition-opacity">
                                <Instagram size={24} />
                            </a>
                            <a href="#" className="text-[#23A6F0] hover:opacity-80 transition-opacity">
                                <Twitter size={24} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Desktop Top Section - Logo & Social on same line as links */}
            <div className="hidden lg:block border-b border-gray-200">
                <div className="container mx-auto px-8 py-10">
                    <div className="flex justify-between items-center">
                        <h3 className="text-2xl font-bold text-[#252B42]">
                            Bandage
                        </h3>
                        <div className="flex items-center gap-5">
                            <a href="#" className="text-[#23A6F0] hover:opacity-80 transition-opacity">
                                <Facebook size={24} />
                            </a>
                            <a href="#" className="text-[#23A6F0] hover:opacity-80 transition-opacity">
                                <Instagram size={24} />
                            </a>
                            <a href="#" className="text-[#23A6F0] hover:opacity-80 transition-opacity">
                                <Twitter size={24} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Footer Content */}
            <div className="container mx-auto px-8 py-12 lg:py-16">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-8">
                    {/* Company Info */}
                    <div>
                        <h5 className="font-bold text-[#252B42] mb-5">
                            Company Info
                        </h5>
                        <ul className="space-y-3">
                            <li>
                                <a href="#" className="text-sm font-bold text-[#737373] hover:text-[#252B42] transition-colors">
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-sm font-bold text-[#737373] hover:text-[#252B42] transition-colors">
                                    Carrier
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-sm font-bold text-[#737373] hover:text-[#252B42] transition-colors">
                                    We are hiring
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-sm font-bold text-[#737373] hover:text-[#252B42] transition-colors">
                                    Blog
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h5 className="font-bold text-[#252B42] mb-5">
                            Legal
                        </h5>
                        <ul className="space-y-3">
                            <li>
                                <a href="#" className="text-sm font-bold text-[#737373] hover:text-[#252B42] transition-colors">
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-sm font-bold text-[#737373] hover:text-[#252B42] transition-colors">
                                    Carrier
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-sm font-bold text-[#737373] hover:text-[#252B42] transition-colors">
                                    We are hiring
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-sm font-bold text-[#737373] hover:text-[#252B42] transition-colors">
                                    Blog
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Features */}
                    <div>
                        <h5 className="font-bold text-[#252B42] mb-5">
                            Features
                        </h5>
                        <ul className="space-y-3">
                            <li>
                                <a href="#" className="text-sm font-bold text-[#737373] hover:text-[#252B42] transition-colors">
                                    Business Marketing
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-sm font-bold text-[#737373] hover:text-[#252B42] transition-colors">
                                    User Analytic
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-sm font-bold text-[#737373] hover:text-[#252B42] transition-colors">
                                    Live Chat
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-sm font-bold text-[#737373] hover:text-[#252B42] transition-colors">
                                    Unlimited Support
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h5 className="font-bold text-[#252B42] mb-5">
                            Resources
                        </h5>
                        <ul className="space-y-3">
                            <li>
                                <a href="#" className="text-sm font-bold text-[#737373] hover:text-[#252B42] transition-colors">
                                    IOS & Android
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-sm font-bold text-[#737373] hover:text-[#252B42] transition-colors">
                                    Watch a Demo
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-sm font-bold text-[#737373] hover:text-[#252B42] transition-colors">
                                    Customers
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-sm font-bold text-[#737373] hover:text-[#252B42] transition-colors">
                                    API
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Get In Touch */}
                    <div>
                        <h5 className="font-bold text-[#252B42] mb-5">
                            Get In Touch
                        </h5>
                        <div className="space-y-4">
                            <div className="flex gap-0">
                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    className="flex-1 px-5 py-3 text-sm border border-gray-300 rounded-l-md focus:outline-none focus:border-[#23A6F0]"
                                />
                                <button className="bg-[#23A6F0] hover:bg-[#1a8fd9] text-white font-medium text-sm px-6 py-3 rounded-r-md transition-colors">
                                    Subscribe
                                </button>
                            </div>
                            <p className="text-xs text-[#737373]">
                                Lore imp sum dolor Amit
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Copyright */}
            <div className="bg-[#FAFAFA]">
                <div className="container mx-auto px-4 py-6">
                    <p className="text-sm font-bold text-[#737373] text-center lg:text-left">
                        Made With Love By Finland All Right Reserved
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;