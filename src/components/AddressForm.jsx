import { useForm } from 'react-hook-form';
import { X } from 'lucide-react';

const turkishCities = [
    'Adana', 'Adıyaman', 'Afyonkarahisar', 'Ağrı', 'Aksaray', 'Amasya', 'Ankara', 'Antalya', 'Ardahan', 'Artvin',
    'Aydın', 'Balıkesir', 'Bartın', 'Batman', 'Bayburt', 'Bilecik', 'Bingöl', 'Bitlis', 'Bolu', 'Burdur',
    'Bursa', 'Çanakkale', 'Çankırı', 'Çorum', 'Denizli', 'Diyarbakır', 'Düzce', 'Edirne', 'Elazığ', 'Erzincan',
    'Erzurum', 'Eskişehir', 'Gaziantep', 'Giresun', 'Gümüşhane', 'Hakkâri', 'Hatay', 'Iğdır', 'Isparta', 'İstanbul',
    'İzmir', 'Kahramanmaraş', 'Karabük', 'Karaman', 'Kars', 'Kastamonu', 'Kayseri', 'Kırıkkale', 'Kırklareli', 'Kırşehir',
    'Kilis', 'Kocaeli', 'Konya', 'Kütahya', 'Malatya', 'Manisa', 'Mardin', 'Mersin', 'Muğla', 'Muş',
    'Nevşehir', 'Niğde', 'Ordu', 'Osmaniye', 'Rize', 'Sakarya', 'Samsun', 'Siirt', 'Sinop', 'Sivas',
    'Şanlıurfa', 'Şırnak', 'Tekirdağ', 'Tokat', 'Trabzon', 'Tunceli', 'Uşak', 'Van', 'Yalova', 'Yozgat', 'Zonguldak'
];

const AddressForm = ({ onSubmit, onCancel, initialData = null }) => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: initialData || {
            title: '',
            name: '',
            surname: '',
            phone: '',
            city: '',
            district: '',
            neighborhood: ''
        }
    });

    const onFormSubmit = (data) => {
        onSubmit(data);
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex justify-between items-center">
                    <h2 className="text-2xl font-bold text-[#252B42]">
                        {initialData ? 'Update Address' : 'Add New Address'}
                    </h2>
                    <button
                        onClick={onCancel}
                        className="text-[#737373] hover:text-[#252B42]"
                    >
                        <X size={24} />
                    </button>
                </div>

                <form onSubmit={handleSubmit(onFormSubmit)} className="p-6 space-y-4">
                    {/* Address Title */}
                    <div>
                        <label className="block text-sm font-bold text-[#252B42] mb-2">
                            Address Title *
                        </label>
                        <input
                            {...register('title', { required: 'Address title is required' })}
                            type="text"
                            placeholder="e.g., Home, Office"
                            className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-[#23A6F0]"
                        />
                        {errors.title && (
                            <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>
                        )}
                    </div>

                    {/* Name & Surname */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-bold text-[#252B42] mb-2">
                                Name *
                            </label>
                            <input
                                {...register('name', { required: 'Name is required' })}
                                type="text"
                                placeholder="Enter your name"
                                className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-[#23A6F0]"
                            />
                            {errors.name && (
                                <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                            )}
                        </div>

                        <div>
                            <label className="block text-sm font-bold text-[#252B42] mb-2">
                                Surname *
                            </label>
                            <input
                                {...register('surname', { required: 'Surname is required' })}
                                type="text"
                                placeholder="Enter your surname"
                                className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-[#23A6F0]"
                            />
                            {errors.surname && (
                                <p className="text-red-500 text-sm mt-1">{errors.surname.message}</p>
                            )}
                        </div>
                    </div>

                    {/* Phone */}
                    <div>
                        <label className="block text-sm font-bold text-[#252B42] mb-2">
                            Phone *
                        </label>
                        <input
                            {...register('phone', {
                                required: 'Phone is required',
                                pattern: {
                                    value: /^[0-9]{10,11}$/,
                                    message: 'Please enter a valid phone number (10-11 digits)'
                                }
                            })}
                            type="tel"
                            placeholder="05XXXXXXXXX"
                            className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-[#23A6F0]"
                        />
                        {errors.phone && (
                            <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                        )}
                    </div>

                    {/* City & District */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-bold text-[#252B42] mb-2">
                                City (İl) *
                            </label>
                            <select
                                {...register('city', { required: 'City is required' })}
                                className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-[#23A6F0]"
                            >
                                <option value="">Select a city</option>
                                {turkishCities.map((city) => (
                                    <option key={city} value={city.toLowerCase()}>
                                        {city}
                                    </option>
                                ))}
                            </select>
                            {errors.city && (
                                <p className="text-red-500 text-sm mt-1">{errors.city.message}</p>
                            )}
                        </div>

                        <div>
                            <label className="block text-sm font-bold text-[#252B42] mb-2">
                                District (İlçe) *
                            </label>
                            <input
                                {...register('district', { required: 'District is required' })}
                                type="text"
                                placeholder="Enter district"
                                className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-[#23A6F0]"
                            />
                            {errors.district && (
                                <p className="text-red-500 text-sm mt-1">{errors.district.message}</p>
                            )}
                        </div>
                    </div>

                    {/* Neighborhood (Address Details) */}
                    <div>
                        <label className="block text-sm font-bold text-[#252B42] mb-2">
                            Address Details (Mahalle, Sokak, Bina No, Daire No) *
                        </label>
                        <textarea
                            {...register('neighborhood', { required: 'Address details are required' })}
                            rows="4"
                            placeholder="Enter full address details including neighborhood, street, building and door numbers"
                            className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-[#23A6F0] resize-none"
                        />
                        {errors.neighborhood && (
                            <p className="text-red-500 text-sm mt-1">{errors.neighborhood.message}</p>
                        )}
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
                            {initialData ? 'Update Address' : 'Save Address'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddressForm;
