import React, { useState, useRef, useEffect } from "react";
import { cn } from "@/libs/utils";
import { cva, type VariantProps } from "class-variance-authority";

const tooltipVariants = cva(
  "absolute z-50 px-2 py-1 text-xs font-medium text-white bg-gray-900 rounded shadow-sm whitespace-nowrap transition-all duration-200 pointer-events-none",
  {
    variants: {
      position: {
        top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
        bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
        left: "right-full top-1/2 -translate-y-1/2 mr-2",
        right: "left-full top-1/2 -translate-y-1/2 ml-2",
      },
    },
    defaultVariants: {
      position: "top",
    },
  }
);

export interface TooltipProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "content">,
    VariantProps<typeof tooltipVariants> {
  content: React.ReactNode;
  delay?: number;
  children: React.ReactElement;
}

export const Tooltip = React.forwardRef<HTMLDivElement, TooltipProps>(
  (
    { children, content, position, delay = 200, className, ...props },
    ref
  ) => {
    const [isVisible, setIsVisible] = useState(false);
    const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    const handleMouseEnter = () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => setIsVisible(true), delay);
    };

    const handleMouseLeave = () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      setIsVisible(false);
    };

    useEffect(() => {
      return () => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
      };
    }, []);

    // Arrow positioning based on tooltip position
    const arrowClasses = {
      top: "top-full left-1/2 -translate-x-1/2 border-t-gray-900 border-l-transparent border-r-transparent border-b-transparent",
      bottom: "bottom-full left-1/2 -translate-x-1/2 border-b-gray-900 border-l-transparent border-r-transparent border-t-transparent",
      left: "left-full top-1/2 -translate-y-1/2 border-l-gray-900 border-t-transparent border-b-transparent border-r-transparent",
      right: "right-full top-1/2 -translate-y-1/2 border-r-gray-900 border-t-transparent border-b-transparent border-l-transparent",
    };

    return (
      <div
        className="relative inline-block"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onFocus={handleMouseEnter}
        onBlur={handleMouseLeave}
      >
        {children}
        <div
          ref={ref}
          role="tooltip"
          className={cn(
            tooltipVariants({ position }),
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95",
            className
          )}
          {...props}
        >
          {content}
          <div
            className={cn(
              "absolute border-[5px]",
              arrowClasses[position || "top"]
            )}
          />
        </div>
      </div>
    );
  }
);

Tooltip.displayName = "Tooltip";
