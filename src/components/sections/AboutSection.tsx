import { useRef, useEffect } from "react";
import { FlipCard, FlipCardRef } from "@/components/FlipCard";
import { Button } from "@/components/ui/button";
import { Linkedin, Github, Mail } from "lucide-react";
import dineshProfile from "@/assets/dinesh-profile.jpg";
import skillsClipart from "@/assets/skills-clipart.png";

export const AboutSection = () => {
  const aboutAvatarRef = useRef<FlipCardRef>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target.id === "about" && entry.isIntersecting) {
            aboutAvatarRef.current?.flip(true);
          } else if (!entry.isIntersecting) {
            aboutAvatarRef.current?.flip(false);
          }
        });
      },
      { threshold: 0.5 }
    );

    const aboutSection = document.getElementById("about");
    if (aboutSection) observer.observe(aboutSection);

    return () => {
      if (aboutSection) observer.unobserve(aboutSection);
    };
  }, []);

  return (
    <section id="about" className="section-padding">
      <div className="container-width">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - About Text & Social Links */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 glass-card px-4 py-2 rounded-full">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-glow-pulse"></div>
                <span className="text-sm font-medium">Available for work</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold">
                About <span className="gradient-text">Me</span>
              </h2>
              
              <p className="text-foreground/80 text-lg leading-relaxed">
                Hi, I'm Dinesh — a passionate data analyst and Python developer focused on 
                building AI tools, working with data, and applying ECE skills into real-world 
                products. I'm currently looking for internships or job roles where I can apply 
                my analytical skills and contribute to meaningful projects.
              </p>

              <div className="grid grid-cols-3 gap-8 py-6">
                <div className="text-center">
                  <div className="text-3xl font-bold gradient-text">2+</div>
                  <div className="text-sm text-foreground/60">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold gradient-text">15+</div>
                  <div className="text-sm text-foreground/60">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold gradient-text">5+</div>
                  <div className="text-sm text-foreground/60">Technologies</div>
                </div>
              </div>

              {/* Contact Info */}
              <div className="space-y-2 text-sm text-foreground/70">
                <div>📞 Call Today: +1 (555) 123-4567</div>
                <div>✉️ Email: dinesh@example.com</div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                <Button variant="glass" size="icon" asChild>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-5 h-5" />
                  </a>
                </Button>
                <Button variant="glass" size="icon" asChild>
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                    <Github className="w-5 h-5" />
                  </a>
                </Button>
                <Button variant="glass" size="icon" asChild>
                  <a href="mailto:dinesh@example.com">
                    <Mail className="w-5 h-5" />
                  </a>
                </Button>
              </div>

              <Button variant="outline" size="lg">
                My Story
              </Button>
            </div>
          </div>

          {/* Right Column - About Flip Card */}
          <div className="relative">
            <FlipCard
              ref={aboutAvatarRef}
              frontImage={dineshProfile}
              backImage={skillsClipart}
              alt="P.V. Dinesh - About"
              className="w-96 h-96 mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};