import { useRef, useEffect } from "react";
import { FlipCard, FlipCardRef } from "@/components/FlipCard";
import { Button } from "@/components/ui/button";
import dineshProfile from "/lovable-uploads/edbf57cc-59e4-4b54-ae2c-8c41861472ed.png";
import skillsClipart from "@/assets/skills-clipart.png";
export const HeroSection = () => {
  const heroAvatarRef = useRef<FlipCardRef>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.target.id === "skills-section" && entry.isIntersecting) {
          heroAvatarRef.current?.flip(true);
        } else if (entry.target.id === "about" && entry.isIntersecting) {
          heroAvatarRef.current?.flip(false);
        }
      });
    }, {
      threshold: 0.5
    });
    const skillsSection = document.getElementById("skills-section");
    const aboutSection = document.getElementById("about");
    if (skillsSection) observer.observe(skillsSection);
    if (aboutSection) observer.observe(aboutSection);
    return () => {
      if (skillsSection) observer.unobserve(skillsSection);
      if (aboutSection) observer.unobserve(aboutSection);
    };
  }, []);
  return (
    // Removed min-h-screen to allow content to dictate height more naturally.
    // Adjusted top padding to be less aggressive, especially on smaller screens.
    <section id="home" className="flex items-center section-padding pt-24 sm:pt-28 md:pt-16 lg:pt-20 pb-8 sm:pb-12 lg:pb-16">
      <div className="container-width">
        <div className="relative">
          {/* Main Content Grid - Changed from 'lg:grid-cols-3' to 'md:grid-cols-3' */}
          {/* This will make the 3-column layout start at the 'md' breakpoint (768px) and above */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 md:gap-8 lg:gap-12 items-center min-h-[400px] sm:min-h-[500px] md:min-h-[600px]">
            {/* Left Column - "DINESH" - Moved above flip card on mobile */}
            <div className="flex flex-col items-center md:items-end justify-center space-y-3 sm:space-y-4 md:space-y-2 order-1 md:order-1">
              {/* Adjusted text alignment to be right-aligned on medium devices and up */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold tracking-wider gradient-text text-center md:text-right">PENJURU</h1>
              <h2 className="text-sm sm:text-base md:text-xl lg:text-2xl xl:text-3xl tracking-widest uppercase text-foreground/90 font-medium text-center md:text-right">DINESH</h2>
            </div>

            {/* Center Column - Profile Card */}
            {/* Changed order to be second on mobile, central on medium devices and up */}
            <div className="flex flex-col items-center space-y-6 sm:space-y-8 md:space-y-6 order-2 md:order-2">
              {/* Auto-Flip Card Avatar */}
              <div className="relative">
                <FlipCard ref={heroAvatarRef} frontImage={dineshProfile} backImage={skillsClipart} alt="P.V. Dinesh"
                // Kept responsive sizing for better fit across different smaller viewports
                className="w-48 h-60 sm:w-56 sm:h-72 md:w-64 md:h-80 lg:w-72 lg:h-90 xl:w-80 xl:h-96" />
                
                {/* Waving Hand Button - Left side, bottom of flipcard */}
                <Button variant="glass" size="icon" className="absolute -left-4 sm:-left-6 lg:-left-8 bottom-2 sm:bottom-4 w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full text-lg sm:text-xl lg:text-2xl hover-glow animate-float bg-primary/20">
                  👋
                </Button>
              </div>
            </div>

            {/* Right Column - "DATA ANALYST" */}
            <div className="flex flex-col items-center md:items-start justify-center space-y-3 sm:space-y-4 md:space-y-2 order-3 md:order-3">
              {/* Adjusted text alignment to be left-aligned on medium devices and up */}
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold tracking-wider gradient-text text-center md:text-left">DATA</h2>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold tracking-wider gradient-text text-center md:text-left">ANALYST</h2>
              
              {/* Description alignment adjusted for medium devices and up */}
              <div className="mt-4 max-w-xs sm:max-w-sm md:max-w-md px-4 md:px-0">
                <p className="text-foreground/90 text-base sm:text-lg font-medium leading-relaxed text-center md:text-left mb-3">
                  Aspiring to transform complex data into meaningful insights
                </p>
                <p className="text-foreground/80 text-base sm:text-lg leading-relaxed text-center md:text-left">
                  I'm a curious and analytical B-Tech student specializing in 
                  Electronics and Communication Engineering.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};