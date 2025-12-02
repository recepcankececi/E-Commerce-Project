import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { heroSlides } from '../data/carouselData';

const HeroSwiper = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = heroSlides;

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
        <div className="relative w-full h-[calc(100vh-64px)] lg:h-[calc(100vh-112px)] overflow-hidden">
            {/* Slides */}
            <div className="relative h-full">
                {slides.map((slide, index) => (
                    <div
                        key={slide.id}
                        className={`absolute inset-0 transition-opacity duration-500 ${
                            index === currentSlide ? 'opacity-100' : 'opacity-0'
                        }`}
                    >
                        {/* Background Image */}
                        <div className="absolute inset-0 bg-gradient-to-r from-[#1CB5E0] to-[#00D4FF]">
                            <img 
                                src={slide.image} 
                                alt={slide.title}
                                className="w-full h-full object-cover object-center"
                            />
                        </div>

                        {/* Content Overlay */}
                        <div className="relative h-full">
                            <div className="container mx-auto px-4 h-full">
                                <div className="flex items-center h-full">
                                    {/* Content - Centered on Mobile, Left on Desktop */}
                                    <div className="flex flex-col justify-center text-white space-y-12 lg:space-y-20 text-center lg:text-left max-w-xl lg:max-w-2xl mx-auto lg:mx-0 px-8 lg:px-0">
                                        <h5 className="font-bold text-xl lg:text-2xl tracking-wide">
                                            {slide.season}
                                        </h5>
                                        <h1 className="font-bold text-5xl lg:text-7xl leading-tight lg:leading-tight">
                                            {slide.title}
                                        </h1>
                                        <p className="text-xl lg:text-2xl leading-relaxed">
                                            {slide.description}
                                        </p>
                                        <div className="pt-12">
                                            <button className="bg-[#2DC071] hover:bg-[#25a35f] text-white font-bold text-lg lg:text-xl px-16 lg:px-20 py-5 lg:py-6 rounded transition-colors">
                                                SHOP NOW
                                            </button>
                                        </div>
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
        </div>
    );
};

export default HeroSwiper;