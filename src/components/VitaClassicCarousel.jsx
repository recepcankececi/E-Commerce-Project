import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const VitaClassicCarousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            id: 1,
            season: 'SUMMER 2020',
            title: 'Vita Classic Product',
            description: 'We know how large objects will act. We know how are objects will act. We know',
            price: '16.48',
            image: '/images/vita-classic-1.jpg'
        },
        {
            id: 2,
            season: 'SUMMER 2020',
            title: 'Vita Classic Product',
            description: 'We know how large objects will act, but things on a small scale.',
            price: '16.48',
            image: '/images/vita-classic-2.jpg'
        }
    ];

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
                        <div className="container mx-auto px-4">
                            <div className="grid lg:grid-cols-2 gap-8 items-center min-h-[600px] lg:min-h-[700px]">
                                {/* Left Content */}
                                <div className="flex flex-col justify-center text-white py-12 lg:py-20 order-2 lg:order-1">
                                    <h5 className="font-bold text-base lg:text-lg mb-6 lg:mb-8">
                                        {slide.season}
                                    </h5>
                                    <h2 className="font-bold text-4xl lg:text-6xl leading-tight mb-6 lg:mb-8">
                                        {slide.title}
                                    </h2>
                                    <p className="text-lg lg:text-xl mb-6 lg:mb-8 max-w-md">
                                        {slide.description}
                                    </p>
                                    <div className="flex items-center gap-6 lg:gap-8">
                    <span className="text-2xl lg:text-3xl font-bold">
                      ${slide.price}
                    </span>
                                        <button className="bg-[#2DC071] hover:bg-[#25a35f] text-white font-bold text-sm lg:text-base px-8 lg:px-10 py-3 lg:py-4 rounded transition-colors">
                                            ADD TO CART
                                        </button>
                                    </div>
                                </div>

                                {/* Right Image */}
                                <div className="relative order-1 lg:order-2 flex items-end justify-center lg:justify-end pt-12 lg:pt-0">
                                    <div className="w-full max-w-md lg:max-w-lg">
                                        {/* Image placeholder - gerçek görselde buraya img tag gelecek */}
                                        <div className="aspect-[3/4] bg-gradient-to-br from-transparent to-white/10" />
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