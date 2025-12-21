import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { ShoppingCart, Heart, Search, User, Menu, X, Phone, Mail, Instagram, Youtube, Facebook, Twitter, LogOut } from 'lucide-react';
import { logoutUser } from '../store/actions/clientActions';
import { getGravatarUrl } from '../utils/gravatar';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isShopOpen, setIsShopOpen] = useState(false);
    const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
    const { user } = useSelector((state) => state.client);
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logoutUser());
        setIsUserMenuOpen(false);
    };

    return (
        <header>
            {/* Top Bar - Desktop Only */}
            <div className="hidden lg:flex bg-[#252B42] text-white py-2.5">
                <div className="container mx-auto px-4 flex justify-between items-center text-sm">
                    <div className="flex items-center gap-6">
                        <a href="tel:(225)555-0118" className="flex items-center gap-2 hover:opacity-80">
                            <Phone size={16} />
                            <span>(225) 555-0118</span>
                        </a>
                        <a href="mailto:michelle.rivera@example.com" className="flex items-center gap-2 hover:opacity-80">
                            <Mail size={16} />
                            <span>michelle.rivera@example.com</span>
                        </a>
                    </div>
                    <div className="font-bold">
                        Follow Us and get a chance to win 80% off
                    </div>
                    <div className="flex items-center gap-3">
                        <span className="font-bold">Follow Us :</span>
                        <div className="flex items-center gap-2.5">
                            <a href="#" className="hover:opacity-80">
                                <Instagram size={16} />
                            </a>
                            <a href="#" className="hover:opacity-80">
                                <Youtube size={16} />
                            </a>
                            <a href="#" className="hover:opacity-80">
                                <Facebook size={16} />
                            </a>
                            <a href="#" className="hover:opacity-80">
                                <Twitter size={16} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Navigation */}
            <nav className="bg-white shadow-sm">
                <div className="container mx-auto px-4">
                    <div className="flex justify-between items-center h-16 lg:h-20">
                        {/* Logo */}
                        <Link to="/" className="text-2xl font-bold text-[#252B42]">
                            Bandage
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex items-center gap-5">
                            <Link to="/" className="text-[#737373] hover:text-[#252B42] font-bold text-sm">
                                Home
                            </Link>
                            <div className="relative">
                                <Link
                                    to="/shop"
                                    className="flex items-center gap-1 text-[#737373] hover:text-[#252B42] font-bold text-sm"
                                    onClick={() => setIsShopOpen(false)}
                                >
                                    Shop
                                </Link>
                                <button
                                    onClick={() => setIsShopOpen(!isShopOpen)}
                                    className="absolute -right-4 top-0 p-1"
                                >
                                    <svg className={`w-3 h-3 transition-transform text-[#737373] ${isShopOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>
                                {isShopOpen && (
                                    <div className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-sm min-w-[400px] z-50">
                                        <div className="grid grid-cols-2 gap-8 p-6">
                                            <div>
                                                <h3 className="font-bold text-[#252B42] mb-4">Kadın</h3>
                                                <ul className="space-y-3">
                                                    <li><Link to="/shop/bags" className="text-[#737373] hover:text-[#252B42]">Bags</Link></li>
                                                    <li><Link to="/shop/belts" className="text-[#737373] hover:text-[#252B42]">Belts</Link></li>
                                                    <li><Link to="/shop/cosmetics" className="text-[#737373] hover:text-[#252B42]">Cosmetics</Link></li>
                                                    <li><Link to="/shop/bags" className="text-[#737373] hover:text-[#252B42]">Bags</Link></li>
                                                    <li><Link to="/shop/hats" className="text-[#737373] hover:text-[#252B42]">Hats</Link></li>
                                                </ul>
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-[#252B42] mb-4">Erkek</h3>
                                                <ul className="space-y-3">
                                                    <li><Link to="/shop/bags" className="text-[#737373] hover:text-[#252B42]">Bags</Link></li>
                                                    <li><Link to="/shop/belts" className="text-[#737373] hover:text-[#252B42]">Belts</Link></li>
                                                    <li><Link to="/shop/cosmetics" className="text-[#737373] hover:text-[#252B42]">Cosmetics</Link></li>
                                                    <li><Link to="/shop/bags" className="text-[#737373] hover:text-[#252B42]">Bags</Link></li>
                                                    <li><Link to="/shop/hats" className="text-[#737373] hover:text-[#252B42]">Hats</Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                            <Link to="/about" className="text-[#737373] hover:text-[#252B42] font-bold text-sm">
                                About
                            </Link>
                            <Link to="/team" className="text-[#737373] hover:text-[#252B42] font-bold text-sm">
                                Team
                            </Link>
                            <Link to="/blog" className="text-[#737373] hover:text-[#252B42] font-bold text-sm">
                                Blog
                            </Link>
                            <Link to="/contact" className="text-[#737373] hover:text-[#252B42] font-bold text-sm">
                                Contact
                            </Link>
                            <Link to="/pages" className="text-[#737373] hover:text-[#252B42] font-bold text-sm">
                                Pages
                            </Link>
                        </div>

                        {/* Right Side Actions */}
                        <div className="flex items-center gap-4 lg:gap-6">
                            {/* Desktop Login/User */}
                            {user ? (
                                <div className="hidden lg:flex items-center gap-3 relative">
                                    <button
                                        onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                                        className="flex items-center gap-2 text-[#23A6F0] font-bold text-sm hover:opacity-80"
                                    >
                                        <img
                                            src={getGravatarUrl(user.email, 32)}
                                            alt={user.name}
                                            className="w-8 h-8 rounded-full"
                                        />
                                        <span>{user.name}</span>
                                    </button>
                                    {isUserMenuOpen && (
                                        <div className="absolute top-full right-0 mt-2 bg-white shadow-lg rounded-md min-w-[200px] z-50 py-2">
                                            <div className="px-4 py-2 border-b">
                                                <p className="font-bold text-sm text-[#252B42]">{user.name}</p>
                                                <p className="text-xs text-[#737373]">{user.email}</p>
                                            </div>
                                            <button
                                                onClick={handleLogout}
                                                className="w-full px-4 py-2 text-left text-sm text-[#737373] hover:bg-gray-50 flex items-center gap-2"
                                            >
                                                <LogOut size={16} />
                                                Logout
                                            </button>
                                        </div>
                                    )}
                                </div>
                            ) : (
                                <div className="hidden lg:flex items-center gap-4">
                                    <Link to="/login" className="flex items-center gap-1 text-[#23A6F0] font-bold text-sm hover:opacity-80">
                                        <User size={16} />
                                        <span>Login</span>
                                    </Link>
                                    <Link to="/signup" className="flex items-center gap-1 text-[#23A6F0] font-bold text-sm hover:opacity-80">
                                        <span>Register</span>
                                    </Link>
                                </div>
                            )}

                            {/* Search Icon */}
                            <button className="text-[#23A6F0] hover:opacity-80">
                                <Search size={20} className="lg:w-5 lg:h-5" />
                            </button>

                            {/* Cart - Desktop */}
                            <button className="hidden lg:flex items-center gap-1 text-[#23A6F0] hover:opacity-80">
                                <ShoppingCart size={20} />
                                <span className="text-xs font-medium">1</span>
                            </button>

                            {/* Wishlist - Desktop */}
                            <button className="hidden lg:flex items-center gap-1 text-[#23A6F0] hover:opacity-80">
                                <Heart size={20} />
                                <span className="text-xs font-medium">1</span>
                            </button>

                            {/* Mobile Icons */}
                            <button className="lg:hidden text-[#23A6F0]">
                                <ShoppingCart size={20} />
                            </button>

                            {/* Mobile Menu Toggle */}
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="lg:hidden text-[#252B42]"
                            >
                                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="lg:hidden bg-white border-t">
                        <div className="container mx-auto px-4 py-6">
                            <div className="flex flex-col items-center gap-6 text-center">
                                <Link to="/" className="text-[#737373] hover:text-[#252B42] font-normal text-xl">
                                    Home
                                </Link>
                                <Link to="/shop" className="text-[#737373] hover:text-[#252B42] font-normal text-xl">
                                    Shop
                                </Link>
                                <Link to="/about" className="text-[#737373] hover:text-[#252B42] font-normal text-xl">
                                    About
                                </Link>
                                <Link to="/team" className="text-[#737373] hover:text-[#252B42] font-normal text-xl">
                                    Team
                                </Link>
                                <Link to="/contact" className="text-[#737373] hover:text-[#252B42] font-normal text-xl">
                                    Contact
                                </Link>
                            </div>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
};

export default Header;