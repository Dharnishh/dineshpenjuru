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
    <section id="home" className="min-h-screen flex items-center section-padding pt-32">
      <div className="container-width">
        <div className="relative">
          {/* Main Content Grid - Matching Image 3 Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center min-h-[600px]">
            {/* Left Column - "DINESH" */}
            <div className="flex flex-col items-center lg:items-end justify-center space-y-2">
              <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-wider gradient-text">DINESH</h1>
              <h2 className="text-xl md:text-2xl lg:text-3xl tracking-widest uppercase text-foreground/90 font-medium">PENJURU</h2>
            </div>

            {/* Center Column - Profile Card */}
            <div className="flex flex-col items-center space-y-6">
              {/* Auto-Flip Card Avatar */}
              <div className="relative">
                <FlipCard ref={heroAvatarRef} frontImage={dineshProfile} backImage={skillsClipart} alt="P.V. Dinesh" className="w-64 h-80 md:w-72 md:h-96 lg:w-80 lg:h-96" />
                
                {/* Waving Hand Button - Left side, bottom of flipcard */}
                <Button variant="glass" size="icon" className="absolute -left-8 bottom-4 w-16 h-16 rounded-full text-2xl hover-glow animate-float bg-primary/20">
                  👋
                </Button>
              </div>
            </div>

            {/* Right Column - "DATA ANALYST" */}
            <div className="flex flex-col items-center lg:items-start justify-center space-y-2">
              <h2 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-wider gradient-text">DATA</h2>
              <h2 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-wider gradient-text">ANALYST</h2>
              
              {/* Description moved here */}
              <div className="mt-4 max-w-md">
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