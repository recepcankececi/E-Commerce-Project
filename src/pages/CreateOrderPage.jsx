import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ChevronRight, Plus, Edit, Trash2, MapPin } from 'lucide-react';
import { fetchAddresses, addAddress, updateAddress, deleteAddress } from '../store/actions/addressActions';
import { setAddress } from '../store/actions/shoppingCartActions';
import AddressForm from '../components/AddressForm';
import LoadingSpinner from '../components/LoadingSpinner';

const CreateOrderPage = () => {
    const dispatch = useDispatch();
    const { addressList, addressLoading, cart } = useSelector((state) => state.shoppingCart);
    
    const [showAddressForm, setShowAddressForm] = useState(false);
    const [editingAddress, setEditingAddress] = useState(null);
    const [selectedShippingAddress, setSelectedShippingAddress] = useState(null);
    const [selectedBillingAddress, setSelectedBillingAddress] = useState(null);
    const [useSameAddress, setUseSameAddress] = useState(true);

    useEffect(() => {
        dispatch(fetchAddresses());
    }, [dispatch]);

    const handleAddAddress = async (addressData) => {
        try {
            await dispatch(addAddress(addressData));
            setShowAddressForm(false);
        } catch (error) {
            console.error('Failed to add address:', error);
        }
    };

    const handleUpdateAddress = async (addressData) => {
        try {
            const dataWithId = { ...addressData, id: editingAddress.id };
            await dispatch(updateAddress(dataWithId));
            setShowAddressForm(false);
            setEditingAddress(null);
        } catch (error) {
            console.error('Failed to update address:', error);
        }
    };

    const handleDeleteAddress = async (addressId) => {
        if (window.confirm('Are you sure you want to delete this address?')) {
            try {
                await dispatch(deleteAddress(addressId));
                if (selectedShippingAddress?.id === addressId) {
                    setSelectedShippingAddress(null);
                }
                if (selectedBillingAddress?.id === addressId) {
                    setSelectedBillingAddress(null);
                }
            } catch (error) {
                console.error('Failed to delete address:', error);
            }
        }
    };

    const handleEditAddress = (address) => {
        setEditingAddress(address);
        setShowAddressForm(true);
    };

    const handleCancelForm = () => {
        setShowAddressForm(false);
        setEditingAddress(null);
    };

    const handleSelectShippingAddress = (address) => {
        setSelectedShippingAddress(address);
        if (useSameAddress) {
            setSelectedBillingAddress(address);
        }
    };

    const handleSelectBillingAddress = (address) => {
        setSelectedBillingAddress(address);
    };

    const handleUseSameAddressChange = (checked) => {
        setUseSameAddress(checked);
        if (checked && selectedShippingAddress) {
            setSelectedBillingAddress(selectedShippingAddress);
        }
    };

    const selectedItems = cart.filter(item => item.checked);
    const canProceed = selectedShippingAddress && selectedBillingAddress && selectedItems.length > 0;

    const AddressCard = ({ address, isSelected, onSelect, onEdit, onDelete, type }) => (
        <div
            className={`border-2 rounded-lg p-4 cursor-pointer transition-all ${
                isSelected ? 'border-[#23A6F0] bg-blue-50' : 'border-gray-300 hover:border-[#23A6F0]'
            }`}
            onClick={() => onSelect(address)}
        >
            <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-2">
                    <input
                        type="radio"
                        checked={isSelected}
                        onChange={() => onSelect(address)}
                        className="w-5 h-5 cursor-pointer"
                    />
                    <div>
                        <h4 className="font-bold text-[#252B42]">{address.title}</h4>
                        <p className="text-sm text-[#737373]">{address.name} {address.surname}</p>
                    </div>
                </div>
                <div className="flex gap-2">
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            onEdit(address);
                        }}
                        className="text-[#23A6F0] hover:text-[#1a8cd8]"
                    >
                        <Edit size={18} />
                    </button>
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            onDelete(address.id);
                        }}
                        className="text-red-500 hover:text-red-700"
                    >
                        <Trash2 size={18} />
                    </button>
                </div>
            </div>
            <div className="text-sm text-[#737373] space-y-1">
                <p>{address.phone}</p>
                <p>{address.city}, {address.district}</p>
                <p className="line-clamp-2">{address.neighborhood}</p>
            </div>
        </div>
    );

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
                        <Link to="/cart" className="font-bold text-[#252B42] hover:text-[#23A6F0]">
                            Shopping Cart
                        </Link>
                        <ChevronRight size={16} className="text-[#BDBDBD]" />
                        <span className="font-bold text-[#BDBDBD]">Create Order</span>
                    </nav>
                </div>
            </div>

            <div className="container mx-auto px-8 py-12">
                <h1 className="text-3xl font-bold text-[#252B42] mb-2">Create Order</h1>
                <p className="text-[#737373] mb-8">Step 1: Address Information</p>

                {addressLoading ? (
                    <div className="flex justify-center py-12">
                        <LoadingSpinner size="large" />
                    </div>
                ) : (
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Address Management - Left Side */}
                        <div className="lg:col-span-2 space-y-8">
                            {/* Shipping Address */}
                            <div>
                                <div className="flex items-center justify-between mb-4">
                                    <h2 className="text-xl font-bold text-[#252B42] flex items-center gap-2">
                                        <MapPin size={24} />
                                        Shipping Address
                                    </h2>
                                    <button
                                        onClick={() => setShowAddressForm(true)}
                                        className="flex items-center gap-2 px-4 py-2 bg-[#23A6F0] text-white font-bold rounded hover:bg-[#1a8cd8] transition-colors"
                                    >
                                        <Plus size={20} />
                                        Add Address
                                    </button>
                                </div>

                                {addressList.length === 0 ? (
                                    <div className="text-center py-12 border-2 border-dashed border-gray-300 rounded-lg">
                                        <p className="text-[#737373] mb-4">No saved addresses</p>
                                        <button
                                            onClick={() => setShowAddressForm(true)}
                                            className="px-6 py-3 bg-[#23A6F0] text-white font-bold rounded hover:bg-[#1a8cd8] transition-colors"
                                        >
                                            Add Your First Address
                                        </button>
                                    </div>
                                ) : (
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {addressList.map((address) => (
                                            <AddressCard
                                                key={address.id}
                                                address={address}
                                                isSelected={selectedShippingAddress?.id === address.id}
                                                onSelect={handleSelectShippingAddress}
                                                onEdit={handleEditAddress}
                                                onDelete={handleDeleteAddress}
                                                type="shipping"
                                            />
                                        ))}
                                    </div>
                                )}
                            </div>

                            {/* Billing Address */}
                            <div>
                                <div className="flex items-center justify-between mb-4">
                                    <h2 className="text-xl font-bold text-[#252B42] flex items-center gap-2">
                                        <MapPin size={24} />
                                        Billing Address
                                    </h2>
                                    <label className="flex items-center gap-2 cursor-pointer">
                                        <input
                                            type="checkbox"
                                            checked={useSameAddress}
                                            onChange={(e) => handleUseSameAddressChange(e.target.checked)}
                                            className="w-5 h-5"
                                        />
                                        <span className="text-sm font-bold text-[#252B42]">
                                            Same as shipping address
                                        </span>
                                    </label>
                                </div>

                                {!useSameAddress && addressList.length > 0 && (
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {addressList.map((address) => (
                                            <AddressCard
                                                key={address.id}
                                                address={address}
                                                isSelected={selectedBillingAddress?.id === address.id}
                                                onSelect={handleSelectBillingAddress}
                                                onEdit={handleEditAddress}
                                                onDelete={handleDeleteAddress}
                                                type="billing"
                                            />
                                        ))}
                                    </div>
                                )}

                                {useSameAddress && selectedShippingAddress && (
                                    <div className="border-2 border-[#23A6F0] bg-blue-50 rounded-lg p-4">
                                        <p className="text-sm text-[#737373] mb-2">
                                            Billing address will be same as shipping address
                                        </p>
                                        <div className="text-sm text-[#252B42]">
                                            <p className="font-bold">{selectedShippingAddress.title}</p>
                                            <p>{selectedShippingAddress.name} {selectedShippingAddress.surname}</p>
                                            <p>{selectedShippingAddress.phone}</p>
                                            <p>{selectedShippingAddress.city}, {selectedShippingAddress.district}</p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Order Summary - Right Side */}
                        <div className="lg:col-span-1">
                            <div className="bg-[#FAFAFA] rounded-lg p-6 sticky top-4">
                                <h2 className="text-xl font-bold text-[#252B42] mb-6">Order Summary</h2>
                                
                                <div className="space-y-3 mb-6">
                                    <div className="flex justify-between items-center">
                                        <span className="text-[#737373]">Selected Items</span>
                                        <span className="font-bold text-[#252B42]">{selectedItems.length}</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-[#737373]">Shipping Address</span>
                                        <span className="font-bold text-[#252B42]">
                                            {selectedShippingAddress ? '✓' : '✗'}
                                        </span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-[#737373]">Billing Address</span>
                                        <span className="font-bold text-[#252B42]">
                                            {selectedBillingAddress ? '✓' : '✗'}
                                        </span>
                                    </div>
                                </div>

                                <button
                                    disabled={!canProceed}
                                    className="w-full px-6 py-3 bg-[#23A6F0] text-white font-bold rounded hover:bg-[#1a8cd8] transition-colors disabled:opacity-50 disabled:cursor-not-allowed mb-3"
                                >
                                    Continue to Payment
                                </button>

                                <Link
                                    to="/cart"
                                    className="block w-full px-6 py-3 border-2 border-[#23A6F0] text-[#23A6F0] text-center font-bold rounded hover:bg-[#23A6F0] hover:text-white transition-colors"
                                >
                                    Back to Cart
                                </Link>

                                {!canProceed && (
                                    <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded">
                                        <p className="text-sm text-yellow-800">
                                            Please select shipping and billing addresses to continue
                                        </p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* Address Form Modal */}
            {showAddressForm && (
                <AddressForm
                    onSubmit={editingAddress ? handleUpdateAddress : handleAddAddress}
                    onCancel={handleCancelForm}
                    initialData={editingAddress}
                />
            )}
        </div>
    );
};

export default CreateOrderPage;
