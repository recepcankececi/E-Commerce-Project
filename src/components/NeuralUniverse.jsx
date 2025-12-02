const NeuralUniverse = () => {
    return (
        <section className="py-20 lg:py-32 bg-white">
            <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
                    {/* Image - Left on Desktop, Bottom on Mobile */}
                    <div className="order-2 lg:order-1 flex-1 flex justify-center lg:justify-start items-center">
                        <div className="relative w-full">
                            <img 
                                src="/images/neural-universe.png" 
                                alt="Part of the Neural Universe"
                                className="w-full h-auto object-contain"
                            />
                        </div>
                    </div>

                    {/* Content - Right on Desktop, Top on Mobile */}
                    <div className="order-1 lg:order-2 flex-1 flex flex-col justify-center items-center lg:items-start text-center lg:text-left space-y-6 lg:space-y-8">
                        <h5 className="text-base lg:text-lg font-bold text-[#BDBDBD]">
                            SUMMER 2020
                        </h5>
                        <h2 className="font-bold text-4xl lg:text-5xl text-[#252B42] leading-tight max-w-lg">
                            Part of the Neural Universe
                        </h2>
                        <p className="text-lg lg:text-xl text-[#737373] max-w-lg leading-relaxed">
                            We know how large objects will act, but things on a small scale.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto pt-4">
                            <button className="bg-[#23A6F0] hover:bg-[#1a8fd9] text-white font-bold text-base lg:text-lg px-10 py-4 rounded transition-colors">
                                BUY NOW
                            </button>
                            <button className="border-2 border-[#23A6F0] text-[#23A6F0] hover:bg-[#23A6F0] hover:text-white font-bold text-base lg:text-lg px-10 py-4 rounded transition-colors">
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