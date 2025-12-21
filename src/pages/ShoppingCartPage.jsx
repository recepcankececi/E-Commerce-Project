import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ChevronRight, Trash2, Plus, Minus } from 'lucide-react';
import { removeFromCart, updateCartItem, toggleCartItem } from '../store/actions/shoppingCartActions';

const ShoppingCartPage = () => {
    const dispatch = useDispatch();
    const { cart } = useSelector((state) => state.shoppingCart);

    const handleIncreaseCount = (productId, currentCount) => {
        dispatch(updateCartItem(productId, currentCount + 1));
    };

    const handleDecreaseCount = (productId, currentCount) => {
        if (currentCount > 1) {
            dispatch(updateCartItem(productId, currentCount - 1));
        }
    };

    const handleRemove = (productId) => {
        dispatch(removeFromCart(productId));
    };

    const handleToggle = (productId) => {
        dispatch(toggleCartItem(productId));
    };

    const selectedTotal = cart
        .filter(item => item.checked)
        .reduce((total, item) => total + (item.product.price * item.count), 0);

    const selectedCount = cart.filter(item => item.checked).length;

    return (
        <div className="bg-white min-h-screen">
            {/* Breadcrumb */}
            <div className="bg-[#FAFAFA] py-6">
                <div className="container mx-auto px-8">
                    <nav className="flex items-center justify-center md:justify-start gap-2 text-sm">
                        <Link to="/" className="font-bold text-[#252B42] hover:text-[#23A6F0]">
                            Home
                        </Link>
                        <ChevronRight size={16} className="text-[#BDBDBD]" />
                        <span className="font-bold text-[#BDBDBD]">Shopping Cart</span>
                    </nav>
                </div>
            </div>

            <div className="container mx-auto px-8 py-12">
                <h1 className="text-3xl font-bold text-[#252B42] mb-8">Shopping Cart</h1>

                {cart.length === 0 ? (
                    <div className="text-center py-16">
                        <p className="text-xl text-[#737373] mb-6">Your cart is empty</p>
                        <Link
                            to="/shop"
                            className="inline-block px-6 py-3 bg-[#23A6F0] text-white font-bold rounded hover:bg-[#1a8cd8] transition-colors"
                        >
                            Continue Shopping
                        </Link>
                    </div>
                ) : (
                    <>
                        {/* Desktop Table View */}
                        <div className="hidden md:block overflow-x-auto">
                            <table className="w-full">
                                <thead>
                                    <tr className="border-b-2 border-gray-200">
                                        <th className="text-left py-4 px-4 font-bold text-[#252B42]">
                                            <input
                                                type="checkbox"
                                                checked={cart.every(item => item.checked)}
                                                onChange={() => {
                                                    const allChecked = cart.every(item => item.checked);
                                                    cart.forEach(item => {
                                                        if (item.checked === allChecked) {
                                                            dispatch(toggleCartItem(item.product.id));
                                                        }
                                                    });
                                                }}
                                                className="w-5 h-5 cursor-pointer"
                                            />
                                        </th>
                                        <th className="text-left py-4 px-4 font-bold text-[#252B42]">Product</th>
                                        <th className="text-left py-4 px-4 font-bold text-[#252B42]">Price</th>
                                        <th className="text-left py-4 px-4 font-bold text-[#252B42]">Quantity</th>
                                        <th className="text-left py-4 px-4 font-bold text-[#252B42]">Total</th>
                                        <th className="text-left py-4 px-4 font-bold text-[#252B42]">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {cart.map((item) => (
                                        <tr key={item.product.id} className="border-b border-gray-200">
                                            <td className="py-6 px-4">
                                                <input
                                                    type="checkbox"
                                                    checked={item.checked}
                                                    onChange={() => handleToggle(item.product.id)}
                                                    className="w-5 h-5 cursor-pointer"
                                                />
                                            </td>
                                            <td className="py-6 px-4">
                                                <div className="flex items-center gap-4">
                                                    <img
                                                        src={item.product.images?.[0]?.url || item.product.image}
                                                        alt={item.product.name || item.product.title}
                                                        className="w-20 h-20 object-cover rounded"
                                                    />
                                                    <div>
                                                        <h3 className="font-bold text-[#252B42]">
                                                            {item.product.name || item.product.title}
                                                        </h3>
                                                        {item.product.description && (
                                                            <p className="text-sm text-[#737373] mt-1 line-clamp-2">
                                                                {item.product.description}
                                                            </p>
                                                        )}
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="py-6 px-4">
                                                <span className="font-bold text-[#252B42]">
                                                    ${item.product.price?.toFixed(2)}
                                                </span>
                                            </td>
                                            <td className="py-6 px-4">
                                                <div className="flex items-center gap-2">
                                                    <button
                                                        onClick={() => handleDecreaseCount(item.product.id, item.count)}
                                                        disabled={item.count <= 1}
                                                        className="p-1 border border-gray-300 rounded hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                                                    >
                                                        <Minus size={16} />
                                                    </button>
                                                    <span className="w-12 text-center font-bold text-[#252B42]">
                                                        {item.count}
                                                    </span>
                                                    <button
                                                        onClick={() => handleIncreaseCount(item.product.id, item.count)}
                                                        className="p-1 border border-gray-300 rounded hover:bg-gray-50"
                                                    >
                                                        <Plus size={16} />
                                                    </button>
                                                </div>
                                            </td>
                                            <td className="py-6 px-4">
                                                <span className="font-bold text-[#23856D]">
                                                    ${(item.product.price * item.count).toFixed(2)}
                                                </span>
                                            </td>
                                            <td className="py-6 px-4">
                                                <button
                                                    onClick={() => handleRemove(item.product.id)}
                                                    className="text-red-500 hover:text-red-700 p-2"
                                                >
                                                    <Trash2 size={20} />
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        {/* Mobile Card View */}
                        <div className="md:hidden space-y-4">
                            {cart.map((item) => (
                                <div key={item.product.id} className="border border-gray-200 rounded-lg p-4">
                                    <div className="flex items-start gap-3 mb-4">
                                        <input
                                            type="checkbox"
                                            checked={item.checked}
                                            onChange={() => handleToggle(item.product.id)}
                                            className="w-5 h-5 cursor-pointer mt-1"
                                        />
                                        <img
                                            src={item.product.images?.[0]?.url || item.product.image}
                                            alt={item.product.name || item.product.title}
                                            className="w-20 h-20 object-cover rounded"
                                        />
                                        <div className="flex-1">
                                            <h3 className="font-bold text-[#252B42]">
                                                {item.product.name || item.product.title}
                                            </h3>
                                            <p className="text-sm font-bold text-[#252B42] mt-1">
                                                ${item.product.price?.toFixed(2)}
                                            </p>
                                        </div>
                                        <button
                                            onClick={() => handleRemove(item.product.id)}
                                            className="text-red-500 hover:text-red-700"
                                        >
                                            <Trash2 size={20} />
                                        </button>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <button
                                                onClick={() => handleDecreaseCount(item.product.id, item.count)}
                                                disabled={item.count <= 1}
                                                className="p-1 border border-gray-300 rounded hover:bg-gray-50 disabled:opacity-50"
                                            >
                                                <Minus size={16} />
                                            </button>
                                            <span className="w-12 text-center font-bold text-[#252B42]">
                                                {item.count}
                                            </span>
                                            <button
                                                onClick={() => handleIncreaseCount(item.product.id, item.count)}
                                                className="p-1 border border-gray-300 rounded hover:bg-gray-50"
                                            >
                                                <Plus size={16} />
                                            </button>
                                        </div>
                                        <span className="font-bold text-[#23856D]">
                                            ${(item.product.price * item.count).toFixed(2)}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Cart Summary */}
                        <div className="mt-8 border-t-2 border-gray-200 pt-6">
                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                                <div>
                                    <p className="text-[#737373] mb-2">
                                        Selected Items: <span className="font-bold text-[#252B42]">{selectedCount}</span>
                                    </p>
                                    <p className="text-sm text-[#737373]">
                                        Total Items in Cart: {cart.length}
                                    </p>
                                </div>
                                <div className="text-right">
                                    <p className="text-sm text-[#737373] mb-2">Total Amount (Selected Items):</p>
                                    <p className="text-3xl font-bold text-[#23856D]">
                                        ${selectedTotal.toFixed(2)}
                                    </p>
                                </div>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-4 mt-6">
                                <Link
                                    to="/shop"
                                    className="flex-1 px-6 py-3 border-2 border-[#23A6F0] text-[#23A6F0] text-center font-bold rounded hover:bg-[#23A6F0] hover:text-white transition-colors"
                                >
                                    Continue Shopping
                                </Link>
                                <button
                                    disabled={selectedCount === 0}
                                    className="flex-1 px-6 py-3 bg-[#23A6F0] text-white font-bold rounded hover:bg-[#1a8cd8] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    Proceed to Checkout ({selectedCount} items)
                                </button>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default ShoppingCartPage;
