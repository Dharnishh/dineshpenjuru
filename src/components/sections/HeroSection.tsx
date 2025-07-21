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
    <section id="home" className="min-h-screen flex items-center section-padding pt-20 sm:pt-24 lg:pt-32">
      <div className="container-width">
        <div className="relative">
          {/* Main Content Grid - Matching Image 3 Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-center min-h-[500px] sm:min-h-[600px]">
            {/* Left Column - "DINESH" */}
            <div className="flex flex-col items-center lg:items-end justify-center space-y-2">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold tracking-wider gradient-text text-center lg:text-right">DINESH</h1>
              <h2 className="text-sm sm:text-base md:text-xl lg:text-2xl xl:text-3xl tracking-widest uppercase text-foreground/90 font-medium text-center lg:text-right">PENJURU</h2>
            </div>

            {/* Center Column - Profile Card */}
            <div className="flex flex-col items-center space-y-4 sm:space-y-6 order-first lg:order-none">
              {/* Auto-Flip Card Avatar */}
              <div className="relative">
                <FlipCard 
                  ref={heroAvatarRef} 
                  frontImage={dineshProfile} 
                  backImage={skillsClipart} 
                  alt="P.V. Dinesh" 
                  className="w-48 h-60 sm:w-56 sm:h-72 md:w-64 md:h-80 lg:w-72 lg:h-90 xl:w-80 xl:h-96" 
                />
                
                {/* Waving Hand Button - Left side, bottom of flipcard */}
                <Button variant="glass" size="icon" className="absolute -left-4 sm:-left-6 lg:-left-8 bottom-2 sm:bottom-4 w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full text-lg sm:text-xl lg:text-2xl hover-glow animate-float bg-primary/20">
                  👋
                </Button>
              </div>
            </div>

            {/* Right Column - "DATA ANALYST" */}
            <div className="flex flex-col items-center lg:items-start justify-center space-y-2">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold tracking-wider gradient-text text-center lg:text-left">DATA</h2>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold tracking-wider gradient-text text-center lg:text-left">ANALYST</h2>
              
              {/* Description moved here */}
              <div className="mt-4 max-w-xs sm:max-w-sm md:max-w-md px-4 lg:px-0">
                <p className="text-foreground/80 text-lg leading-relaxed text-center lg:text-left">
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