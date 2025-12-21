import { useForm } from 'react-hook-form';
import { X, CreditCard } from 'lucide-react';

const CreditCardForm = ({ onSubmit, onCancel, initialData = null }) => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: initialData || {
            card_no: '',
            expire_month: '',
            expire_year: '',
            name_on_card: ''
        }
    });

    const onFormSubmit = (data) => {
        const formattedData = {
            ...data,
            expire_month: parseInt(data.expire_month),
            expire_year: parseInt(data.expire_year)
        };
        onSubmit(formattedData);
    };

    const currentYear = new Date().getFullYear();
    const years = Array.from({ length: 15 }, (_, i) => currentYear + i);
    const months = Array.from({ length: 12 }, (_, i) => i + 1);

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg max-w-md w-full">
                <div className="bg-white border-b border-gray-200 p-6 flex justify-between items-center rounded-t-lg">
                    <h2 className="text-2xl font-bold text-[#252B42] flex items-center gap-2">
                        <CreditCard size={24} />
                        {initialData ? 'Update Card' : 'Add New Card'}
                    </h2>
                    <button
                        onClick={onCancel}
                        className="text-[#737373] hover:text-[#252B42]"
                    >
                        <X size={24} />
                    </button>
                </div>

                <form onSubmit={handleSubmit(onFormSubmit)} className="p-6 space-y-4">
                    {/* Card Number */}
                    <div>
                        <label className="block text-sm font-bold text-[#252B42] mb-2">
                            Card Number *
                        </label>
                        <input
                            {...register('card_no', {
                                required: 'Card number is required',
                                pattern: {
                                    value: /^[0-9]{16}$/,
                                    message: 'Card number must be 16 digits'
                                }
                            })}
                            type="text"
                            maxLength="16"
                            placeholder="1234123412341234"
                            className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-[#23A6F0]"
                        />
                        {errors.card_no && (
                            <p className="text-red-500 text-sm mt-1">{errors.card_no.message}</p>
                        )}
                    </div>

                    {/* Name on Card */}
                    <div>
                        <label className="block text-sm font-bold text-[#252B42] mb-2">
                            Name on Card *
                        </label>
                        <input
                            {...register('name_on_card', {
                                required: 'Name on card is required',
                                minLength: {
                                    value: 3,
                                    message: 'Name must be at least 3 characters'
                                }
                            })}
                            type="text"
                            placeholder="Ali Baş"
                            className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-[#23A6F0]"
                        />
                        {errors.name_on_card && (
                            <p className="text-red-500 text-sm mt-1">{errors.name_on_card.message}</p>
                        )}
                    </div>

                    {/* Expiry Date */}
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-bold text-[#252B42] mb-2">
                                Expiry Month *
                            </label>
                            <select
                                {...register('expire_month', {
                                    required: 'Expiry month is required'
                                })}
                                className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-[#23A6F0]"
                            >
                                <option value="">Month</option>
                                {months.map((month) => (
                                    <option key={month} value={month}>
                                        {month.toString().padStart(2, '0')}
                                    </option>
                                ))}
                            </select>
                            {errors.expire_month && (
                                <p className="text-red-500 text-sm mt-1">{errors.expire_month.message}</p>
                            )}
                        </div>

                        <div>
                            <label className="block text-sm font-bold text-[#252B42] mb-2">
                                Expiry Year *
                            </label>
                            <select
                                {...register('expire_year', {
                                    required: 'Expiry year is required'
                                })}
                                className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-[#23A6F0]"
                            >
                                <option value="">Year</option>
                                {years.map((year) => (
                                    <option key={year} value={year}>
                                        {year}
                                    </option>
                                ))}
                            </select>
                            {errors.expire_year && (
                                <p className="text-red-500 text-sm mt-1">{errors.expire_year.message}</p>
                            )}
                        </div>
                    </div>

                    {/* Form Actions */}
                    <div className="flex gap-4 pt-4">
                        <button
                            type="button"
                            onClick={onCancel}
                            className="flex-1 px-6 py-3 border-2 border-[#23A6F0] text-[#23A6F0] font-bold rounded hover:bg-[#23A6F0] hover:text-white transition-colors"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="flex-1 px-6 py-3 bg-[#23A6F0] text-white font-bold rounded hover:bg-[#1a8cd8] transition-colors"
                        >
                            {initialData ? 'Update Card' : 'Save Card'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreditCardForm;
