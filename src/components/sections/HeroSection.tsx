import { useRef, useEffect } from "react";
import { FlipCard, FlipCardRef } from "@/components/FlipCard";
import { Button } from "@/components/ui/button";
import dineshProfile from "/lovable-uploads/edbf57cc-59e4-4b54-ae2c-8c41861472ed.png";
import skillsClipart from "@/assets/skills-clipart.png";

export const HeroSection = () => {
  const heroAvatarRef = useRef<FlipCardRef>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target.id === "skills-section" && entry.isIntersecting) {
            heroAvatarRef.current?.flip(true);
          } else if (entry.target.id === "about" && entry.isIntersecting) {
            heroAvatarRef.current?.flip(false);
          }
        });
      },
      { threshold: 0.5 }
    );

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
          {/* Top Name - Center */}
          <div className="text-center mb-8">
            <h1 className="text-2xl md:text-3xl font-bold tracking-widest uppercase text-foreground/90">
              P.V. DINESH
            </h1>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center min-h-[600px]">
            {/* Left Column - "DATA" */}
            <div className="flex items-center justify-center lg:justify-end">
              <h2 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-wider gradient-text">
                DATA
              </h2>
            </div>

            {/* Center Column - Profile Card */}
            <div className="flex flex-col items-center space-y-6">
              {/* Flip Card Avatar */}
              <FlipCard
                ref={heroAvatarRef}
                frontImage={dineshProfile}
                backImage={skillsClipart}
                alt="P.V. Dinesh"
                className="w-64 h-80 md:w-72 md:h-96 lg:w-80 lg:h-96"
              />

              {/* Waving Hand Button */}
              <Button
                variant="glass"
                size="icon"
                className="w-16 h-16 rounded-full text-2xl hover-glow animate-float bg-primary/20"
              >
                👋
              </Button>
            </div>

            {/* Right Column - "ANALYST" */}
            <div className="flex items-center justify-center lg:justify-start">
              <h2 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-wider gradient-text">
                ANALYST
              </h2>
            </div>
          </div>

          {/* Bottom Description - Right Aligned */}
          <div className="mt-8 lg:mt-12 flex justify-center lg:justify-end">
            <div className="max-w-md text-center lg:text-right">
              <p className="text-foreground/80 text-lg leading-relaxed">
                I'm a curious and analytical B-Tech student specializing in 
                Electronics and Communication Engineering.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};