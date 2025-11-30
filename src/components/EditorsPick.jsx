const EditorsPick = () => {
    const categories = [
        {
            id: 1,
            title: 'MEN',
            image: '/images/men-category.jpg',
            className: 'lg:row-span-2'
        },
        {
            id: 2,
            title: 'WOMEN',
            image: '/images/women-category.jpg',
            className: 'lg:row-span-2'
        },
        {
            id: 3,
            title: 'ACCESSORIES',
            image: '/images/accessories-category.jpg',
            className: ''
        },
        {
            id: 4,
            title: 'KIDS',
            image: '/images/kids-category.jpg',
            className: ''
        }
    ];

    return (
        <section className="py-12 lg:py-20 bg-[#FAFAFA]">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-8 lg:mb-12">
                    <h2 className="text-2xl lg:text-2xl font-bold text-[#252B42] mb-2 lg:mb-3">
                        EDITOR'S PICK
                    </h2>
                    <p className="text-sm lg:text-base text-[#737373]">
                        Problems trying to resolve the conflict between
                    </p>
                </div>

                {/* Categories Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 lg:gap-7 lg:grid-rows-2">
                    {/* MEN - Large Card */}
                    <div className="relative group overflow-hidden lg:col-span-2 lg:row-span-2">
                        <div className="relative h-[500px] lg:h-full bg-gray-200">
                            {/* Image placeholder - gerçek görselde buraya img tag gelecek */}
                            <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400" />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />

                            {/* Category Label */}
                            <div className="absolute bottom-6 left-6">
                                <button className="bg-white px-12 py-3 font-bold text-[#252B42] hover:bg-gray-100 transition-colors">
                                    MEN
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* WOMEN - Large Card */}
                    <div className="relative group overflow-hidden lg:col-span-1 lg:row-span-2">
                        <div className="relative h-[500px] lg:h-full bg-gray-200">
                            <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400" />

                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />

                            <div className="absolute bottom-6 left-6">
                                <button className="bg-white px-8 py-3 font-bold text-[#252B42] hover:bg-gray-100 transition-colors">
                                    WOMEN
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* ACCESSORIES - Small Card */}
                    <div className="relative group overflow-hidden lg:col-span-1 lg:row-span-1">
                        <div className="relative h-[242px] lg:h-full bg-gray-200">
                            <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400" />

                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />

                            <div className="absolute bottom-6 left-6">
                                <button className="bg-white px-6 py-3 font-bold text-[#252B42] text-sm hover:bg-gray-100 transition-colors">
                                    ACCESSORIES
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* KIDS - Small Card */}
                    <div className="relative group overflow-hidden lg:col-span-1 lg:row-span-1">
                        <div className="relative h-[242px] lg:h-full bg-gray-200">
                            <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400" />

                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />

                            <div className="absolute bottom-6 left-6">
                                <button className="bg-white px-10 py-3 font-bold text-[#252B42] hover:bg-gray-100 transition-colors">
                                    KIDS
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EditorsPick;