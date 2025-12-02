import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { vitaClassicSlides } from '../data/carouselData';

const VitaClassicCarousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = vitaClassicSlides;

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    // Auto-play functionality
    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative bg-[#23856D] overflow-hidden">
            <div className="relative">
                {slides.map((slide, index) => (
                    <div
                        key={slide.id}
                        className={`transition-opacity duration-500 ${
                            index === currentSlide ? 'opacity-100' : 'opacity-0 absolute inset-0'
                        }`}
                    >
                        <div className="container mx-auto px-4 h-full">
                            {/* Mobile Layout */}
                            <div className="lg:hidden relative min-h-[1100px]">
                                {/* Content - Top */}
                                <div className="absolute top-0 left-0 right-0 flex flex-col text-white text-center pt-20 px-6">
                                    <h5 className="font-bold text-lg mb-6">
                                        {slide.season}
                                    </h5>
                                    <h2 className="font-bold text-5xl leading-tight mb-5 px-4">
                                        {slide.title}
                                    </h2>
                                    <p className="text-lg mb-6 max-w-md mx-auto px-2 leading-relaxed">
                                        {slide.description}
                                    </p>
                                    <div className="mb-2">
                                        <span className="text-3xl font-bold">
                                            ${slide.price}
                                        </span>
                                    </div>
                                </div>

                                {/* Button - Anchored to Absolute Center */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
                                    <button className="bg-[#2DC071] hover:bg-[#25a35f] text-white font-bold text-sm px-10 py-3 rounded transition-colors whitespace-nowrap">
                                        ADD TO CART
                                    </button>
                                </div>

                                {/* Image - Below Button */}
                                <div className="absolute top-1/2 left-0 right-0 flex justify-center pt-16">
                                    <div className="w-full max-w-sm px-4">
                                        <img 
                                            src={slide.image} 
                                            alt={slide.title}
                                            className="w-full h-auto object-contain"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Desktop Layout */}
                            <div className="hidden lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center min-h-[700px]">
                                {/* Content - Left on Desktop */}
                                <div className="flex flex-col justify-center text-white text-left py-20">
                                    <h5 className="font-bold text-lg mb-8">
                                        {slide.season}
                                    </h5>
                                    <h2 className="font-bold text-6xl leading-tight mb-8">
                                        {slide.title}
                                    </h2>
                                    <p className="text-xl mb-8 max-w-md">
                                        {slide.description}
                                    </p>
                                    <div className="flex flex-row items-center justify-start gap-8">
                                        <span className="text-3xl font-bold">
                                            ${slide.price}
                                        </span>
                                        <button className="bg-[#2DC071] hover:bg-[#25a35f] text-white font-bold text-base px-10 py-4 rounded transition-colors">
                                            ADD TO CART
                                        </button>
                                    </div>
                                </div>

                                {/* Image - Right on Desktop */}
                                <div className="relative flex items-center justify-end">
                                    <div className="w-full max-w-lg">
                                        <img 
                                            src={slide.image} 
                                            alt={slide.title}
                                            className="w-full h-full object-contain"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Navigation Arrows */}
            <button
                onClick={prevSlide}
                className="absolute left-4 lg:left-12 top-1/2 -translate-y-1/2 text-white hover:bg-white/10 p-2 lg:p-3 rounded-full transition-colors z-10"
                aria-label="Previous slide"
            >
                <ChevronLeft className="w-6 h-6 lg:w-8 lg:h-8" />
            </button>

            <button
                onClick={nextSlide}
                className="absolute right-4 lg:right-12 top-1/2 -translate-y-1/2 text-white hover:bg-white/10 p-2 lg:p-3 rounded-full transition-colors z-10"
                aria-label="Next slide"
            >
                <ChevronRight className="w-6 h-6 lg:w-8 lg:h-8" />
            </button>

            {/* Pagination Dots */}
            <div className="absolute bottom-8 lg:bottom-12 left-1/2 -translate-x-1/2 flex gap-2 lg:gap-3 z-10">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-16 lg:w-20 h-1 lg:h-1.5 rounded-full transition-all ${
                            index === currentSlide
                                ? 'bg-white'
                                : 'bg-white/40 hover:bg-white/60'
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </section>
    );
};

export default VitaClassicCarousel;