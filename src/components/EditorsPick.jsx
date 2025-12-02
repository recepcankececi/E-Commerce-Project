import { categories } from '../data/categories';

const EditorsPick = () => {
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
                    {categories.map((category) => {
                        const heightClass = category.id === 1 || category.id === 2 ? 'h-[500px]' : 'h-[242px]';
                        const paddingClass = category.id === 1 ? 'px-12' : category.id === 2 ? 'px-8' : category.id === 3 ? 'px-6' : 'px-10';
                        const textSizeClass = category.id === 3 ? 'text-sm' : '';
                        
                        return (
                            <div key={category.id} className={`relative group overflow-hidden ${category.className}`}>
                                <div className={`relative ${heightClass} lg:h-full`}>
                                    <img 
                                        src={category.image} 
                                        alt={category.title}
                                        className="w-full h-full object-cover"
                                    />

                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />

                                    {/* Category Label */}
                                    <div className="absolute bottom-6 left-6">
                                        <button className={`bg-white ${paddingClass} py-3 font-bold text-[#252B42] ${textSizeClass} hover:bg-gray-100 transition-colors`}>
                                            {category.title}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default EditorsPick;