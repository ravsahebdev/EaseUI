import React, { useState, useCallback, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/libs/utils";

export interface CarouselProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode[];
  autoPlay?: boolean;
  interval?: number;
  showIndicators?: boolean;
  showArrows?: boolean;
}

export const Carousel = React.forwardRef<HTMLDivElement, CarouselProps>(
  (
    {
      children,
      className,
      autoPlay = false,
      interval = 3000,
      showIndicators = true,
      showArrows = true,
      ...props
    },
    ref
  ) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = useCallback(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === children.length - 1 ? 0 : prevIndex + 1
      );
    }, [children.length]);

    const prevSlide = useCallback(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? children.length - 1 : prevIndex - 1
      );
    }, [children.length]);

    const goToSlide = (index: number) => {
      setCurrentIndex(index);
    };

    useEffect(() => {
      if (!autoPlay) return;
      const timer = setInterval(nextSlide, interval);
      return () => clearInterval(timer);
    }, [autoPlay, interval, nextSlide]);

    const handleKeyDown = (e: React.KeyboardEvent) => {
      if (e.key === "ArrowLeft") prevSlide();
      if (e.key === "ArrowRight") nextSlide();
    };

    return (
      <div
        ref={ref}
        className={cn("relative overflow-hidden group w-full", className)}
        onKeyDown={handleKeyDown}
        tabIndex={0}
        role="region"
        aria-roledescription="carousel"
        {...props}
      >
        <div
          className="flex transition-transform duration-500 ease-in-out h-full"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {React.Children.map(children, (child, index) => (
            <div
              key={index}
              className="w-full h-full flex-shrink-0"
              role="group"
              aria-roledescription="slide"
            >
              {child}
            </div>
          ))}
        </div>

        {showArrows && children.length > 1 && (
          <>
            <button
              onClick={prevSlide}
              aria-label="Previous slide"
              className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 focus:opacity-100 transition-opacity disabled:opacity-50 z-10"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={nextSlide}
              aria-label="Next slide"
              className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 focus:opacity-100 transition-opacity disabled:opacity-50 z-10"
            >
              <ChevronRight size={20} />
            </button>
          </>
        )}

        {showIndicators && children.length > 1 && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {children.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={cn(
                  "w-2.5 h-2.5 rounded-full transition-colors",
                  currentIndex === index ? "bg-white" : "bg-white/50 hover:bg-white/75"
                )}
              />
            ))}
          </div>
        )}
      </div>
    );
  }
);

Carousel.displayName = "Carousel";
