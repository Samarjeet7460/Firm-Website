import React, { useState, useEffect } from 'react';
import slide1 from "../assets/slide1.jpg"
import slide2 from "../assets/slide2.jpeg"
import slide3 from "../assets/slide3.jpg"
import slide4 from "../assets/slide4.jpg"

function Hero() {
    const [currentSlide, setCurrentSlide] = useState(0);
    
    const slides = [
        {
            id: 1,
            image: slide1,
            alt: "Modern Office Space"
        },
        {
            id: 2,
            image: slide2,
            alt: "Team Collaboration"
        },
        {
            id: 3,
            image: slide3,
            alt: "Innovation & Technology"
        },
        {
            id: 4,
            image: slide4,
            alt: "Innovation & Technology"
        },
    ];

    // Auto-slide functionality
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000); // Change slide every 5 seconds

        return () => clearInterval(interval);
    }, [slides.length]);

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    return (
        <div className="relative w-full h-[calc(100vh-78px)] overflow-hidden bg-black" id='home'>
            {/* Slides Container */}
            <div className="relative w-full h-full">
                {slides.map((slide, index) => (
                    <div
                        key={slide.id}
                        className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                            index === currentSlide 
                                ? 'opacity-100 scale-100' 
                                : 'opacity-0 scale-105'
                        }`}
                    >
                        <img
                            src={slide.image}
                            alt={slide.alt}
                            className="w-full h-full object-cover"
                        />
                        {/* Dark overlay for better text readability */}
                        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent"></div>
                    </div>
                ))}
            </div>

            {/* Hero Content Overlay */}
            <div className="absolute inset-0 flex items-center justify-center text-center">
                <div className="max-w-4xl mx-auto px-6 lg:px-8">
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight">
                        <span className="block opacity-0 animate-[fadeInUp_1s_ease-out_0.5s_forwards]">
                            Welcome to
                        </span>
                        <span className="block text-white bg-clip-text opacity-0 animate-[fadeInUp_1s_ease-out_1s_forwards]">
                            TECHNO MECH (INDIA)
                        </span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-200 mb-8 font-light leading-relaxed opacity-0 animate-[fadeInUp_1s_ease-out_1.5s_forwards]">
                        Rolling Mill Plants & Allied Machinary
                    </p>
                </div>
            </div>

            {/* Navigation Arrows */}
            <button
                onClick={prevSlide}
                className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 group"
            >
                <svg className="w-6 h-6 transform group-hover:-translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 group"
            >
                <svg className="w-6 h-6 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
            </button>

            {/* Slide Indicators */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                            index === currentSlide 
                                ? 'bg-white scale-125' 
                                : 'bg-white/50 hover:bg-white/75'
                        }`}
                    />
                ))}
            </div>

            {/* Floating Elements for Modern Touch */}
            <div className="absolute top-20 right-20 w-20 h-20 bg-gradient-to-br from-blue-400/20 to-purple-500/20 rounded-full blur-xl animate-pulse hidden lg:block"></div>
            <div className="absolute bottom-32 left-16 w-16 h-16 bg-gradient-to-br from-pink-400/20 to-orange-500/20 rounded-full blur-lg animate-pulse hidden lg:block" style={{animationDelay: '2s'}}></div>

            <style jsx>{`
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
            `}</style>
        </div>
    );
}

export default Hero;