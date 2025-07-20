import { useState, forwardRef, useImperativeHandle } from "react";
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

    const handleClick = () => {
      setIsFlipped(!isFlipped);
      onClick?.();
    };

    return (
      <div
        className={cn(
          "flip-card cursor-pointer w-80 h-80 mx-auto",
          isFlipped && "flipped",
          className
        )}
        onClick={handleClick}
      >
        <div className="flip-card-inner">
          {/* Front */}
          <div className="flip-card-front glass-card p-4 flex items-center justify-center">
            <img
              src={frontImage}
              alt={alt}
              className="w-full h-full object-cover rounded-xl"
            />
          </div>

          {/* Back */}
          <div className="flip-card-back glass-card p-4 flex items-center justify-center">
            <img
              src={backImage}
              alt={`${alt} - Skills`}
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
        </div>
      </div>
    );
  }
);

FlipCard.displayName = "FlipCard";