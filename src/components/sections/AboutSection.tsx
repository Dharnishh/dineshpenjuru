// dharnishh/dineshpenjuru/dineshpenjuru-61f31d163d67f0757ff94b209afed6c793e4caa3/src/components/sections/AboutSection.tsx
import { useRef, useEffect } from "react";
import { FlipCard, FlipCardRef } from "@/components/FlipCard";
import { Button } from "@/components/ui/button";
import { Linkedin, Github, Mail } from "lucide-react";
import dineshProfile from "/lovable-uploads/42af4fe2-04ee-44a9-b7ea-c2aed20956f1.png";
import dineshBlurred from "/lovable-uploads/42af4fe2-04ee-44a9-b7ea-c2aed20956f1.png";
export const AboutSection = () => {
  const aboutAvatarRef = useRef<FlipCardRef>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.target.id === "about" && entry.isIntersecting) {
          aboutAvatarRef.current?.flip(true);
        } else if (!entry.isIntersecting) {
          aboutAvatarRef.current?.flip(false);
        }
      });
    }, {
      threshold: 0.5
    });
    const aboutSection = document.getElementById("about");
    if (aboutSection) observer.observe(aboutSection);
    return () => {
      if (aboutSection) observer.unobserve(aboutSection);
    };
  }, []);
  return <section id="about" className="section-padding">
      <div className="container-width">
        {/* Changed from 'lg:grid-cols-2' to 'md:grid-cols-2' */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Column - About Text & Social Links */}
          {/* Adjusted order to be first on medium devices and up */}
          <div className="space-y-6 lg:space-y-8 order-2 md:order-1">
            <div className="space-y-4 lg:space-y-6">
              <div className="inline-flex items-center space-x-2 glass-card px-4 py-2 rounded-full">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-glow-pulse"></div>
                <span className="text-sm font-medium">Available for work</span>
              </div>
              
              {/* Adjusted text alignment for medium devices and up */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center md:text-left">
                About <span className="gradient-text">Me</span>
              </h2>
              
              <p className="text-foreground/80 text-base sm:text-lg leading-relaxed text-center md:text-left">
                Hi, I'm Dinesh — a passionate data analyst and Python developer focused on 
                building AI tools, working with data, and applying ECE skills into real-world 
                products. I'm currently looking for internships or job roles where I can apply 
                my analytical skills and contribute to meaningful projects.
              </p>

              <div className="grid grid-cols-3 gap-4 sm:gap-6 lg:gap-8 py-4 lg:py-6">
                <div className="text-center">
                  <div className="text-xl sm:text-3xl font-bold gradient-text"> Fresher </div>
                  <div className="text-xs sm:text-sm text-foreground/60"> Years Experience </div>
                </div>
                <div className="text-center">
                  <div className="text-xl sm:text-3xl font-bold gradient-text">4</div>
                  <div className="text-xs sm:text-sm text-foreground/60">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-xl sm:text-3xl font-bold gradient-text">5+</div>
                  <div className="text-xs sm:text-sm text-foreground/60">Technologies</div>
                </div>
              </div>

              {/* Contact Info */}
              <div className="space-y-2 text-sm text-foreground/70 text-center md:text-left">
                <div>📞 Call : 9848284940</div>
                <div>✉️ Email: pv123dinesh@gmail.com</div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4 justify-center md:justify-start">
                <Button variant="glass" size="icon" asChild>
                  <a href="https://www.linkedin.com/in/pv-dinesh" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-5 h-5" />
                  </a>
                </Button>
                <Button variant="glass" size="icon" asChild>
                  <a href="https://github.com/Dharnishh" target="_blank" rel="noopener noreferrer">
                    <Github className="w-5 h-5" />
                  </a>
                </Button>
                <Button variant="glass" size="icon" asChild>
                  <a href="mailto:pv123dinesh@gmail.com">
                    <Mail className="w-5 h-5" />
                  </a>
                </Button>
              </div>

              
            </div>
          </div>

          {/* Right Column - About Flip Card */}
          {/* Adjusted order to be second on medium devices and up */}
          <div className="relative order-1 md:order-2">
            <FlipCard ref={aboutAvatarRef} frontImage={dineshProfile} backImage={dineshBlurred} alt="P.V. Dinesh - About" className="w-64 h-80 sm:w-80 sm:h-96 lg:w-96 lg:h-96 mx-auto" />
          </div>
        </div>
      </div>
    </section>;
};