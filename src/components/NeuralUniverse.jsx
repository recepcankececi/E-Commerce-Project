const NeuralUniverse = () => {
    return (
        <section className="py-12 lg:py-0 bg-white">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-0 items-center">
                    {/* Image - Left on Desktop, Bottom on Mobile */}
                    <div className="order-2 lg:order-1 flex justify-center lg:justify-start">
                        <div className="relative w-full max-w-md lg:max-w-lg">
                            {/* Image placeholder - gerçek görselde buraya img tag gelecek */}
                            <div className="aspect-[3/4] lg:aspect-auto lg:h-[600px] bg-gradient-to-br from-gray-300 to-gray-400 rounded-lg lg:rounded-none" />
                        </div>
                    </div>

                    {/* Content - Right on Desktop, Top on Mobile */}
                    <div className="order-1 lg:order-2 flex flex-col justify-center items-center lg:items-start text-center lg:text-left py-12 lg:py-20 lg:pl-12">
                        <h5 className="text-base font-bold text-[#BDBDBD] mb-6 lg:mb-8">
                            SUMMER 2020
                        </h5>
                        <h2 className="font-bold text-3xl lg:text-5xl text-[#252B42] mb-6 lg:mb-8 leading-tight max-w-md">
                            Part of the Neural Universe
                        </h2>
                        <p className="text-lg lg:text-xl text-[#737373] mb-6 lg:mb-8 max-w-md">
                            We know how large objects will act, but things on a small scale.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                            <button className="bg-[#23A6F0] hover:bg-[#1a8fd9] text-white font-bold text-sm px-10 py-4 rounded transition-colors">
                                BUY NOW
                            </button>
                            <button className="border-2 border-[#23A6F0] text-[#23A6F0] hover:bg-[#23A6F0] hover:text-white font-bold text-sm px-10 py-4 rounded transition-colors">
                                Learn More
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NeuralUniverse;