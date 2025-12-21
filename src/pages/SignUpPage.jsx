import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axiosInstance from '../api/axiosInstance';
import { toast } from 'react-toastify';
import { fetchRoles } from '../store/actions/clientActions';

const SignUpPage = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [selectedRole, setSelectedRole] = useState('');
    const history = useHistory();
    const dispatch = useDispatch();
    const { roles } = useSelector((state) => state.client);

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm({
        mode: 'onChange',
    });

    const password = watch('password');

    useEffect(() => {
        dispatch(fetchRoles());
    }, [dispatch]);

    useEffect(() => {
        if (roles.length > 0) {
            const customerRole = roles.find(role => role.name === 'Customer');
            if (customerRole) {
                setSelectedRole(customerRole.id);
            }
        }
    }, [roles]);

    const onSubmit = async (data) => {
        setIsLoading(true);
        try {
            const formData = {
                name: data.name,
                email: data.email,
                password: data.password,
                role_id: data.role_id,
            };

            const selectedRoleData = roles.find(role => role.id === data.role_id);
            if (selectedRoleData && selectedRoleData.name === 'Store') {
                formData.store = {
                    name: data.store_name,
                    phone: data.store_phone,
                    tax_no: data.store_tax_no,
                    bank_account: data.store_bank_account,
                };
            }

            await axiosInstance.post('/signup', formData);
            toast.success('You need to click link in email to activate your account!');
            setTimeout(() => {
                history.goBack();
            }, 2000);
        } catch (error) {
            console.error('Signup error:', error);
            const errorMessage = error.response?.data?.message || 'Signup failed. Please try again.';
            toast.error(errorMessage);
        } finally {
            setIsLoading(false);
        }
    };

    const isStoreRole = () => {
        const selectedRoleData = roles.find(role => role.id === selectedRole);
        return selectedRoleData && selectedRoleData.name === 'Store';
    };

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-8">
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-gray-900">Sign Up</h2>
                    <p className="mt-2 text-sm text-gray-600">Create your account</p>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                            Name
                        </label>
                        <input
                            id="name"
                            type="text"
                            {...register('name', {
                                required: 'Name is required',
                                minLength: {
                                    value: 3,
                                    message: 'Name must be at least 3 characters',
                                },
                            })}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        />
                        {errors.name && (
                            <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                        )}
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email
                        </label>
                        <input
                            id="email"
                            type="email"
                            {...register('email', {
                                required: 'Email is required',
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: 'Invalid email address',
                                },
                            })}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        />
                        {errors.email && (
                            <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                        )}
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                            Password
                        </label>
                        <input
                            id="password"
                            type="password"
                            {...register('password', {
                                required: 'Password is required',
                                minLength: {
                                    value: 8,
                                    message: 'Password must be at least 8 characters',
                                },
                                pattern: {
                                    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
                                    message: 'Password must include lowercase, uppercase, number and special character',
                                },
                            })}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        />
                        {errors.password && (
                            <p className="mt-1 text-sm text-red-600">{errors.password.message}</p>
                        )}
                    </div>

                    <div>
                        <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                            Confirm Password
                        </label>
                        <input
                            id="confirmPassword"
                            type="password"
                            {...register('confirmPassword', {
                                required: 'Please confirm your password',
                                validate: value => value === password || 'Passwords do not match',
                            })}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        />
                        {errors.confirmPassword && (
                            <p className="mt-1 text-sm text-red-600">{errors.confirmPassword.message}</p>
                        )}
                    </div>

                    <div>
                        <label htmlFor="role_id" className="block text-sm font-medium text-gray-700">
                            Role
                        </label>
                        <select
                            id="role_id"
                            {...register('role_id', {
                                required: 'Role is required',
                            })}
                            onChange={(e) => setSelectedRole(e.target.value)}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        >
                            {roles.map((role) => (
                                <option key={role.id} value={role.id}>
                                    {role.name}
                                </option>
                            ))}
                        </select>
                        {errors.role_id && (
                            <p className="mt-1 text-sm text-red-600">{errors.role_id.message}</p>
                        )}
                    </div>

                    {isStoreRole() && (
                        <>
                            <div className="border-t pt-6">
                                <h3 className="text-lg font-medium text-gray-900 mb-4">Store Information</h3>
                            </div>

                            <div>
                                <label htmlFor="store_name" className="block text-sm font-medium text-gray-700">
                                    Store Name
                                </label>
                                <input
                                    id="store_name"
                                    type="text"
                                    {...register('store_name', {
                                        required: isStoreRole() ? 'Store name is required' : false,
                                        minLength: {
                                            value: 3,
                                            message: 'Store name must be at least 3 characters',
                                        },
                                    })}
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                />
                                {errors.store_name && (
                                    <p className="mt-1 text-sm text-red-600">{errors.store_name.message}</p>
                                )}
                            </div>

                            <div>
                                <label htmlFor="store_phone" className="block text-sm font-medium text-gray-700">
                                    Store Phone
                                </label>
                                <input
                                    id="store_phone"
                                    type="tel"
                                    placeholder="+90 5XX XXX XX XX"
                                    {...register('store_phone', {
                                        required: isStoreRole() ? 'Store phone is required' : false,
                                        pattern: {
                                            value: /^(\+90|0)?5\d{9}$/,
                                            message: 'Invalid Turkish phone number',
                                        },
                                    })}
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                />
                                {errors.store_phone && (
                                    <p className="mt-1 text-sm text-red-600">{errors.store_phone.message}</p>
                                )}
                            </div>

                            <div>
                                <label htmlFor="store_tax_no" className="block text-sm font-medium text-gray-700">
                                    Store Tax ID
                                </label>
                                <input
                                    id="store_tax_no"
                                    type="text"
                                    placeholder="TXXXXVXXXXXX"
                                    {...register('store_tax_no', {
                                        required: isStoreRole() ? 'Store tax ID is required' : false,
                                        pattern: {
                                            value: /^T\d{4}V\d{6}$/,
                                            message: 'Tax ID must match pattern TXXXXVXXXXXX',
                                        },
                                    })}
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                />
                                {errors.store_tax_no && (
                                    <p className="mt-1 text-sm text-red-600">{errors.store_tax_no.message}</p>
                                )}
                            </div>

                            <div>
                                <label htmlFor="store_bank_account" className="block text-sm font-medium text-gray-700">
                                    Store Bank Account (IBAN)
                                </label>
                                <input
                                    id="store_bank_account"
                                    type="text"
                                    placeholder="TR00 0000 0000 0000 0000 0000 00"
                                    {...register('store_bank_account', {
                                        required: isStoreRole() ? 'Store bank account is required' : false,
                                        pattern: {
                                            value: /^TR\d{24}$/,
                                            message: 'Invalid IBAN address',
                                        },
                                    })}
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                />
                                {errors.store_bank_account && (
                                    <p className="mt-1 text-sm text-red-600">{errors.store_bank_account.message}</p>
                                )}
                            </div>
                        </>
                    )}

                    <div>
                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-gray-400 disabled:cursor-not-allowed"
                        >
                            {isLoading ? (
                                <div className="flex items-center">
                                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Submitting...
                                </div>
                            ) : (
                                'Sign Up'
                            )}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignUpPage;
