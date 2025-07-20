import { useRef, useEffect } from "react";
import { FlipCard, FlipCardRef } from "@/components/FlipCard";
import { Button } from "@/components/ui/button";
import dineshProfile from "@/assets/dinesh-profile.jpg";
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
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          {/* Left Column - "Data" */}
          <div className="text-left order-2 lg:order-1">
            <h2 className="text-6xl md:text-8xl font-bold tracking-widest gradient-text">
              DATA
            </h2>
          </div>

          {/* Center Column - Profile and Info */}
          <div className="text-center order-1 lg:order-2 space-y-8">
            <div className="space-y-4">
              <h1 className="text-2xl md:text-3xl font-bold tracking-widest uppercase">
                P.V. DINESH
              </h1>
              <p className="text-foreground/80 max-w-md mx-auto leading-relaxed">
                I'm a curious and analytical B-Tech student specializing in 
                Electronics and Communication Engineering.
              </p>
            </div>

            {/* Flip Card Avatar */}
            <FlipCard
              ref={heroAvatarRef}
              frontImage={dineshProfile}
              backImage={skillsClipart}
              alt="P.V. Dinesh"
              className="w-64 h-64 md:w-80 md:h-80"
            />

            {/* Waving Hand Button */}
            <Button
              variant="glass"
              size="icon"
              className="w-16 h-16 rounded-full text-2xl hover-glow animate-float"
            >
              👋
            </Button>
          </div>

          {/* Right Column - "Analyst" */}
          <div className="text-right order-3">
            <h2 className="text-6xl md:text-8xl font-bold tracking-widest gradient-text">
              ANALYST
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};