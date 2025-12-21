import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ChevronRight, ChevronDown, ChevronUp, Package, Calendar, CreditCard, MapPin } from 'lucide-react';
import { fetchOrders } from '../store/actions/orderActions';
import LoadingSpinner from '../components/LoadingSpinner';

const PreviousOrdersPage = () => {
    const dispatch = useDispatch();
    const { orders, ordersLoading } = useSelector((state) => state.shoppingCart);
    const [expandedOrders, setExpandedOrders] = useState(new Set());

    useEffect(() => {
        dispatch(fetchOrders());
    }, [dispatch]);

    const toggleOrderExpansion = (orderId) => {
        const newExpanded = new Set(expandedOrders);
        if (newExpanded.has(orderId)) {
            newExpanded.delete(orderId);
        } else {
            newExpanded.add(orderId);
        }
        setExpandedOrders(newExpanded);
    };

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    const formatCardNumber = (cardNo) => {
        const cardStr = cardNo.toString();
        return `**** **** **** ${cardStr.slice(-4)}`;
    };

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
                        <span className="font-bold text-[#BDBDBD]">My Orders</span>
                    </nav>
                </div>
            </div>

            <div className="container mx-auto px-8 py-12">
                <h1 className="text-3xl font-bold text-[#252B42] mb-8">My Orders</h1>

                {ordersLoading ? (
                    <div className="flex justify-center py-12">
                        <LoadingSpinner size="large" />
                    </div>
                ) : orders.length === 0 ? (
                    <div className="text-center py-16">
                        <Package size={64} className="mx-auto text-[#BDBDBD] mb-4" />
                        <p className="text-xl text-[#737373] mb-6">You haven't placed any orders yet</p>
                        <Link
                            to="/shop"
                            className="inline-block px-6 py-3 bg-[#23A6F0] text-white font-bold rounded hover:bg-[#1a8cd8] transition-colors"
                        >
                            Start Shopping
                        </Link>
                    </div>
                ) : (
                    <div className="space-y-4">
                        {/* Desktop Table View */}
                        <div className="hidden md:block">
                            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                                <table className="w-full">
                                    <thead className="bg-[#FAFAFA]">
                                        <tr>
                                            <th className="text-left py-4 px-6 font-bold text-[#252B42]">Order ID</th>
                                            <th className="text-left py-4 px-6 font-bold text-[#252B42]">Date</th>
                                            <th className="text-left py-4 px-6 font-bold text-[#252B42]">Items</th>
                                            <th className="text-left py-4 px-6 font-bold text-[#252B42]">Total</th>
                                            <th className="text-left py-4 px-6 font-bold text-[#252B42]">Details</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {orders.map((order) => (
                                            <>
                                                <tr key={order.id} className="border-t border-gray-200 hover:bg-gray-50">
                                                    <td className="py-4 px-6">
                                                        <span className="font-bold text-[#252B42]">#{order.id}</span>
                                                    </td>
                                                    <td className="py-4 px-6">
                                                        <div className="flex items-center gap-2 text-[#737373]">
                                                            <Calendar size={16} />
                                                            <span className="text-sm">{formatDate(order.order_date)}</span>
                                                        </div>
                                                    </td>
                                                    <td className="py-4 px-6">
                                                        <span className="text-[#737373]">
                                                            {order.products?.length || 0} item(s)
                                                        </span>
                                                    </td>
                                                    <td className="py-4 px-6">
                                                        <span className="font-bold text-[#23856D] text-lg">
                                                            ${order.price?.toFixed(2)}
                                                        </span>
                                                    </td>
                                                    <td className="py-4 px-6">
                                                        <button
                                                            onClick={() => toggleOrderExpansion(order.id)}
                                                            className="flex items-center gap-2 text-[#23A6F0] hover:text-[#1a8cd8] font-bold"
                                                        >
                                                            {expandedOrders.has(order.id) ? (
                                                                <>
                                                                    <ChevronUp size={20} />
                                                                    Hide Details
                                                                </>
                                                            ) : (
                                                                <>
                                                                    <ChevronDown size={20} />
                                                                    View Details
                                                                </>
                                                            )}
                                                        </button>
                                                    </td>
                                                </tr>
                                                {expandedOrders.has(order.id) && (
                                                    <tr>
                                                        <td colSpan="5" className="bg-[#FAFAFA] p-6">
                                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                                {/* Order Information */}
                                                                <div>
                                                                    <h3 className="text-lg font-bold text-[#252B42] mb-4">
                                                                        Order Information
                                                                    </h3>
                                                                    <div className="space-y-3">
                                                                        <div className="flex items-start gap-3">
                                                                            <MapPin size={20} className="text-[#23A6F0] mt-1" />
                                                                            <div>
                                                                                <p className="text-sm font-bold text-[#252B42]">
                                                                                    Shipping Address
                                                                                </p>
                                                                                <p className="text-sm text-[#737373]">
                                                                                    Address ID: {order.address_id}
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                        <div className="flex items-start gap-3">
                                                                            <CreditCard size={20} className="text-[#23A6F0] mt-1" />
                                                                            <div>
                                                                                <p className="text-sm font-bold text-[#252B42]">
                                                                                    Payment Method
                                                                                </p>
                                                                                <p className="text-sm text-[#737373]">
                                                                                    {formatCardNumber(order.card_no)}
                                                                                </p>
                                                                                <p className="text-sm text-[#737373]">
                                                                                    {order.card_name}
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                {/* Products */}
                                                                <div>
                                                                    <h3 className="text-lg font-bold text-[#252B42] mb-4">
                                                                        Products
                                                                    </h3>
                                                                    <div className="space-y-3">
                                                                        {order.products?.map((product, index) => (
                                                                            <div
                                                                                key={index}
                                                                                className="flex items-center justify-between p-3 bg-white rounded border border-gray-200"
                                                                            >
                                                                                <div>
                                                                                    <p className="font-bold text-[#252B42]">
                                                                                        Product ID: {product.product_id}
                                                                                    </p>
                                                                                    {product.detail && (
                                                                                        <p className="text-sm text-[#737373]">
                                                                                            {product.detail}
                                                                                        </p>
                                                                                    )}
                                                                                </div>
                                                                                <div className="text-right">
                                                                                    <p className="text-sm text-[#737373]">
                                                                                        Qty: {product.count}
                                                                                    </p>
                                                                                </div>
                                                                            </div>
                                                                        ))}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                )}
                                            </>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Mobile Card View */}
                        <div className="md:hidden space-y-4">
                            {orders.map((order) => (
                                <div key={order.id} className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                                    <div className="p-4">
                                        <div className="flex items-center justify-between mb-3">
                                            <span className="font-bold text-[#252B42]">Order #{order.id}</span>
                                            <span className="font-bold text-[#23856D]">
                                                ${order.price?.toFixed(2)}
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-2 text-sm text-[#737373] mb-3">
                                            <Calendar size={16} />
                                            <span>{formatDate(order.order_date)}</span>
                                        </div>
                                        <div className="text-sm text-[#737373] mb-3">
                                            {order.products?.length || 0} item(s)
                                        </div>
                                        <button
                                            onClick={() => toggleOrderExpansion(order.id)}
                                            className="w-full flex items-center justify-center gap-2 py-2 text-[#23A6F0] hover:text-[#1a8cd8] font-bold"
                                        >
                                            {expandedOrders.has(order.id) ? (
                                                <>
                                                    <ChevronUp size={20} />
                                                    Hide Details
                                                </>
                                            ) : (
                                                <>
                                                    <ChevronDown size={20} />
                                                    View Details
                                                </>
                                            )}
                                        </button>
                                    </div>
                                    {expandedOrders.has(order.id) && (
                                        <div className="bg-[#FAFAFA] p-4 border-t border-gray-200">
                                            <div className="space-y-4">
                                                <div>
                                                    <h4 className="font-bold text-[#252B42] mb-2">Shipping Address</h4>
                                                    <p className="text-sm text-[#737373]">
                                                        Address ID: {order.address_id}
                                                    </p>
                                                </div>
                                                <div>
                                                    <h4 className="font-bold text-[#252B42] mb-2">Payment Method</h4>
                                                    <p className="text-sm text-[#737373]">
                                                        {formatCardNumber(order.card_no)}
                                                    </p>
                                                    <p className="text-sm text-[#737373]">{order.card_name}</p>
                                                </div>
                                                <div>
                                                    <h4 className="font-bold text-[#252B42] mb-2">Products</h4>
                                                    <div className="space-y-2">
                                                        {order.products?.map((product, index) => (
                                                            <div
                                                                key={index}
                                                                className="p-3 bg-white rounded border border-gray-200"
                                                            >
                                                                <p className="font-bold text-[#252B42] text-sm">
                                                                    Product ID: {product.product_id}
                                                                </p>
                                                                {product.detail && (
                                                                    <p className="text-sm text-[#737373]">
                                                                        {product.detail}
                                                                    </p>
                                                                )}
                                                                <p className="text-sm text-[#737373]">
                                                                    Quantity: {product.count}
                                                                </p>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default PreviousOrdersPage;
