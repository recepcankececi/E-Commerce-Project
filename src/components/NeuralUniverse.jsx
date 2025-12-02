const NeuralUniverse = () => {
    return (
        <section className="py-12 lg:py-16 bg-white">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                    {/* Image - Left on Desktop, Bottom on Mobile */}
                    <div className="order-2 lg:order-1 flex justify-center lg:justify-start">
                        <div className="relative w-full max-w-xs lg:max-w-sm">
                            <img 
                                src="/images/neural-universe.png" 
                                alt="Part of the Neural Universe"
                                className="w-full h-auto object-contain"
                            />
                        </div>
                    </div>

                    {/* Content - Right on Desktop, Top on Mobile */}
                    <div className="order-1 lg:order-2 flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
                        <h5 className="text-sm font-bold text-[#BDBDBD] mb-4 lg:mb-6">
                            SUMMER 2020
                        </h5>
                        <h2 className="font-bold text-3xl lg:text-4xl text-[#252B42] mb-4 lg:mb-6 leading-tight max-w-md">
                            Part of the Neural Universe
                        </h2>
                        <p className="text-base lg:text-lg text-[#737373] mb-6 lg:mb-8 max-w-md">
                            We know how large objects will act, but things on a small scale.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                            <button className="bg-[#23A6F0] hover:bg-[#1a8fd9] text-white font-bold text-sm px-8 py-3 rounded transition-colors">
                                BUY NOW
                            </button>
                            <button className="border-2 border-[#23A6F0] text-[#23A6F0] hover:bg-[#23A6F0] hover:text-white font-bold text-sm px-8 py-3 rounded transition-colors">
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