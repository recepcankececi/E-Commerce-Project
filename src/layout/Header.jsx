import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { ShoppingCart, Heart, Search, User, Menu, X, Phone, Mail, Instagram, Youtube, Facebook, Twitter, LogOut, Trash2, Package } from 'lucide-react';
import { logoutUser } from '../store/actions/clientActions';
import { removeFromCart } from '../store/actions/shoppingCartActions';
import { getGravatarUrl } from '../utils/gravatar';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isShopOpen, setIsShopOpen] = useState(false);
    const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const { user } = useSelector((state) => state.client);
    const { categories } = useSelector((state) => state.product);
    const { cart } = useSelector((state) => state.shoppingCart);
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logoutUser());
        setIsUserMenuOpen(false);
    };

    const categoriesByGender = useMemo(() => {
        const kadin = categories.filter(cat => cat.gender === 'k');
        const erkek = categories.filter(cat => cat.gender === 'e');
        return { kadin, erkek };
    }, [categories]);

    const cartItemCount = useMemo(() => {
        return cart.reduce((total, item) => total + item.count, 0);
    }, [cart]);

    const cartTotal = useMemo(() => {
        return cart.reduce((total, item) => total + (item.product.price * item.count), 0);
    }, [cart]);

    const handleRemoveFromCart = (productId) => {
        dispatch(removeFromCart(productId));
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
                                                    {categoriesByGender.kadin.map((category) => {
                                                        const categoryPath = category.title.toLowerCase().replace(/\s+/g, '-');
                                                        return (
                                                            <li key={category.id}>
                                                                <Link 
                                                                    to={`/shop/kadin/${categoryPath}/${category.id}`}
                                                                    className="text-[#737373] hover:text-[#252B42]"
                                                                    onClick={() => setIsShopOpen(false)}
                                                                >
                                                                    {category.title}
                                                                </Link>
                                                            </li>
                                                        );
                                                    })}
                                                </ul>
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-[#252B42] mb-4">Erkek</h3>
                                                <ul className="space-y-3">
                                                    {categoriesByGender.erkek.map((category) => {
                                                        const categoryPath = category.title.toLowerCase().replace(/\s+/g, '-');
                                                        return (
                                                            <li key={category.id}>
                                                                <Link 
                                                                    to={`/shop/erkek/${categoryPath}/${category.id}`}
                                                                    className="text-[#737373] hover:text-[#252B42]"
                                                                    onClick={() => setIsShopOpen(false)}
                                                                >
                                                                    {category.title}
                                                                </Link>
                                                            </li>
                                                        );
                                                    })}
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
                                            <Link
                                                to="/orders"
                                                onClick={() => setIsUserMenuOpen(false)}
                                                className="w-full px-4 py-2 text-left text-sm text-[#737373] hover:bg-gray-50 flex items-center gap-2"
                                            >
                                                <Package size={16} />
                                                My Orders
                                            </Link>
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
                            <div className="hidden lg:block relative">
                                <button 
                                    onClick={() => setIsCartOpen(!isCartOpen)}
                                    className="flex items-center gap-1 text-[#23A6F0] hover:opacity-80"
                                >
                                    <ShoppingCart size={20} />
                                    {cartItemCount > 0 && (
                                        <span className="text-xs font-medium">{cartItemCount}</span>
                                    )}
                                </button>
                                
                                {isCartOpen && (
                                    <div className="absolute right-0 top-full mt-2 bg-white shadow-lg rounded-sm w-80 z-50 max-h-96 overflow-y-auto">
                                        {cart.length === 0 ? (
                                            <div className="p-6 text-center text-[#737373]">
                                                Your cart is empty
                                            </div>
                                        ) : (
                                            <>
                                                <div className="p-4 border-b">
                                                    <h3 className="font-bold text-[#252B42]">Shopping Cart ({cartItemCount})</h3>
                                                </div>
                                                <div className="divide-y">
                                                    {cart.map((item) => (
                                                        <div key={item.product.id} className="p-4 flex gap-3">
                                                            <img 
                                                                src={item.product.images?.[0]?.url || item.product.image} 
                                                                alt={item.product.name || item.product.title}
                                                                className="w-16 h-16 object-cover rounded"
                                                            />
                                                            <div className="flex-1 min-w-0">
                                                                <h4 className="text-sm font-bold text-[#252B42] truncate">
                                                                    {item.product.name || item.product.title}
                                                                </h4>
                                                                <p className="text-xs text-[#737373] mt-1">
                                                                    Quantity: {item.count}
                                                                </p>
                                                                <p className="text-sm font-bold text-[#23856D] mt-1">
                                                                    ${(item.product.price * item.count).toFixed(2)}
                                                                </p>
                                                            </div>
                                                            <button
                                                                onClick={() => handleRemoveFromCart(item.product.id)}
                                                                className="text-red-500 hover:text-red-700"
                                                            >
                                                                <Trash2 size={16} />
                                                            </button>
                                                        </div>
                                                    ))}
                                                </div>
                                                <div className="p-4 border-t">
                                                    <div className="flex justify-between items-center mb-3">
                                                        <span className="font-bold text-[#252B42]">Total:</span>
                                                        <span className="font-bold text-[#23856D] text-lg">
                                                            ${cartTotal.toFixed(2)}
                                                        </span>
                                                    </div>
                                                    <Link
                                                        to="/cart"
                                                        onClick={() => setIsCartOpen(false)}
                                                        className="block w-full px-4 py-2 bg-[#23A6F0] text-white text-center text-sm font-bold rounded hover:bg-[#1a8cd8] transition-colors"
                                                    >
                                                        View Cart
                                                    </Link>
                                                </div>
                                            </>
                                        )}
                                    </div>
                                )}
                            </div>

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