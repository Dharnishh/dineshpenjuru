import { useState, forwardRef, useImperativeHandle, useEffect } from "react";
import { cn } from "@/lib/utils";

interface FlipCardProps {
  frontImage: string;
  backImage: string;
  alt: string;
  className?: string;
  onClick?: () => void;
}

export interface FlipCardRef {
  flip: (show: boolean) => void;
}

export const FlipCard = forwardRef<FlipCardRef, FlipCardProps>(
  ({ frontImage, backImage, alt, className, onClick }, ref) => {
    const [isFlipped, setIsFlipped] = useState(false);

    useImperativeHandle(ref, () => ({
      flip: (show: boolean) => {
        setIsFlipped(show);
      },
    }));

    // Auto-flip effect for homepage
    useEffect(() => {
      const autoFlipInterval = setInterval(() => {
        setIsFlipped(prev => !prev);
      }, 3000); // Flip every 3 seconds

      return () => clearInterval(autoFlipInterval);
    }, []);

    const handleClick = () => {
      setIsFlipped(!isFlipped);
      onClick?.();
    };

    return (
      <div
        className={cn(
          "flip-card cursor-pointer mx-auto",
          isFlipped && "flipped",
          className
        )}
        onClick={handleClick}
      >
        <div className="flip-card-inner">
          {/* Front */}
          <div className="flip-card-front glass-card overflow-hidden relative">
            <img
              src={frontImage}
              alt={alt}
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent"></div>
          </div>

          {/* Back */}
          <div className="flip-card-back glass-card overflow-hidden">
            <img
              src={backImage}
              alt={`${alt} - Blurred`}
              className="w-full h-full object-cover object-center blur-sm"
            />
          </div>
        </div>
      </div>
    );
  }
);

FlipCard.displayName = "FlipCard";