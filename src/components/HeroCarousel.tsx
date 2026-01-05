import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface Slide {
  type: "custom" | "image";
  imageUrl?: string;
  alt?: string;
}

const slides: Slide[] = [
  { type: "custom" }, // First slide - custom NAF design //NEED ADD LOGO 
  { 
    type: "image", 
    imageUrl: "/images/slide-1.png",
    //alt: "Art Festival Exhibition"
  },
  { 
    type: "image", 
    imageUrl: "/images/slide-2.png",
    //alt: "Creative Workshop"
  },
  { 
    type: "image", 
    imageUrl: "/images/slide-3.png",
    //alt: "Art Performance"
  },
  { 
    type: "image", 
    imageUrl: "/images/slide-4.png",
    //alt: "Arts Market"
  },
];

export function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Auto-advance slides every 5 seconds
  useEffect(() => {
    const timer = setInterval(nextSlide, 10000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-[600px] overflow-hidden">
      <AnimatePresence mode="wait">
        {slides.map((slide, index) => 
          index === currentSlide && (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.0 }}
              className="absolute inset-0"
            >
              {slide.type === "custom" ? (
                // First Slide - Custom NAF Design
                <div className="relative h-full overflow-hidden bg-[#48CBC7]">
                  {/* Simple Bold Design - No gradients, minimal shapes */}
                  
                  {/* Single Bold Accent Shape - Top Right (now pink) */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-[#E91E63] border-l-8 border-b-8 border-black"></div>
                  
                  {/* Single Bold Accent Shape - Bottom Left */}
                  <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#E91E63] border-r-8 border-t-8 border-black"></div>

                  <div className="relative z-10 h-full flex items-center justify-center px-6">
                    <div className="text-center max-w-4xl">
                      {/* Logo */}
                      <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ type: "spring", bounce: 0.5, duration: 1.2 }}
                        className="mb-8"
                      >
                        <div className="inline-block p-6 bg-white border-6 border-black shadow-[10px_10px_0px_0px_rgba(0,0,0,1)]">
                          <img
                            src="/icons/nafWhiteLogoOfficial.png"
                            alt="NAF Logo"
                            className="w-40 h-40 object-contain"
                          />
                        </div>
                      </motion.div>

                      {/* Title */}
                      <motion.h1
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.3, type: "spring", bounce: 0.4 }}
                        className="text-6xl md:text-8xl font-black mb-4 text-[#3A176C]"
                      >
                        NTU ARTS FESTIVAL
                      </motion.h1>

                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.5, type: "spring", bounce: 0.6 }}
                        className="inline-block px-12 py-6 bg-[#FDC47F] border-6 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] -mt-12"
                      >
                        <p className="text-xl md:text-2xl font-black text-black">
                          A STUDENT-LED PLATFORM TO SHOWCASE<br />INTERDISCIPLINARY CREATIVE EXPRESSION
                        </p>
                      </motion.div>
                    </div>
                  </div>
                </div>
              ) : (
                // Image Slides
                <div className="relative h-full">
                  <img 
                    src={slide.imageUrl}
                    alt={slide.alt}
                    className="w-full h-full object-cover"
                  />
                  {/* Dark Overlay */}
                  <div className="absolute inset-0 bg-black/30"></div>
                  
                  {/* Slide Text Overlay */}
                  <div className="absolute inset-0 flex items-start justify-center pt-20">
                    <div className="text-center px-6">
                      <h2 className="text-4xl md:text-6xl font-black text-white mb-2 drop-shadow-lg">
                        {slide.alt?.toUpperCase()}
                      </h2>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          )
        )}
      </AnimatePresence>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-20 w-14 h-14 bg-white/90 hover:bg-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all flex items-center justify-center"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-8 h-8 text-black" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-20 w-14 h-14 bg-white/90 hover:bg-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all flex items-center justify-center"
        aria-label="Next slide"
      >
        <ChevronRight className="w-8 h-8 text-black" />
      </button>

      {/* Dots Navigation */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-4 h-4 border-2 border-black transition-all ${
              index === currentSlide 
                ? "bg-[#48CBC7] shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]" 
                : "bg-white hover:bg-gray-200"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}